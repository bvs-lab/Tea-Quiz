import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { TeaKey, teaTypes, TEA_COLORS } from '../data/quizData';
import { TeapotSvg } from './TeapotSvg';
import { Button } from '@/components/ui/button';
import { Share2, RotateCcw, Pencil } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export function ResultScreen({ 
  winnerKey, 
  runnersUp, 
  whyThisTea, 
  onReset, 
  onEditLast,
  imgMarginX = 0,
}: { 
  winnerKey: TeaKey;
  runnersUp: TeaKey[];
  whyThisTea: string[];
  onReset: () => void;
  onEditLast: () => void;
  imgMarginX?: number;
}) {
  const tea = teaTypes[winnerKey];
  const colorScheme = TEA_COLORS[winnerKey];
  const { toast } = useToast();

  useEffect(() => {
    // Set background color of the body to the tea color
    document.body.style.backgroundColor = colorScheme.bg;
    return () => {
      document.body.style.backgroundColor = '';
    };
  }, [colorScheme.bg]);

  const handleShare = async () => {
    const text = `Мой идеальный чай — ${tea.name}! Пройди тест и узнай свой:`;
    const url = window.location.protocol === 'file:' ? 'https://t.me/bo_chai' : window.location.href;
    
    if (navigator.share) {
      try {
        await navigator.share({ title: 'Tea Quiz', text, url });
      } catch (err) {
        console.error('Error sharing', err);
      }
    } else {
      navigator.clipboard.writeText(`${text} ${url}`);
      toast({
        title: "Скопировано",
        description: "Ссылка скопирована в буфер обмена"
      });
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="py-12 px-4 md:px-6"
      style={{ marginLeft: imgMarginX, marginRight: imgMarginX }}
    >
      <div className="flex flex-col items-center text-center mb-12">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', bounce: 0.35, delay: 0.2 }}
          className="mb-8 rounded-full flex items-center justify-center"
          style={{
            width: '180px',
            height: '180px',
            backgroundColor: colorScheme.bg,
            boxShadow: `0 12px 40px ${colorScheme.shadow}, 0 0 0 4px ${colorScheme.color}22`,
          }}
        >
          <TeapotSvg color={colorScheme.color} className="w-24 h-24" />
        </motion.div>
        
        <span className="uppercase tracking-widest text-sm font-semibold mb-3 opacity-70" style={{ color: colorScheme.color }}>
          Ваш чай
        </span>
        <h1 className="text-4xl md:text-6xl font-serif mb-6" style={{ color: colorScheme.color }}>
          {tea.name}
        </h1>
        <p className="text-lg md:text-xl leading-relaxed opacity-90 max-w-2xl">
          {tea.description}
        </p>
      </div>

      {whyThisTea.length > 0 && (
        <motion.div 
          initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4 }}
          className="mb-10 bg-white/40 backdrop-blur-md rounded-2xl p-6 md:p-8 shadow-sm border border-white/20"
        >
          <h3 className="text-xl font-serif mb-4" style={{ color: colorScheme.color }}>Почему этот чай</h3>
          <ul className="space-y-3 text-left">
            {whyThisTea.map((reason, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-2 w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: colorScheme.color }} />
                <span className="opacity-90">{reason}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      )}

      <motion.div 
        initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.5 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10"
      >
        <InfoCard label="Вкус" value={tea.taste} color={colorScheme.color} />
        <InfoCard label="Эффект" value={tea.effect} color={colorScheme.color} />
        <InfoCard label="Кофеин" value={tea.caffeine} color={colorScheme.color} />
        <InfoCard label="Время" value={tea.time} color={colorScheme.color} />
      </motion.div>

      <motion.div 
        initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.6 }}
        className="mb-12 bg-white/40 backdrop-blur-md rounded-2xl p-6 md:p-8 shadow-sm border border-white/20 text-left"
      >
        <h3 className="text-xl font-serif mb-3" style={{ color: colorScheme.color }}>Как заваривать</h3>
        <p className="opacity-90 text-lg">{tea.brewing}</p>
      </motion.div>

      {runnersUp.length > 0 && (
        <motion.div 
          initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.7 }}
          className="mb-12 text-center"
        >
          <h4 className="text-sm uppercase tracking-wider mb-4 opacity-70">Также вам могут подойти</h4>
          <div className="flex flex-wrap justify-center gap-3">
            {runnersUp.map(ru => (
              <span key={ru} className="px-4 py-2 rounded-full bg-white/50 border border-white/30 text-sm font-medium shadow-sm">
                {teaTypes[ru].name}
              </span>
            ))}
          </div>
        </motion.div>
      )}

      <motion.div 
        initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.8 }}
        className="flex flex-col gap-4 max-w-sm mx-auto"
      >
        <div className="grid grid-cols-2 gap-3">
          <Button variant="outline" className="bg-white/50 border-white/50 hover:bg-white/80 text-foreground" onClick={handleShare}>
            <Share2 className="mr-2 w-4 h-4" />
            Поделиться
          </Button>
          <Button variant="outline" className="bg-white/50 border-white/50 hover:bg-white/80 text-foreground" onClick={onReset}>
            <RotateCcw className="mr-2 w-4 h-4" />
            Заново
          </Button>
        </div>
        <Button
          variant="ghost"
          className="text-muted-foreground hover:text-foreground"
          onClick={onEditLast}
        >
          <Pencil className="mr-2 w-4 h-4" />
          Изменить последний ответ
        </Button>
      </motion.div>

    </motion.div>
  );
}

function InfoCard({ label, value, color }: { label: string, value: string, color: string }) {
  return (
    <div className="bg-white/40 backdrop-blur-md rounded-xl p-4 border border-white/20 shadow-sm flex flex-col justify-center items-center text-center h-full">
      <span className="text-xs uppercase tracking-wider mb-2 opacity-70">{label}</span>
      <span className="font-medium text-sm md:text-base leading-tight" style={{ color }}>{value}</span>
    </div>
  );
}
