"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { fadeUp, stagger } from "@/utils/motion";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO — TechStart",
    quote:
      "He built a product that blended engineering precision with flawless execution. The workflow automation alone saved us hundreds of hours.",
    image:
      "https://plus.unsplash.com/premium_photo-1673107429227-c3a22c6e511c?q=80&w=690&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Michael Chen",
    role: "Product Manager — InnovateCo",
    quote:
      "A rare mix of speed, clarity, and deep technical understanding. He turned a complex idea into a polished, scalable application effortlessly.",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Emily Rodriguez",
    role: "Founder — Digital Solutions",
    quote:
      "His AI + automation expertise helped us streamline our operations and massively improve our conversion rates. Highly recommended.",
    image:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=800&auto=format&fit=crop",
  },
];

export default function Testimonials() {
  return (
    <section className="py-6 px-8 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 bg-cyan-500/10 blur-3xl rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-500/10 blur-3xl rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={stagger as Variants}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6 text-center bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent"
            variants={fadeUp as Variants}
          >
            What Clients Say
          </motion.h2>

          <motion.p
            className="text-base md:text-lg text-slate-300 text-center mb-20 max-w-3xl mx-auto leading-relaxed"
            variants={fadeUp as Variants}
          >
            Words from founders, teams, and businesses who trusted me to bring
            their ideas to life through engineering, automation, and strategy.
          </motion.p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {testimonials.map((t) => (
              <motion.div
                key={t.name}
                variants={fadeUp as Variants}
                className="group relative rounded-xl p-4 bg-slate-900/60 backdrop-blur-xl border border-slate-700/40 hover:border-cyan-500/40 transition-all duration-500 overflow-hidden"
              >
                {/* Glow Hover Line */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br from-cyan-500 to-blue-600 transition duration-500"></div>

                <div className="flex items-center gap-4 mb-6 relative z-10">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden">
                    <div className="absolute inset-0 border-2 border-cyan-400/40 rounded-full group-hover:border-cyan-400 transition-all"></div>
                    <Image
                      src={t.image}
                      alt={t.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-white">
                      {t.name}
                    </h3>
                    <p className="text-slate-400 text-sm">{t.role}</p>
                  </div>
                </div>

                <p className="text-slate-300 leading-relaxed italic relative z-10">
                  “{t.quote}”
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
