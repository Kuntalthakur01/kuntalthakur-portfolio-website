import React from 'react';
import { 
  Brain, 
  Database, 
  Code, 
  BarChart3, 
  Cpu, 
  Cloud,
  GitBranch,
  Terminal,
  Layers,
  Zap,
  Settings,
  TrendingUp
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Machine Learning & AI",
      icon: Brain,
      skills: [
        { name: "Python", evidence: "Daily driver across RAG, anomaly detection, and CV projects", icon: Code },
        { name: "TensorFlow", evidence: "Built and tuned diagnostic models for medical imaging research", icon: Cpu },
        { name: "PyTorch", evidence: "Rapid CV experiments (YOLO damage detection, prototyping)", icon: Zap },
        { name: "Scikit-learn", evidence: "Classical ML for log-based anomaly detection and risk modeling", icon: BarChart3 },
        { name: "OpenCV", evidence: "Preprocessing and augmentation for detection/vision tasks", icon: Settings },
        { name: "NLP", evidence: "Twitter genre prediction, semantic search, and RAG retrieval", icon: Brain }
      ],
      gradient: "from-blue-600 to-cyan-500"
    },
    {
      title: "Data Engineering",
      icon: Database,
      skills: [
        { name: "SQL", evidence: "Analytics for YouTube/Reddit datasets and behavioral dashboards", icon: Database },
        { name: "Apache Spark", evidence: "Batch pipelines for large-scale ingestion and feature prep", icon: Layers },
        { name: "Kafka", evidence: "Stream processing patterns for event-driven prototypes", icon: TrendingUp },
        { name: "Airflow", evidence: "Workflow orchestration for ETL jobs and scheduled ML runs", icon: GitBranch },
        { name: "Docker", evidence: "Containerized ML services and reproducible dev environments", icon: Settings },
        { name: "Kubernetes", evidence: "Deployed containerized workloads for experiments and demos", icon: Cloud }
      ],
      gradient: "from-slate-600 to-gray-500"
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      skills: [
        { name: "AWS", evidence: "S3/Lambda/Glue-based pipelines (YouTube data analytics)", icon: Cloud },
        { name: "GCP", evidence: "Model training and experimentation in academic projects", icon: Cloud },
        { name: "Terraform", evidence: "Defined infra for repeatable cloud environments", icon: Settings },
        { name: "Jenkins", evidence: "CI for tests/builds on ML and data pipelines", icon: GitBranch },
        { name: "Linux", evidence: "Daily environment for development, data wrangling, and ops", icon: Terminal },
        { name: "Git", evidence: "Team workflows across research and production repos", icon: GitBranch }
      ],
      gradient: "from-teal-600 to-emerald-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 relative overflow-hidden">
      {/* Background effects minimized for clarity */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 holographic-text">
            Technical Skills
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Expertise across the full data science and machine learning pipeline
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="glass-card p-8 rounded-2xl"
              style={{ animationDelay: `${categoryIndex * 0.2}s` }}
            >
              {/* Category header */}
              <div className="flex items-center mb-8">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${category.gradient} mr-4`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>

              {/* Skills list */}
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skill.name}
                    className="skill-item"
                    style={{ animationDelay: `${(categoryIndex * 0.2) + (skillIndex * 0.1)}s` }}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-center">
                        <skill.icon className="w-4 h-4 text-cyan-400 mr-2" />
                        <span className="text-gray-300 font-semibold">{skill.name}</span>
                      </div>
                    </div>
                    
                    <p className="text-sm text-gray-400 leading-relaxed mt-2">
                      {skill.evidence}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
