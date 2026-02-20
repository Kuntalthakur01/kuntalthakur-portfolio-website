import React from 'react';
import { ExternalLink, Github, Brain, Database, BarChart3, BookOpen } from 'lucide-react';

// Gradient border palettes for elegant, consistent chips
const TAG_GRADIENTS = [
  'from-blue-600 to-cyan-500',
  'from-violet-600 to-fuchsia-500',
  'from-emerald-600 to-teal-500',
  'from-amber-600 to-orange-500',
  'from-sky-600 to-indigo-500',
  'from-rose-600 to-pink-500',
];

// Optional specific mappings for key tags
const TAG_GRADIENT_LOOKUP: Record<string, string> = {
  python: 'from-amber-600 to-orange-500',
  nlp: 'from-fuchsia-600 to-pink-500',
  aws: 'from-orange-600 to-amber-500',
  rag: 'from-indigo-600 to-purple-500',
  yolo: 'from-orange-600 to-amber-500',
};

function getTagGradient(tag: string): string {
  const key = tag.toLowerCase();
  if (TAG_GRADIENT_LOOKUP[key]) return TAG_GRADIENT_LOOKUP[key];
  let hash = 0;
  for (let i = 0; i < key.length; i++) hash = (hash * 31 + key.charCodeAt(i)) >>> 0;
  return TAG_GRADIENTS[hash % TAG_GRADIENTS.length];
}

