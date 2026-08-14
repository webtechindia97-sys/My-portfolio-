import React from 'react';
import { CheckCircle2, X } from 'lucide-react';
import { ThemeMode } from '../types';

interface ToastProps {
  message: string | null;
  theme: ThemeMode;
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, theme, onClose }) => {
  if (!message) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-bounce-in max-w-sm">
      <div className={`flex items-center gap-3 p-4 rounded-2xl border shadow-2xl backdrop-blur-xl transition-all ${
        theme === 'dark'
          ? 'bg-slate-900/95 border-cyan-500/40 text-slate-100 shadow-cyan-950/60'
          : 'bg-white/95 border-cyan-200 text-slate-900 shadow-slate-300'
      }`}>
        <div className="p-1 rounded-full bg-emerald-500/20 text-emerald-400">
          <CheckCircle2 className="w-5 h-5" />
        </div>
        <p className="text-xs sm:text-sm font-medium flex-1">
          {message}
        </p>
        <button
          onClick={onClose}
          className="p-1 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
