import React, { useState, useEffect, useRef } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, ExternalLink, Code, Database, Brain, BarChart3, ChevronDown, ChevronUp, Sparkles, Zap, Award, Target } from 'lucide-react';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('about');
  const [expandedProject, setExpandedProject] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState({});
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

    // Intersection Observer for scroll animations
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
      tech: ["LangChain", "OpenAI GPT-4", "FastAPI", "Streamlit", "FAISS", "Docker", "AWS Lambda", "S3", "Python"],
      description: "Production-ready RAG system with 95%+ accuracy, processing 6 document formats (PDF, DOCX, Excel, CSV, Images) with <2 second response time and 40% cost optimization through intelligent LLM routing",
      details: "Implemented 4 advanced RAG strategies (Multi-Query, Self-RAG, Hybrid Search), 10+ REST API endpoints, comprehensive NLP features (NER, sentiment analysis, text classification), RAGAS evaluation metrics, and Docker/AWS deployment. Handles 100+ concurrent requests with auto-scaling capabilities and includes real-time analytics dashboard tracking costs and performance metrics.",
      github: "https://github.com/UsamaMasood12/Enterprise-AI-Knowledge-Assistant",
      category: "AI/ML",
      highlights: ["5,000+ lines of production code", "25+ Python modules", "6 integration test suites", "$7/month for 100 queries/day"]
    },
    {
      id: 2,
      title: "AI Chatbot for Donor Support",
      tech: ["LangChain", "Groq LLM", "FAISS", "HuggingFace", "Streamlit", "TextBlob", "Plotly", "Python"],
      description: "Intelligent conversational AI for charity organizations with real-time sentiment analysis, 50+ FAQ knowledge base, and 2-3 second response time using RAG architecture",
      details: "Built with Groq's llama-3.1-8b-instant model, features sentiment-aware response generation (happy/neutral/frustrated detection), multi-query search expansion, conversation memory, analytics dashboard with usage metrics, and quick suggestion buttons. Includes comprehensive logging system tracking response times, popular questions, and sentiment distribution over time.",
      github: "https://github.com/UsamaMasood12/Charity-Chatbot",
      category: "AI/ML",
      highlights: ["FYP Teesside University", "Context-aware responses", "Emotion detection", "Real-time analytics"]
    },
    {
      id: 3,
      title: "Predictive Maintenance in Manufacturing",
      tech: ["Python", "SVM", "TensorFlow", "LIME", "SMOTE", "Scikit-Learn", "XGBoost", "Random Forest", "Pandas"],
      description: "Achieved 99.80% accuracy using SVM on 10,000+ industrial sensor data points, comparing 9 ML algorithms with comprehensive model explainability",
      details: "Implemented multiple algorithms including Logistic Regression, Decision Trees, Random Forest, Gradient Boosting, Neural Networks, and SVM. Applied SMOTE for handling class imbalance, built LIME framework for model interpretability, performed feature engineering on sensor data, and created visualization dashboards. Potential 40% reduction in unplanned downtime with early failure detection.",
      github: "https://github.com/UsamaMasood12/Predictive-Maintenance-Using-ML",
      category: "AI/ML",
      highlights: ["9 algorithm comparison", "False positive rate < 0.5%", "ROC-AUC: 0.998", "Industrial IoT data"]
    },
    {
      id: 4,
      title: "Used Car Price Prediction",
      tech: ["Python", "Random Forest", "XGBoost", "GridSearchCV", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
      description: "Built regression model achieving R² of 0.8747 and RMSE of $2,150 on 50,000+ vehicle records with comprehensive feature engineering",
      details: "Compared 5 algorithms (Linear Regression, Decision Tree, Random Forest, XGBoost, Gradient Boosting) with extensive hyperparameter tuning using GridSearchCV. Performed feature engineering on 15+ attributes including mileage, year, brand, fuel type, transmission. Created interactive visualizations for price distribution, feature importance analysis, and residual plots. Identified key pricing factors: age, mileage, brand premium.",
      github: "https://github.com/UsamaMasood12/used-car-price-prediction",
      category: "AI/ML",
      highlights: ["50,000+ vehicles analyzed", "15+ features engineered", "Cross-validation", "Business insights generated"]
    },
    {
      id: 5,
      title: "NHS Digital Data Analysis Challenge",
      tech: ["Excel", "Python", "R", "Power Query", "Statistical Testing", "ggplot2", "Pandas", "SciPy"],
      description: "Comprehensive healthcare data analysis using Excel dashboards, Python statistical testing (t-tests, ANOVA), and R visualizations on NHS patient dataset",
      details: "Analyzed patient demographics, treatment outcomes, and wait times across multiple departments. Created interactive Excel dashboards with pivot tables and advanced formulas, performed hypothesis testing in Python to identify significant factors affecting patient outcomes, and built sophisticated visualizations in R using ggplot2. Discovered key insights including seasonal patterns in admissions and correlation between wait times and patient satisfaction.",
      github: "https://github.com/UsamaMasood12/Digdata-NHS-Excell-R-and-Python-challenge",
      category: "Analytics",
      highlights: ["Multi-tool analysis", "Statistical significance testing", "Healthcare insights", "3-phase methodology"]
    },
    {
      id: 6,
      title: "Interactive Plastic Pollution Visualization",
      tech: ["D3.js", "JavaScript", "HTML5", "CSS3", "TopoJSON", "Data Processing", "Web APIs"],
      description: "Developed interactive choropleth map for 195+ countries with real-time filtering, zoom/pan capabilities, and responsive design showing global plastic pollution data",
      details: "Built using D3.js v7 with TopoJSON for efficient geographic data rendering. Features include multi-level filtering by pollution metrics (tons/year, per capita), time-series animation showing pollution trends, drill-down capabilities to country level, responsive design for mobile/tablet, and tooltip system with detailed statistics. Collaborated on 4 different visualization types including bubble maps and time-series charts.",
      github: "https://github.com/UsamaMasood12/Interactive-Visualization-of-Plastic-Pollution-across-the-globe",
      category: "Visualization",
      highlights: ["195+ countries mapped", "60 FPS smooth interactions", "Mobile responsive", "Real-time data updates"]
    },
    {
      id: 7,
      title: "Power BI Jewelry Analytics Dashboard",
      tech: ["Power BI", "DAX", "SQL", "Star Schema", "Excel", "Power Query", "M Language", "Data Modeling"],
      description: "Enterprise BI solution with 5 interactive dashboards tracking $2.5M revenue, featuring 50+ DAX measures, star schema design, and real-time KPI monitoring",
      details: "Designed comprehensive jewelry retail analytics with Executive Dashboard (6 KPIs with trend indicators), Sales Analytics (category/product/temporal analysis), Inventory Management (stock optimization, turnover rates, reorder points), Customer Insights (RFM segmentation, CLV analysis, retention metrics), and Product Performance (margin analysis, cross-sell opportunities). Implemented time intelligence functions (YTD, MTD, YoY growth), dynamic filtering with synchronized slicers, and scheduled refresh for real-time updates.",
      github: "https://github.com/UsamaMasood12/Power-BI-analysis-Project",
      category: "Analytics",
      highlights: ["5 dashboard pages", "50+ DAX formulas", "Real-time refresh", "MSc Teesside Project"]
    }
  ];

  const skills = {
    "Languages": ["Python", "R", "SQL", "JavaScript", "C++", "HTML5", "CSS3", "DAX", "M Language"],
    "ML & AI": ["Scikit-Learn", "TensorFlow", "PyTorch", "XGBoost", "LangChain", "OpenAI GPT-4", "Groq", "RAG", "FAISS", "HuggingFace", "NLP", "LIME", "SMOTE"],
    "Data Tools": ["Pandas", "NumPy", "Power BI", "Tableau", "D3.js", "Excel (Advanced)", "Matplotlib", "Seaborn", "Plotly", "ggplot2", "Power Query"],
    "Frameworks": ["FastAPI", "Streamlit", "Docker", "LangChain", "Flask", "Node.js", "React"],
    "Cloud & DevOps": ["AWS Lambda", "S3", "Azure", "Docker", "Git/GitHub", "CI/CD", "REST APIs"],
    "Databases": ["PostgreSQL", "MongoDB", "FAISS Vector DB", "SQL Server", "Firebase"],
    "Analytics": ["Statistical Testing", "A/B Testing", "Time Series", "Regression", "Classification", "Clustering", "RFM Analysis", "Sentiment Analysis"]
  };

  const experience = {
    role: "Web Developer Intern",
    company: "Techionik, Lahore, Pakistan",
    period: "Jun 2023 – Sep 2023",
    points: [
      "Developed responsive front-end components using HTML, CSS, Bootstrap, and JavaScript",
      "Managed website data using Firebase Database and collaborated using Agile methodologies"
    ]
  };

  const certifications = [
    "IBM Data Science Professional Certificate",
    "Introduction to Data Science Specialization",
    "Web Development Specialization"
  ];

  // Floating particles component
  const FloatingParticles = () => {
    const particles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 20 + 10,
      delay: Math.random() * 5,
    }));

    return (
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute rounded-full bg-blue-400 opacity-20"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animation: `float ${particle.duration}s infinite ease-in-out`,
              animationDelay: `${particle.delay}s`,
            }}
          />
        ))}
        <style>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px) translateX(0px); }
            33% { transform: translateY(-20px) translateX(10px); }
            66% { transform: translateY(-10px) translateX(-10px); }
          }
        `}</style>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      {/* Floating Particles Background */}
      <FloatingParticles />

      {/* Mouse Follower Gradient */}
      <div
        className="fixed pointer-events-none z-10 opacity-30"
        style={{
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%)',
          transform: `translate(${mousePosition.x - 300}px, ${mousePosition.y - 300}px)`,
          transition: 'transform 0.3s ease-out',
        }}
      />
      {/* Header/Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/90 backdrop-blur-xl z-50 border-b border-slate-700/50 shadow-xl">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
              Usama Masood
            </h1>
            <div className="flex gap-3">
              {['About', 'Projects', 'Skills', 'Experience'].map((section) => (
                <button
                  key={section}
                  onClick={() => setActiveSection(section.toLowerCase())}
                  className={`relative px-5 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 ${
                    activeSection === section.toLowerCase()
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/50'
                      : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
                  }`}
                >
                  {section}
                  {activeSection === section.toLowerCase() && (
                    <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rounded-full animate-bounce" 
                          style={{ bottom: '-8px' }}></span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto relative z-20">
          <div className="text-center mb-12">
            {/* Animated Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800/50 backdrop-blur-sm border border-blue-500/30 rounded-full mb-6 animate-fade-in">
              <Sparkles className="text-blue-400 animate-spin" size={20} style={{ animationDuration: '3s' }} />
              <span className="text-sm text-slate-300">Available for Opportunities</span>
              <Sparkles className="text-purple-400 animate-spin" size={20} style={{ animationDuration: '3s', animationDirection: 'reverse' }} />
            </div>

            <h2 className="text-6xl font-bold mb-6 animate-slide-up">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
                Data Scientist
              </span>
              <br />
              <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent animate-gradient" 
                    style={{ animationDelay: '0.5s' }}>
                ML Engineer
              </span>
            </h2>

            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8 leading-relaxed animate-fade-in" style={{ animationDelay: '0.3s' }}>
              MSc Data Science graduate (Feb 2026) specializing in <span className="text-blue-400 font-semibold">machine learning</span>, 
              <span className="text-purple-400 font-semibold"> artificial intelligence</span>, and 
              <span className="text-pink-400 font-semibold"> business intelligence</span>. 
              Proven expertise in developing predictive models, building RAG-based conversational AI systems, and creating interactive data visualizations.
            </p>

            {/* Animated Contact Info */}
            <div className="flex flex-wrap justify-center gap-6 text-slate-300 mb-8 animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <div className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 rounded-lg backdrop-blur-sm border border-slate-700 hover:border-blue-500 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20">
                <MapPin size={20} className="text-blue-400" />
                <span>Middlesbrough, UK</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 rounded-lg backdrop-blur-sm border border-slate-700 hover:border-purple-500 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20">
                <Mail size={20} className="text-purple-400" />
                <span>usamamasood531@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 rounded-lg backdrop-blur-sm border border-slate-700 hover:border-pink-500 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-pink-500/20">
                <Phone size={20} className="text-pink-400" />
                <span>+44 7724 030958</span>
              </div>
            </div>

            {/* Social Links with Animation */}
            <div className="flex justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.7s' }}>
              <a href="https://www.linkedin.com/in/masood-usama" target="_blank" rel="noopener noreferrer" className="group relative p-4 bg-slate-800 rounded-full hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-500 transition-all duration-300 transform hover:scale-110 hover:shadow-2xl hover:shadow-blue-500/50">
                <Linkedin size={24} className="relative z-10 group-hover:animate-bounce" />
                <div className="absolute inset-0 bg-blue-500 rounded-full blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
              </a>
              <a href="https://github.com/UsamaMasood12" target="_blank" rel="noopener noreferrer" className="group relative p-4 bg-slate-800 rounded-full hover:bg-gradient-to-r hover:from-purple-600 hover:to-purple-500 transition-all duration-300 transform hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/50">
                <Github size={24} className="relative z-10 group-hover:animate-bounce" />
                <div className="absolute inset-0 bg-purple-500 rounded-full blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
              </a>
            </div>

            {/* Scroll Indicator */}
            <div className="mt-12 animate-bounce">
              <ChevronDown className="mx-auto text-slate-400" size={32} />
            </div>
          </div>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>

        <style>{`
          @keyframes gradient {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }
          @keyframes slide-up {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes fade-in {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes blob {
            0%, 100% { transform: translate(0, 0) scale(1); }
            33% { transform: translate(30px, -50px) scale(1.1); }
            66% { transform: translate(-20px, 20px) scale(0.9); }
          }
          .animate-gradient {
            background-size: 200% 200%;
            animation: gradient 3s ease infinite;
          }
          .animate-slide-up {
            animation: slide-up 0.8s ease-out;
          }
          .animate-fade-in {
            animation: fade-in 1s ease-out;
          }
          .animate-blob {
            animation: blob 7s infinite;
          }
          .animation-delay-2000 {
            animation-delay: 2s;
          }
          .animation-delay-4000 {
            animation-delay: 4s;
          }
        `}</style>
      </section>

      {/* About Section */}
      {activeSection === 'about' && (
        <section className="py-12 px-6 relative z-20">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-4xl font-bold mb-12 flex items-center gap-3 justify-center">
              <Code className="text-blue-400 animate-pulse" />
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                About Me
              </span>
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div 
                id="education-card"
                data-animate
                className={`bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700 hover:border-blue-500 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 ${
                  isVisible['education-card'] ? 'animate-slide-in-left' : 'opacity-0'
                }`}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-blue-500/20 rounded-lg">
                    <Target className="text-blue-400" size={28} />
                  </div>
                  <h4 className="text-2xl font-semibold text-blue-400">Education</h4>
                </div>
                <div className="space-y-6">
                  <div className="group relative pl-6 border-l-2 border-blue-500/30 hover:border-blue-500 transition-all duration-300">
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-500 rounded-full animate-pulse"></div>
                    <h5 className="font-semibold text-lg group-hover:text-blue-400 transition-colors">
                      MSc Data Science with Advanced Practice
                    </h5>
                    <p className="text-slate-400 flex items-center gap-2 mt-1">
                      <Award size={16} />
                      Distinction | Teesside University | Expected Feb 2026
                    </p>
                    <div className="mt-3 p-3 bg-slate-700/50 rounded-lg border border-slate-600">
                      <p className="text-sm text-slate-300 leading-relaxed">
                        <span className="font-semibold text-purple-400">Thesis:</span> AI Chatbot for Donor Support using RAG architecture, LangChain, LLMs, and FAISS vector database
                      </p>
                    </div>
                  </div>
                  <div className="group relative pl-6 border-l-2 border-purple-500/30 hover:border-purple-500 transition-all duration-300">
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-purple-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                    <h5 className="font-semibold text-lg group-hover:text-purple-400 transition-colors">
                      BSc Electrical Engineering
                    </h5>
                    <p className="text-slate-400 mt-1">
                      National University of Science and Technology (NUST), Pakistan
                    </p>
                  </div>
                </div>
              </div>
              <div 
                id="cert-card"
                data-animate
                className={`bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700 hover:border-purple-500 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 ${
                  isVisible['cert-card'] ? 'animate-slide-in-right' : 'opacity-0'
                }`}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-purple-500/20 rounded-lg">
                    <Award className="text-purple-400" size={28} />
                  </div>
                  <h4 className="text-2xl font-semibold text-purple-400">Certifications</h4>
                </div>
                <ul className="space-y-4">
                  {certifications.map((cert, index) => (
                    <li 
                      key={index} 
                      className="group flex items-start gap-3 p-3 rounded-lg hover:bg-slate-700/50 transition-all duration-300 transform hover:translate-x-2"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mt-2 group-hover:animate-ping"></div>
                      <span className="text-slate-300 group-hover:text-white transition-colors">{cert}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <style>{`
            @keyframes slide-in-left {
              from {
                opacity: 0;
                transform: translateX(-50px);
              }
              to {
                opacity: 1;
                transform: translateX(0);
              }
            }
            @keyframes slide-in-right {
              from {
                opacity: 0;
                transform: translateX(50px);
              }
              to {
                opacity: 1;
                transform: translateX(0);
              }
            }
            .animate-slide-in-left {
              animation: slide-in-left 0.8s ease-out;
            }
            .animate-slide-in-right {
              animation: slide-in-right 0.8s ease-out;
            }
          `}</style>
        </section>
      )}

      {/* Projects Section */}
      {activeSection === 'projects' && (
        <section className="py-12 px-6 relative z-20">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-4xl font-bold mb-12 flex items-center gap-3 justify-center">
              <Brain className="text-purple-400 animate-pulse" />
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Key Projects
              </span>
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  id={`project-${project.id}`}
                  data-animate
                  className={`group relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 border border-slate-700 hover:border-blue-500 transition-all duration-500 cursor-pointer transform hover:scale-105 hover:-rotate-1 hover:shadow-2xl hover:shadow-blue-500/30 ${
                    isVisible[`project-${project.id}`] ? 'animate-fade-in-up' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
                >
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/10 group-hover:via-purple-500/10 group-hover:to-pink-500/10 rounded-2xl transition-all duration-500"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute -top-3 -right-3 px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-xs font-semibold shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                    {project.category}
                  </div>

                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-4">
                      <h4 className="text-xl font-semibold text-blue-400 group-hover:text-blue-300 transition-colors pr-2">
                        {project.title}
                      </h4>
                      <div className="transform transition-transform duration-300 group-hover:rotate-180">
                        {expandedProject === project.id ? 
                          <ChevronUp className="text-purple-400" /> : 
                          <ChevronDown className="text-purple-400" />
                        }
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-slate-700/50 backdrop-blur-sm rounded-full text-xs text-slate-300 border border-slate-600 hover:border-blue-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-110"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <p className="text-slate-300 mb-3 leading-relaxed">{project.description}</p>
                    
                    <div className={`overflow-hidden transition-all duration-500 ${
                      expandedProject === project.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                      <div className="mt-4 pt-4 border-t border-slate-700">
                        <div className="flex items-start gap-2 mb-4">
                          <Zap className="text-yellow-400 mt-1 flex-shrink-0 animate-pulse" size={20} />
                          <p className="text-slate-400 text-sm leading-relaxed">{project.details}</p>
                        </div>
                        <a
                          href={project.github}
                          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:from-blue-500 hover:to-purple-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/50"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Github size={18} />
                          <span className="font-semibold">View on GitHub</span>
                          <ExternalLink size={18} className="animate-pulse" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <style>{`
            @keyframes fade-in-up {
              from {
                opacity: 0;
                transform: translateY(30px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
            .animate-fade-in-up {
              animation: fade-in-up 0.8s ease-out;
            }
          `}</style>
        </section>
      )}

      {/* Skills Section */}
      {activeSection === 'skills' && (
        <section className="py-12 px-6 relative z-20">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-4xl font-bold mb-12 flex items-center gap-3 justify-center">
              <Database className="text-blue-400 animate-pulse" />
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Technical Skills
              </span>
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {Object.entries(skills).map(([category, items], categoryIndex) => (
                <div 
                  key={category} 
                  id={`skill-${categoryIndex}`}
                  data-animate
                  className={`group bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700 hover:border-blue-500 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 ${
                    isVisible[`skill-${categoryIndex}`] ? 'animate-fade-in-up' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${categoryIndex * 0.15}s` }}
                >
                  {/* Icon based on category */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-blue-500/20 rounded-lg group-hover:rotate-12 transition-transform duration-300">
                      {categoryIndex === 0 && <Code className="text-blue-400" size={28} />}
                      {categoryIndex === 1 && <Brain className="text-purple-400" size={28} />}
                      {categoryIndex === 2 && <BarChart3 className="text-cyan-400" size={28} />}
                      {categoryIndex === 3 && <Database className="text-green-400" size={28} />}
                    </div>
                    <h4 className="text-2xl font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                      {category}
                    </h4>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {items.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="group/skill relative px-4 py-2 bg-slate-700/50 backdrop-blur-sm rounded-lg text-slate-300 border border-slate-600 hover:border-blue-400 hover:text-blue-400 hover:bg-slate-700 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 cursor-pointer overflow-hidden"
                        style={{ animationDelay: `${skillIndex * 0.05}s` }}
                      >
                        {/* Shimmer effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/20 to-transparent translate-x-[-100%] group-hover/skill:translate-x-[100%] transition-transform duration-1000"></div>
                        <span className="relative z-10 font-medium">{skill}</span>
                      </span>
                    ))}
                  </div>
                  
                  {/* Progress indicator */}
                  <div className="mt-6 pt-6 border-t border-slate-700">
                    <div className="flex items-center justify-between text-sm text-slate-400">
                      <span>{items.length} Technologies</span>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <div 
                            key={i} 
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${
                              i < Math.min(items.length / 3, 5) ? 'bg-blue-400' : 'bg-slate-600'
                            }`}
                          ></div>
                        ))}
                      </div>
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
        <section className="py-12 px-6 relative z-20">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-4xl font-bold mb-12 flex items-center gap-3 justify-center">
              <BarChart3 className="text-purple-400 animate-pulse" />
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Experience
              </span>
            </h3>
            <div 
              id="experience-card"
              data-animate
              className={`relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700 hover:border-purple-500 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 ${
                isVisible['experience-card'] ? 'animate-fade-in-up' : 'opacity-0'
              }`}
            >
              {/* Decorative corner elements */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-purple-500/20 to-transparent rounded-bl-full"></div>
              <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-blue-500/20 to-transparent rounded-tr-full"></div>
              
              <div className="relative z-10">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6 gap-4">
                  <div className="flex items-start gap-4">
                    <div className="p-4 bg-purple-500/20 rounded-xl">
                      <Code className="text-purple-400" size={32} />
                    </div>
                    <div>
                      <h4 className="text-2xl font-semibold text-purple-400 mb-1">
                        {experience.role}
                      </h4>
                      <p className="text-slate-300 text-lg flex items-center gap-2">
                        <MapPin size={18} className="text-blue-400" />
                        {experience.company}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-slate-700/50 backdrop-blur-sm rounded-full border border-purple-500/30">
                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium text-slate-300">{experience.period}</span>
                  </div>
                </div>
                
                <div className="space-y-4 mt-8">
                  {experience.points.map((point, index) => (
                    <div 
                      key={index} 
                      className="group flex items-start gap-4 p-4 rounded-lg hover:bg-slate-700/30 transition-all duration-300 transform hover:translate-x-2"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center font-bold text-white group-hover:scale-110 transition-transform duration-300">
                        {index + 1}
                      </div>
                      <p className="text-slate-300 leading-relaxed pt-1 group-hover:text-white transition-colors">
                        {point}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Tech stack used */}
                <div className="mt-8 pt-6 border-t border-slate-700">
                  <h5 className="text-sm font-semibold text-slate-400 mb-3">Technologies Used:</h5>
                  <div className="flex flex-wrap gap-2">
                    {['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'Firebase', 'Agile'].map((tech, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-slate-700/50 backdrop-blur-sm rounded-full text-xs text-slate-300 border border-slate-600 hover:border-purple-400 hover:text-purple-400 transition-all duration-300 transform hover:scale-110"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="relative py-12 px-6 mt-20 border-t border-slate-700/50 bg-slate-900/50 backdrop-blur-sm z-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Let's Connect!
            </h3>
            <p className="text-slate-400 mb-6">
              Open to exciting opportunities in Data Science and Machine Learning
            </p>
            <div className="flex justify-center gap-4 mb-8">
              <a href="https://www.linkedin.com/in/masood-usama" target="_blank" rel="noopener noreferrer" className="group relative p-4 bg-slate-800 rounded-full hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-500 transition-all duration-300 transform hover:scale-110 hover:shadow-2xl hover:shadow-blue-500/50">
                <Linkedin size={24} className="relative z-10 group-hover:animate-bounce" />
                <div className="absolute inset-0 bg-blue-500 rounded-full blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
              </a>
              <a href="https://github.com/UsamaMasood12" target="_blank" rel="noopener noreferrer" className="group relative p-4 bg-slate-800 rounded-full hover:bg-gradient-to-r hover:from-purple-600 hover:to-purple-500 transition-all duration-300 transform hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/50">
                <Github size={24} className="relative z-10 group-hover:animate-bounce" />
                <div className="absolute inset-0 bg-purple-500 rounded-full blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
              </a>
              <a href="mailto:usamamasood531@gmail.com" className="group relative p-4 bg-slate-800 rounded-full hover:bg-gradient-to-r hover:from-pink-600 hover:to-pink-500 transition-all duration-300 transform hover:scale-110 hover:shadow-2xl hover:shadow-pink-500/50">
                <Mail size={24} className="relative z-10 group-hover:animate-bounce" />
                <div className="absolute inset-0 bg-pink-500 rounded-full blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
              </a>
            </div>
          </div>
          
          <div className="text-center text-slate-400 space-y-2">
            <p className="flex items-center justify-center gap-2">
              <span>© 2025 Usama Masood.</span>
              <span className="inline-flex items-center gap-1">
                Made with <span className="text-red-500 animate-pulse">♥</span> using React & Tailwind CSS
              </span>
            </p>
            <p className="text-sm text-slate-500">
              Designed for impact. Built with passion.
            </p>
          </div>
        </div>
        
        {/* Decorative bottom gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
      </footer>
    </div>
  );
}
