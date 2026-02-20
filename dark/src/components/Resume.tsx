import React from 'react';
import {
  Download,
  Mail,
  MapPin,
  GraduationCap,
  Briefcase,
  Award,
  BookOpen,
  Code,
  Cloud,
  Brain,
  Github,
  Linkedin,
  Phone,
} from 'lucide-react';

type TimelineItem = {
  title?: string;
  degree?: string;
  organization?: string;
  company?: string;
  school?: string;
  location?: string;
  period?: string;
  graduation?: string;
  gpa?: string;
  achievements?: string[];
  coursework?: string[];
  description?: string[];
};

type SectionCardProps = {
  children: React.ReactNode;
  className?: string;
};

const SectionCard: React.FC<SectionCardProps> = ({ children, className = '' }) => (
  <div className={`glass-effect rounded-2xl border border-blue-800/50 shadow-2xl p-6 ${className}`}>
    {children}
  </div>
);

const Pill: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wide bg-slate-900/70 border border-blue-900 text-gray-200">
    {children}
  </span>
);

const TimelineSection: React.FC<{
  title: string;
  icon: React.ElementType;
  items: TimelineItem[];
}> = ({ title, icon: Icon, items }) => (
  <SectionCard>
    <div className="flex items-center gap-3 mb-6">
      <Icon className="w-6 h-6 text-cyan-400" />
      <h3 className="text-2xl font-semibold text-white">{title}</h3>
    </div>
    <div className="space-y-8">
      {items.map((item, idx) => {
        const primaryTitle = item.degree || item.title;
        const organization = item.school || item.company || item.organization;
        const period = item.graduation || item.period;

        return (
          <div key={`${title}-${idx}`} className="relative pl-6 border-l border-blue-800/50">
            <span className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(6,182,212,0.8)]"></span>
            <div className="flex flex-wrap items-start justify-between gap-2">
              <div>
                <h4 className="text-lg font-semibold text-white">{primaryTitle}</h4>
                <p className="text-cyan-400 text-sm">{organization} · {item.location}</p>
                {item.gpa && <p className="text-gray-400 text-sm mt-1">GPA: {item.gpa}</p>}
              </div>
              <p className="text-gray-300 text-sm font-medium">{period}</p>
            </div>
            {item.achievements && (
              <ul className="mt-3 space-y-2 text-gray-300 text-sm list-disc list-inside">
                {item.achievements.map((achievement, index) => (
                  <li key={index}>{achievement}</li>
                ))}
              </ul>
            )}
            {item.coursework && (
              <div className="mt-4">
                <p className="text-gray-400 text-xs uppercase tracking-widest mb-2">Key Coursework</p>
                <div className="flex flex-wrap gap-2">
                  {item.coursework.map((course, courseIndex) => (
                    <Pill key={courseIndex}>{course}</Pill>
                  ))}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  </SectionCard>
);

const Resume = () => {
  const resumeData = {
    summary:
      'Graduate Data Scientist and ML Engineer building GenAI and multimodal solutions across healthcare, SaaS, and research. Experienced in taking models from experimentation to production by blending solid statistics, distributed data processing, and product-focused storytelling.',
    highlights: [
      { label: 'Applied ML & GenAI', value: '3+ yrs', description: 'Multimodal, VLM, and GenAI initiatives across academia and startups.' },
      { label: 'ML Solutions Delivered', value: '10+', description: 'Production-grade projects spanning healthcare diagnostics and SaaS analytics.' },
      { label: 'Data Pipelines', value: '25K+/day', description: 'E-commerce ingestion and analytics infra powering executive decision-making.' },
      { label: 'Awards', value: '2 honors', description: 'NAMU GRAD Award + Smart India Hackathon (Runner-up).' },
    ],
    contact: {
      phone: '+1 6027969650',
      email: 'kthakur9@asu.edu',
      linkedin: 'https://www.linkedin.com/in/kuntalthakur01official/',
      github: 'https://github.com/Kuntalthakur01',
      location: 'Tempe, AZ, USA',
    },
    education: [
      {
        degree: 'Master of Science in Data Science, Analytics and Engineering (MS Thesis)',
        school: 'Arizona State University',
        location: 'Tempe, AZ',
        graduation: 'Spring 2026',
        gpa: '3.61',
        coursework: [
          'Data Science System Decision Analytics',
          'Data Mining',
          'Data Processing at Scale',
          'Statistics for Data Analytics',
          'Information Assurance and Security',
          'Computing Data-Driven Optimization',
        ],
      },
      {
        degree: 'Bachelor of Technology in Artificial Intelligence and Data Science',
        school: 'University of Mumbai - Shah & Anchor Kutchhi Engineering College',
        location: 'Mumbai, MH',
        graduation: 'May 2024',
        gpa: '9.0',
        coursework: [
          'Machine Learning',
          'Deep Learning',
          'Advanced AI Algorithms',
          'Natural Language Processing',
          'Social Media Analytics',
          'Data Structures and Algorithms',
          'Python',
          'Java',
        ],
      },
    ],
    publications: [
      {
        title: 'AI Mock Interviewer: Preparing You Towards Smarter Interview Practice',
        authors: 'Thakur, K. et al.',
        venue: 'International Journal of Scientific Research in Engineering and Management (IJSREM)',
        year: '2024',
      },
    ],
    research: [
      {
        title: 'Graduate Services Assistant',
        organization: 'Impact Lab @ ASU',
        location: 'Tempe, AZ',
        period: 'May 2025 - Present',
        achievements: [
          'Fine-tuned MedGemma-4B for diabetic retinopathy classification, outperforming baselines by 10% while optimizing for GPU efficiency.',
          'Led a research pod of four across single and multi-domain generalization studies, aligning deliverables with publication timelines.',
          'Co-authored two conference submissions focused on multimodal diagnostics and scientific question answering.',
          'Unified computer vision and NLU workflows to produce actionable diagnostics for clinicians.',
        ],
      },
      {
        title: 'Research Volunteer',
        organization: 'Impact Lab @ ASU',
        location: 'Tempe, AZ',
        period: 'Spring 2025',
        achievements: [
          'Benchmarked VLMs (CLIP, MedCLIP, BiomedCLIP, Grounding DINO, InstructBLIP) for diabetic retinopathy and medical Q&A.',
          'Designed a GPT-4o, Claude, and Gemini-based pipeline for multimodal feature extraction and severity grading.',
          'Scaled ViT training across distributed NVIDIA RTX 6000 GPUs to achieve consistent single- and multi-domain generalization.',
        ],
      },
    ],
    experience: [
      {
        title: 'Data Science Intern',
        company: 'HypeHive Digital Pvt. Ltd',
        location: 'Mumbai, MH',
        period: 'Apr 2023 – Sep 2023',
        achievements: [
          'Architected a production web-scraping mesh (Selenium + Puppeteer) processing 25K+ e-commerce reviews per day across brands.',
          'Built NLP-driven sentiment pipelines that reduced manual review time by 40% and improved executive dashboards adoption.',
          'Partnered with leadership to curate KPIs and auto-generated narratives for CX and growth teams.',
          'Containerized and deployed ML APIs on AWS with >99% uptime and automated health checks.',
        ],
      },
      {
        title: 'Front-End Developer Intern',
        company: 'DotMinds LLP',
        location: 'Mumbai, MH',
        period: 'Mar 2022 – Aug 2022',
        achievements: [
          'Developed responsive React experiences that cut onboarding friction for enterprise clients.',
          'Trained ensemble fraud detection models (XGBoost + autoencoders) reaching 95% precision in production.',
          'Automated customer support workflows, boosting SLA adherence by 25%.',
        ],
      },
    ],
    skills: {
      programming: ['Python', 'R', 'SQL', 'Docker', 'Spark', 'Hadoop', 'Selenium', 'Puppeteer'],
      ml: ['Large Language Models (LLaMA 3.1, GPT-4o, Claude, Gemini)', 'Computer Vision (CNNs, ViT, YOLO)', 'Multimodal Models (CLIP, InstructBLIP, MedCLIP)', 'MLOps & Evaluation'],
      cloud: ['AWS (S3, DynamoDB, SageMaker, EC2)', 'Elasticsearch', 'FAISS', 'Docker', 'MobaXterm'],
      research: ['Statistical Modeling', 'Experimental Design', 'Data Visualization', 'A/B Testing', 'Scientific Writing'],
    },
    projects: [
      {
        title: 'Traitlytics · LLM-powered Personality Insights',
        period: 'Spring 2025',
        description: [
          'Shipped a Chrome extension (Meta LLaMA 3.1 7B) translating LinkedIn signals into DISC personality traits for recruiters.',
          'Engineered Puppeteer-based scraping with rotating proxies and session management to comply with platform controls.',
          'Built a 500-profile labeled dataset and benchmarked agreement using Cohen’s Kappa to validate LLM predictions.',
        ],
      },
      {
        title: 'ArXiv Recommendations · RAG Platform',
        period: 'Fall 2024',
        description: [
          'Designed a Retrieval-Augmented Generation workflow combining FAISS, Elasticsearch, and AWS serverless components.',
          'Automated ingestion of 3K+ CS domain papers via the arXiv API to power semantic search and personalized highlights.',
        ],
      },
      {
        title: 'Lacuna Malaria Detection · Computer Vision',
        period: 'Fall 2024',
        description: [
          'Built an ensemble CV system for microscopic cell classification with 94% accuracy and interpretable bounding boxes.',
          'Implemented augmentation, ensemble voting, and Grad-CAM style explainability for lab adoption.',
        ],
      },
      {
        title: 'SKILL-ASSESS · Interview Intelligence',
        period: 'Jun 2023 – May 2024',
        description: [
          'Developed an AI interviewer leveraging Google PaLM (540B) to provide personalized prep plans.',
          'Integrated real-time emotion + body-language cues to coach candidates on executive presence.',
        ],
      },
    ],
    awards: [
      { title: 'NAMU GRAD Award', period: '2024 – 2025' },
      {
        title: 'Smart India Hackathon (Runner-up)',
        description: 'Recognized for an AI-powered Specific Learning Disability detection platform with measurable social impact.',
      },
    ],
  };

  const handleDownload = () => {
    const resumeText = `KUNTAL THAKUR

Contact: ${resumeData.contact.phone} | ${resumeData.contact.email}
${resumeData.contact.linkedin} | ${resumeData.contact.github}

SUMMARY
${resumeData.summary}

EDUCATION
${resumeData.education
      .map(
        (edu) =>
          `${edu.degree}
${edu.school}, ${edu.location} | ${edu.graduation} | GPA: ${edu.gpa}
Coursework: ${edu.coursework.join(', ')}`,
      )
      .join('\n\n')}

RESEARCH EXPERIENCE
${resumeData.research
      .map(
        (exp) =>
          `${exp.title} | ${exp.period}
${exp.organization}, ${exp.location}
${exp.achievements?.map((a) => `- ${a}`).join('\n')}`,
      )
      .join('\n\n')}

PROFESSIONAL EXPERIENCE
${resumeData.experience
      .map(
        (exp) =>
          `${exp.title} | ${exp.period}
${exp.company}, ${exp.location}
${exp.achievements?.map((a) => `- ${a}`).join('\n')}`,
      )
      .join('\n\n')}

SKILLS
Programming & Data Engineering: ${resumeData.skills.programming.join(', ')}
Machine Learning & AI: ${resumeData.skills.ml.join(', ')}
Cloud & Infrastructure: ${resumeData.skills.cloud.join(', ')}
Research & Analytics: ${resumeData.skills.research.join(', ')}

PROJECTS
${resumeData.projects
      .map((proj) => `${proj.title} | ${proj.period}
${proj.description?.map((d) => `- ${d}`).join('\n')}`)
      .join('\n\n')}

AWARDS & PUBLICATIONS
${resumeData.publications.map((pub) => `${pub.authors} (${pub.year}). "${pub.title}" ${pub.venue}`).join('\n')}
${resumeData.awards.map((award) => `${award.title}${award.period ? ` | ${award.period}` : ''}`).join('\n')}`;

    const blob = new Blob([resumeText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Kuntal_Thakur_Resume.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const contactItems = [
    { label: 'Email', value: resumeData.contact.email, href: `mailto:${resumeData.contact.email}`, icon: Mail },
    { label: 'Phone', value: resumeData.contact.phone, href: `tel:${resumeData.contact.phone}`, icon: Phone },
    { label: 'Location', value: resumeData.contact.location, icon: MapPin },
    { label: 'LinkedIn', value: 'linkedin.com/in/kuntalthakur01official', href: resumeData.contact.linkedin, icon: Linkedin },
    { label: 'GitHub', value: 'github.com/Kuntalthakur01', href: resumeData.contact.github, icon: Github },
  ];

  const skillLabels: Record<keyof typeof resumeData.skills, string> = {
    programming: 'Programming & Data Engineering',
    ml: 'Machine Learning & AI',
    cloud: 'Cloud & Infrastructure',
    research: 'Research & Analytics',
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 relative overflow-hidden" id="resume">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        <div className="text-center mb-16">
          <p className="uppercase tracking-[0.3em] text-xs text-cyan-300/70 mb-3">Resume</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 holographic-text sharp-text">Professional Snapshot</h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">{resumeData.summary}</p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <button
              onClick={handleDownload}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold hover:translate-y-[-2px] transition-all duration-300 shadow-lg shadow-cyan-900/40"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </button>
            <a
              href="mailto:kthakur9@asu.edu"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-cyan-400/60 text-cyan-200 font-semibold hover:bg-slate-800/80 transition-all duration-300"
            >
              <Mail className="w-4 h-4" />
              Schedule an Intro Call
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="space-y-6">
            <SectionCard>
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <Brain className="w-5 h-5 text-cyan-400" />
                Key Highlights
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {resumeData.highlights.map((highlight) => (
                  <div key={highlight.label} className="p-3 rounded-xl bg-slate-900/60 border border-blue-900/40">
                    <p className="text-2xl font-bold text-white">{highlight.value}</p>
                    <p className="text-sm text-cyan-300 mt-1">{highlight.label}</p>
                    <p className="text-xs text-gray-400 mt-2">{highlight.description}</p>
                  </div>
                ))}
              </div>
            </SectionCard>

            <SectionCard>
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <Mail className="w-5 h-5 text-cyan-400" />
                Availability
              </h3>
              <div className="space-y-4">
                {contactItems.map(({ label, value, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target={href?.startsWith('http') ? '_blank' : undefined}
                    rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-start gap-3 text-gray-300 hover:text-white transition-colors"
                  >
                    <Icon className="w-4 h-4 text-cyan-400 mt-1" />
                    <div>
                      <p className="text-xs uppercase tracking-wider text-gray-400">{label}</p>
                      <p className="font-medium">{value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </SectionCard>

            <SectionCard>
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <Code className="w-5 h-5 text-cyan-400" />
                Core Tools & Methods
              </h3>
              <div className="space-y-5">
                {(Object.keys(resumeData.skills) as Array<keyof typeof resumeData.skills>).map((key) => (
                  <div key={key}>
                    <p className="text-xs uppercase tracking-widest text-gray-400">{skillLabels[key]}</p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {resumeData.skills[key].map((skill) => (
                        <Pill key={skill}>{skill}</Pill>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </SectionCard>

            <SectionCard>
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-cyan-400" />
                Publications & Awards
              </h3>
              <div className="space-y-5">
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">Publication</p>
                  {resumeData.publications.map((pub) => (
                    <div key={pub.title}>
                      <p className="text-sm text-white font-medium">{pub.title}</p>
                      <p className="text-xs text-gray-400">
                        {pub.authors} · {pub.venue} ({pub.year})
                      </p>
                    </div>
                  ))}
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">Recognition</p>
                  <ul className="space-y-3 text-sm text-gray-300">
                    {resumeData.awards.map((award) => (
                      <li key={award.title}>
                        <p className="text-white font-medium">{award.title}</p>
                        {award.period && <p className="text-xs text-gray-400">{award.period}</p>}
                        {award.description && <p className="text-xs text-gray-400 mt-1">{award.description}</p>}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </SectionCard>
          </div>

          <div className="lg:col-span-2 space-y-8">
            <TimelineSection title="Research Experience" icon={Brain} items={resumeData.research} />
            <TimelineSection title="Professional Experience" icon={Briefcase} items={resumeData.experience} />
            <TimelineSection title="Education" icon={GraduationCap} items={resumeData.education} />

            <SectionCard>
              <div className="flex items-center gap-3 mb-6">
                <Cloud className="w-6 h-6 text-cyan-400" />
                <h3 className="text-2xl font-semibold text-white">Select Projects</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {resumeData.projects.map((project) => (
                  <div key={project.title} className="rounded-xl border border-blue-900/40 bg-slate-900/50 p-4">
                    <div className="flex items-start justify-between gap-3">
                      <h4 className="text-lg font-semibold text-white">{project.title}</h4>
                      <span className="text-xs text-gray-400">{project.period}</span>
                    </div>
                    <ul className="mt-3 space-y-2 text-sm text-gray-300 list-disc list-inside">
                      {project.description.map((desc, idx) => (
                        <li key={idx}>{desc}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </SectionCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
