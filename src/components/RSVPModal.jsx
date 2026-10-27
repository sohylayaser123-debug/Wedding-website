import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, Sparkles, Send, User, Mail, Utensils, Music, MessageSquare } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function RSVPModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    attending: 'yes',
    plusOne: 'no',
    guestName: '',
    dietary: '',
    songRequest: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    // Trigger celebration confetti
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch {
      // fallback
    }
  };

  const resetAndClose = () => {
    onClose();
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        fullName: '',
        email: '',
        attending: 'yes',
        plusOne: 'no',
        guestName: '',
        dietary: '',
        songRequest: '',
        message: ''
      });
    }, 300);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-xl bg-[#fbf9f5] rounded-3xl p-6 sm:p-10 shadow-2xl border border-[#d4af37]/40 my-8 overflow-hidden"
        >
          {/* Close Button */}
          <button
            onClick={resetAndClose}
            className="absolute top-5 right-5 p-2 text-[#6e645e] hover:text-[#5c2028] transition rounded-full hover:bg-[#f4ede2]"
            aria-label="Close RSVP"
          >
            <X className="w-5 h-5" />
          </button>

          {!submitted ? (
            <div>
              <div className="text-center mb-8">
                <span className="text-xs uppercase tracking-[0.3em] text-[#8c6e2d] font-sans font-medium block mb-2">
                  Répondez S'il Vous Plaît
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl text-[#3d2e2b] font-normal">
                  RSVP Confirmation
                </h2>
                <p className="text-xs text-[#6e645e] font-sans mt-2">
                  Kindly respond by 1st July 2027
                </p>
                <div className="w-12 h-0.5 bg-[#d4af37] mx-auto mt-3 rounded-full" />
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-sans uppercase tracking-wider text-[#3d2e2b] font-medium mb-1.5">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3.5 top-3 w-4 h-4 text-[#c6a258]" />
                    <input
                      type="text"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="e.g. Eleanor Vance"
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-[#e6d8c3] focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] outline-none text-sm text-[#3d2e2b] font-sans transition"
                    />
                  </div>
                </div>

                {/* Email Address */}
                <div>
                  <label className="block text-xs font-sans uppercase tracking-wider text-[#3d2e2b] font-medium mb-1.5">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-3 w-4 h-4 text-[#c6a258]" />
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. eleanor@example.com"
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-[#e6d8c3] focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] outline-none text-sm text-[#3d2e2b] font-sans transition"
                    />
                  </div>
                </div>

                {/* Attendance */}
                <div>
                  <label className="block text-xs font-sans uppercase tracking-wider text-[#3d2e2b] font-medium mb-1.5">
                    Will you be attending? *
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setFormData(prev => ({ ...prev, attending: 'yes' }))}
                      className={`py-2.5 px-4 rounded-xl border text-xs font-sans uppercase tracking-wider font-medium transition ${
                        formData.attending === 'yes'
                          ? 'bg-[#5c2028] text-white border-[#5c2028]'
                          : 'bg-white text-[#6e645e] border-[#e6d8c3] hover:border-[#c6a258]'
                      }`}
                    >
                      Joyfully Accept
                    </button>
                    <button
                      type="button"
                      onClick={() => setFormData(prev => ({ ...prev, attending: 'no' }))}
                      className={`py-2.5 px-4 rounded-xl border text-xs font-sans uppercase tracking-wider font-medium transition ${
                        formData.attending === 'no'
                          ? 'bg-[#5c2028] text-white border-[#5c2028]'
                          : 'bg-white text-[#6e645e] border-[#e6d8c3] hover:border-[#c6a258]'
                      }`}
                    >
                      Regretfully Decline
                    </button>
                  </div>
                </div>

                {formData.attending === 'yes' && (
                  <>
                    {/* Plus One */}
                    <div>
                      <label className="block text-xs font-sans uppercase tracking-wider text-[#3d2e2b] font-medium mb-1.5">
                        Bringing a Guest / Plus One?
                      </label>
                      <select
                        name="plusOne"
                        value={formData.plusOne}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#e6d8c3] focus:border-[#d4af37] outline-none text-sm text-[#3d2e2b] font-sans"
                      >
                        <option value="no">Attending Solo</option>
                        <option value="yes">Yes, bringing +1</option>
                      </select>
                    </div>

                    {formData.plusOne === 'yes' && (
                      <div>
                        <label className="block text-xs font-sans uppercase tracking-wider text-[#3d2e2b] font-medium mb-1.5">
                          Guest Full Name
                        </label>
                        <input
                          type="text"
                          name="guestName"
                          value={formData.guestName}
                          onChange={handleChange}
                          placeholder="Guest's name"
                          className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#e6d8c3] focus:border-[#d4af37] outline-none text-sm text-[#3d2e2b] font-sans"
                        />
                      </div>
                    )}

                    {/* Dietary Restrictions */}
                    <div>
                      <label className="block text-xs font-sans uppercase tracking-wider text-[#3d2e2b] font-medium mb-1.5">
                        Dietary Preferences / Restrictions
                      </label>
                      <div className="relative">
                        <Utensils className="absolute left-3.5 top-3 w-4 h-4 text-[#c6a258]" />
                        <input
                          type="text"
                          name="dietary"
                          value={formData.dietary}
                          onChange={handleChange}
                          placeholder="e.g. Vegetarian, Gluten-free, N/A"
                          className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-[#e6d8c3] focus:border-[#d4af37] outline-none text-sm text-[#3d2e2b] font-sans"
                        />
                      </div>
                    </div>

                    {/* Song Request */}
                    <div>
                      <label className="block text-xs font-sans uppercase tracking-wider text-[#3d2e2b] font-medium mb-1.5">
                        Song Request for the Dance Floor
                      </label>
                      <div className="relative">
                        <Music className="absolute left-3.5 top-3 w-4 h-4 text-[#c6a258]" />
                        <input
                          type="text"
                          name="songRequest"
                          value={formData.songRequest}
                          onChange={handleChange}
                          placeholder="Artist & Song Title"
                          className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-[#e6d8c3] focus:border-[#d4af37] outline-none text-sm text-[#3d2e2b] font-sans"
                        />
                      </div>
                    </div>
                  </>
                )}

                {/* Warm Message */}
                <div>
                  <label className="block text-xs font-sans uppercase tracking-wider text-[#3d2e2b] font-medium mb-1.5">
                    Message to the Couple
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3.5 top-3 w-4 h-4 text-[#c6a258]" />
                    <textarea
                      name="message"
                      rows={2}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="A sweet note or wishes..."
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-[#e6d8c3] focus:border-[#d4af37] outline-none text-sm text-[#3d2e2b] font-sans resize-none"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#5c2028] via-[#702932] to-[#5c2028] text-white font-sans text-xs font-medium uppercase tracking-[0.2em] shadow-md hover:shadow-lg transition flex items-center justify-center gap-2 mt-6"
                >
                  <Send className="w-4 h-4" />
                  <span>Send RSVP</span>
                </button>
              </form>
            </div>
          ) : (
            <div className="text-center py-8">
              <div className="w-16 h-16 rounded-full bg-[#f4ede2] border-2 border-[#c6a258] flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-[#5c2028]" />
              </div>

              <h3 className="font-serif text-3xl text-[#3d2e2b] mb-3">
                Thank You, {formData.fullName}!
              </h3>

              <p className="font-sans text-sm text-[#4a3b32] max-w-md mx-auto leading-relaxed mb-6">
                {formData.attending === 'yes'
                  ? "We are delighted that you will join us in Lake Como for our special day! A confirmation email has been sent to " + formData.email
                  : "We are sorry you cannot make it, but thank you for letting us know! Your warm wishes mean the world to us."}
              </p>

              <button
                onClick={resetAndClose}
                className="px-6 py-2.5 rounded-full bg-[#f4ede2] hover:bg-[#5c2028] text-[#5c2028] hover:text-white font-sans text-xs font-medium uppercase tracking-wider transition"
              >
                Close Window
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