const projectCategories = [
  {
    title: "Research & Publications",
    icon: BookOpen,
    color: "from-rose-600 to-amber-500",
    projects: [
      {
        title: "Single Domain Generalization in Diabetic Retinopathy: A Neuro-Symbolic Learning Approach",
        description: "Novel neuro-symbolic learning approach for diabetic retinopathy diagnosis that achieves robust single-domain generalization across diverse medical imaging datasets.",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&h=500",
        tags: ["Healthcare AI", "Neuro-Symbolic", "Deep Learning", "Medical Imaging"],
        github: "https://arxiv.org/abs/2509.02918",
        venue: "arXiv 2025",
        authors: "M Urooj, A Banerjee, F Shaikh, K Thakur, S Gupta",
        citations: 1
      },
      {
        title: "MedXAI: A Retrieval-Augmented and Self-Verifying Framework for Knowledge-Guided Medical Image Analysis",
        description: "Retrieval-augmented, self-verifying pipeline that grounds medical image analysis in external knowledge for more reliable and interpretable outputs.",
        image: "/kuntalthakur-portfolio-website/medxai.png",
        imageFit: "contain",
        tags: ["Healthcare AI", "RAG", "Self-Verification", "Medical Imaging"],
        github: "https://arxiv.org/abs/2512.10098",
        venue: "arXiv 2025",
        authors: "M Urooj, A Banerjee, F Shaikh, K Thakur, S Gupta"
      }
    ]
  },
  {
    title: "GenAI & NLP",
    icon: Brain,
    color: "from-blue-600 to-cyan-600",
    projects: [
      {
        title: "Arxiv Papers Recommendations using RAG",
        description: "Built a Retrieval-Augmented Generation system for personalized academic paper recommendations using vector embeddings and semantic search.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/ArXiv_logo_2022.svg/1200px-ArXiv_logo_2022.svg.png",
        tags: ["RAG", "NLP", "Vector Search", "Python"],
        github: "https://github.com/Kuntalthakur01/Arxiv-Papers-Recommendations-using-RAG"
      },
      {
        title: "Twitter Tweets Genre Prediction",
        description: "NLP model to classify and predict tweet genres using text analysis, sentiment analysis, and machine learning techniques.",
        image: "https://images.unsplash.com/photo-1611605698335-8b1569810432?auto=format&fit=crop&w=800&h=500",
        tags: ["NLP", "Text Classification", "Twitter API", "Sentiment Analysis"],
        github: "https://github.com/Kuntalthakur01/TWITTER-TWEETS-GENRES-PREDICTION"
      }
    ]
  },
  {
    title: "Machine Learning",
    icon: BarChart3,
    color: "from-slate-600 to-gray-600",
    projects: [
      {
        title: "Log-based System Anomaly Detection",
        description: "Developed machine learning models to detect system anomalies from log data using pattern recognition and statistical analysis.",
        image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&w=800&h=500",
        tags: ["Anomaly Detection", "ML", "Log Analysis", "Python"],
        github: "https://github.com/Kuntalthakur01/Log-based-System-Anomaly-Detection-"
      },
      {
        title: "Car Damage Detection using YOLO",
        description: "Computer vision model using YOLO architecture to automatically detect and classify car damage from images.",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&h=500",
        tags: ["YOLO", "Computer Vision", "Deep Learning", "Object Detection"],
        github: "https://github.com/Kuntalthakur01/Car-Damage-Detection-using-YOLO"
      },
      {
        title: "Auto Insurance Claims Analysis",
        description: "Predictive analytics for auto insurance claims processing using machine learning to assess claim validity and risk.",
        image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&h=500",
        tags: ["Insurance Analytics", "Predictive Modeling", "Risk Assessment", "ML"],
        github: "https://github.com/Kuntalthakur01/AUTO-Insurance-Claims"
      },
      {
        title: "PlaceME - Places Recommendation",
        description: "Location-based recommendation system that suggests places based on user preferences and historical data.",
        image: "https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?auto=format&fit=crop&w=800&h=500",
        tags: ["Recommendation System", "Geolocation", "ML", "Mobile App"],
        github: "https://github.com/Kuntalthakur01/PlaceME-Places"
      }
    ]
  },
  {
    title: "Data & SQL",
    icon: Database,
    color: "from-teal-600 to-emerald-600",
    projects: [
      {
        title: "User Behavior Analysis",
        description: "Analyzed user interaction patterns and behaviors using statistical methods and data visualization techniques.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&h=500",
        tags: ["Data Analysis", "Visualization", "Python", "Statistics"],
        github: "https://github.com/Kuntalthakur01/User-Behavior-Analysis"
      },
      {
        title: "Efficient Query Processing on Distributed Systems",
        description: "Optimized query performance across distributed database systems using advanced indexing and caching strategies.",
        image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&w=800&h=500",
        tags: ["Distributed Systems", "Query Optimization", "Database", "Performance"],
        github: "https://github.com/Kuntalthakur01/Efficient-Query-Processing-on-Distributed-Systems-"
      },
      {
        title: "Scalable Reddit Data Processing",
        description: "Built scalable data ingestion pipeline with query optimization for processing large-scale Reddit data efficiently.",
        image: "https://logos-world.net/wp-content/uploads/2020/10/Reddit-Logo.png",
        tags: ["Big Data", "ETL", "Scalability", "Data Engineering"],
        github: "https://github.com/Kuntalthakur01/Scalable-Data-Ingestion-Query-Optimization-for-Large-Scale-Reddit-Data"
      },
      {
        title: "YouTube Data Analytics using AWS",
        description: "Cloud-based analytics pipeline for YouTube video data using AWS services for scalable data processing and insights.",
        image: "https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo.png",
        tags: ["AWS", "Cloud Analytics", "Data Pipeline", "YouTube API"],
        github: "https://github.com/Kuntalthakur01/Youtube-video-data-analytics-using-AWS"
      },
      {
        title: "Car Accident Data Visualization - Tempe",
        description: "Interactive dashboard visualizing car accident patterns and trends in Tempe using statistical analysis and mapping.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500",
        tags: ["Data Visualization", "GIS", "Public Safety", "Dashboard"],
        github: "https://github.com/Kuntalthakur01/Car-Accident-Data-Visualization-Tempe-Dataset"
      }
    ]
  }
];

