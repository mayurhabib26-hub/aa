import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, CheckCircle2, Instagram, Mail, MapPin, Phone } from 'lucide-react';
import { ContactFormData } from '../../types';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    projectType: 'Residential',
    location: '',
    approxArea: '',
    budget: '',
    timeline: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const projectTypes = [
    'Residential',
    'Villa',
    'Apartment',
    'Office',
    'Commercial',
    'Renovation',
    'Other',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 900);
  };

  return (
    <div className="pt-28 bg-[#F2F1ED] text-[#181818] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24">
        {/* Header */}
        <div className="max-w-4xl mb-20">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-2.5 h-2.5 bg-[#181818]" />
            <span className="font-mono text-xs tracking-[0.3em] text-[#8A8A86] uppercase">
              COMMISSIONS & INQUIRIES
            </span>
          </div>

          <h1 className="font-sans font-medium text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[0.95] text-[#181818] uppercase">
            LET'S CREATE<br />
            SOMETHING<br />
            <span className="font-serif italic font-normal lowercase text-[1.15em] text-[#3B3B3B]">
              exceptional.
            </span>
          </h1>

          <p className="font-sans text-base md:text-lg text-[#3B3B3B] max-w-2xl leading-relaxed pt-6">
            We are currently accepting select residential and commercial projects for
            2026/2027. Share your spatial vision below to initiate dialogue.
          </p>
        </div>

        {/* Two Columns: Form & Studio Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Form Column */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-[#181818] text-[#F2F1ED] p-10 md:p-14 border border-[#292929] space-y-6"
                >
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-[#B5A48B]">
                    <CheckCircle2 size={28} />
                  </div>
                  <h2 className="font-sans text-3xl font-medium tracking-tight text-white uppercase">
                    Inquiry Received.
                  </h2>
                  <p className="font-sans text-sm text-[#B6B6B2] leading-relaxed max-w-lg">
                    Thank you for considering AA Designo,{' '}
                    <span className="text-white font-medium">{formData.name}</span>.
                    Our principal architect will review your brief and contact you
                    within 48 hours for an initial consultation.
                  </p>

                  <div className="pt-6 border-t border-[#292929] flex flex-wrap gap-4 text-xs font-mono text-[#8A8A86]">
                    <span>PROJECT: {formData.projectType.toUpperCase()}</span>
                    <span>•</span>
                    <span>LOCATION: {formData.location || 'BANGALORE'}</span>
                  </div>

                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        projectType: 'Residential',
                        location: '',
                        approxArea: '',
                        budget: '',
                        timeline: '',
                        message: '',
                      });
                    }}
                    className="mt-6 text-xs font-sans tracking-widest uppercase text-white underline underline-offset-4 hover:text-[#B5A48B]"
                  >
                    SUBMIT ANOTHER BRIEF
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-10">
                  {/* Project Type Selection Pills */}
                  <div>
                    <label className="font-mono text-xs tracking-widest text-[#8A8A86] uppercase block mb-3">
                      PROJECT TYPOLOGY *
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {projectTypes.map((type) => (
                        <button
                          type="button"
                          key={type}
                          onClick={() => setFormData({ ...formData, projectType: type })}
                          className={`px-4 py-2 rounded-full text-xs font-sans tracking-wider uppercase transition-all ${
                            formData.projectType === type
                              ? 'bg-[#181818] text-white font-medium'
                              : 'bg-white border border-[#8A8A86]/30 text-[#3B3B3B] hover:border-[#181818]'
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Primary Info: Name, Email, Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="relative">
                      <label className="font-mono text-[11px] tracking-widest text-[#8A8A86] uppercase block mb-1">
                        YOUR FULL NAME *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Vikram Singhania"
                        className="w-full bg-transparent border-b border-[#8A8A86]/40 py-2.5 text-sm font-sans text-[#181818] focus:border-[#181818] focus:outline-none placeholder:text-[#8A8A86]/40"
                      />
                    </div>

                    <div className="relative">
                      <label className="font-mono text-[11px] tracking-widest text-[#8A8A86] uppercase block mb-1">
                        EMAIL ADDRESS *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="vikram@domain.com"
                        className="w-full bg-transparent border-b border-[#8A8A86]/40 py-2.5 text-sm font-sans text-[#181818] focus:border-[#181818] focus:outline-none placeholder:text-[#8A8A86]/40"
                      />
                    </div>

                    <div className="relative">
                      <label className="font-mono text-[11px] tracking-widest text-[#8A8A86] uppercase block mb-1">
                        PHONE NUMBER *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full bg-transparent border-b border-[#8A8A86]/40 py-2.5 text-sm font-sans text-[#181818] focus:border-[#181818] focus:outline-none placeholder:text-[#8A8A86]/40"
                      />
                    </div>

                    <div className="relative">
                      <label className="font-mono text-[11px] tracking-widest text-[#8A8A86] uppercase block mb-1">
                        PROPERTY LOCATION
                      </label>
                      <input
                        type="text"
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        placeholder="Indiranagar, Bangalore"
                        className="w-full bg-transparent border-b border-[#8A8A86]/40 py-2.5 text-sm font-sans text-[#181818] focus:border-[#181818] focus:outline-none placeholder:text-[#8A8A86]/40"
                      />
                    </div>
                  </div>

                  {/* Project Parameters: Area, Budget, Timeline */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                    <div>
                      <label className="font-mono text-[11px] tracking-widest text-[#8A8A86] uppercase block mb-1">
                        APPROX. AREA
                      </label>
                      <input
                        type="text"
                        value={formData.approxArea}
                        onChange={(e) => setFormData({ ...formData, approxArea: e.target.value })}
                        placeholder="e.g. 4,500 SQ FT"
                        className="w-full bg-transparent border-b border-[#8A8A86]/40 py-2.5 text-sm font-sans text-[#181818] focus:border-[#181818] focus:outline-none placeholder:text-[#8A8A86]/40"
                      />
                    </div>

                    <div>
                      <label className="font-mono text-[11px] tracking-widest text-[#8A8A86] uppercase block mb-1">
                        ESTIMATED BUDGET
                      </label>
                      <input
                        type="text"
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        placeholder="e.g. ₹50L - ₹1.5 Cr+"
                        className="w-full bg-transparent border-b border-[#8A8A86]/40 py-2.5 text-sm font-sans text-[#181818] focus:border-[#181818] focus:outline-none placeholder:text-[#8A8A86]/40"
                      />
                    </div>

                    <div>
                      <label className="font-mono text-[11px] tracking-widest text-[#8A8A86] uppercase block mb-1">
                        EXPECTED TIMELINE
                      </label>
                      <input
                        type="text"
                        value={formData.timeline}
                        onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                        placeholder="Immediate / Q3 2026"
                        className="w-full bg-transparent border-b border-[#8A8A86]/40 py-2.5 text-sm font-sans text-[#181818] focus:border-[#181818] focus:outline-none placeholder:text-[#8A8A86]/40"
                      />
                    </div>
                  </div>

                  {/* Message / Brief */}
                  <div>
                    <label className="font-mono text-[11px] tracking-widest text-[#8A8A86] uppercase block mb-1">
                      PROJECT DESCRIPTION & ASPIRATIONS
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share details about the site, lifestyle requirements, architectural vision, or specific finishes..."
                      className="w-full bg-transparent border-b border-[#8A8A86]/40 py-2.5 text-sm font-sans text-[#181818] focus:border-[#181818] focus:outline-none placeholder:text-[#8A8A86]/40 resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group inline-flex items-center gap-3 bg-[#181818] text-[#F2F1ED] hover:bg-[#292929] px-8 py-4 rounded-full text-xs font-sans tracking-[0.25em] uppercase font-semibold transition-all duration-300 shadow-lg disabled:opacity-50"
                    >
                      <span>{isSubmitting ? 'PROCESSING ENQUIRY...' : 'SUBMIT PROJECT ENQUIRY'}</span>
                      <ArrowUpRight
                        size={16}
                        className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                      />
                    </button>
                  </div>
                </form>
              )}
            </AnimatePresence>
          </div>

          {/* Right Sidebar: Direct Details & Instagram */}
          <div className="lg:col-span-4 bg-white p-8 sm:p-10 border border-[#8A8A86]/20 space-y-10">
            <div>
              <span className="font-mono text-xs tracking-widest text-[#8A8A86] uppercase block mb-2">
                DIRECT CHANNELS
              </span>
              <h2 className="font-sans text-xl font-medium text-[#181818]">
                Bangalore Atelier
              </h2>
            </div>

            <div className="space-y-6 text-sm font-sans text-[#3B3B3B]">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-[#181818] mt-0.5 flex-shrink-0" />
                <div>
                  <strong className="text-[#181818] block text-xs font-mono uppercase tracking-wider mb-1">
                    STUDIO ADDRESS
                  </strong>
                  <p className="leading-relaxed">
                    AA DESIGNO STUDIO<br />
                    14 Indiranagar 100ft Road,<br />
                    Bangalore, Karnataka 560038
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail size={18} className="text-[#181818] mt-0.5 flex-shrink-0" />
                <div>
                  <strong className="text-[#181818] block text-xs font-mono uppercase tracking-wider mb-1">
                    EMAIL
                  </strong>
                  <a
                    href="mailto:contact@aadesigno.com"
                    className="hover:text-[#B5A48B] transition-colors"
                  >
                    contact@aadesigno.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone size={18} className="text-[#181818] mt-0.5 flex-shrink-0" />
                <div>
                  <strong className="text-[#181818] block text-xs font-mono uppercase tracking-wider mb-1">
                    TELEPHONE
                  </strong>
                  <a
                    href="tel:+919876543210"
                    className="hover:text-[#B5A48B] transition-colors"
                  >
                    +91 98765 43210
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-4 border-t border-[#8A8A86]/20">
                <Instagram size={18} className="text-[#181818] mt-0.5 flex-shrink-0" />
                <div>
                  <strong className="text-[#181818] block text-xs font-mono uppercase tracking-wider mb-1">
                    INSTAGRAM
                  </strong>
                  <a
                    href="https://www.instagram.com/aa_designo_/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-[#181818] hover:text-[#B5A48B] transition-colors"
                  >
                    <span>@aa_designo_</span>
                    <ArrowUpRight size={13} />
                  </a>
                </div>
              </div>
            </div>

            <div className="p-4 bg-[#F2F1ED] border border-[#8A8A86]/20 text-xs font-sans text-[#3B3B3B] leading-relaxed">
              <span className="font-mono text-[10px] tracking-widest uppercase text-[#8A8A86] block mb-1">
                STUDIO HOURS
              </span>
              Monday – Friday: 10:00 AM – 7:00 PM<br />
              Saturday: By Prior Appointment Only
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
