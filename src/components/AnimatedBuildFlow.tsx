"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, Code2, Database, Loader2, CheckCircle2, Sparkles, Box } from "lucide-react";

const STEPS = [
  { id: "prompt", label: "Prompt" },
  { id: "generate", label: "Generate Code" },
  { id: "database", label: "Database" },
  { id: "deploy", label: "Live App" },
];

export function AnimatedBuildFlow() {
  const [currentStep, setCurrentStep] = useState(0);
  const [promptText, setPromptText] = useState("");
  const fullPrompt = "Build an issue tracker with Kanban boards and real-time updates";

  useEffect(() => {
    let isCancelled = false;

    const runSequence = async () => {
      while (!isCancelled) {
        // 1. Reset
        setCurrentStep(0);
        setPromptText("");
        await new Promise((r) => setTimeout(r, 800));
        if (isCancelled) return;

        // 2. Type Prompt
        for (let i = 1; i <= fullPrompt.length; i++) {
          if (isCancelled) return;
          setPromptText(fullPrompt.slice(0, i));
          await new Promise((r) => setTimeout(r, 40));
        }

        await new Promise((r) => setTimeout(r, 600));

        // 3. Generate Code
        if (isCancelled) return;
        setCurrentStep(1);
        await new Promise((r) => setTimeout(r, 2000));

        // 4. Database
        if (isCancelled) return;
        setCurrentStep(2);
        await new Promise((r) => setTimeout(r, 1800));

        // 5. Deploy / Live
        if (isCancelled) return;
        setCurrentStep(3);
        await new Promise((r) => setTimeout(r, 3500));
      }
    };

    runSequence();
    return () => {
      isCancelled = true;
    };
  }, []);

  return (
    <div className="relative w-full max-w-lg mx-auto">
      <div className="absolute -inset-6 rounded-3xl bg-neutral-300/40 dark:bg-neutral-600/15 blur-3xl opacity-50 pointer-events-none" />
      
      <div className="relative rounded-2xl border border-neutral-200/80 dark:border-neutral-800 bg-white/90 dark:bg-neutral-950/85 backdrop-blur-2xl shadow-2xl overflow-hidden flex flex-col h-100">
        {/* Header / Chrome */}
        <div className="flex items-center gap-3 px-4 py-3 border-b border-neutral-100 dark:border-neutral-800/80 bg-neutral-50/60 dark:bg-neutral-900/60 z-10">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-400/80 dark:bg-neutral-700" />
            <div className="w-3 h-3 rounded-full bg-amber-400/80 dark:bg-neutral-700" />
            <div className="w-3 h-3 rounded-full bg-green-400/80 dark:bg-neutral-700" />
          </div>
          <div className="flex-1 flex justify-center">
            <div className="flex items-center gap-2 rounded-md bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 shadow-sm px-2.5 py-1 max-w-50 w-full">
              <Code2 className="w-3.5 h-3.5 text-neutral-400" />
              <span className="text-[11px] font-mono text-neutral-500 truncate">
                {currentStep < 3 ? "craft-agent-process" : "https://issue-tracker-app.craft.dev"}
              </span>
            </div>
          </div>
          <div className="w-14" />
        </div>

        {/* Dynamic Content Body */}
        <div className="flex-1 relative bg-neutral-50/30 dark:bg-neutral-900/20 overflow-hidden">
          <AnimatePresence mode="wait">
            {/* STEP 0: Prompt Input */}
            {currentStep === 0 && (
              <motion.div 
                key="step-0"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute inset-0 p-6 flex flex-col justify-center"
              >
                <div className="flex items-center gap-2 mb-4 text-xs font-semibold text-neutral-400 uppercase tracking-widest">
                  <Terminal className="w-4 h-4" />
                  What to build?
                </div>
                <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl p-4 shadow-sm min-h-30">
                  <p className="text-sm font-mono text-neutral-700 dark:text-neutral-300 leading-relaxed">
                    {promptText}
                    <span className="inline-block w-0.5 h-[1.1em] bg-neutral-400 dark:bg-neutral-500 ml-0.5 align-[-0.1em] animate-pulse" />
                  </p>
                </div>
                <div className="mt-4 flex gap-2">
                  <div className="h-8 w-16 bg-neutral-900 dark:bg-neutral-100 rounded-full flex items-center justify-center shadow-lg">
                    <Sparkles className="w-4 h-4 text-white dark:text-neutral-900" />
                  </div>
                  <div className="h-8 flex-1 border border-dashed border-neutral-200 dark:border-neutral-800 rounded-full" />
                </div>
              </motion.div>
            )}

            {/* STEP 1: Code Gen */}
            {currentStep === 1 && (
              <motion.div 
                key="step-1"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute inset-0 p-6 flex flex-col"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2 text-primary">
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span className="text-sm font-medium">Generating Application</span>
                  </div>
                  <span className="text-xs text-neutral-400 font-mono">14 files created</span>
                </div>
                <div className="flex-1 space-y-3 font-mono text-[10px] text-neutral-500 overflow-hidden relative">
                  <motion.div
                    initial={{ y: "100%" }}
                    animate={{ y: "-50%" }}
                    transition={{ duration: 3, ease: "linear" }}
                    className="space-y-2 opacity-50"
                  >
                    <p>{`> Creating src/app/page.tsx...`}</p>
                    <p className="text-emerald-500">{`  + Added KanbanBoard component`}</p>
                    <p>{`> Creating src/components/ui/card.tsx...`}</p>
                    <p>{`> Writing database schema...`}</p>
                    <p className="text-emerald-500">{`  + Applied foreign keys`}</p>
                    <p>{`> Configuring Next.js routing...`}</p>
                    <p>{`> Setting up tailwind.config.ts...`}</p>
                    <p className="text-emerald-500">{`  + Setup complete`}</p>
                  </motion.div>
                  <div className="absolute inset-0 bg-linear-to-t from-neutral-50/10 to-transparent dark:from-neutral-900/10 pointer-events-none" />
                </div>
              </motion.div>
            )}

            {/* STEP 2: Database Provisioning */}
            {currentStep === 2 && (
              <motion.div 
                key="step-2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute inset-0 p-6 flex flex-col items-center justify-center text-center"
              >
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-emerald-500/20 rounded-full blur-xl" />
                  <div className="h-16 w-16 bg-white dark:bg-neutral-800 rounded-2xl border border-neutral-200 dark:border-neutral-700 shadow-xl flex items-center justify-center relative z-10">
                    <Database className="w-8 h-8 text-emerald-500" />
                  </div>
                  <motion.div 
                    animate={{ rotate: 360 }} 
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="absolute -inset-2.5 border border-dashed border-emerald-500/50 rounded-full z-0"
                  />
                </div>
                <h3 className="text-sm font-semibold text-neutral-800 dark:text-neutral-200 mb-2">
                  Provisioning Postgres DB
                </h3>
                <p className="text-xs text-neutral-500 max-w-50">
                  Setting up schema, running migrations, and seeding initial data...
                </p>
                <div className="w-32 h-1 bg-neutral-200 dark:bg-neutral-800 rounded-full overflow-hidden mt-6">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    className="h-full bg-emerald-500 rounded-full"
                  />
                </div>
              </motion.div>
            )}

            {/* STEP 3: Live App */}
            {currentStep === 3 && (
              <motion.div 
                key="step-3"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="absolute inset-0 bg-white dark:bg-neutral-950 flex flex-col"
              >
                <div className="h-12 border-b border-neutral-100 dark:border-neutral-800 flex items-center px-4 justify-between bg-neutral-50 dark:bg-neutral-900">
                  <div className="flex items-center gap-2">
                    <Box className="w-4 h-4 text-blue-500 dark:text-blue-400" />
                    <span className="text-sm font-semibold text-neutral-900 dark:text-white">IssueTrack</span>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-5 h-5 rounded-md bg-neutral-200 dark:bg-neutral-800" />
                    <div className="w-5 h-5 rounded-full bg-linear-to-tr from-purple-500 to-blue-500" />
                  </div>
                </div>
                <div className="flex-1 p-4 grid grid-cols-2 gap-3 bg-neutral-50/50 dark:bg-neutral-950/50">
                  <div className="bg-neutral-100/80 dark:bg-neutral-900/80 rounded-lg p-3">
                    <div className="text-[10px] font-bold text-neutral-400 mb-2 uppercase">To Do</div>
                    <div className="space-y-2">
                      <div className="bg-white dark:bg-neutral-800 p-2 rounded shadow-sm border border-neutral-200/50 dark:border-neutral-700/50">
                        <div className="h-2 w-3/4 bg-neutral-200 dark:bg-neutral-700 rounded mb-2" />
                        <div className="flex justify-between items-center">
                          <div className="h-1.5 w-1/4 bg-neutral-200 dark:bg-neutral-700 rounded" />
                          <div className="w-3 h-3 rounded-full bg-red-400" />
                        </div>
                      </div>
                      <div className="bg-white dark:bg-neutral-800 p-2 rounded shadow-sm border border-neutral-200/50 dark:border-neutral-700/50">
                        <div className="h-2 w-full bg-neutral-200 dark:bg-neutral-700 rounded mb-2" />
                        <div className="h-2 w-1/2 bg-neutral-200 dark:bg-neutral-700 rounded mb-2" />
                        <div className="flex justify-between items-center">
                          <div className="h-1.5 w-1/3 bg-neutral-200 dark:bg-neutral-700 rounded" />
                          <div className="w-3 h-3 rounded-full bg-blue-400" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-neutral-100/80 dark:bg-neutral-900/80 rounded-lg p-3">
                    <div className="text-[10px] font-bold text-neutral-400 mb-2 uppercase">In Progress</div>
                    <div className="space-y-2">
                      <div className="bg-white dark:bg-neutral-800 p-2 rounded shadow-sm border border-neutral-200/50 dark:border-neutral-700/50">
                        <div className="h-2 w-5/6 bg-neutral-200 dark:bg-neutral-700 rounded mb-2" />
                        <div className="flex justify-between items-center">
                          <div className="h-1.5 w-1/2 bg-neutral-200 dark:bg-neutral-700 rounded" />
                          <div className="w-3 h-3 rounded-full bg-purple-400" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 px-4 py-2 rounded-full shadow-xl flex items-center gap-2 text-xs font-medium"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 dark:text-emerald-600" />
                  Deployed to production
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Progress Timeline Footer */}
        <div className="border-t border-neutral-100 dark:border-neutral-800/80 bg-white/50 dark:bg-neutral-950/50 p-4">
          <div className="flex justify-between items-center relative z-10 px-2">
            {STEPS.map((s, i) => {
              const isActive = i === currentStep;
              const isPast = i < currentStep;
              return (
                <div key={s.id} className="flex flex-col items-center gap-2 relative z-10 w-17.5">
                  <div 
                    className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold transition-all duration-500 ${
                      isActive 
                        ? "bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900 scale-110 shadow-md ring-2 ring-neutral-900/20 dark:ring-neutral-100/20" 
                        : isPast 
                          ? "bg-neutral-200 text-neutral-600 dark:bg-neutral-800 dark:text-neutral-400" 
                          : "bg-neutral-100 text-neutral-400 dark:bg-neutral-900/50 dark:text-neutral-600"
                    }`}
                  >
                    {isPast ? <CheckCircle2 className="w-3.5 h-3.5" /> : i + 1}
                  </div>
                  <span 
                    className={`text-[9px] uppercase tracking-wider font-semibold transition-colors duration-500 whitespace-nowrap text-center ${
                      isActive 
                        ? "text-neutral-800 dark:text-neutral-200" 
                        : isPast 
                          ? "text-neutral-600 dark:text-neutral-400" 
                          : "text-neutral-400 dark:text-neutral-600"
                    }`}
                  >
                    {s.label}
                  </span>
                </div>
              );
            })}
            
            <div className="absolute top-2.75 left-[calc(35px)] right-[calc(35px)] h-0.5 bg-neutral-100 dark:bg-neutral-800/80 -z-10 rounded-full" />
            <div 
              className="absolute top-2.75 left-[calc(35px)] h-0.5 bg-neutral-900 dark:bg-neutral-100 -z-10 rounded-full transition-all duration-500 ease-in-out"
              style={{ width: `calc(${(currentStep / (STEPS.length - 1)) * 100}% - 70px)` }} 
            />
          </div>
        </div>

      </div>
    </div>
  );
}
