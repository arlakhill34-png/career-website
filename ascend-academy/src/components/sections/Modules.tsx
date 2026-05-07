import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  BookOpen,
  FileText,
  Cpu,
  Receipt,
  Landmark,
  ShieldCheck,
  Wrench,
} from "lucide-react";

const modules = [
  {
    icon: BookOpen,
    title: "Business & Tax Fundamentals",
    points: [
      "Types of business & registration",
      "PAN, VAT, IRD basics",
      "Accounting principles",
      "Bookkeeping fundamentals",
    ],
  },
  {
    icon: FileText,
    title: "Manual Accounting",
    points: [
      "Journal & ledger entries",
      "Trial balance",
      "Final accounts preparation",
      "Bank reconciliation",
    ],
  },
  {
    icon: Cpu,
    title: "Software Accounting (Tally ERP)",
    points: [
      "Company creation & masters",
      "Voucher entries (sales, purchase, payment)",
      "Inventory management",
      "Reports & GST/VAT setup",
    ],
  },
  {
    icon: Receipt,
    title: "Practical Taxation",
    points: [
      "VAT calculation & filing",
      "TDS deduction & returns",
      "Income tax basics",
      "Practical e-filing on IRD portal",
    ],
  },
  {
    icon: Landmark,
    title: "Year-End & Banking",
    points: [
      "Year-end closing",
      "Depreciation & adjustments",
      "Bank documentation",
      "Loan, OD & cheque handling",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Adjustment & Compliance",
    points: [
      "Audit preparation",
      "Compliance with IRD",
      "Corrections & reconciliations",
      "Statutory reporting",
    ],
  },
  {
    icon: Wrench,
    title: "Extra Tools",
    points: [
      "Excel for accountants",
      "Email & office workflow",
      "Communication & soft skills",
      "Resume & interview prep",
    ],
  },
];

export function Modules() {
  const [open, setOpen] = useState(0);
  return (
    <section id="modules" className="relative py-24">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-flex items-center rounded-full glass px-3 py-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Course Modules
          </span>
          <h2 className="mt-5 font-display text-4xl sm:text-5xl font-bold leading-tight">
            A complete <span className="text-gradient-brand">syllabus</span>, module by module
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {modules.map((m, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={m.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className={`rounded-2xl glass-strong border-gradient overflow-hidden ${isOpen ? "ring-glow" : ""}`}
              >
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="w-full flex items-center gap-4 px-5 py-4 text-left hover:bg-white/[0.03] transition"
                >
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-brand text-white shrink-0">
                    <m.icon className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs text-muted-foreground">Module {i + 1}</div>
                    <div className="font-display text-lg font-semibold">{m.title}</div>
                  </div>
                  <motion.div animate={{ rotate: isOpen ? 180 : 0 }}>
                    <ChevronDown className="h-5 w-5 text-muted-foreground" />
                  </motion.div>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-5 pb-5 pl-20 grid sm:grid-cols-2 gap-2 text-sm">
                        {m.points.map((p) => (
                          <div key={p} className="flex items-start gap-2 text-muted-foreground">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-red" />
                            {p}
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
