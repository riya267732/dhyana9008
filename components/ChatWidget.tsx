
import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, User } from 'lucide-react';
import { getHOOPResponse } from '../services/geminiService';
import { ChatMessage } from '../types';

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'assistant', content: 'Need help choosing your fit?', timestamp: new Date() }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = { role: 'user', content: input, timestamp: new Date() };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    const botReply = await getHOOPResponse(input);
    const botMsg: ChatMessage = { role: 'assistant', content: botReply, timestamp: new Date() };
    setMessages(prev => [...prev, botMsg]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-brand-orange text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center gap-2 group"
        >
          <span className="hidden group-hover:block pl-2 font-bold text-sm">HOOP SUPPORT</span>
          <MessageCircle size={28} />
        </button>
      ) : (
        <div className="bg-brand-black w-[350px] max-w-[90vw] h-[500px] rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-white/10 animate-in fade-in zoom-in duration-200">
          {/* Header */}
          <div className="bg-brand-black p-4 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-brand-orange rounded-full flex items-center justify-center font-black text-white text-xs">H</div>
              <div>
                <h3 className="text-brand-offwhite font-bold text-sm">HOOP SUPPORT</h3>
                <span className="text-[10px] text-brand-green font-bold uppercase tracking-widest">Always Active</span>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/60 hover:text-white"><X size={20} /></button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-xl text-sm ${
                  m.role === 'user' 
                    ? 'bg-brand-orange text-white rounded-br-none' 
                    : 'bg-white/10 text-brand-offwhite rounded-bl-none'
                }`}>
                  {m.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white/10 text-brand-offwhite p-3 rounded-xl rounded-bl-none text-sm italic animate-pulse">
                  HOOP is typing...
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-4 bg-white/5 border-t border-white/10 flex items-center gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask anything..."
              className="flex-1 bg-transparent text-white text-sm outline-none focus:ring-0"
            />
            <button
              onClick={handleSend}
              disabled={isLoading}
              className="text-brand-orange hover:text-brand-green disabled:opacity-50 transition-colors"
            >
              <Send size={20} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatWidget;
