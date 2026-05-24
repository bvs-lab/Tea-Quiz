import { useState, useMemo, useEffect } from 'react';
import { TeaKey, questions, TIE_PRIORITY, teaTypes } from '../data/quizData';

export type ScreenState = 'welcome' | 'quiz' | 'result';

export interface HistoryEntry {
  questionIndex: number;
  answerIndex: number;
  weights: Partial<Record<TeaKey, number>>;
}

export function useQuiz() {
  const [currentScreen, setCurrentScreen] = useState<ScreenState>('welcome');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [history, setHistory] = useState<HistoryEntry[]>([]);
  const [previousResultName, setPreviousResultName] = useState<string | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem('tea-quiz-last-result');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (parsed && parsed.name) {
          setPreviousResultName(parsed.name);
        }
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  const scores = useMemo(() => {
    const initialScores: Record<TeaKey, number> = {
      black: 0, green: 0, white: 0, oolong: 0, puer: 0, yellow: 0, herbal: 0, gaba: 0
    };
    for (const entry of history) {
      for (const [tea, weight] of Object.entries(entry.weights)) {
        initialScores[tea as TeaKey] += weight as number;
      }
    }
    return initialScores;
  }, [history]);

  const selectAnswer = (answerIndex: number) => {
    const question = questions[currentQuestionIndex];
    const answer = question.answers[answerIndex];
    
    setHistory(prev => [...prev, {
      questionIndex: currentQuestionIndex,
      answerIndex,
      weights: answer.weights
    }]);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      setCurrentScreen('result');
    }
  };

  const goBack = () => {
    setHistory((prev) => {
      if (prev.length === 0) return prev;
      const next = prev.slice(0, -1);
      setCurrentQuestionIndex(next.length);
      return next;
    });
  };

  const editLastAnswer = () => {
    setHistory((prev) => {
      if (prev.length === 0) return prev;
      const next = prev.slice(0, -1);
      setCurrentQuestionIndex(next.length);
      return next;
    });
    setCurrentScreen('quiz');
  };

  const resetQuiz = () => {
    setHistory([]);
    setCurrentQuestionIndex(0);
    setCurrentScreen('welcome');
  };

  const startQuiz = () => {
    setHistory([]);
    setCurrentQuestionIndex(0);
    setCurrentScreen('quiz');
  };

  const rankedTeas = useMemo(() => {
    const teas = Object.keys(scores) as TeaKey[];
    return teas.sort((a, b) => {
      if (scores[b] !== scores[a]) {
        return scores[b] - scores[a];
      }
      return TIE_PRIORITY.indexOf(a) - TIE_PRIORITY.indexOf(b);
    });
  }, [scores]);

  const winnerKey = scores[rankedTeas[0]] > 0 ? rankedTeas[0] : 'oolong';

  const runnersUp = useMemo(() => {
    const winnerScore = scores[winnerKey];
    return rankedTeas
      .filter(t => t !== winnerKey && scores[t] > 0 && winnerScore - scores[t] <= 5)
      .slice(0, 2);
  }, [rankedTeas, scores, winnerKey]);

  const whyThisTea = useMemo(() => {
    const reasons = history
      .filter(entry => (entry.weights[winnerKey] || 0) > 0)
      .sort((a, b) => (b.weights[winnerKey] || 0) - (a.weights[winnerKey] || 0))
      .slice(0, 3)
      .map(entry => questions[entry.questionIndex].answers[entry.answerIndex].text);
    return reasons;
  }, [history, winnerKey]);

  useEffect(() => {
    if (currentScreen === 'result') {
      const name = teaTypes[winnerKey].name;
      localStorage.setItem('tea-quiz-last-result', JSON.stringify({
        tea: winnerKey,
        name,
        date: new Date().toISOString()
      }));
      setPreviousResultName(name);
    }
  }, [currentScreen, winnerKey]);

  return {
    currentScreen,
    currentQuestionIndex,
    history,
    previousResultName,
    selectAnswer,
    goBack,
    editLastAnswer,
    resetQuiz,
    startQuiz,
    winnerKey,
    runnersUp,
    whyThisTea,
    scores
  };
}