const ProjectCard = ({ project, index }: { project: any, index: number }) => {
  const handleFallback = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.onerror = null;
    e.currentTarget.src = '/kuntalthakur-portfolio-website/profile.jpeg';
  };
  const useContainFit = project.imageFit === 'contain';

  return (
    <div 
      className="group perspective-2000 animate-zoomIn"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="glass-effect rounded-xl overflow-hidden border border-purple-700 transform transition-all duration-300 card-hover-zoom neon-border">
        <div className="relative overflow-hidden">
          {useContainFit ? (
            <div className="relative w-full h-48 bg-slate-900/40">
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                decoding="async"
                onError={handleFallback}
                className="absolute inset-0 w-full h-full object-cover scale-110 blur-md opacity-45 transition-all duration-500 group-hover:scale-125"
              />
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                decoding="async"
                onError={handleFallback}
                className="relative w-full h-full object-contain transform transition-all duration-500 group-hover:scale-105"
              />
            </div>
          ) : (
            <img
              src={project.image}
              alt={project.title}
              loading="lazy"
              decoding="async"
              onError={handleFallback}
              className="w-full h-48 object-cover transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-1"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 glass-effect rounded-full hover:bg-slate-700 transition-all duration-300 btn-3d neon-border focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
            >
              <Github className="w-4 h-4 text-white animate-hologram" />
            </a>
          </div>
          {/* Citation badge for research papers */}
          {project.citations !== undefined && (
            <div className="absolute top-4 left-4 px-2 py-1 glass-effect rounded-full text-xs font-bold text-amber-300 border border-amber-500/50">
              {project.citations} Citation{project.citations !== 1 ? 's' : ''}
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
        <div className="p-6 transform transition-all duration-300 depth-layer-1">
          <div className="flex items-start justify-between mb-2">
            <h3 className="text-xl font-semibold holographic-text flex-1 depth-layer-2">{project.title}</h3>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 text-cyan-400 hover:text-cyan-300 transition-all duration-300 btn-3d p-1 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
          {/* Show venue & authors for research papers */}
          {project.venue && (
            <div className="mb-2 text-xs text-rose-400 font-medium">{project.venue}</div>
          )}
          {project.authors && (
            <div className="mb-3 text-xs text-gray-500 italic">{project.authors}</div>
          )}
          <p className="text-gray-400 mb-4 text-sm leading-relaxed depth-layer-1">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag: string, tagIndex: number) => (
              <span key={tagIndex} className="relative inline-flex">
                <span className={`absolute inset-0 rounded-full bg-gradient-to-r ${getTagGradient(tag)} opacity-70 blur-[2px]`}></span>
                <span className="relative px-3 py-1 rounded-full text-xs font-semibold tracking-wide text-white bg-slate-900/70 border border-white/10">
                  {tag}
                </span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Projects() {
  const [researchCategory, ...otherCategories] = projectCategories;

  return (
    <section className="py-20 bg-slate-800 overflow-hidden" id="projects">
      <div className="container mx-auto px-6">
        {researchCategory && (
          <div className="mb-16">
            <div className="flex items-center justify-center mb-8">
              <div className={`flex items-center space-x-3 px-6 py-3 rounded-full bg-gradient-to-r ${researchCategory.color} bg-opacity-20 border border-blue-700 glass-effect card-hover-3d neon-border`}>
                <researchCategory.icon className="w-6 h-6 text-white" />
                <h3 className="text-2xl font-bold holographic-text">{researchCategory.title}</h3>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-2000">
              {researchCategory.projects.map((project, index) => (
                <ProjectCard key={index} project={project} index={index} />
              ))}
            </div>
          </div>
        )}

        <h2 className="text-3xl font-bold text-center mb-16 holographic-text">Projects</h2>

        {otherCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-16">
            <div className="flex items-center justify-center mb-8">
              <div className={`flex items-center space-x-3 px-6 py-3 rounded-full bg-gradient-to-r ${category.color} bg-opacity-20 border border-blue-700 glass-effect card-hover-3d neon-border`}>
                <category.icon className="w-6 h-6 text-white" />
                <h3 className="text-2xl font-bold holographic-text">{category.title}</h3>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-2000">
              {category.projects.map((project, index) => (
                <ProjectCard key={index} project={project} index={index} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
