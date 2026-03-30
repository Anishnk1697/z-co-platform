
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot, User, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { getChatResponseStream, checkConnectivity } from '../services/geminiService';

interface ChatMessage {
  role: 'user' | 'model';
  parts: { text: string }[];
  actions?: { type: 'NAVIGATE' | 'SCHEDULE' | 'EMAIL_EXPERT'; value?: string }[];
}

export default function AIChatAssistant() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [isOnline, setIsOnline] = useState<boolean | null>(null);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', parts: [{ text: "Welcome to Z-Co Development. I specialize in our replication-led development platform and current pipeline. How can I help you today?" }] }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkKey = async () => {
      const hasKey = await checkConnectivity();
      setIsOnline(hasKey);
    };
    checkKey();
  }, []);

  const quickActions = [
    { label: 'View Pipeline', prompt: 'Tell me about your current projects.' },
    { label: 'How we build', prompt: 'Explain the Replication Advantage.' },
    { label: 'Schedule Meeting', prompt: 'I would like to schedule a meeting.' }
  ];

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [messages, isLoading]);

  const parseActions = (text: string) => {
    const actions: { type: 'NAVIGATE' | 'SCHEDULE' | 'EMAIL_EXPERT'; value?: string }[] = [];
    const navMatch = text.match(/\[NAVIGATE:(.*?)\]/g);
    if (navMatch) {
      navMatch.forEach(m => {
        const path = m.match(/\[NAVIGATE:(.*?)\]/)?.[1];
        if (path) actions.push({ type: 'NAVIGATE', value: path });
      });
    }
    if (text.includes('[ACTION:SCHEDULE]')) actions.push({ type: 'SCHEDULE' });
    if (text.includes('[ACTION:EMAIL_EXPERT]')) actions.push({ type: 'EMAIL_EXPERT' });
    const cleanText = text.replace(/\[NAVIGATE:.*?\]|\[ACTION:.*?\]/g, '').trim();
    return { cleanText, actions };
  };

  const handleSend = async (overrideInput?: string) => {
    const textToSend = overrideInput || input;
    if (!textToSend.trim() || isLoading) return;

    const userMsg: ChatMessage = { role: 'user', parts: [{ text: textToSend }] };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    const botMsgId = Date.now();
    setMessages(prev => [...prev, { role: 'model', parts: [{ text: "" }], _id: botMsgId } as any]);

    let fullText = "";
    try {
      const stream = getChatResponseStream(textToSend, [...messages, userMsg]);
      for await (const chunk of stream) {
        fullText += chunk;
        setMessages(prev => prev.map(m => 
          (m as any)._id === botMsgId ? { ...m, parts: [{ text: fullText }] } : m
        ));
      }

      const { cleanText, actions } = parseActions(fullText);
      setMessages(prev => prev.map(m => 
        (m as any)._id === botMsgId ? { 
          ...m, 
          parts: [{ text: cleanText }], 
          actions: actions.length > 0 ? actions : undefined 
        } : m
      ));

    } catch (error) {
      console.error("Stream Error:", error);
      setMessages(prev => prev.map(m => 
        (m as any)._id === botMsgId ? { ...m, parts: [{ text: "I'm sorry, I'm having trouble connecting. Please try again later." }] } : m
      ));
    } finally {
      setIsLoading(false);
    }
  };

  const executeAction = (action: { type: string; value?: string }) => {
    switch (action.type) {
      case 'NAVIGATE':
        if (action.value) {
          navigate(action.value);
          if (action.value.includes('#')) {
            const id = action.value.split('#')[1];
            document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
          }
        }
        break;
      case 'SCHEDULE':
        window.open('https://outlook.office.com/book/AnishZCoCalendar@z-co.info/', '_blank');
        break;
      case 'EMAIL_EXPERT':
        window.location.href = 'mailto:akantharia@z-co.info?subject=Z-Co%20Expert%20Inquiry';
        break;
    }
  };

  return (
    <>
      {/* Toggle Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-8 right-8 z-[60] h-16 w-16 rounded-2xl shadow-2xl flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-slate-800 text-white' : 'bg-slate-700 text-white shadow-slate-500/10'
          }`}
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 40, x: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 40, x: 20 }}
            className="fixed bottom-28 right-8 z-[60] w-[400px] max-w-[calc(100vw-4rem)] h-[600px] bg-slate-950 border border-slate-800 rounded-3xl shadow-[0_32px_64px_-12px_rgba(0,0,0,0.8)] flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-6 bg-slate-900 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-slate-700 flex items-center justify-center text-white shadow-lg shadow-slate-500/10">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white flex items-center gap-2">
                    Z-Co AI Specialist
                    <Sparkles className="w-3 h-3 text-lime-500" />
                  </h3>
                  <div className="flex items-center gap-2">
                    <div className={`w-1.5 h-1.5 rounded-full ${isOnline === true ? 'bg-lime-500 animate-pulse' :
                        isOnline === false ? 'bg-red-500' : 'bg-slate-600'
                      }`} />
                    <span className="text-[10px] text-slate-500 uppercase tracking-widest font-semibold">
                      {isOnline === true ? 'Ready to assist' :
                        isOnline === false ? 'Service Offline' : 'Checking status...'}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-6 scrollbar-hide">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`flex gap-3 max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                    <div className={`w-8 h-8 rounded-lg flex-shrink-0 flex items-center justify-center text-[10px] font-semibold ${msg.role === 'user' ? 'bg-slate-800 text-slate-400' : 'bg-slate-500/10 text-slate-300'
                      }`}>
                      {msg.role === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                    </div>
                    <div className="space-y-3">
                      <div className={`p-4 rounded-2xl text-[13px] leading-relaxed ${msg.role === 'user'
                          ? 'bg-slate-700 text-white font-medium rounded-tr-none shadow-lg shadow-slate-500/10'
                          : 'bg-slate-900 text-slate-200 rounded-tl-none border border-slate-800 shadow-xl'
                        }`}>
                        {msg.parts[0].text}
                      </div>

                      {/* Action Buttons */}
                      {msg.actions && (
                        <div className="flex flex-wrap gap-2">
                          {msg.actions.map((action, idx) => (
                            <button
                              key={idx}
                              onClick={() => executeAction(action)}
                              className="px-4 py-2 bg-slate-800 border border-slate-700 rounded-xl text-[11px] font-bold text-white hover:bg-slate-700 hover:border-slate-500 transition-all uppercase tracking-wider shadow-lg"
                            >
                              {action.type === 'NAVIGATE' ? `View ${action.value?.replace('/', '') || 'Page'}` :
                                action.type === 'SCHEDULE' ? 'Schedule a Call' : 'Email Expert'}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-slate-900 p-4 rounded-2xl rounded-tl-none border border-slate-800 flex gap-2">
                    <span className="w-1.5 h-1.5 bg-slate-500 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                    <span className="w-1.5 h-1.5 bg-slate-500 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                    <span className="w-1.5 h-1.5 bg-slate-500 rounded-full animate-bounce"></span>
                  </div>
                </div>
              )}
            </div>

            {/* Quick Actions & Input */}
            <div className="p-4 border-t border-slate-800 bg-slate-950 space-y-4">
              {messages.length === 1 && (
                <div className="flex flex-wrap gap-2 overflow-x-auto pb-2 scrollbar-hide">
                  {quickActions.map((qa, i) => (
                    <button
                      key={i}
                      onClick={() => handleSend(qa.prompt)}
                      className="whitespace-nowrap px-3 py-1.5 bg-slate-900 border border-slate-800 rounded-full text-[10px] font-semibold text-slate-400 hover:text-white hover:border-slate-600 transition-all"
                    >
                      {qa.label}
                    </button>
                  ))}
                </div>
              )}
              <div className="relative group">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask about pipeline or scheduling..."
                  className="w-full bg-slate-900 border border-slate-800 rounded-2xl pl-5 pr-14 py-4 text-sm text-white focus:outline-none focus:ring-2 focus:ring-slate-500/30 focus:border-slate-500/50 transition-all placeholder:text-slate-600"
                />
                <button
                  onClick={() => handleSend()}
                  disabled={isLoading || !input.trim()}
                  className="absolute right-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-xl bg-slate-700 text-white flex items-center justify-center hover:bg-slate-600 disabled:bg-slate-800 disabled:text-slate-600 transition-all"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
