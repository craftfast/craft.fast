"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Eye,
  Code2,
  Database,
  Rocket,
  Settings,
  Loader2,
  CheckCircle2,
  Sparkles,
  Send,
  RefreshCw,
  Maximize2,
  Monitor,
  Smartphone,
  ChevronRight,
  GitBranch,
  HardDrive,
} from "lucide-react";

const STEPS = [
  { id: "prompt", label: "Prompt" },
  { id: "preview", label: "Preview" },
  { id: "publish", label: "Publish" },
] as const;

const AI_RESPONSES = [
  "Setting up your Next.js project...",
  "Creating components and pages...",
  "Provisioning PostgreSQL database...",
  "Installing dependencies...",
  "Starting dev server...",
];

const FILE_TREE = [
  { name: "src/", type: "folder" as const, depth: 0 },
  { name: "app/", type: "folder" as const, depth: 1 },
  { name: "page.tsx", type: "file" as const, depth: 2, active: true },
  { name: "layout.tsx", type: "file" as const, depth: 2 },
  { name: "components/", type: "folder" as const, depth: 1 },
  { name: "KanbanBoard.tsx", type: "file" as const, depth: 2 },
  { name: "TaskCard.tsx", type: "file" as const, depth: 2 },
  { name: "lib/", type: "folder" as const, depth: 1 },
  { name: "db/", type: "folder" as const, depth: 2 },
  { name: "schema.ts", type: "file" as const, depth: 3 },
];

