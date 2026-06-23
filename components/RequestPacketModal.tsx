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

const inputClass = "bg-white border border-[rgba(0,0,0,0.12)] px-4 py-3.5 text-sm text-ink placeholder-mid font-light focus:border-gold focus:outline-none transition-all w-full";
const labelClass = "text-[10px] font-normal text-mid uppercase tracking-[0.17em]";

export default function RequestPacketModal({ isOpen, onClose }: Props) {
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
    const [form, setForm] = useState({
        name: '', email: '', phone: '', company: '', project: '', investorType: '', message: '',
    });

    useEffect(() => {
        const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
        window.addEventListener('keydown', handler);
        return () => window.removeEventListener('keydown', handler);
    }, [onClose]);

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
        setTimeout(() => {
            setStatus('idle');
            setForm({ name: '', email: '', phone: '', company: '', project: '', investorType: '', message: '' });
        }, 400);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="fixed inset-0 z-[100] bg-ink2/70 backdrop-blur-sm"
                        onClick={handleClose}
                    />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.97, y: 24 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.97, y: 24 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="fixed inset-0 z-[101] flex items-center justify-center p-4"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white border border-[rgba(0,0,0,0.1)] shadow-2xl">
                            {/* Close button */}
                            <button
                                onClick={handleClose}
                                className="absolute top-6 right-6 z-10 h-9 w-9 flex items-center justify-center text-mid hover:text-ink transition-all border border-[rgba(0,0,0,0.1)] hover:border-ink"
                            >
                                <X className="w-4 h-4" />
                            </button>

                            <div className="p-10 md:p-14">
                                {status === 'success' ? (
                                    <motion.div
                                        initial={{ opacity: 0, y: 16 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="flex flex-col items-center text-center py-8 gap-6"
                                    >
                                        <div className="h-20 w-20 border border-gold/40 flex items-center justify-center text-gold">
                                            <CheckCircle2 className="w-10 h-10" />
                                        </div>
                                        <div>
                                            <h2 className="font-serif font-light text-3xl text-ink mb-3">Request Received</h2>
                                            <p className="text-mid text-base leading-relaxed font-light">
                                                Thank you, <span className="text-ink font-normal">{form.name}</span>. Our team will review your request and be in touch shortly.
                                            </p>
                                        </div>
                                        <button
                                            onClick={handleClose}
                                            className="mt-4 px-8 py-3.5 bg-off hover:bg-[rgba(0,0,0,0.05)] text-ink font-normal uppercase tracking-[0.14em] text-xs transition-all border border-[rgba(0,0,0,0.1)]"
                                        >
                                            Close
                                        </button>
                                    </motion.div>
                                ) : (
                                    <>
                                        <div className="mb-10">
                                            <p className="text-[10px] font-normal text-gold uppercase tracking-[0.28em] mb-3">Investor Relations</p>
                                            <h2 className="font-serif font-light text-3xl md:text-4xl text-ink mb-3">Request a Packet</h2>
                                            <div className="w-9 h-px bg-gold mb-4" />
                                            <p className="text-mid text-sm leading-relaxed font-light">
                                                Fill out the form below and our team will send you detailed information on your selected project.
                                            </p>
                                        </div>

                                        <form onSubmit={handleSubmit} className="space-y-5">
                                            <div className="grid sm:grid-cols-2 gap-4">
                                                <div className="flex flex-col gap-2">
                                                    <label className={labelClass}>Full Name *</label>
                                                    <input required type="text" value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} placeholder="John Smith" className={inputClass} />
                                                </div>
                                                <div className="flex flex-col gap-2">
                                                    <label className={labelClass}>Email *</label>
                                                    <input required type="email" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} placeholder="john@example.com" className={inputClass} />
                                                </div>
                                            </div>

                                            <div className="grid sm:grid-cols-2 gap-4">
                                                <div className="flex flex-col gap-2">
                                                    <label className={labelClass}>Phone</label>
                                                    <input type="tel" value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value }))} placeholder="+1 (555) 000-0000" className={inputClass} />
                                                </div>
                                                <div className="flex flex-col gap-2">
                                                    <label className={labelClass}>Company / Organization</label>
                                                    <input type="text" value={form.company} onChange={e => setForm(f => ({ ...f, company: e.target.value }))} placeholder="Your Firm" className={inputClass} />
                                                </div>
                                            </div>

                                            <div className="flex flex-col gap-2">
                                                <label className={labelClass}>Project of Interest *</label>
                                                <select required value={form.project} onChange={e => setForm(f => ({ ...f, project: e.target.value }))} className={inputClass + " appearance-none"}>
                                                    <option value="">Select a project…</option>
                                                    {PROJECTS.map(p => <option key={p} value={p}>{p}</option>)}
                                                </select>
                                            </div>

                                            <div className="flex flex-col gap-2">
                                                <label className={labelClass}>I am a…</label>
                                                <select value={form.investorType} onChange={e => setForm(f => ({ ...f, investorType: e.target.value }))} className={inputClass + " appearance-none"}>
                                                    <option value="">Select…</option>
                                                    <option value="Individual Investor">Individual Investor</option>
                                                    <option value="Institutional Investor">Institutional Investor</option>
                                                    <option value="Family Office">Family Office</option>
                                                    <option value="Strategic Partner">Strategic Partner</option>
                                                    <option value="Broker / Advisor">Broker / Advisor</option>
                                                    <option value="Other">Other</option>
                                                </select>
                                            </div>

                                            <div className="flex flex-col gap-2">
                                                <label className={labelClass}>Additional Notes</label>
                                                <textarea rows={3} value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))} placeholder="Any specific questions or context you'd like to share…" className={inputClass + " resize-none"} />
                                            </div>

                                            <button
                                                type="submit"
                                                disabled={status === 'submitting'}
                                                className="w-full flex items-center justify-center gap-2 bg-gold hover:bg-gold2 text-white font-normal uppercase tracking-[0.13em] text-[10.5px] px-8 py-4 transition-all disabled:opacity-50 mt-2"
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
