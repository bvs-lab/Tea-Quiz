import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export function WelcomeScreen({ onStart, previousResultName }: { onStart: () => void, previousResultName: string | null }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col items-center justify-center h-full px-6 text-center max-w-2xl mx-auto py-6"
    >
      <div className="space-y-4 mb-6">
        <h1 className="text-4xl md:text-5xl font-serif text-primary">Найдите свой идеальный чай</h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-lg mx-auto leading-relaxed">
          Ответьте на 7 вопросов и узнайте, какой сорт чая подходит именно вам
        </p>
      </div>

      <div className="space-y-4 w-full max-w-sm">
        <Button 
          size="lg" 
          className="w-full text-lg h-14 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg transition-all"
          onClick={onStart}
        >
          Начать погружение
        </Button>
        
        {previousResultName && (
          <p className="text-sm text-muted-foreground italic">
            В прошлый раз вам подошёл: {previousResultName}
          </p>
        )}
      </div>

    </motion.div>
  );
}