export function AnimatedBuildFlow() {
  const [currentStep, setCurrentStep] = useState(0);
  const [promptText, setPromptText] = useState("");
  const [chatMessages, setChatMessages] = useState<
    { role: "user" | "ai"; text: string; typing?: boolean }[]
  >([]);
  const [generatedFiles, setGeneratedFiles] = useState(0);
  const [progressPct, setProgressPct] = useState(0);

  const fullPrompt =
    "Build an issue tracker with Kanban boards and real-time updates";

  useEffect(() => {
    let isCancelled = false;

    const delay = (ms: number) =>
      new Promise<void>((r) => {
        const t = setTimeout(r, ms);
        if (isCancelled) clearTimeout(t);
      });

    const runSequence = async () => {
      while (!isCancelled) {
        setCurrentStep(0);
        setPromptText("");
        setChatMessages([]);
        setGeneratedFiles(0);
        setProgressPct(0);
        await delay(600);

        // Type prompt
        for (let i = 1; i <= fullPrompt.length; i++) {
          if (isCancelled) return;
          setPromptText(fullPrompt.slice(0, i));
          await delay(35);
        }
        await delay(400);

        setChatMessages([{ role: "user", text: fullPrompt }]);
        setPromptText("");
        await delay(300);

        // Build (stays on Prompt step)
        for (let i = 0; i < AI_RESPONSES.length; i++) {
          if (isCancelled) return;
          setChatMessages((prev) => [
            ...prev,
            { role: "ai", text: AI_RESPONSES[i], typing: true },
          ]);
          setGeneratedFiles(Math.min((i + 1) * 3, 14));
          setProgressPct(Math.min((i + 1) * 20, 100));
          await delay(420);
          setChatMessages((prev) =>
            prev.map((m, j) =>
              j === prev.length - 1 ? { ...m, typing: false } : m,
            ),
          );
        }
        await delay(300);

        // Preview step
        if (isCancelled) return;
        setCurrentStep(1);
        await delay(3000);

        // Publish step
        if (isCancelled) return;
        setCurrentStep(2);
        await delay(3500);
      }
    };

    runSequence();
    return () => {
      isCancelled = true;
    };
  }, []);

  const sidebarIcons = [
    { Icon: Eye, label: "Preview", active: currentStep >= 1 },
    { Icon: Code2, label: "Code", active: currentStep === 0 },
    { Icon: Database, label: "Database", active: false },
    { Icon: HardDrive, label: "Storage", active: false },
    { Icon: GitBranch, label: "Git", active: false },
    { Icon: Rocket, label: "Deploy", active: currentStep === 2 },
    { Icon: Settings, label: "Settings", active: false },
  ];

  return (
    <div className="relative w-full">
      <div className="absolute -inset-8 rounded-3xl bg-neutral-300/30 dark:bg-neutral-600/10 blur-3xl pointer-events-none" />

      <div className="relative rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-950 shadow-2xl shadow-neutral-900/10 dark:shadow-black/40 overflow-hidden">
        {/* App Header */}
        <div className="flex items-center justify-between px-3 py-2 border-b border-neutral-100 dark:border-neutral-800/80 bg-neutral-50/80 dark:bg-neutral-900/80">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-neutral-300 dark:bg-neutral-700" />
              <div className="w-2.5 h-2.5 rounded-full bg-neutral-300 dark:bg-neutral-700" />
              <div className="w-2.5 h-2.5 rounded-full bg-neutral-300 dark:bg-neutral-700" />
            </div>
            <div className="ml-3 flex items-center gap-1.5">
              <div className="w-4 h-4 rounded bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center">
                <Sparkles className="w-2.5 h-2.5 text-neutral-500" />
              </div>
              <span className="text-[11px] font-semibold text-neutral-700 dark:text-neutral-300">
                issue-tracker
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <AnimatePresence>
              {currentStep === 2 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, width: 0 }}
                  animate={{ opacity: 1, scale: 1, width: "auto" }}
                  className="flex items-center gap-1.5 px-2.5 py-1 bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 rounded-lg text-[10px] font-semibold"
                >
                  <Rocket className="w-3 h-3" />
                  Published
                </motion.div>
              )}
            </AnimatePresence>
            <div className="w-5 h-5 rounded-full bg-neutral-200 dark:bg-neutral-800" />
          </div>
        </div>

        {/* Main workspace */}
        <div className="flex h-80 sm:h-88">
          {/* Vertical sidebar */}
          <div className="w-9 shrink-0 border-r border-neutral-100 dark:border-neutral-800/80 bg-neutral-50/50 dark:bg-neutral-900/40 flex flex-col items-center py-2 gap-1">
            {sidebarIcons.map(({ Icon, label, active }) => (
              <div
                key={label}
                className={`w-6 h-6 rounded-lg flex items-center justify-center transition-colors duration-300 ${
                  active
                    ? "bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200"
                    : "text-neutral-400 dark:text-neutral-600"
                }`}
                title={label}
              >
                <Icon className="w-3 h-3" />
              </div>
            ))}
          </div>

          {/* Chat panel (left) */}
          <div className="w-[45%] border-r border-neutral-100 dark:border-neutral-800/80 flex flex-col bg-white dark:bg-neutral-950">
            <div className="flex-1 overflow-hidden p-3 space-y-2.5">
              <AnimatePresence mode="popLayout">
                {chatMessages.map((msg, i) => (
                  <motion.div
                    key={`${msg.role}-${i}`}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25 }}
                    className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[90%] rounded-xl px-2.5 py-1.5 text-[10px] leading-relaxed ${
                        msg.role === "user"
                          ? "bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900"
                          : "bg-neutral-100 dark:bg-neutral-800/80 text-neutral-600 dark:text-neutral-400"
                      }`}
                    >
                      {msg.text}
                      {msg.typing && (
                        <span className="inline-block ml-1">
                          <Loader2 className="w-2.5 h-2.5 animate-spin inline" />
                        </span>
                      )}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>

              <AnimatePresence>
                {generatedFiles > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/60 p-2"
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[9px] font-semibold text-neutral-500 uppercase tracking-wider">
                        Files changed
                      </span>
                      <span className="text-[9px] font-mono text-neutral-400">
                        {generatedFiles} files
                      </span>
                    </div>
                    <div className="w-full h-1 bg-neutral-200 dark:bg-neutral-800 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-neutral-900 dark:bg-neutral-100 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${progressPct}%` }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Input area */}
            <div className="border-t border-neutral-100 dark:border-neutral-800/80 p-2">
              <div className="flex items-end gap-1.5 bg-neutral-50 dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800 rounded-xl px-2.5 py-2">
                <p className="flex-1 text-[10px] text-neutral-500 dark:text-neutral-500 font-mono min-h-4 leading-relaxed">
                  {promptText}
                  {currentStep === 0 && (
                    <span className="inline-block w-0.5 h-3 bg-neutral-400 dark:bg-neutral-500 ml-0.5 align-[-0.15em] animate-pulse" />
                  )}
                  {!promptText && currentStep !== 0 && (
                    <span className="text-neutral-300 dark:text-neutral-700">
                      Describe what to build...
                    </span>
                  )}
                </p>
                <div
                  className={`w-5 h-5 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                    promptText
                      ? "bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900"
                      : "bg-neutral-200 dark:bg-neutral-800 text-neutral-400"
                  }`}
                >
                  <Send className="w-2.5 h-2.5" />
                </div>
              </div>
            </div>
          </div>

          {/* Right content panel */}
          <div className="flex-1 flex flex-col bg-neutral-50/50 dark:bg-neutral-900/30 overflow-hidden">
            <AnimatePresence mode="wait">
              {currentStep === 0 && (
                <motion.div
                  key="code-view"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, x: -10 }}
                  className="flex-1 flex flex-col"
                >
                  <div className="flex items-center gap-0 border-b border-neutral-100 dark:border-neutral-800/80 px-1">
                    <div className="py-1.5 px-2.5 text-[9px] font-medium text-neutral-800 dark:text-neutral-200 border-b-2 border-neutral-900 dark:border-neutral-100">
                      page.tsx
                    </div>
                    <div className="py-1.5 px-2.5 text-[9px] text-neutral-400">
                      schema.ts
                    </div>
                  </div>

                  <div className="flex-1 flex">
                    <div className="w-28 shrink-0 border-r border-neutral-100 dark:border-neutral-800/80 p-1.5 overflow-hidden">
                      {FILE_TREE.map((item, i) => (
                        <motion.div
                          key={item.name}
                          initial={
                            currentStep === 0
                              ? { opacity: 0, x: -5 }
                              : { opacity: 1 }
                          }
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            delay: currentStep === 0 ? i * 0.06 : 0,
                          }}
                          className={`flex items-center gap-1 py-0.5 rounded text-[9px] ${
                            item.active
                              ? "bg-neutral-200/60 dark:bg-neutral-800/60 text-neutral-900 dark:text-neutral-100 font-medium"
                              : "text-neutral-500 dark:text-neutral-500"
                          }`}
                          style={{
                            paddingLeft: `${item.depth * 8 + 4}px`,
                          }}
                        >
                          {item.type === "folder" ? (
                            <ChevronRight className="w-2 h-2 shrink-0 rotate-90" />
                          ) : (
                            <Code2 className="w-2 h-2 shrink-0" />
                          )}
                          <span className="truncate">{item.name}</span>
                        </motion.div>
                      ))}
                    </div>

                    <div className="flex-1 p-2 font-mono text-[8px] leading-[1.6] text-neutral-500 dark:text-neutral-500 overflow-hidden">
                      <AnimatePresence mode="wait">
                        {currentStep === 0 && (
                          <motion.div
                            key="code-lines"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="space-y-px"
                          >
                            <CodeLine
                              n={1}
                              text={'import { Board } from "./components"'}
                              kw
                            />
                            <CodeLine
                              n={2}
                              text={'import { db } from "@/lib/db"'}
                            />
                            <CodeLine n={3} text="" />
                            <CodeLine
                              n={4}
                              text="export default async function Page() {"
                              kw
                            />
                            <CodeLine
                              n={5}
                              text="  const tasks = await db.query.tasks"
                            />
                            <CodeLine
                              n={6}
                              text={'    .findMany({ orderBy: "position" })'}
                            />
                            <CodeLine n={7} text="" />
                            <CodeLine n={8} text="  return (" />
                            <CodeLine
                              n={9}
                              text={'    <main className="p-6">'}
                            />
                            <CodeLine
                              n={10}
                              text="      <Board tasks={tasks} />"
                              hl
                            />
                            <CodeLine n={11} text="    </main>" />
                            <CodeLine n={12} text="  )" />
                            <CodeLine n={13} text="}" />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>

                  <div className="h-12 border-t border-neutral-100 dark:border-neutral-800/80 bg-neutral-900 dark:bg-neutral-950 px-2.5 py-1.5 overflow-hidden">
                    <p className="text-[8px] font-mono text-neutral-500 mb-0.5">
                      $ pnpm dev
                    </p>
                    {currentStep === 0 && generatedFiles > 0 && (
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="text-[8px] font-mono text-emerald-400"
                      >
                        {`\u2713 Ready in 1.2s \u2014 http://localhost:3000`}
                      </motion.p>
                    )}
                  </div>
                </motion.div>
              )}

              {currentStep === 1 && (
                <motion.div
                  key="preview-view"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0 }}
                  className="flex-1 flex flex-col"
                >
                  <div className="flex items-center gap-2 px-2 py-1.5 border-b border-neutral-100 dark:border-neutral-800/80">
                    <div className="flex items-center gap-1">
                      <Monitor className="w-3 h-3 text-neutral-800 dark:text-neutral-200" />
                      <Smartphone className="w-3 h-3 text-neutral-400" />
                    </div>
                    <div className="flex-1 flex items-center bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-md px-2 py-0.5">
                      <span className="text-[9px] font-mono text-neutral-500 truncate">
                        localhost:3000
                      </span>
                    </div>
                    <RefreshCw className="w-3 h-3 text-neutral-400" />
                    <Maximize2 className="w-3 h-3 text-neutral-400" />
                  </div>

                  <div className="flex-1 bg-white dark:bg-neutral-950 p-3 overflow-hidden">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-lg bg-neutral-900 dark:bg-neutral-100 flex items-center justify-center">
                          <span className="text-[8px] font-bold text-white dark:text-neutral-900">
                            IT
                          </span>
                        </div>
                        <span className="text-[11px] font-semibold text-neutral-800 dark:text-neutral-200">
                          IssueTrack
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <div className="h-5 px-2 rounded-md bg-neutral-100 dark:bg-neutral-800 text-[8px] font-medium text-neutral-500 flex items-center">
                          + New
                        </div>
                        <div className="w-5 h-5 rounded-full bg-neutral-200 dark:bg-neutral-800" />
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-2 h-full max-h-44">
                      <KanbanColumn title="To Do" count={3}>
                        <KanbanCard color="bg-red-400" width="w-3/4" />
                        <KanbanCard
                          color="bg-amber-400"
                          width="w-full"
                          lines={2}
                        />
                        <KanbanCard color="bg-red-400" width="w-5/6" />
                      </KanbanColumn>
                      <KanbanColumn title="In Progress" count={2}>
                        <KanbanCard color="bg-blue-400" width="w-5/6" />
                        <KanbanCard
                          color="bg-purple-400"
                          width="w-full"
                          lines={2}
                        />
                      </KanbanColumn>
                      <KanbanColumn title="Done" count={1}>
                        <KanbanCard color="bg-emerald-400" width="w-2/3" done />
                      </KanbanColumn>
                    </div>
                  </div>
                </motion.div>
              )}

              {currentStep === 2 && (
                <motion.div
                  key="publish-view"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex-1 flex flex-col items-center justify-center text-center p-6 relative"
                >
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 200,
                      damping: 20,
                    }}
                    className="mb-4"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-neutral-900 dark:bg-neutral-100 flex items-center justify-center shadow-lg">
                      <CheckCircle2 className="w-7 h-7 text-white dark:text-neutral-900" />
                    </div>
                  </motion.div>
                  <motion.h3
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 }}
                    className="text-sm font-bold text-neutral-900 dark:text-neutral-100 mb-1"
                  >
                    Your app is live!
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25 }}
                    className="text-[11px] text-neutral-500 dark:text-neutral-400 mb-4"
                  >
                    Deployed instantly to production
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35 }}
                    className="flex items-center gap-2 px-3 py-1.5 bg-neutral-100 dark:bg-neutral-800 rounded-lg border border-neutral-200 dark:border-neutral-700"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[10px] font-mono text-neutral-600 dark:text-neutral-400">
                      issue-tracker.craftfast.app
                    </span>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Step indicator bar */}
        <div className="border-t border-neutral-100 dark:border-neutral-800/80 bg-neutral-50/80 dark:bg-neutral-900/60 px-4 py-2.5">
          <div className="flex items-center">
            {STEPS.map((s, i) => {
              const isActive = i === currentStep;
              const isPast = i < currentStep;
              return (
                <div key={s.id} className="contents">
                  <div className="flex items-center gap-1.5 shrink-0">
                    <div
                      className={`w-5 h-5 rounded-full flex items-center justify-center text-[9px] font-bold transition-all duration-500 ${
                        isActive
                          ? "bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 shadow-sm scale-110"
                          : isPast
                            ? "bg-neutral-300 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-400"
                            : "bg-neutral-100 dark:bg-neutral-900 text-neutral-400 dark:text-neutral-600"
                      }`}
                    >
                      {isPast ? <CheckCircle2 className="w-3 h-3" /> : i + 1}
                    </div>
                    <span
                      className={`text-[10px] font-semibold uppercase tracking-wider transition-colors duration-500 ${
                        isActive
                          ? "text-neutral-800 dark:text-neutral-200"
                          : isPast
                            ? "text-neutral-500 dark:text-neutral-500"
                            : "text-neutral-400 dark:text-neutral-600"
                      }`}
                    >
                      {s.label}
                    </span>
                  </div>
                  {i < STEPS.length - 1 && (
                    <div className="flex-1 mx-3 h-px bg-neutral-200 dark:bg-neutral-800 overflow-hidden">
                      <div
                        className="h-full bg-neutral-900 dark:bg-neutral-100 transition-all duration-700 ease-in-out"
                        style={{
                          width: isPast ? "100%" : isActive ? "50%" : "0%",
                        }}
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

function CodeLine({
  n,
  text,
  kw,
  hl,
}: {
  n: number;
  text: string;
  kw?: boolean;
  hl?: boolean;
}) {
  return (
    <div
      className={`flex gap-2 ${hl ? "bg-neutral-100/60 dark:bg-neutral-800/40 -mx-1 px-1 rounded" : ""}`}
    >
      <span className="w-4 text-right text-neutral-300 dark:text-neutral-700 select-none shrink-0">
        {n}
      </span>
      <span className={kw ? "text-neutral-700 dark:text-neutral-300" : ""}>
        {text}
      </span>
    </div>
  );
}

function KanbanColumn({
  title,
  count,
  children,
}: {
  title: string;
  count: number;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-neutral-50 dark:bg-neutral-900/60 rounded-lg p-2">
      <div className="flex items-center justify-between mb-2">
        <span className="text-[8px] font-bold text-neutral-500 uppercase tracking-wider">
          {title}
        </span>
        <span className="text-[8px] text-neutral-400 font-mono">{count}</span>
      </div>
      <div className="space-y-1.5">{children}</div>
    </div>
  );
}

function KanbanCard({
  color,
  width,
  lines = 1,
  done,
}: {
  color: string;
  width: string;
  lines?: number;
  done?: boolean;
}) {
  return (
    <div
      className={`bg-white dark:bg-neutral-800 p-1.5 rounded border border-neutral-100 dark:border-neutral-800 shadow-xs ${done ? "opacity-60" : ""}`}
    >
      <div
        className={`h-1.5 ${width} bg-neutral-200 dark:bg-neutral-700 rounded mb-1.5`}
      />
      {lines > 1 && (
        <div className="h-1.5 w-1/2 bg-neutral-200 dark:bg-neutral-700 rounded mb-1.5" />
      )}
      <div className="flex items-center justify-between">
        <div className="h-1 w-8 bg-neutral-100 dark:bg-neutral-700/50 rounded" />
        <div className={`w-2.5 h-2.5 rounded-full ${color}`} />
      </div>
    </div>
  );
}
