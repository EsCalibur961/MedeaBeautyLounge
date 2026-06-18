import { motion } from "framer-motion";
import {
  Sparkles,
  Activity,
  Dumbbell,
  ShieldCheck,
  ArrowRight,
  CheckCircle,
} from "lucide-react";


function FloatingButton() {
  const gold = "#736357";

  return (
    <motion.a
      href="/prenota"
      className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-semibold shadow-lg"
      style={{
        background: gold,
        color: "white",
        textDecoration: "none",
        boxShadow: "0 8px 32px rgba(115,99,87,0.4)",
      }}
      animate={{ y: [0, -8, 0] }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <svg color="white" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
        <line x1="16" y1="2" x2="16" y2="6"/>
        <line x1="8" y1="2" x2="8" y2="6"/>
        <line x1="3" y1="10" x2="21" y2="10"/>
      </svg>
      Prenota ora
    </motion.a>
  );
}

export default function AddomeSculpt() {
  const gold = "#736357";
  const dark = "#1d1716";
  const cream = "#fffaf5";
  const text = "#6d5e57";

  return (
    <main className="min-h-screen overflow-hidden" style={{ background: cream, color: dark }}>
      <section className="relative px-6 pt-28 pb-20">
        <div className="relative max-w-6xl mx-auto text-center">
          <motion.p initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }}
            style={{ color: gold, letterSpacing: "0.3em", textTransform: "uppercase", fontSize: "14px", marginBottom: "22px" }}>
            Medea Beauty Lounge
          </motion.p>

          <motion.h1 initial={{ opacity: 0, y: 35 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="text-5xl md:text-7xl font-serif mb-6"
            style={{ color: dark }}>
            Addome Sculpt
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 35 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="max-w-3xl mx-auto text-lg md:text-xl leading-relaxed"
            style={{ color: text }}>
            Metodo di rimodellamento corporeo studiato per migliorare e valorizzare
            la silhouette con percorsi mirati e personalizzati
          </motion.p>

          <motion.a href="/prenota"
            initial={{ opacity: 0, y: 35 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="inline-flex items-center gap-3 mt-10 px-8 py-4 rounded-full font-semibold transition"
            style={{ background: gold, color: "white", textDecoration: "none" }}>
            Prenota una consulenza <ArrowRight size={18} />
          </motion.a>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          {[
            ["Rimodellamento mirato", "Trattamenti dedicati per ogni tipo di inestetismo", <Activity />],
            ["Tono e definizione", "Il corpo riacquisice un aspetto sano e curato", <Dumbbell />],
            ["Percorso personalizzato", "Ogni seduta viene adattata agli obiettivi e alle esigenze personali", <ShieldCheck />],
          ].map(([title, desc, icon], index) => (
            <motion.div key={title}
              initial={{ opacity: 0, y: 35 }} whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }} viewport={{ once: true }}
              className="rounded-3xl p-7"
              style={{ background: "#ffffff", border: "1px solid rgba(115,99,87,0.18)", boxShadow: "0 20px 60px rgba(29,23,22,0.08)" }}>
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                style={{ background: "rgba(115,99,87,0.14)", color: gold }}>
                {icon}
              </div>
              <h3 className="text-2xl font-serif mb-3" style={{ color: dark }}>{title}</h3>
              <p className="leading-relaxed" style={{ color: text }}>{desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -35 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <p className="uppercase text-sm mb-4" style={{ color: gold, letterSpacing: "0.3em" }}>Trattamento</p>
            <h2 className="text-4xl md:text-5xl font-serif mb-6" style={{ color: dark }}>
              Un corpo più armonioso e valorizzato
            </h2>
            <p className="leading-relaxed mb-6" style={{ color: text }}>
              Un metodo pensato per chi desidera riacquisire la forma fisica attraverso
              dei percorsi personalizzati mirati
            </p>
            <p className="leading-relaxed" style={{ color: text }}>
              Il percorso viene costruito in base agli obiettivi, con attenzione agli inestetismi
              da trattare
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 35 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="rounded-[2rem] p-1"
            style={{ background: "linear-gradient(135deg, rgba(115,99,87,0.7), rgba(255,255,255,0.7))" }}>
            <div className="rounded-[1.8rem] p-8 min-h-[360px] flex flex-col justify-center"
              style={{ background: "#ffffff", boxShadow: "0 20px 60px rgba(29,23,22,0.08)" }}>
              <Sparkles style={{ color: gold, marginBottom: "24px" }} size={42} />
              <h3 className="text-3xl font-serif mb-4" style={{ color: dark }}>
                Corpo, eleganza e sicurezza
              </h3>
              <p className="leading-relaxed" style={{ color: text }}>
                Un trattamento corpo in linea con l’esperienza premium di Medea Beauty Lounge,
                pensato per valorizzare la figura con cura e professionalità.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="max-w-5xl mx-auto text-center">
          <p className="uppercase text-sm mb-4" style={{ color: gold, letterSpacing: "0.3em" }}>Benefici</p>
          <h2 className="text-4xl md:text-5xl font-serif mb-12" style={{ color: dark }}>
            Perché scegliere Addome Sculpt
          </h2>

          <div className="grid md:grid-cols-2 gap-5 text-left">
            {[
              "Percorso studiato e personalizzato",
              "Rimodellamento corporeo rilassante",
              "Non solo addome trattiamo anche cellulite, Lipedema e grasso localizzato",
              "Miglioramento del benessere psicofisico",
            ].map((benefit, index) => (
              <motion.div key={benefit}
                initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }} viewport={{ once: true }}
                className="flex items-center gap-4 rounded-2xl p-5"
                style={{ background: "#ffffff", border: "1px solid rgba(115,99,87,0.18)", boxShadow: "0 15px 45px rgba(29,23,22,0.06)" }}>
                <CheckCircle style={{ color: gold }} size={20} />
                <span style={{ color: text }}>{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <motion.div initial={{ opacity: 0, y: 35 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="max-w-5xl mx-auto rounded-[2rem] p-10 md:p-16 text-center"
          style={{ background: gold, color: dark, boxShadow: "0 25px 70px rgba(29,23,22,0.14)" }}>
          <h2 className="text-4xl md:text-5xl font-serif mb-6" style={{ color: "white" }}>Scopri il percorso Addome Sculpt</h2>
          <p className="max-w-2xl mx-auto leading-relaxed mb-9" style={{ color: "white" }}>
            Prenota una consulenza presso Medea Beauty Lounge e scopri il trattamento più adatto a te
          </p>
          
        </motion.div>
      </section>
          <FloatingButton />
    </main>
  );
}