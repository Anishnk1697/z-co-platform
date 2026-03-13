import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, CheckCircle2 } from 'lucide-react';

interface Props {
    isOpen: boolean;
    onClose: () => void;
}

const PROJECTS = [
    'Beaconshire Road',
    'Oak Hollow',
    'Dove Trails',
    'Towne Center',
    'Shops at Fry Road',
    'Everson Building',
    'Elite Medical',
    'Wellness Center',
    'Trace Drive',
    'Wildwood Drive',
    'Urban Retreat',
    'Urban Retreat Studio',
    'I am interested in all current projects',
    'Other / General Inquiry',
];

export default function RequestPacketModal({ isOpen, onClose }: Props) {
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        project: '',
        investorType: '',
        message: '',
    });

    // Close on Escape key
    useEffect(() => {
        const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
        window.addEventListener('keydown', handler);
        return () => window.removeEventListener('keydown', handler);
    }, [onClose]);

    // Prevent body scroll when modal open
    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [isOpen]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');
        setTimeout(() => setStatus('success'), 1500);
    };

    const handleClose = () => {
        onClose();
        setTimeout(() => { setStatus('idle'); setForm({ name: '', email: '', phone: '', company: '', project: '', investorType: '', message: '' }); }, 400);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm"
                        onClick={handleClose}
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 24 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 24 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="fixed inset-0 z-[101] flex items-center justify-center p-4"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[#0b0f1a] border border-slate-800 rounded-[2.5rem] shadow-2xl">
                            {/* Close button */}
                            <button
                                onClick={handleClose}
                                className="absolute top-6 right-6 z-10 h-10 w-10 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-slate-400 hover:text-white transition-all"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            <div className="p-10 md:p-14">
                                {status === 'success' ? (
                                    <motion.div
                                        initial={{ opacity: 0, y: 16 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="flex flex-col items-center text-center py-8 gap-6"
                                    >
                                        <div className="h-20 w-20 rounded-full bg-slate-800 flex items-center justify-center">
                                            <CheckCircle2 className="w-10 h-10 text-green-400" />
                                        </div>
                                        <div>
                                            <h2 className="text-3xl font-bold text-white mb-3">Request Received</h2>
                                            <p className="text-slate-400 text-lg leading-relaxed">
                                                Thank you, <span className="text-white font-semibold">{form.name}</span>. Our team will review your request and be in touch shortly.
                                            </p>
                                        </div>
                                        <button
                                            onClick={handleClose}
                                            className="mt-4 px-8 py-3.5 rounded-full bg-slate-800 hover:bg-slate-700 text-white font-bold uppercase tracking-widest text-xs transition-all"
                                        >
                                            Close
                                        </button>
                                    </motion.div>
                                ) : (
                                    <>
                                        <div className="mb-10">
                                            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-3">Request a Packet</h2>
                                            <p className="text-slate-400 text-base leading-relaxed">
                                                Fill out the form below and our team will send you detailed information on your selected project.
                                            </p>
                                        </div>

                                        <form onSubmit={handleSubmit} className="space-y-5">
                                            {/* Name + Email */}
                                            <div className="grid sm:grid-cols-2 gap-5">
                                                <div className="flex flex-col gap-2">
                                                    <label className="text-xs font-semibold text-slate-500 uppercase tracking-widest">Full Name *</label>
                                                    <input
                                                        required
                                                        type="text"
                                                        value={form.name}
                                                        onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                                                        placeholder="John Smith"
                                                        className="bg-slate-900 border border-slate-700 rounded-xl px-4 py-3.5 text-sm text-white placeholder-slate-600 focus:ring-2 focus:ring-slate-500/50 focus:border-slate-600 outline-none transition-all"
                                                    />
                                                </div>
                                                <div className="flex flex-col gap-2">
                                                    <label className="text-xs font-semibold text-slate-500 uppercase tracking-widest">Email *</label>
                                                    <input
                                                        required
                                                        type="email"
                                                        value={form.email}
                                                        onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                                                        placeholder="john@example.com"
                                                        className="bg-slate-900 border border-slate-700 rounded-xl px-4 py-3.5 text-sm text-white placeholder-slate-600 focus:ring-2 focus:ring-slate-500/50 focus:border-slate-600 outline-none transition-all"
                                                    />
                                                </div>
                                            </div>

                                            {/* Phone + Company */}
                                            <div className="grid sm:grid-cols-2 gap-5">
                                                <div className="flex flex-col gap-2">
                                                    <label className="text-xs font-semibold text-slate-500 uppercase tracking-widest">Phone</label>
                                                    <input
                                                        type="tel"
                                                        value={form.phone}
                                                        onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                                                        placeholder="+1 (555) 000-0000"
                                                        className="bg-slate-900 border border-slate-700 rounded-xl px-4 py-3.5 text-sm text-white placeholder-slate-600 focus:ring-2 focus:ring-slate-500/50 focus:border-slate-600 outline-none transition-all"
                                                    />
                                                </div>
                                                <div className="flex flex-col gap-2">
                                                    <label className="text-xs font-semibold text-slate-500 uppercase tracking-widest">Company / Organization</label>
                                                    <input
                                                        type="text"
                                                        value={form.company}
                                                        onChange={e => setForm(f => ({ ...f, company: e.target.value }))}
                                                        placeholder="Your Firm"
                                                        className="bg-slate-900 border border-slate-700 rounded-xl px-4 py-3.5 text-sm text-white placeholder-slate-600 focus:ring-2 focus:ring-slate-500/50 focus:border-slate-600 outline-none transition-all"
                                                    />
                                                </div>
                                            </div>

                                            {/* Project Select */}
                                            <div className="flex flex-col gap-2">
                                                <label className="text-xs font-semibold text-slate-500 uppercase tracking-widest">Project of Interest *</label>
                                                <select
                                                    required
                                                    value={form.project}
                                                    onChange={e => setForm(f => ({ ...f, project: e.target.value }))}
                                                    className="bg-slate-900 border border-slate-700 rounded-xl px-4 py-3.5 text-sm text-white focus:ring-2 focus:ring-slate-500/50 focus:border-slate-600 outline-none transition-all appearance-none"
                                                >
                                                    <option value="" className="text-slate-600">Select a project…</option>
                                                    {PROJECTS.map(p => (
                                                        <option key={p} value={p}>{p}</option>
                                                    ))}
                                                </select>
                                            </div>

                                            {/* Investor Type */}
                                            <div className="flex flex-col gap-2">
                                                <label className="text-xs font-semibold text-slate-500 uppercase tracking-widest">I am a…</label>
                                                <select
                                                    value={form.investorType}
                                                    onChange={e => setForm(f => ({ ...f, investorType: e.target.value }))}
                                                    className="bg-slate-900 border border-slate-700 rounded-xl px-4 py-3.5 text-sm text-white focus:ring-2 focus:ring-slate-500/50 focus:border-slate-600 outline-none transition-all appearance-none"
                                                >
                                                    <option value="">Select…</option>
                                                    <option value="Individual Investor">Individual Investor</option>
                                                    <option value="Institutional Investor">Institutional Investor</option>
                                                    <option value="Family Office">Family Office</option>
                                                    <option value="Strategic Partner">Strategic Partner</option>
                                                    <option value="Broker / Advisor">Broker / Advisor</option>
                                                    <option value="Other">Other</option>
                                                </select>
                                            </div>

                                            {/* Message */}
                                            <div className="flex flex-col gap-2">
                                                <label className="text-xs font-semibold text-slate-500 uppercase tracking-widest">Additional Notes</label>
                                                <textarea
                                                    rows={3}
                                                    value={form.message}
                                                    onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                                                    placeholder="Any specific questions or context you'd like to share…"
                                                    className="bg-slate-900 border border-slate-700 rounded-xl px-4 py-3.5 text-sm text-white placeholder-slate-600 focus:ring-2 focus:ring-slate-500/50 focus:border-slate-600 outline-none transition-all resize-none"
                                                />
                                            </div>

                                            <button
                                                type="submit"
                                                disabled={status === 'submitting'}
                                                className="w-full flex items-center justify-center gap-2 bg-slate-950 hover:bg-slate-800 border border-slate-700 text-white font-bold uppercase tracking-widest text-xs px-8 py-4 rounded-full transition-all hover:scale-[1.02] active:scale-100 disabled:opacity-50 shadow-lg shadow-black/40 mt-2"
                                            >
                                                {status === 'submitting' ? 'Sending…' : 'Submit Request'}
                                                {status !== 'submitting' && <ArrowRight className="w-4 h-4" />}
                                            </button>
                                        </form>
                                    </>
                                )}
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
