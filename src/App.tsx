import { useRef, useEffect, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useQuiz } from "./hooks/useQuiz";
import { WelcomeScreen } from "./components/WelcomeScreen";
import { QuestionScreen } from "./components/QuestionScreen";
import { ResultScreen } from "./components/ResultScreen";
import { Footer } from "./components/Footer";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const queryClient = new QueryClient();

function QuizApp() {
  const {
    currentScreen,
    currentQuestionIndex,
    previousResultName,
    selectAnswer,
    goBack,
    editLastAnswer,
    resetQuiz,
    startQuiz,
    winnerKey,
    runnersUp,
    whyThisTea
  } = useQuiz();

  const bgImgRef = useRef<HTMLImageElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [imgMarginX, setImgMarginX] = useState(0);
  const [showScrollHint, setShowScrollHint] = useState(false);

  useEffect(() => {
    const compute = () => {
      const img = bgImgRef.current;
      if (!img || !img.naturalWidth) return;
      const { naturalWidth: nW, naturalHeight: nH } = img;
      const vW = window.innerWidth;
      const vH = window.innerHeight;
      const isLandscape = vW > vH;
      if (isLandscape) {
        const scale = Math.min(vW / nW, vH / nH);
        const renderedW = nW * scale;
        const marginX = (vW - renderedW) / 2;
        setImgMarginX(renderedW >= 360 ? Math.round(marginX) : 0);
      } else {
        setImgMarginX(0);
      }
    };

    const img = bgImgRef.current;
    if (!img) return;
    if (img.complete && img.naturalWidth) compute();
    else img.addEventListener("load", compute);
    window.addEventListener("resize", compute);
    return () => {
      img.removeEventListener("load", compute);
      window.removeEventListener("resize", compute);
    };
  }, []);

  useEffect(() => {
    if (currentScreen !== 'result') {
      setShowScrollHint(false);
      return;
    }
    setShowScrollHint(true);
    const el = scrollRef.current;
    if (!el) return;
    const onScroll = () => {
      if (el.scrollTop > 40) setShowScrollHint(false);
    };
    el.addEventListener('scroll', onScroll, { passive: true });
    return () => el.removeEventListener('scroll', onScroll);
  }, [currentScreen]);

  return (
    <div
      className="h-[100dvh] w-full flex flex-col transition-colors duration-700 relative overflow-hidden"
      style={{ backgroundColor: "#ede8df" }}
    >
      <img
        ref={bgImgRef}
        src={`${import.meta.env.BASE_URL}bg.png`}
        aria-hidden="true"
        className="bg-image pointer-events-none select-none"
        style={{
          position: "fixed",
          inset: 0,
          width: "100%",
          height: "100%",
          objectPosition: "center center",
          zIndex: 0,
        }}
      />
      <div
        ref={scrollRef}
        className={`scroll-area flex-1 min-h-0 relative ${currentScreen === 'result' ? 'overflow-y-scroll' : 'overflow-auto'}`}
        style={{ zIndex: 1 }}
      >
        <AnimatePresence mode="wait">
          {currentScreen === 'welcome' && (
            <WelcomeScreen
              key="welcome"
              onStart={startQuiz}
              previousResultName={previousResultName}
            />
          )}
          {currentScreen === 'quiz' && (
            <QuestionScreen
              key={`question-${currentQuestionIndex}`}
              currentQuestionIndex={currentQuestionIndex}
              onSelectAnswer={selectAnswer}
              onBack={goBack}
            />
          )}
          {currentScreen === 'result' && (
            <ResultScreen
              key="result"
              winnerKey={winnerKey}
              runnersUp={runnersUp}
              whyThisTea={whyThisTea}
              onReset={resetQuiz}
              onEditLast={editLastAnswer}
              imgMarginX={imgMarginX}
            />
          )}
        </AnimatePresence>
      </div>
      <AnimatePresence>
        {showScrollHint && (
          <motion.div
            key="scroll-hint"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.4 }}
            className="pointer-events-none absolute bottom-20 left-0 right-0 flex justify-center"
            style={{ zIndex: 10 }}
          >
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut" }}
              className="flex flex-col items-center gap-0.5 text-foreground/50"
            >
              <ChevronDown size={22} strokeWidth={1.5} />
              <ChevronDown size={22} strokeWidth={1.5} className="-mt-3 opacity-50" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {(currentScreen === 'welcome' || currentScreen === 'result') && (
        <div
          className="shrink-0"
          style={{ zIndex: 1, position: "relative", paddingLeft: imgMarginX, paddingRight: imgMarginX }}
        >
          <Footer />
        </div>
      )}
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <QuizApp />
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
