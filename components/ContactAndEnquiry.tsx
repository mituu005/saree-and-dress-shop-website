'use client'

import React, { useState } from 'react'
import { ArrowUpRight, MessageCircle, MapPin, Clock, Phone, Mail, Sparkles, Check } from 'lucide-react'

export default function ContactAndEnquiry() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    collection: 'Bridal Trousseau',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const encodedWhatsApp = encodeURIComponent(
    `Hello Aarohi Studio, I would like to book a private styling consultation at your Kala Ghoda Atelier or virtually.`
  )

  return (
    <section id="contact" className="bg-[#191614] text-[#f7f4ee] section-pad-luxury relative border-t border-[#c5a880]/15">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Banner Statement */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#c5a880]/30 bg-[#12100e] text-[#e1cba7] text-[10px] uppercase tracking-[0.25em] font-sans-clean mb-4">
            <Sparkles size={11} className="text-[#c5a880]" />
            <span>Private Consultations &amp; Enquiries</span>
          </div>

          <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-[#f7f4ee] tracking-tight">
            YOUR NEXT HEIRLOOM <em className="italic text-[#e1cba7] font-normal">AWAITS.</em>
          </h2>

          <p className="text-sm sm:text-base text-[#ede5d8]/85 font-light mt-3 font-sans-clean">
            Discover a saree that becomes part of your story. Connect with our senior drape stylists for private in-person viewing or worldwide virtual appointments.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
            <a
              href="#collections"
              className="btn-couture-gold"
            >
              <span>Explore Collection</span>
              <ArrowUpRight size={14} />
            </a>

            <a
              href={`https://wa.me/919876543210?text=${encodedWhatsApp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-couture-outline"
            >
              <MessageCircle size={14} className="text-[#c5a880]" />
              <span>Concierge WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Dual Grid: Atelier Info & Clean Contact Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mt-12 bg-[#12100e] p-8 sm:p-12 rounded-3xl border border-white/5 shadow-2xl">
          
          {/* Left Column: Atelier Address & Visit Details */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full">
            <div>
              <span className="text-[10px] uppercase tracking-[0.28em] text-[#c5a880] font-sans-clean block mb-2 font-medium">
                The Mumbai Atelier
              </span>
              <h3 className="font-serif-luxury text-2xl sm:text-3xl text-[#f7f4ee] font-light leading-snug">
                Private Viewing Suite
              </h3>
              <p className="text-xs sm:text-sm text-stone-400 font-light mt-3 leading-relaxed font-sans-clean">
                Experience the collection in the serene ambiance of our heritage quarters in South Mumbai, where each weave is curated specifically to your personal palette and ceremony requirements.
              </p>

              <div className="mt-8 space-y-5 text-xs text-[#ede5d8]/85 font-sans-clean">
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="text-[#c5a880] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white">Aarohi Atelier &amp; Heritage Salon</strong>
                    <span className="text-stone-400">12, Rampart Row, Kala Ghoda, Fort, Mumbai 400001</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock size={18} className="text-[#c5a880] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white">By Prior Appointment</strong>
                    <span className="text-stone-400">Monday — Saturday · 11:00 AM – 7:30 PM IST</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone size={18} className="text-[#c5a880] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white">Concierge Desk</strong>
                    <span className="text-stone-400">+91 98765 43210</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail size={18} className="text-[#c5a880] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white">Client Relations</strong>
                    <span className="text-stone-400">concierge@aarohistudio.in</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 pt-6 border-t border-white/10 text-[11px] text-stone-400 font-sans-clean">
              <span>Worldwide insured air-courier delivery provided with all commissions.</span>
            </div>
          </div>

          {/* Right Column: Clean Luxury Enquiry Form */}
          <div className="lg:col-span-7 bg-[#191614] p-8 sm:p-10 rounded-2xl border border-[#c5a880]/20">
            {submitted ? (
              <div className="text-center py-12 flex flex-col items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-[#c5a880]/15 border border-[#c5a880]/40 flex items-center justify-center text-[#c5a880] mb-4">
                  <Check size={28} />
                </div>
                <h3 className="font-serif-luxury text-2xl sm:text-3xl text-[#f7f4ee] font-light">
                  Thank You for Your Reverence.
                </h3>
                <p className="text-xs sm:text-sm text-stone-300 font-light mt-2 max-w-sm font-sans-clean">
                  Our private atelier director will contact you via WhatsApp and email within 4 hours to arrange your viewing.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-[10px] uppercase tracking-[0.2em] font-sans-clean text-[#c5a880] hover:underline"
                >
                  Send Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="border-b border-white/10 pb-4">
                  <span className="text-[10px] uppercase tracking-[0.24em] text-[#c5a880] font-sans-clean block font-medium">
                    Request Appointment or Drape Details
                  </span>
                  <h4 className="font-serif-luxury text-xl text-[#f7f4ee] font-light mt-0.5">
                    Private Styling Consultation
                  </h4>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <label className="flex flex-col gap-1.5 text-[10px] uppercase tracking-wider text-stone-400 font-sans-clean">
                    <span>Full Name *</span>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Radhika Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-[#12100e] border border-white/15 focus:border-[#c5a880] rounded-xl px-4 py-2.5 text-xs text-white placeholder-stone-600 outline-none transition-colors"
                    />
                  </label>

                  <label className="flex flex-col gap-1.5 text-[10px] uppercase tracking-wider text-stone-400 font-sans-clean">
                    <span>Phone / WhatsApp *</span>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="bg-[#12100e] border border-white/15 focus:border-[#c5a880] rounded-xl px-4 py-2.5 text-xs text-white placeholder-stone-600 outline-none transition-colors"
                    />
                  </label>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <label className="flex flex-col gap-1.5 text-[10px] uppercase tracking-wider text-stone-400 font-sans-clean">
                    <span>Email Address *</span>
                    <input
                      type="email"
                      required
                      placeholder="radhika@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-[#12100e] border border-white/15 focus:border-[#c5a880] rounded-xl px-4 py-2.5 text-xs text-white placeholder-stone-600 outline-none transition-colors"
                    />
                  </label>

                  <label className="flex flex-col gap-1.5 text-[10px] uppercase tracking-wider text-stone-400 font-sans-clean">
                    <span>Collection of Interest</span>
                    <select
                      value={formData.collection}
                      onChange={(e) => setFormData({ ...formData, collection: e.target.value })}
                      className="bg-[#12100e] border border-white/15 focus:border-[#c5a880] rounded-xl px-4 py-2.5 text-xs text-white outline-none transition-colors"
                    >
                      <option value="Bridal Trousseau">Bridal Trousseau</option>
                      <option value="Kanjivaram Silk Heirlooms">Kanjivaram Silk Heirlooms</option>
                      <option value="Banarasi Katan Brocade">Banarasi Katan Brocade</option>
                      <option value="Chanderi & Organza">Chanderi &amp; Organza</option>
                      <option value="Molten Tissue & Metallic Silk">Molten Tissue &amp; Metallic Silk</option>
                      <option value="Private Atelier Styling Session">Private Atelier Styling Session</option>
                    </select>
                  </label>
                </div>

                <label className="flex flex-col gap-1.5 text-[10px] uppercase tracking-wider text-stone-400 font-sans-clean">
                  <span>Occasion / Preferred Palette / Notes</span>
                  <textarea
                    rows={3}
                    placeholder="Tell us about your wedding date, family function, or specific color preferences..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-[#12100e] border border-white/15 focus:border-[#c5a880] rounded-xl p-3.5 text-xs text-white placeholder-stone-600 outline-none transition-colors resize-none"
                  />
                </label>

                <button
                  type="submit"
                  className="bg-[#c5a880] hover:bg-[#d8be96] text-[#12100e] font-semibold py-3 px-6 rounded-full text-xs uppercase tracking-[0.2em] font-sans-clean transition-all shadow-lg flex items-center justify-center gap-2 mt-2"
                >
                  <span>Submit Private Enquiry</span>
                  <ArrowUpRight size={14} />
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  )
}
