import React from 'react';
import { ExternalLink, Newspaper } from 'lucide-react';

type NewsItem = {
  date: string;
  tag?: string;
  title: string;
  summary: string;
  href?: string;
  isNewPaper?: boolean;
};

const newsItems: NewsItem[] = [
  {
    date: 'Jan 2026',
    tag: 'ASU News',
    title: 'Inside a mine’s digital doppelganger',
    summary: 'Featured in ASU Engineering news for research on digital twin systems for mining environments.',
    href: 'https://news.engineering.asu.edu/2026/01/inside-a-mines-digital-doppelganger/',
  },
  {
    date: '2025',
    title: 'MedXAI preprint released on arXiv',
    summary: 'Introduced a retrieval-augmented, self-verifying framework for knowledge-guided medical image analysis.',
    href: 'https://arxiv.org/abs/2512.10098',
    isNewPaper: true,
  },
  {
    date: '2025',
    title: 'Single-domain generalization for diabetic retinopathy',
    summary: 'Proposed a neuro-symbolic learning approach to improve robustness across diverse medical imaging datasets.',
    href: 'https://arxiv.org/abs/2509.02918',
    isNewPaper: true,
  },
];

const News = () => {
  return (
    <section className="relative py-20 bg-slate-900 overflow-hidden" id="news">
      <div className="absolute -top-24 right-10 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl"></div>
      <div className="absolute -bottom-24 left-10 h-72 w-72 rounded-full bg-blue-600/10 blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-slate-900/70">
            <Newspaper className="w-4 h-4 text-cyan-400" />
            <span className="text-xs font-semibold uppercase tracking-widest text-cyan-200">News</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 text-white">Latest Updates</h2>
          <p className="text-gray-300 mt-3 max-w-2xl mx-auto">
            Recent research milestones, releases, and publications.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {newsItems.map((item, index) => (
            <article
              key={`${item.title}-${index}`}
              className="group glass-effect rounded-2xl border border-blue-800/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500"
            >
              <div className="flex items-center justify-between text-xs text-gray-400">
                <div className="flex flex-wrap items-center gap-2">
                  {item.isNewPaper && (
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/40 text-emerald-200 font-semibold">
                      New Paper
                    </span>
                  )}
                  {item.tag && (
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-slate-900/60 border border-blue-900 text-cyan-200 font-semibold">
                      {item.tag}
                    </span>
                  )}
                </div>
                <span className="font-medium">{item.date}</span>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white group-hover:text-cyan-300 transition-colors">
                {item.title}
              </h3>
              <p className="mt-3 text-sm text-gray-400 leading-relaxed">{item.summary}</p>
              {item.href && (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center text-sm text-cyan-300 hover:text-cyan-200 transition-colors"
                >
                  Read more
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
