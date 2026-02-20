import React, { useState } from 'react';
import { Mail, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<{ type: 'idle' | 'success' | 'error'; message: string }>({
    type: 'idle',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const trimmedName = formData.name.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedMessage = formData.message.trim();
    const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail);

    if (!trimmedName || !trimmedEmail || !trimmedMessage) {
      setStatus({ type: 'error', message: 'Please fill out all fields before sending.' });
      return;
    }

    if (!emailIsValid) {
      setStatus({ type: 'error', message: 'Enter a valid email so I can reply.' });
      return;
    }

    const mailto = `mailto:kthakur9@asu.edu?subject=${encodeURIComponent(
      `Portfolio inquiry from ${trimmedName}`
    )}&body=${encodeURIComponent(`Name: ${trimmedName}\nEmail: ${trimmedEmail}\n\n${trimmedMessage}`)}`;

    window.location.href = mailto;
    setStatus({ type: 'success', message: 'Opening your email client. If nothing happens, email me directly at kthakur9@asu.edu.' });
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (status.type !== 'idle') {
      setStatus({ type: 'idle', message: '' });
    }
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-20 bg-gray-900 overflow-hidden" id="contact">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 holographic-text">Get In Touch</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 perspective-2000">
          <div className="space-y-6">
            {[
              { Icon: Mail, title: "Email", value: "kthakur9@asu.edu" },
              { Icon: MapPin, title: "Location", value: "Tempe, AZ, US" }
            ].map(({ Icon, title, value }) => (
              <div key={title} className="flex items-start space-x-4 p-4 glass-effect rounded-lg border border-blue-700 hover:border-cyan-500 transition-all duration-300 neon-border">
                <Icon className="w-6 h-6 text-cyan-400 depth-layer-2" />
                <div>
                  <h3 className="font-semibold depth-layer-1 text-white">{title}</h3>
                  <p className="text-gray-300 depth-layer-1">{value}</p>
                </div>
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 p-6 glass-effect rounded-xl border border-blue-700 neon-border text-center">
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full px-4 py-2 glass-effect border border-blue-700 rounded-lg focus:outline-none focus:border-cyan-500 focus-visible:ring-2 focus-visible:ring-cyan-500 text-white placeholder-gray-400 transition-all duration-300 btn-3d neon-glow"
                required
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full px-4 py-2 glass-effect border border-blue-700 rounded-lg focus:outline-none focus:border-cyan-500 focus-visible:ring-2 focus-visible:ring-cyan-500 text-white placeholder-gray-400 transition-all duration-300 btn-3d neon-glow"
                required
              />
            </div>
            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows={4}
                className="w-full px-4 py-2 glass-effect border border-blue-700 rounded-lg focus:outline-none focus:border-cyan-500 focus-visible:ring-2 focus-visible:ring-cyan-500 text-white placeholder-gray-400 transition-all duration-300 resize-none btn-3d neon-glow"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full glass-effect text-white py-3 px-4 rounded-lg hover:bg-slate-700 transition-all duration-300 neon-border flex items-center justify-center space-x-2 group font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
            >
              <span className="sharp-text tracking-wide">Send Message</span>
              <Send className="w-4 h-4 transform group-hover:translate-x-1 transition-all duration-300" />
            </button>

            {status.message && (
              <p
                className={`text-sm ${status.type === 'error' ? 'text-rose-300' : 'text-emerald-300'}`}
                role="status"
                aria-live="polite"
              >
                {status.message}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
