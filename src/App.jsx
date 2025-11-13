import React, { useState, useEffect, useRef } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, ExternalLink, Code, Database, Brain, BarChart3, ChevronDown, ChevronUp, Zap, Award, Target, TrendingUp, Rocket, Star } from 'lucide-react';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('about');
  const [expandedProject, setExpandedProject] = useState(null);
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

    // Smooth scroll behavior
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

  // Animated Grid Background
  const AnimatedGridBackground = () => {
    return (
      <>
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
          {/* Gradient orbs */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-float-slow"></div>
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float-delayed"></div>
          <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-float-medium"></div>

          {/* Grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(251, 191, 36, 0.3) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(251, 191, 36, 0.3) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px',
              transform: `translateY(${scrollY * 0.5}px)`
            }}
          />

          {/* Floating particles */}
          {[...Array(20)].map((_, i) => (
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
        </div>

        {/* Custom cursor effect */}
        <div
          className="fixed pointer-events-none z-50 mix-blend-screen transition-all duration-200"
          style={{
            width: cursorVariant === 'hover' ? '80px' : '40px',
            height: cursorVariant === 'hover' ? '80px' : '40px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(251, 191, 36, 0.2) 0%, transparent 70%)',
            transform: `translate(${mousePosition.x - (cursorVariant === 'hover' ? 40 : 20)}px, ${mousePosition.y - (cursorVariant === 'hover' ? 40 : 20)}px)`,
          }}
        />
      </>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      {/* Animated Background */}
      <AnimatedGridBackground />

      {/* Navigation Bar with Glassmorphism */}
      <nav className="fixed top-0 w-full bg-slate-900/70 backdrop-blur-2xl z-50 border-b border-amber-500/10 shadow-2xl">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3 group">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg flex items-center justify-center transform group-hover:rotate-180 transition-transform duration-500">
                <Star className="text-slate-900" size={20} fill="currentColor" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 bg-clip-text text-transparent tracking-tight">
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
                  className={`relative px-6 py-2.5 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 overflow-hidden group ${
                    activeSection === section.toLowerCase()
                      ? 'text-slate-900'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {activeSection === section.toLowerCase() && (
                    <span className="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-500 rounded-xl"></span>
                  )}
                  <span className="absolute inset-0 bg-slate-700/50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <span className="relative z-10 flex items-center gap-2">
                    {section}
                    {activeSection === section.toLowerCase() && (
                      <div className="w-1.5 h-1.5 bg-slate-900 rounded-full animate-pulse"></div>
                    )}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-32 px-6">
        <div className="max-w-7xl mx-auto relative z-20">
          <div className="text-center">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-slate-800/50 backdrop-blur-xl border border-amber-500/20 rounded-full mb-8 animate-fade-in-down shadow-lg shadow-amber-500/10">
              <div className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-500"></span>
              </div>
              <span className="text-sm font-medium text-amber-100">Available for Opportunities</span>
              <Rocket className="text-amber-400" size={18} />
            </div>

            {/* Main Title */}
            <h2 className="text-7xl lg:text-8xl font-bold mb-8 animate-fade-in-up leading-tight">
              <span className="block bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent">
                Data Scientist
              </span>
              <span className="block bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 bg-clip-text text-transparent mt-2">
                & ML Engineer
              </span>
            </h2>

            {/* Description */}
            <p className="text-xl text-slate-300 max-w-4xl mx-auto mb-12 leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
              MSc Data Science graduate (Feb 2026) specializing in{' '}
              <span className="text-amber-400 font-semibold">machine learning</span>,{' '}
              <span className="text-amber-300 font-semibold">artificial intelligence</span>, and{' '}
              <span className="text-yellow-400 font-semibold">business intelligence</span>.
              <br />
              Transforming data into actionable insights and building intelligent systems that drive business value.
            </p>

            {/* Contact Cards */}
            <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              {[
                { icon: MapPin, text: "Middlesbrough, UK", color: "amber" },
                { icon: Mail, text: "usamamasood531@gmail.com", color: "blue" },
                { icon: Phone, text: "+44 7724 030958", color: "indigo" }
              ].map((item, index) => (
                <div
                  key={index}
                  className="group relative px-6 py-3 bg-slate-800/40 backdrop-blur-xl rounded-2xl border border-slate-700/50 hover:border-amber-500/50 transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 cursor-pointer overflow-hidden"
                  onMouseEnter={() => setCursorVariant('hover')}
                  onMouseLeave={() => setCursorVariant('default')}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-500/0 via-amber-500/5 to-amber-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative flex items-center gap-3">
                    <item.icon size={20} className="text-amber-400 group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-slate-200 group-hover:text-white transition-colors">{item.text}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-6 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              {[
                { icon: Linkedin, href: "https://www.linkedin.com/in/masood-usama", color: "from-blue-600 to-blue-500" },
                { icon: Github, href: "https://github.com/UsamaMasood12", color: "from-slate-600 to-slate-500" },
                { icon: Mail, href: "mailto:usamamasood531@gmail.com", color: "from-amber-600 to-amber-500" }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-5 bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-slate-700/50 hover:border-amber-500/50 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 overflow-hidden"
                  onMouseEnter={() => setCursorVariant('hover')}
                  onMouseLeave={() => setCursorVariant('default')}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${social.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  <social.icon size={24} className="relative z-10 text-slate-300 group-hover:text-white transition-colors group-hover:rotate-12 transform duration-300" />
                  <div className="absolute inset-0 bg-amber-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-150"></div>
                </a>
              ))}
            </div>

            {/* Scroll Indicator */}
            <div className="mt-16 animate-bounce-slow">
              <div className="inline-flex flex-col items-center gap-2">
                <span className="text-sm text-slate-400 font-medium">Scroll to explore</span>
                <ChevronDown className="text-amber-400" size={28} />
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-amber-500/5 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      </section>

      {/* About Section */}
      {activeSection === 'about' && (
        <section className="py-20 px-6 relative z-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 animate-fade-in-down">
              <div className="inline-flex items-center gap-3 px-6 py-2 bg-slate-800/30 backdrop-blur-xl border border-amber-500/20 rounded-full mb-6">
                <Code className="text-amber-400" size={20} />
                <span className="text-sm font-medium text-amber-100">Professional Background</span>
              </div>
              <h3 className="text-5xl font-bold bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 bg-clip-text text-transparent">
                About Me
              </h3>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Education Card */}
              <div
                id="education-card"
                data-animate
                className={`group relative bg-slate-800/40 backdrop-blur-2xl rounded-3xl p-10 border border-slate-700/50 hover:border-amber-500/50 transition-all duration-700 transform hover:scale-[1.02] hover:-translate-y-2 overflow-hidden ${
                  isVisible['education-card'] ? 'animate-slide-in-left' : 'opacity-0'
                }`}
                onMouseEnter={() => setCursorVariant('hover')}
                onMouseLeave={() => setCursorVariant('default')}
              >
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 via-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="p-4 bg-gradient-to-br from-amber-500/20 to-amber-600/10 rounded-2xl border border-amber-500/20 group-hover:scale-110 transition-transform duration-500">
                      <Target className="text-amber-400" size={32} />
                    </div>
                    <h4 className="text-3xl font-bold text-amber-400">Education</h4>
                  </div>

                  <div className="space-y-8">
                    {/* MSc */}
                    <div className="group/item relative pl-8 border-l-2 border-amber-500/30 hover:border-amber-500 transition-all duration-500">
                      <div className="absolute -left-[9px] top-0 w-4 h-4 bg-amber-500 rounded-full ring-4 ring-amber-500/20 animate-pulse-slow"></div>
                      <h5 className="font-bold text-xl text-white mb-2 group-hover/item:text-amber-400 transition-colors">
                        MSc Data Science with Advanced Practice
                      </h5>
                      <p className="text-slate-400 flex items-center gap-2 mb-4">
                        <Award size={18} className="text-amber-400" />
                        <span className="font-semibold">Distinction</span>
                        <span className="text-slate-500">|</span>
                        Teesside University
                        <span className="text-slate-500">|</span>
                        Expected Feb 2026
                      </p>
                      <div className="p-5 bg-slate-900/50 rounded-2xl border border-slate-700/50 group-hover/item:border-amber-500/30 transition-all duration-500">
                        <p className="text-sm text-slate-300 leading-relaxed">
                          <span className="font-bold text-amber-400">Thesis:</span>{' '}
                          AI Chatbot for Donor Support using RAG architecture, LangChain, LLMs, and FAISS vector database
                        </p>
                      </div>
                    </div>

                    {/* BSc */}
                    <div className="group/item relative pl-8 border-l-2 border-blue-500/30 hover:border-blue-500 transition-all duration-500">
                      <div className="absolute -left-[9px] top-0 w-4 h-4 bg-blue-500 rounded-full ring-4 ring-blue-500/20 animate-pulse-slow" style={{ animationDelay: '0.5s' }}></div>
                      <h5 className="font-bold text-xl text-white mb-2 group-hover/item:text-blue-400 transition-colors">
                        BSc Electrical Engineering
                      </h5>
                      <p className="text-slate-400">
                        National University of Science and Technology (NUST), Pakistan
                      </p>
                    </div>
                  </div>
                </div>

                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              </div>

              {/* Certifications Card */}
              <div
                id="cert-card"
                data-animate
                className={`group relative bg-slate-800/40 backdrop-blur-2xl rounded-3xl p-10 border border-slate-700/50 hover:border-amber-500/50 transition-all duration-700 transform hover:scale-[1.02] hover:-translate-y-2 overflow-hidden ${
                  isVisible['cert-card'] ? 'animate-slide-in-right' : 'opacity-0'
                }`}
                onMouseEnter={() => setCursorVariant('hover')}
                onMouseLeave={() => setCursorVariant('default')}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="p-4 bg-gradient-to-br from-blue-500/20 to-blue-600/10 rounded-2xl border border-blue-500/20 group-hover:scale-110 transition-transform duration-500">
                      <Award className="text-blue-400" size={32} />
                    </div>
                    <h4 className="text-3xl font-bold text-blue-400">Certifications</h4>
                  </div>

                  <div className="space-y-4">
                    {certifications.map((cert, index) => (
                      <div
                        key={index}
                        className="group/cert relative flex items-start gap-4 p-5 rounded-2xl bg-slate-900/30 border border-slate-700/30 hover:border-amber-500/50 hover:bg-slate-900/50 transition-all duration-500 transform hover:translate-x-2 hover:scale-[1.02] cursor-pointer overflow-hidden"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/0 via-amber-500/5 to-transparent opacity-0 group-hover/cert:opacity-100 transition-opacity duration-500"></div>
                        <div className="flex-shrink-0 w-2 h-2 bg-gradient-to-r from-amber-400 to-yellow-400 rounded-full mt-2.5 group-hover/cert:scale-150 transition-transform duration-300"></div>
                        <span className="relative text-slate-300 group-hover/cert:text-white font-medium transition-colors leading-relaxed">
                          {cert}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-blue-500/10 to-transparent rounded-tr-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Projects Section */}
      {activeSection === 'projects' && (
        <section className="py-20 px-6 relative z-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 animate-fade-in-down">
              <div className="inline-flex items-center gap-3 px-6 py-2 bg-slate-800/30 backdrop-blur-xl border border-amber-500/20 rounded-full mb-6">
                <Brain className="text-amber-400" size={20} />
                <span className="text-sm font-medium text-amber-100">Portfolio Showcase</span>
              </div>
              <h3 className="text-5xl font-bold bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 bg-clip-text text-transparent">
                Key Projects
              </h3>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  id={`project-${project.id}`}
                  data-animate
                  className={`group relative bg-slate-800/40 backdrop-blur-2xl rounded-3xl p-8 border border-slate-700/50 hover:border-amber-500/50 transition-all duration-700 cursor-pointer transform hover:scale-[1.02] hover:-translate-y-2 overflow-hidden ${
                    isVisible[`project-${project.id}`] ? 'animate-fade-in-up' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
                  onMouseEnter={() => setCursorVariant('hover')}
                  onMouseLeave={() => setCursorVariant('default')}
                >
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 via-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                  {/* Category Badge */}
                  <div className="absolute -top-4 -right-4 px-5 py-2 bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl text-sm font-bold shadow-xl shadow-amber-500/30 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                    {project.category}
                  </div>

                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-6">
                      <h4 className="text-2xl font-bold text-white group-hover:text-amber-400 transition-colors pr-4 leading-tight">
                        {project.title}
                      </h4>
                      <div className="flex-shrink-0 p-2 bg-slate-700/50 rounded-xl group-hover:bg-amber-500/20 transition-all duration-500 transform group-hover:rotate-180">
                        {expandedProject === project.id ?
                          <ChevronUp className="text-amber-400" size={24} /> :
                          <ChevronDown className="text-amber-400" size={24} />
                        }
                      </div>
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.slice(0, 5).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1.5 bg-slate-900/50 backdrop-blur-sm rounded-lg text-xs font-medium text-slate-300 border border-slate-700/50 hover:border-amber-400/50 hover:text-amber-400 hover:bg-slate-800/50 transition-all duration-300 transform hover:scale-110"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 5 && (
                        <span className="px-3 py-1.5 bg-amber-500/20 backdrop-blur-sm rounded-lg text-xs font-bold text-amber-400 border border-amber-500/30">
                          +{project.tech.length - 5} more
                        </span>
                      )}
                    </div>

                    {/* Description */}
                    <p className="text-slate-300 leading-relaxed mb-4">{project.description}</p>

                    {/* Expanded Details */}
                    <div className={`overflow-hidden transition-all duration-700 ${
                      expandedProject === project.id ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                      <div className="pt-6 border-t border-slate-700/50 space-y-6">
                        {/* Full Details */}
                        <div className="flex items-start gap-3">
                          <Zap className="text-amber-400 mt-1 flex-shrink-0 animate-pulse-slow" size={20} />
                          <p className="text-slate-400 text-sm leading-relaxed">{project.details}</p>
                        </div>

                        {/* Highlights */}
                        <div className="grid grid-cols-2 gap-3">
                          {project.highlights.map((highlight, idx) => (
                            <div key={idx} className="flex items-center gap-2 p-3 bg-slate-900/50 rounded-xl border border-slate-700/30">
                              <TrendingUp className="text-amber-400 flex-shrink-0" size={16} />
                              <span className="text-xs text-slate-300 font-medium">{highlight}</span>
                            </div>
                          ))}
                        </div>

                        {/* GitHub Link */}
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/link inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl hover:from-amber-400 hover:to-amber-500 transition-all duration-500 transform hover:scale-105 shadow-xl shadow-amber-500/30 hover:shadow-amber-500/50 overflow-hidden"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover/link:translate-x-[100%] transition-transform duration-700"></div>
                          <Github size={20} className="relative z-10 text-slate-900" />
                          <span className="relative z-10 font-bold text-slate-900">View on GitHub</span>
                          <ExternalLink size={20} className="relative z-10 text-slate-900 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform duration-300" />
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Decorative corner */}
                  <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-amber-500/10 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Skills Section */}
      {activeSection === 'skills' && (
        <section className="py-20 px-6 relative z-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 animate-fade-in-down">
              <div className="inline-flex items-center gap-3 px-6 py-2 bg-slate-800/30 backdrop-blur-xl border border-amber-500/20 rounded-full mb-6">
                <Database className="text-amber-400" size={20} />
                <span className="text-sm font-medium text-amber-100">Technical Expertise</span>
              </div>
              <h3 className="text-5xl font-bold bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 bg-clip-text text-transparent">
                Skills & Technologies
              </h3>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {Object.entries(skills).map(([category, items], categoryIndex) => (
                <div
                  key={category}
                  id={`skill-${categoryIndex}`}
                  data-animate
                  className={`group relative bg-slate-800/40 backdrop-blur-2xl rounded-3xl p-10 border border-slate-700/50 hover:border-amber-500/50 transition-all duration-700 transform hover:scale-[1.02] hover:-translate-y-2 overflow-hidden ${
                    isVisible[`skill-${categoryIndex}`] ? 'animate-fade-in-up' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${categoryIndex * 0.1}s` }}
                  onMouseEnter={() => setCursorVariant('hover')}
                  onMouseLeave={() => setCursorVariant('default')}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 via-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="p-4 bg-gradient-to-br from-amber-500/20 to-amber-600/10 rounded-2xl border border-amber-500/20 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                        {categoryIndex === 0 && <Code className="text-amber-400" size={32} />}
                        {categoryIndex === 1 && <Brain className="text-amber-400" size={32} />}
                        {categoryIndex === 2 && <BarChart3 className="text-amber-400" size={32} />}
                        {categoryIndex === 3 && <Database className="text-amber-400" size={32} />}
                        {categoryIndex === 4 && <Rocket className="text-amber-400" size={32} />}
                        {categoryIndex === 5 && <Database className="text-amber-400" size={32} />}
                        {categoryIndex === 6 && <TrendingUp className="text-amber-400" size={32} />}
                      </div>
                      <h4 className="text-3xl font-bold bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent">
                        {category}
                      </h4>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      {items.map((skill, skillIndex) => (
                        <div
                          key={skillIndex}
                          className="group/skill relative px-5 py-2.5 bg-slate-900/50 backdrop-blur-sm rounded-xl border border-slate-700/50 hover:border-amber-400/50 hover:bg-slate-800/50 transition-all duration-500 transform hover:scale-110 hover:-translate-y-1 cursor-pointer overflow-hidden"
                          style={{ animationDelay: `${skillIndex * 0.05}s` }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-400/10 to-transparent translate-x-[-100%] group-hover/skill:translate-x-[100%] transition-transform duration-1000"></div>
                          <span className="relative z-10 font-semibold text-sm text-slate-300 group-hover/skill:text-amber-400 transition-colors">
                            {skill}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Stats Bar */}
                    <div className="mt-8 pt-6 border-t border-slate-700/50">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-slate-400">
                          {items.length} Technologies
                        </span>
                        <div className="flex gap-1.5">
                          {[...Array(5)].map((_, i) => (
                            <div
                              key={i}
                              className={`w-2 h-2 rounded-full transition-all duration-500 ${
                                i < Math.min(Math.ceil(items.length / 3), 5)
                                  ? 'bg-amber-400 scale-100'
                                  : 'bg-slate-700 scale-75'
                              }`}
                            ></div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-500/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Experience Section */}
      {activeSection === 'experience' && (
        <section className="py-20 px-6 relative z-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 animate-fade-in-down">
              <div className="inline-flex items-center gap-3 px-6 py-2 bg-slate-800/30 backdrop-blur-xl border border-amber-500/20 rounded-full mb-6">
                <BarChart3 className="text-amber-400" size={20} />
                <span className="text-sm font-medium text-amber-100">Work History</span>
              </div>
              <h3 className="text-5xl font-bold bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 bg-clip-text text-transparent">
                Professional Experience
              </h3>
            </div>

            <div
              id="experience-card"
              data-animate
              className={`group relative bg-slate-800/40 backdrop-blur-2xl rounded-3xl p-12 border border-slate-700/50 hover:border-amber-500/50 transition-all duration-700 transform hover:scale-[1.01] hover:-translate-y-2 overflow-hidden max-w-4xl mx-auto ${
                isVisible['experience-card'] ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              onMouseEnter={() => setCursorVariant('hover')}
              onMouseLeave={() => setCursorVariant('default')}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 via-amber-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

              {/* Decorative corners */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-amber-500/10 to-transparent rounded-bl-full"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-blue-500/10 to-transparent rounded-tr-full"></div>

              <div className="relative z-10">
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-6 mb-10">
                  <div className="flex items-start gap-5">
                    <div className="p-5 bg-gradient-to-br from-amber-500/20 to-amber-600/10 rounded-2xl border border-amber-500/20 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                      <Code className="text-amber-400" size={36} />
                    </div>
                    <div>
                      <h4 className="text-3xl font-bold text-amber-400 mb-2">
                        {experience.role}
                      </h4>
                      <p className="text-slate-300 text-lg flex items-center gap-2 font-medium">
                        <MapPin size={20} className="text-blue-400" />
                        {experience.company}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 px-5 py-3 bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-amber-500/30 self-start">
                    <div className="w-2.5 h-2.5 bg-amber-400 rounded-full animate-pulse-slow"></div>
                    <span className="text-sm font-bold text-slate-200">{experience.period}</span>
                  </div>
                </div>

                <div className="space-y-5 mb-10">
                  {experience.points.map((point, index) => (
                    <div
                      key={index}
                      className="group/point flex items-start gap-5 p-6 rounded-2xl bg-slate-900/30 border border-slate-700/30 hover:border-amber-500/50 hover:bg-slate-900/50 transition-all duration-500 transform hover:translate-x-3 hover:scale-[1.01]"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center font-bold text-lg text-slate-900 group-hover/point:scale-110 group-hover/point:rotate-12 transition-all duration-500 shadow-lg shadow-amber-500/30">
                        {index + 1}
                      </div>
                      <p className="text-slate-300 leading-relaxed pt-1.5 text-base group-hover/point:text-white transition-colors">
                        {point}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Tech Stack */}
                <div className="pt-8 border-t border-slate-700/50">
                  <h5 className="text-sm font-bold text-slate-400 mb-4 uppercase tracking-wider">Technologies Used</h5>
                  <div className="flex flex-wrap gap-3">
                    {['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'Firebase', 'Agile'].map((tech, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-slate-900/50 backdrop-blur-sm rounded-xl text-sm font-semibold text-slate-300 border border-slate-700/50 hover:border-amber-400/50 hover:text-amber-400 hover:bg-slate-800/50 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 cursor-pointer"
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
      <footer className="relative py-16 px-6 mt-32 border-t border-slate-700/50 bg-slate-900/50 backdrop-blur-xl z-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-4 bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 bg-clip-text text-transparent">
              Let's Connect!
            </h3>
            <p className="text-slate-400 text-lg mb-8 max-w-2xl mx-auto">
              Open to exciting opportunities in Data Science, Machine Learning, and AI.
              Let's build something amazing together.
            </p>

            <div className="flex justify-center gap-6 mb-12">
              {[
                { icon: Linkedin, href: "https://www.linkedin.com/in/masood-usama", label: "LinkedIn" },
                { icon: Github, href: "https://github.com/UsamaMasood12", label: "GitHub" },
                { icon: Mail, href: "mailto:usamamasood531@gmail.com", label: "Email" }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-6 bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-slate-700/50 hover:border-amber-500/50 transition-all duration-500 transform hover:scale-110 hover:-translate-y-3 overflow-hidden"
                  onMouseEnter={() => setCursorVariant('hover')}
                  onMouseLeave={() => setCursorVariant('default')}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500 to-amber-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <social.icon size={28} className="relative z-10 text-slate-300 group-hover:text-slate-900 transition-colors group-hover:rotate-12 transform duration-300" />
                  <div className="absolute inset-0 bg-amber-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-150"></div>
                </a>
              ))}
            </div>
          </div>

          <div className="text-center text-slate-400 space-y-3 pt-8 border-t border-slate-700/30">
            <p className="flex items-center justify-center gap-2 text-base">
              <span>© 2025 Usama Masood.</span>
              <span className="inline-flex items-center gap-2">
                Crafted with <span className="text-red-500 animate-pulse-slow text-xl">♥</span> using React & Tailwind CSS
              </span>
            </p>
            <p className="text-sm text-slate-500 font-medium">
              Designed for impact. Built with passion. Driven by innovation.
            </p>
          </div>
        </div>

        {/* Gradient bar */}
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
        @keyframes fade-in-down {
          from { opacity: 0; transform: translateY(-30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slide-in-left {
          from { opacity: 0; transform: translateX(-80px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slide-in-right {
          from { opacity: 0; transform: translateX(80px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        .animate-float-slow { animation: float-slow 12s ease-in-out infinite; }
        .animate-float-medium { animation: float-medium 15s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 18s ease-in-out infinite; }
        .animate-particle { animation: particle linear infinite; }
        .animate-fade-in-down { animation: fade-in-down 0.8s ease-out; }
        .animate-fade-in-up { animation: fade-in-up 0.8s ease-out; }
        .animate-fade-in { animation: fade-in 1s ease-out; }
        .animate-slide-in-left { animation: slide-in-left 0.8s ease-out; }
        .animate-slide-in-right { animation: slide-in-right 0.8s ease-out; }
        .animate-pulse-slow { animation: pulse-slow 3s ease-in-out infinite; }
        .animate-bounce-slow { animation: bounce-slow 2s ease-in-out infinite; }
      `}</style>
    </div>
  );
}
