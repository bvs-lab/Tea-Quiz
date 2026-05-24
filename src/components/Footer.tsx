import React from 'react';
import { Phone, Send } from 'lucide-react';

export function Footer() {
  return (
    <footer className="w-full py-3 px-6 text-center text-muted-foreground">
      <div className="space-y-2">
        <div className="bg-card/50 backdrop-blur-sm rounded-xl p-3 border shadow-sm">
          <p className="text-sm font-medium text-foreground mb-2">Желаешь погрузиться в мир Богатства Чая?</p>
          <div className="flex flex-row gap-2 justify-center">
            <a 
              href="https://t.me/bo_chai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 text-sm whitespace-nowrap bg-[#0088cc]/10 text-[#0088cc] hover:bg-[#0088cc]/20 px-3 py-2 rounded-lg transition-colors"
            >
              <Send size={15} />
              Telegram
            </a>
            <a 
              href="tel:+79189701064"
              className="inline-flex items-center justify-center gap-1.5 text-sm whitespace-nowrap bg-primary/10 text-primary hover:bg-primary/20 px-3 py-2 rounded-lg transition-colors"
            >
              <Phone size={15} />
              Позвонить
            </a>
          </div>
          <a
            href="https://taplink.cc/askhelpme"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-right text-xs text-blue-500 hover:text-blue-600 hover:underline mt-2"
          >
            Разработано в BVS-LAB
          </a>
        </div>
      </div>
    </footer>
  );
}
