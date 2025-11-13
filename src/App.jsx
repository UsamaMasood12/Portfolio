import React, { useState, useEffect, useRef, lazy, Suspense } from 'react';
import { Github, Linkedin, Mail, MapPin, ExternalLink, Code, Brain, BarChart3, Award, TrendingUp, Rocket, Star, Cpu, Network } from 'lucide-react';

// Lazy load ChatBot component
const ChatBot = lazy(() => import('./components/ChatBot'));

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('about');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState({});
  const [cursorVariant, setCursorVariant] = useState('default');
  const observerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible((prev) => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting,
          }));
        });
      },
      { threshold: 0.1 }
    );

    document.documentElement.style.scrollBehavior = 'smooth';

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach((el) => {
      if (observerRef.current) {
        observerRef.current.observe(el);
      }
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [activeSection]);

  const projects = [
    {
      id: 1,
      title: "Enterprise AI Knowledge Assistant",
      tech: ["LangChain", "OpenAI GPT-4", "FastAPI", "FAISS", "Docker", "AWS"],
      description: "Production-ready RAG system achieving 95%+ accuracy with intelligent LLM routing, processing 6 document formats with <2s response time.",
      impact: "40% cost optimization, handles 100+ concurrent requests",
      github: "https://github.com/UsamaMasood12/Enterprise-AI-Knowledge-Assistant",
      category: "AI/ML",
      metrics: { accuracy: "95%", response: "<2s", cost: "-40%" }
    },
    {
      id: 2,
      title: "AI Chatbot for Donor Support",
      tech: ["LangChain", "Groq LLM", "FAISS", "Streamlit", "RAG"],
      description: "Intelligent conversational AI with real-time sentiment analysis, 50+ FAQ knowledge base, and context-aware response generation.",
      impact: "MSc Thesis Project - Teesside University",
      github: "https://github.com/UsamaMasood12/Charity-Chatbot",
      category: "AI/ML",
      metrics: { response: "2-3s", accuracy: "90%", sentiment: "Real-time" }
    },
    {
      id: 3,
      title: "Predictive Maintenance System",
      tech: ["SVM", "TensorFlow", "LIME", "SMOTE", "XGBoost"],
      description: "ML-powered predictive maintenance achieving 99.80% accuracy on 10,000+ industrial sensor data points with explainable AI.",
      impact: "40% reduction in unplanned downtime",
      github: "https://github.com/UsamaMasood12/Predictive-Maintenance-Using-ML",
      category: "AI/ML",
      metrics: { accuracy: "99.8%", roc: "0.998", downtime: "-40%" }
    },
    {
      id: 4,
      title: "Car Price Prediction Engine",
      tech: ["Random Forest", "XGBoost", "GridSearchCV", "Python"],
      description: "Regression model achieving R² of 0.8747 on 50,000+ vehicles with comprehensive feature engineering and hyperparameter tuning.",
      impact: "Business insights for pricing optimization",
      github: "https://github.com/UsamaMasood12/used-car-price-prediction",
      category: "ML",
      metrics: { r2: "0.87", rmse: "$2,150", records: "50K+" }
    },
    {
      id: 5,
      title: "NHS Healthcare Analytics",
      tech: ["Python", "R", "Excel", "Statistical Testing", "ggplot2"],
      description: "Multi-tool healthcare data analysis with statistical testing (t-tests, ANOVA) and interactive visualizations.",
      impact: "Identified key patterns in patient outcomes",
      github: "https://github.com/UsamaMasood12/Digdata-NHS-Excell-R-and-Python-challenge",
      category: "Analytics",
      metrics: { tools: "3", insights: "15+", tests: "Statistical" }
    },
    {
      id: 6,
      title: "Power BI Analytics Dashboard",
      tech: ["Power BI", "DAX", "SQL", "Star Schema"],
      description: "Enterprise BI solution tracking $2.5M revenue with 50+ DAX measures, real-time KPIs, and advanced data modeling.",
      impact: "5 interactive dashboards for business intelligence",
      github: "https://github.com/UsamaMasood12/Power-BI-analysis-Project",
      category: "Analytics",
      metrics: { revenue: "$2.5M", daxx: "50+", dashboards: "5" }
    }
  ];

  const skills = {
    "AI & Machine Learning": [
      "LangChain", "OpenAI GPT-4", "RAG Systems", "TensorFlow", "PyTorch",
      "Scikit-Learn", "XGBoost", "FAISS", "HuggingFace", "NLP"
    ],
    "Programming & Tools": [
      "Python", "SQL", "JavaScript", "R", "Git", "Docker",
      "FastAPI", "Streamlit", "React", "REST APIs"
    ],
    "Data & Analytics": [
      "Pandas", "NumPy", "Power BI", "Tableau", "D3.js",
      "Matplotlib", "Seaborn", "Statistical Testing", "A/B Testing"
    ],
    "Cloud & Deployment": [
      "AWS Lambda", "S3", "Azure", "CI/CD", "Docker", "GitHub Actions"
    ]
  };

  const experience = {
    role: "Web Developer Intern",
    company: "Techionik",
    location: "Lahore, Pakistan",
    period: "Jun 2023 – Sep 2023",
    achievements: [
      "Built responsive front-end components using HTML, CSS, Bootstrap, and JavaScript",
      "Implemented Firebase Database integration for real-time data management",
      "Collaborated in Agile development environment with cross-functional teams"
    ]
  };

  const certifications = [
    { name: "IBM Data Science Professional Certificate", org: "IBM" },
    { name: "Introduction to Data Science Specialization", org: "Coursera" },
    { name: "Web Development Specialization", org: "Online" }
  ];

  // AI Neural Network Background
  const AIBackground = () => {
    return (
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Gradient orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-float-medium"></div>

        {/* AI Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(251, 191, 36, 0.3) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(251, 191, 36, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
            transform: `translateY(${scrollY * 0.5}px)`
          }}
        />

        {/* Neural network nodes */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-amber-400/30 rounded-full animate-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${15 + Math.random() * 10}s`
            }}
          />
        ))}

        {/* Custom cursor */}
        <div
          className="fixed pointer-events-none z-50 mix-blend-screen transition-all duration-200"
          style={{
            width: cursorVariant === 'hover' ? '60px' : '30px',
            height: cursorVariant === 'hover' ? '60px' : '30px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(251, 191, 36, 0.2) 0%, transparent 70%)',
            transform: `translate(${mousePosition.x - (cursorVariant === 'hover' ? 30 : 15)}px, ${mousePosition.y - (cursorVariant === 'hover' ? 30 : 15)}px)`,
          }}
        />
      </div>
    );
  };

  // Different hero sections for each tab
  const renderHeroSection = () => {
    switch(activeSection) {
      case 'about':
        return (
          <div className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto">
            {/* Profile Image */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-600 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
              <img
                src="https://github.com/UsamaMasood12.png"
                alt="Usama Masood"
                className="relative w-64 h-64 rounded-3xl border-4 border-amber-500/30 object-cover transform group-hover:scale-105 transition-transform duration-500 shadow-2xl"
              />
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl px-4 py-2 shadow-xl">
                <p className="text-slate-900 font-bold text-sm">AI Engineer</p>
              </div>
            </div>

            {/* Text Content */}
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800/50 backdrop-blur-xl border border-amber-500/20 rounded-full mb-4">
                <div className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                </div>
                <span className="text-xs font-medium text-amber-100">Open to AI/ML Opportunities</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-4">
                <span className="block text-white">AI Engineer &</span>
                <span className="block bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent">Data Scientist</span>
              </h2>
              <p className="text-base text-slate-300 leading-relaxed mb-6">
                Specializing in <span className="text-amber-400 font-semibold">Large Language Models</span>,
                <span className="text-amber-300 font-semibold"> RAG Systems</span>, and
                <span className="text-yellow-400 font-semibold"> Production ML</span>.
                Building intelligent systems that transform data into actionable insights.
              </p>
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start text-sm">
                <div className="flex items-center gap-2 px-3 py-2 bg-slate-800/40 rounded-xl border border-slate-700/50">
                  <MapPin size={16} className="text-amber-400" />
                  <span className="text-slate-200">Middlesbrough, UK</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-2 bg-slate-800/40 rounded-xl border border-slate-700/50">
                  <Mail size={16} className="text-amber-400" />
                  <span className="text-slate-200">usamamasood531@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
        );

      case 'projects':
        return (
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800/50 backdrop-blur-xl border border-amber-500/20 rounded-full mb-4">
              <Rocket className="text-amber-400" size={18} />
              <span className="text-xs font-medium text-amber-100">AI & ML Projects</span>
            </div>
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent">
                Building Intelligent Systems
              </span>
            </h2>
            <p className="text-base text-slate-300 max-w-3xl mx-auto">
              From production-ready RAG systems to predictive ML models, explore my portfolio of AI-powered solutions
              delivering measurable business impact.
            </p>
          </div>
        );

      case 'skills':
        return (
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800/50 backdrop-blur-xl border border-amber-500/20 rounded-full mb-4">
              <Cpu className="text-amber-400" size={18} />
              <span className="text-xs font-medium text-amber-100">Technical Expertise</span>
            </div>
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent">
                AI & Data Science Arsenal
              </span>
            </h2>
            <p className="text-base text-slate-300 max-w-3xl mx-auto">
              Mastery in LangChain, OpenAI, TensorFlow, and modern ML frameworks.
              Proficient in building scalable AI systems from research to production.
            </p>
          </div>
        );

      case 'experience':
        return (
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800/50 backdrop-blur-xl border border-amber-500/20 rounded-full mb-4">
              <TrendingUp className="text-amber-400" size={18} />
              <span className="text-xs font-medium text-amber-100">Professional Journey</span>
            </div>
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent">
                Experience & Education
              </span>
            </h2>
            <p className="text-base text-slate-300 max-w-3xl mx-auto">
              MSc Data Science graduate with hands-on experience in software development
              and AI research, ready to drive innovation in AI engineering.
            </p>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      <AIBackground />

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/70 backdrop-blur-2xl z-50 border-b border-amber-500/10 shadow-2xl">
        <div className="max-w-6xl mx-auto px-6 py-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3 group">
              <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg flex items-center justify-center transform group-hover:rotate-180 transition-transform duration-500">
                <Brain className="text-slate-900" size={18} fill="currentColor" />
              </div>
              <h1 className="text-lg font-bold bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent">
                Usama Masood
              </h1>
            </div>
            <div className="flex gap-2">
              {['About', 'Projects', 'Skills', 'Experience'].map((section) => (
                <button
                  key={section}
                  onClick={() => setActiveSection(section.toLowerCase())}
                  onMouseEnter={() => setCursorVariant('hover')}
                  onMouseLeave={() => setCursorVariant('default')}
                  className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                    activeSection === section.toLowerCase()
                      ? 'text-slate-900 bg-gradient-to-r from-amber-400 to-amber-500'
                      : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Changes per tab */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="relative z-20">
          {renderHeroSection()}

          {/* Social Links */}
          <div className="flex justify-center gap-4 mt-8">
            {[
              { icon: Linkedin, href: "https://www.linkedin.com/in/masood-usama" },
              { icon: Github, href: "https://github.com/UsamaMasood12" },
              { icon: Mail, href: "mailto:usamamasood531@gmail.com" }
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-4 bg-slate-800/50 backdrop-blur-xl rounded-xl border border-slate-700/50 hover:border-amber-500/50 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
                onMouseEnter={() => setCursorVariant('hover')}
                onMouseLeave={() => setCursorVariant('default')}
              >
                <social.icon size={20} className="text-slate-300 group-hover:text-amber-400 transition-colors" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      {activeSection === 'about' && (
        <section className="py-16 px-6 relative z-20">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
            {/* Education */}
            <div
              id="education-card"
              data-animate
              className={`group relative bg-slate-800/40 backdrop-blur-2xl rounded-2xl p-8 border border-slate-700/50 hover:border-amber-500/50 transition-all duration-500 ${
                isVisible['education-card'] ? 'animate-slide-in-left' : 'opacity-0'
              }`}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-br from-amber-500/20 to-amber-600/10 rounded-xl">
                  <Award className="text-amber-400" size={24} />
                </div>
                <h4 className="text-2xl font-bold text-amber-400">Education</h4>
              </div>

              <div className="space-y-6">
                <div className="pl-6 border-l-2 border-amber-500/30">
                  <h5 className="font-bold text-lg text-white mb-1">
                    MSc Data Science with Advanced Practice
                  </h5>
                  <p className="text-sm text-slate-400 mb-3">
                    <span className="font-semibold text-amber-400">Distinction</span> | Teesside University | Feb 2026
                  </p>
                  <div className="p-4 bg-slate-900/50 rounded-xl border border-slate-700/50">
                    <p className="text-sm text-slate-300">
                      <span className="font-bold text-amber-400">Thesis:</span> AI Chatbot using RAG, LangChain & LLMs
                    </p>
                  </div>
                </div>

                <div className="pl-6 border-l-2 border-blue-500/30">
                  <h5 className="font-bold text-lg text-white mb-1">
                    BSc Electrical Engineering
                  </h5>
                  <p className="text-sm text-slate-400">
                    National University of Science and Technology (NUST), Pakistan
                  </p>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div
              id="cert-card"
              data-animate
              className={`group relative bg-slate-800/40 backdrop-blur-2xl rounded-2xl p-8 border border-slate-700/50 hover:border-amber-500/50 transition-all duration-500 ${
                isVisible['cert-card'] ? 'animate-slide-in-right' : 'opacity-0'
              }`}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-br from-blue-500/20 to-blue-600/10 rounded-xl">
                  <Star className="text-blue-400" size={24} />
                </div>
                <h4 className="text-2xl font-bold text-blue-400">Certifications</h4>
              </div>

              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 rounded-xl bg-slate-900/30 border border-slate-700/30 hover:border-amber-500/50 transition-all duration-300"
                  >
                    <div className="w-2 h-2 bg-amber-400 rounded-full mt-2"></div>
                    <div>
                      <p className="text-sm font-medium text-white">{cert.name}</p>
                      <p className="text-xs text-slate-400">{cert.org}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Projects Section - New Grid Layout */}
      {activeSection === 'projects' && (
        <section className="py-16 px-6 relative z-20">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  id={`project-${project.id}`}
                  data-animate
                  className={`group relative bg-slate-800/40 backdrop-blur-2xl rounded-2xl p-6 border border-slate-700/50 hover:border-amber-500/50 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 ${
                    isVisible[`project-${project.id}`] ? 'animate-fade-in-up' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Category Badge */}
                  <div className="absolute -top-3 -right-3 px-3 py-1 bg-gradient-to-r from-amber-500 to-amber-600 rounded-xl text-xs font-bold shadow-xl">
                    {project.category}
                  </div>

                  {/* Content */}
                  <div className="mb-4">
                    <h4 className="text-lg font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-sm text-slate-300 leading-relaxed mb-3">
                      {project.description}
                    </p>
                    <p className="text-xs text-amber-400 font-semibold mb-4">
                      {project.impact}
                    </p>
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    {Object.entries(project.metrics).map(([key, value]) => (
                      <div key={key} className="text-center p-2 bg-slate-900/50 rounded-lg">
                        <p className="text-xs text-amber-400 font-bold">{value}</p>
                        <p className="text-xs text-slate-500 capitalize">{key}</p>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.tech.slice(0, 4).map((tech, i) => (
                      <span key={i} className="px-2 py-1 bg-slate-900/50 rounded text-xs text-slate-400 border border-slate-700/50">
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="px-2 py-1 bg-amber-500/20 rounded text-xs text-amber-400 font-bold">
                        +{project.tech.length - 4}
                      </span>
                    )}
                  </div>

                  {/* GitHub Link */}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-500 to-amber-600 rounded-xl hover:from-amber-400 hover:to-amber-500 transition-all duration-300 text-sm font-bold text-slate-900"
                  >
                    <Github size={16} />
                    View Code
                    <ExternalLink size={14} />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Skills Section - AI Focused */}
      {activeSection === 'skills' && (
        <section className="py-16 px-6 relative z-20">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {Object.entries(skills).map(([category, items], categoryIndex) => (
                <div
                  key={category}
                  id={`skill-${categoryIndex}`}
                  data-animate
                  className={`group relative bg-slate-800/40 backdrop-blur-2xl rounded-2xl p-8 border border-slate-700/50 hover:border-amber-500/50 transition-all duration-500 ${
                    isVisible[`skill-${categoryIndex}`] ? 'animate-fade-in-up' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${categoryIndex * 0.1}s` }}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-gradient-to-br from-amber-500/20 to-amber-600/10 rounded-xl">
                      {categoryIndex === 0 && <Brain className="text-amber-400" size={24} />}
                      {categoryIndex === 1 && <Code className="text-amber-400" size={24} />}
                      {categoryIndex === 2 && <BarChart3 className="text-amber-400" size={24} />}
                      {categoryIndex === 3 && <Network className="text-amber-400" size={24} />}
                    </div>
                    <h4 className="text-xl font-bold bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent">
                      {category}
                    </h4>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {items.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className="px-3 py-2 bg-slate-900/50 backdrop-blur-sm rounded-lg text-sm font-medium text-slate-300 border border-slate-700/50 hover:border-amber-400/50 hover:text-amber-400 transition-all duration-300 transform hover:scale-105 cursor-pointer"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>

                  {/* Progress */}
                  <div className="mt-6 pt-6 border-t border-slate-700/50 flex justify-between items-center">
                    <span className="text-xs text-slate-400">{items.length} Technologies</span>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className={`w-1.5 h-1.5 rounded-full ${
                            i < Math.min(Math.ceil(items.length / 3), 5) ? 'bg-amber-400' : 'bg-slate-700'
                          }`}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Experience Section */}
      {activeSection === 'experience' && (
        <section className="py-16 px-6 relative z-20">
          <div className="max-w-6xl mx-auto">
            <div
              id="experience-card"
              data-animate
              className={`group relative bg-slate-800/40 backdrop-blur-2xl rounded-2xl p-10 border border-slate-700/50 hover:border-amber-500/50 transition-all duration-500 max-w-4xl mx-auto ${
                isVisible['experience-card'] ? 'animate-fade-in-up' : 'opacity-0'
              }`}
            >
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="p-4 bg-gradient-to-br from-amber-500/20 to-amber-600/10 rounded-xl">
                    <Code className="text-amber-400" size={28} />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-amber-400 mb-1">{experience.role}</h4>
                    <p className="text-base text-slate-300 flex items-center gap-2">
                      <MapPin size={16} className="text-blue-400" />
                      {experience.company}, {experience.location}
                    </p>
                  </div>
                </div>
                <div className="px-4 py-2 bg-slate-900/50 rounded-xl border border-amber-500/30">
                  <span className="text-sm font-bold text-slate-200">{experience.period}</span>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                {experience.achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-5 rounded-xl bg-slate-900/30 border border-slate-700/30 hover:border-amber-500/50 transition-all duration-300"
                  >
                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center font-bold text-sm text-slate-900">
                      {index + 1}
                    </div>
                    <p className="text-sm text-slate-300 leading-relaxed pt-1">{achievement}</p>
                  </div>
                ))}
              </div>

              {/* Tech Stack */}
              <div className="pt-6 border-t border-slate-700/50">
                <h5 className="text-xs font-bold text-slate-400 mb-3 uppercase">Technologies</h5>
                <div className="flex flex-wrap gap-2">
                  {['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'Firebase', 'Agile'].map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-slate-900/50 rounded-lg text-xs font-semibold text-slate-300 border border-slate-700/50 hover:border-amber-400/50 hover:text-amber-400 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="relative py-12 px-6 mt-24 border-t border-slate-700/50 bg-slate-900/50 backdrop-blur-xl z-20">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent">
            Let's Build Something Amazing
          </h3>
          <p className="text-sm text-slate-400 mb-6">
            Open to AI Engineer and Data Science opportunities
          </p>

          <div className="flex justify-center gap-4 mb-8">
            {[
              { icon: Linkedin, href: "https://www.linkedin.com/in/masood-usama" },
              { icon: Github, href: "https://github.com/UsamaMasood12" },
              { icon: Mail, href: "mailto:usamamasood531@gmail.com" }
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-amber-500/50 transition-all duration-300 transform hover:scale-110"
              >
                <social.icon size={20} className="text-slate-300 group-hover:text-amber-400 transition-colors" />
              </a>
            ))}
          </div>

          <div className="text-xs text-slate-500">
            <p>© 2025 Usama Masood • AI Engineer & Data Scientist</p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-400"></div>
      </footer>

      {/* Global Styles */}
      <style>{`
        @keyframes float-slow {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -30px) scale(1.05); }
          66% { transform: translate(-30px, 20px) scale(0.95); }
        }
        @keyframes float-medium {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(-40px, -40px) scale(1.1); }
          66% { transform: translate(40px, 30px) scale(0.9); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(50px, -20px) scale(0.95); }
          66% { transform: translate(-30px, 40px) scale(1.05); }
        }
        @keyframes particle {
          0% { transform: translateY(0) translateX(0); opacity: 0; }
          10% { opacity: 0.3; }
          90% { opacity: 0.3; }
          100% { transform: translateY(-100vh) translateX(50px); opacity: 0; }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slide-in-left {
          from { opacity: 0; transform: translateX(-60px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slide-in-right {
          from { opacity: 0; transform: translateX(60px); }
          to { opacity: 1; transform: translateX(0); }
        }

        .animate-float-slow { animation: float-slow 12s ease-in-out infinite; }
        .animate-float-medium { animation: float-medium 15s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 18s ease-in-out infinite; }
        .animate-particle { animation: particle linear infinite; }
        .animate-fade-in-up { animation: fade-in-up 0.6s ease-out; }
        .animate-slide-in-left { animation: slide-in-left 0.6s ease-out; }
        .animate-slide-in-right { animation: slide-in-right 0.6s ease-out; }
      `}</style>

      {/* AI Chatbot Widget */}
      <Suspense fallback={<div></div>}>
        <ChatBot />
      </Suspense>
    </div>
  );
}
