import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { questions } from '../data/quizData';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

export function QuestionScreen({ 
  currentQuestionIndex, 
  onSelectAnswer, 
  onBack 
}: { 
  currentQuestionIndex: number;
  onSelectAnswer: (index: number) => void;
  onBack: () => void;
}) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  
  const handleSelect = (index: number) => {
    if (selectedIndex !== null) return;
    setSelectedIndex(index);
    setTimeout(() => {
      onSelectAnswer(index);
      setSelectedIndex(null);
    }, 350);
  };

  const question = questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col min-h-[80vh] px-4 md:px-6 max-w-2xl mx-auto py-8"
    >
      <div className="flex items-center justify-between mb-8">
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={onBack} 
          disabled={currentQuestionIndex === 0}
          className="text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <div className="text-sm font-medium text-muted-foreground font-serif">
          Шаг {currentQuestionIndex + 1} из 7
        </div>
        <div className="w-10"></div> {/* Spacer for centering */}
      </div>

      <div className="w-full bg-secondary h-1.5 rounded-full overflow-hidden mb-10">
        <motion.div 
          className="bg-primary h-full"
          initial={{ width: `${Math.max(0, ((currentQuestionIndex - 1) / questions.length) * 100)}%` }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
      </div>

      <div className="flex-1">
        <motion.div
          key={currentQuestionIndex}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <h2 className="text-2xl md:text-3xl font-serif text-foreground mb-8 leading-snug">
            {question.question}
          </h2>

          <div className="space-y-3">
            {question.answers.map((answer, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleSelect(index)}
                className={`w-full text-left p-5 rounded-xl border transition-all duration-200 shadow-sm
                  ${selectedIndex === index 
                    ? 'bg-primary border-primary text-primary-foreground' 
                    : 'bg-card border-card-border text-card-foreground hover:border-primary/40 hover:shadow-md'
                  }
                `}
              >
                <span className="text-base md:text-lg font-medium">{answer.text}</span>
              </motion.button>
            ))}
          </div>

          {currentQuestionIndex > 0 && (
            <button
              onClick={onBack}
              className="mt-6 text-sm text-muted-foreground hover:text-foreground flex items-center gap-1.5 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Изменить предыдущий ответ
            </button>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
}
