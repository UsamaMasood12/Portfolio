import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, Loader2, RotateCcw, Download, Moon, Sun } from 'lucide-react';
import { v4 as uuidv4 } from 'uuid';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [sessionId] = useState(uuidv4());
  const [darkMode, setDarkMode] = useState(false);
  const [backendAvailable, setBackendAvailable] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const API_URL = import.meta.env.VITE_API_URL || 'https://your-backend-url.com/api/v1';

  const suggestions = [
    "Tell me about Usama's AI projects",
    "What are his main technical skills?",
    "What's his experience with LLMs?",
    "Tell me about his education"
  ];

  const checkBackendHealth = async () => {
    try {
      const response = await fetch(`${API_URL}/health`, { timeout: 3000 });
      setBackendAvailable(response.ok);
    } catch (error) {
      setBackendAvailable(false);
    }
  };

  // Load dark mode preference and chat history from localStorage
  useEffect(() => {
    const savedDarkMode = localStorage.getItem('chatbot-dark-mode') === 'true';
    setDarkMode(savedDarkMode);

    const savedMessages = localStorage.getItem(`chatbot-history-${sessionId}`);
    if (savedMessages) {
      try {
        setMessages(JSON.parse(savedMessages));
      } catch (e) {
        console.error('Error loading chat history:', e);
      }
    }

    // Check if backend is available
    checkBackendHealth();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sessionId]);

  // Save messages to localStorage
  useEffect(() => {
    if (messages.length > 0) {
      localStorage.setItem(`chatbot-history-${sessionId}`, JSON.stringify(messages));
    }
  }, [messages, sessionId]);

  // Save dark mode preference
  useEffect(() => {
    localStorage.setItem('chatbot-dark-mode', darkMode.toString());
  }, [darkMode]);

  // Scroll to bottom
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  const handleSendMessage = async (text = inputValue) => {
    if (!text.trim() || isLoading) return;

    const userMessage = {
      role: 'user',
      content: text.trim(),
      timestamp: new Date().toISOString(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      if (!backendAvailable) {
        // Fallback response when backend is not available
        const fallbackMessage = {
          role: 'assistant',
          content: "**Backend Not Connected**\n\nThe AI chatbot backend is currently not deployed. To activate this feature, you'll need to:\n\n1. Deploy the FastAPI backend from the [chatbot repository](https://github.com/UsamaMasood12/chatbot)\n2. Set up the OpenAI API key\n3. Configure the backend URL\n\nIn the meantime, feel free to explore my portfolio to learn about my AI/ML projects and experience!",
          timestamp: new Date().toISOString(),
        };

        setTimeout(() => {
          setMessages(prev => [...prev, fallbackMessage]);
          setIsLoading(false);
        }, 1000);
        return;
      }

      // Send message to backend
      const conversationHistory = messages.map(msg => ({
        role: msg.role,
        content: msg.content,
        timestamp: msg.timestamp,
      }));

      const response = await fetch(`${API_URL}/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: text.trim(),
          conversation_history: conversationHistory,
          session_id: sessionId,
        }),
      });

      if (!response.ok) throw new Error('Failed to send message');

      const data = await response.json();

      const assistantMessage = {
        role: 'assistant',
        content: data.response,
        timestamp: data.timestamp,
        processingTime: data.processing_time,
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error sending message:', error);

      const errorMessage = {
        role: 'assistant',
        content: "I apologize, but I'm having trouble connecting right now. Please try again in a moment or explore the portfolio directly.",
        timestamp: new Date().toISOString(),
        isError: true,
      };

      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleSuggestionClick = (suggestion) => {
    handleSendMessage(suggestion);
  };

  const handleClearChat = () => {
    if (window.confirm('Are you sure you want to clear the chat history?')) {
      setMessages([]);
      localStorage.removeItem(`chatbot-history-${sessionId}`);
    }
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const exportChat = () => {
    const chatText = messages.map(m =>
      `${m.role === 'user' ? 'You' : 'Assistant'}: ${m.content}`
    ).join('\n\n');

    const blob = new Blob([chatText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `chat-${new Date().toISOString().split('T')[0]}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen && messages.length === 0) {
      // Add welcome message
      const welcomeMessage = {
        role: 'assistant',
        content: backendAvailable
          ? "Hi! I'm Usama's AI assistant. I can answer questions about his background, skills, projects, and experience. What would you like to know?"
          : "Hi! I'm Usama's AI assistant. **Note:** The backend is currently not deployed, so I'm in demo mode. Feel free to explore the portfolio tabs to learn about Usama's AI/ML work, or check out the [chatbot repository](https://github.com/UsamaMasood12/chatbot) to see how this was built!",
        timestamp: new Date().toISOString(),
      };
      setMessages([welcomeMessage]);
    }
  };

  return (
    <>
      {/* Chat Widget Button */}
      {!isOpen && (
        <button
          onClick={toggleChat}
          className="fixed bottom-6 right-6 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 z-50 group"
          aria-label="Open chat assistant"
        >
          <MessageCircle size={28} className="group-hover:rotate-12 transition-transform duration-300" />
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div
          className={`fixed bottom-6 right-6 w-96 h-[600px] rounded-2xl shadow-2xl flex flex-col z-50 animate-slide-up border ${
            darkMode ? 'bg-slate-900 border-slate-700' : 'bg-white border-slate-200'
          }`}
        >
          {/* Header */}
          <div className="p-4 rounded-t-2xl flex justify-between items-center bg-gradient-to-r from-amber-500 to-amber-600">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <Brain className="text-white" size={24} />
              </div>
              <div>
                <h3 className="font-bold text-white">AI Assistant</h3>
                <p className="text-xs text-white/80">
                  {backendAvailable ? 'Online' : 'Demo Mode'}
                </p>
              </div>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-full hover:bg-white/20 transition-colors text-white"
                aria-label="Toggle dark mode"
                title="Toggle dark mode"
              >
                {darkMode ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              <button
                onClick={exportChat}
                className="p-2 rounded-full hover:bg-white/20 transition-colors text-white"
                aria-label="Export chat"
                title="Export chat"
                disabled={messages.length === 0}
              >
                <Download size={18} />
              </button>
              <button
                onClick={handleClearChat}
                className="p-2 rounded-full hover:bg-white/20 transition-colors text-white"
                aria-label="Clear chat"
                title="Clear chat"
              >
                <RotateCcw size={18} />
              </button>
              <button
                onClick={toggleChat}
                className="p-2 rounded-full hover:bg-white/20 transition-colors text-white"
                aria-label="Close chat"
              >
                <X size={20} />
              </button>
            </div>
          </div>

          {/* Messages Container */}
          <div className={`flex-1 overflow-y-auto p-4 space-y-4 ${
            darkMode ? 'bg-slate-900' : 'bg-slate-50'
          }`}>
            {messages.map((message, index) => (
              <Message
                key={index}
                message={message}
                darkMode={darkMode}
              />
            ))}

            {isLoading && <TypingIndicator darkMode={darkMode} />}

            {messages.length <= 1 && (
              <div className="space-y-2">
                <p className={`text-sm font-medium ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  Suggested questions:
                </p>
                {suggestions.map((suggestion, index) => (
                  <button
                    key={index}
                    onClick={() => handleSuggestionClick(suggestion)}
                    className={`w-full text-left p-3 rounded-xl text-sm transition-all duration-300 transform hover:scale-105 ${
                      darkMode
                        ? 'bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-300'
                        : 'bg-white hover:bg-amber-50 border border-slate-200 hover:border-amber-400 text-slate-700'
                    }`}
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className={`p-4 border-t rounded-b-2xl ${
            darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'
          }`}>
            <div className="flex space-x-2">
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me anything..."
                className={`flex-1 p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 ${
                  darkMode
                    ? 'bg-slate-700 border-slate-600 text-white placeholder-slate-400'
                    : 'bg-white border-slate-300 text-slate-900'
                }`}
                disabled={isLoading}
              />
              <button
                onClick={() => handleSendMessage()}
                disabled={!inputValue.trim() || isLoading}
                className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-white p-3 rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105"
                aria-label="Send message"
              >
                <Send size={20} />
              </button>
            </div>
            <p className={`text-xs mt-2 text-center ${
              darkMode ? 'text-slate-500' : 'text-slate-500'
            }`}>
              Powered by RAG & OpenAI
            </p>
          </div>
        </div>
      )}

      <style>{`
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slide-up {
          animation: slide-up 0.3s ease-out;
        }
      `}</style>
    </>
  );
};

// Message Component
const Message = ({ message, darkMode }) => {
  const isUser = message.role === 'user';
  const isError = message.isError;

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`max-w-[85%] rounded-2xl ${
          isUser
            ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-white'
            : isError
            ? 'bg-red-100 text-red-900 border border-red-300'
            : darkMode
            ? 'bg-slate-800 text-slate-100 border border-slate-700'
            : 'bg-white text-slate-800 border border-slate-200'
        }`}
      >
        <div className="p-3">
          {isUser ? (
            <p className="text-sm">{message.content}</p>
          ) : (
            <>
              <div className={`prose prose-sm max-w-none ${darkMode ? 'prose-invert' : ''}`}>
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  components={{
                    code({ node, inline, className, children, ...props }) {
                      const match = /language-(\w+)/.exec(className || '');
                      return !inline && match ? (
                        <SyntaxHighlighter
                          style={vscDarkPlus}
                          language={match[1]}
                          PreTag="div"
                          className="rounded-lg text-xs"
                          {...props}
                        >
                          {String(children).replace(/\n$/, '')}
                        </SyntaxHighlighter>
                      ) : (
                        <code className={`${className} px-1 py-0.5 rounded bg-slate-700 text-amber-400`} {...props}>
                          {children}
                        </code>
                      );
                    },
                  }}
                >
                  {message.content}
                </ReactMarkdown>
              </div>

              {message.processingTime && (
                <p className="text-xs text-slate-400 mt-2">
                  {message.processingTime.toFixed(2)}s
                </p>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

// Typing Indicator Component
const TypingIndicator = ({ darkMode }) => (
  <div className="flex justify-start">
    <div className={`p-3 rounded-2xl flex items-center space-x-2 ${
      darkMode ? 'bg-slate-800 border border-slate-700' : 'bg-white border border-slate-200'
    }`}>
      <Loader2 className="animate-spin text-amber-500" size={16} />
      <span className={`text-sm ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>Thinking...</span>
    </div>
  </div>
);

// Import Brain icon
const Brain = ({ className, size }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"/>
    <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"/>
  </svg>
);

export default ChatBot;
