import React, { useState } from 'react';
import { Mail, Github, Linkedin, Send, Copy, Check } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [copied, setCopied] = useState(false);
  const [statusNote, setStatusNote] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatusNote('Please complete all fields.');
      return;
    }

    const subject = encodeURIComponent(`Portfolio Message from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    const mailtoUrl = `mailto:${PORTFOLIO_DATA.personal.social.email}?subject=${subject}&body=${body}`;

    window.location.href = mailtoUrl;
    setStatusNote('Opening your email client with pre-filled message...');
  };

  const handleCopyDraft = () => {
    if (!message.trim()) return;
    const fullDraft = `From: ${name} (${email})\n\nMessage:\n${message}`;
    navigator.clipboard.writeText(fullDraft);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-16 md:py-24 border-t border-zinc-800/60 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Let's build something useful.
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-2">
            Have a project idea, collaboration opportunity, or just want to connect?
          </p>
        </div>

        {/* Quick Connection Links */}
        <div className="flex flex-wrap items-center gap-3 mb-10 pb-8 border-b border-zinc-800/80">
          <a
            href={`mailto:${PORTFOLIO_DATA.personal.social.email}`}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-xs font-medium text-zinc-200 hover:text-white transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-red-500" />
            <span>Email</span>
          </a>

          <a
            href={PORTFOLIO_DATA.personal.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-xs font-medium text-zinc-200 hover:text-white transition-colors"
          >
            <Github className="w-3.5 h-3.5 text-zinc-400" />
            <span>GitHub</span>
          </a>

          <a
            href={PORTFOLIO_DATA.personal.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-xs font-medium text-zinc-200 hover:text-white transition-colors"
          >
            <Linkedin className="w-3.5 h-3.5 text-blue-400" />
            <span>LinkedIn</span>
          </a>
        </div>

        {/* Simple Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-4 max-w-xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="contact-name" className="block text-xs font-medium text-zinc-400 mb-1">
                Name
              </label>
              <input
                id="contact-name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className="w-full bg-zinc-950 border border-zinc-800 focus:border-red-500 rounded-lg px-3.5 py-2 text-sm text-zinc-200 outline-none transition-colors"
              />
            </div>

            <div>
              <label htmlFor="contact-email" className="block text-xs font-medium text-zinc-400 mb-1">
                Email
              </label>
              <input
                id="contact-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your.email@example.com"
                className="w-full bg-zinc-950 border border-zinc-800 focus:border-red-500 rounded-lg px-3.5 py-2 text-sm text-zinc-200 outline-none transition-colors"
              />
            </div>
          </div>

          <div>
            <label htmlFor="contact-message" className="block text-xs font-medium text-zinc-400 mb-1">
              Message
            </label>
            <textarea
              id="contact-message"
              required
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="What would you like to build or discuss?"
              className="w-full bg-zinc-950 border border-zinc-800 focus:border-red-500 rounded-lg px-3.5 py-2 text-sm text-zinc-200 outline-none transition-colors resize-y"
            />
          </div>

          {statusNote && (
            <div className="p-2.5 rounded bg-zinc-900 border border-zinc-800 text-xs text-zinc-300">
              {statusNote}
            </div>
          )}

          <div className="flex items-center gap-3 pt-1">
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-5 py-2 text-xs font-semibold text-white bg-red-600 hover:bg-red-500 rounded-lg transition-colors"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Send Message</span>
            </button>

            {message.trim() && (
              <button
                type="button"
                onClick={handleCopyDraft}
                className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-zinc-300 hover:text-white bg-zinc-900 border border-zinc-800 rounded-lg transition-colors"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied' : 'Copy Draft'}</span>
              </button>
            )}
          </div>
        </form>

      </div>
    </section>
  );
};
