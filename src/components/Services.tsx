"use client"

import { motion } from "framer-motion"
import { ArrowRight, Code, Brain, PaintBrushBroad, TrendUp, Strategy } from "@phosphor-icons/react"

const SERVICES = [
  {
    icon: <Code size={32} weight="duotone" className="text-[#8A4AFF]" />,
    bg: "bg-[#8A4AFF]/10",
    title: "Engineering",
    desc: "Full-stack, Frontend, Backend, DevOps, and Mobile App developers deeply experienced in modern stacks.",
    tags: ["React", "Node", "Python", "AWS"],
    colSpan: "lg:col-span-2",
  },
  {
    icon: <Brain size={32} weight="duotone" className="text-[#FF6B4A]" />,
    bg: "bg-[#FF6B4A]/10",
    title: "AI & Data",
    desc: "Machine Learning experts, Data Engineers, and LLM implementers specializing strictly in generative architectures.",
    tags: ["PyTorch", "OpenAI"],
    colSpan: "lg:col-span-1",
  },
  {
    icon: <PaintBrushBroad size={32} weight="duotone" className="text-[#00C2A8]" />,
    bg: "bg-[#00C2A8]/10",
    title: "Design",
    desc: "UX/UI Designers, Motion Artists creating stunning visuals that convert and engage.",
    tags: ["Figma", "Framer"],
    colSpan: "lg:col-span-1",
  },
  {
    icon: <TrendUp size={32} weight="duotone" className="text-[#FFB020]" />,
    bg: "bg-[#FFB020]/10",
    title: "Growth",
    desc: "SEO experts, Performance Marketers scaling your brand systematically.",
    tags: ["SEO", "AdWords"],
    colSpan: "lg:col-span-1",
  },
  {
    icon: <Strategy size={32} weight="duotone" className="text-[#28282B]" />,
    bg: "bg-[#28282B]/10",
    title: "Product",
    desc: "Agile Scrum Masters and Product Managers aligning vision to rigorous execution.",
    tags: ["Agile", "Strategy"],
    colSpan: "lg:col-span-1",
  }
]

export function Services() {
  const containerVars = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } }
  const itemVars = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } } }

  return (
    <section className="py-24 relative overflow-hidden" id="services">
      <div className="container mx-auto px-6 lg:px-12 relative z-10 max-w-7xl">

        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.h2
            className="text-[48px] md:text-[64px] leading-tight text-[#28282B] mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="joy-heading font-normal">One platform.</span><br />
            <span className="font-sans font-bold tracking-tight text-[#28282B]/30">Every single domain.</span>
          </motion.h2>
          <motion.p
            className="text-[#6B6B70] text-lg leading-relaxed max-w-2xl mx-auto font-medium"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Whether you need it built, marketed, or managed, we have the finest expert for it. Pre-vetted and ready to integrate immediately.
          </motion.p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVars}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {SERVICES.map((srv, idx) => (
            <ServiceCard key={idx} srv={srv} itemVars={itemVars} />
          ))}
        </motion.div>

      </div>
    </section>
  )
}

function ServiceCard({ srv, itemVars }: { srv: any, itemVars: any }) {
  return (
    <motion.div
      variants={itemVars}
      className={`relative rounded-[32px] pt-1 bg-white border border-[#28282B]/5 joy-shadow overflow-hidden group hover:-translate-y-2 transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${srv.colSpan}`}
    >
      <div className="absolute top-0 left-0 w-full h-[6px] bg-gradient-to-r from-transparent via-[#28282B]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

      <div className="p-8 h-full flex flex-col bg-white rounded-b-[31px]">
        <div className={`mb-8 w-14 h-14 rounded-2xl flex items-center justify-center ${srv.bg} shadow-sm group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]`}>
          {srv.icon}
        </div>

        <h3 className="text-2xl font-bold mb-3 tracking-tight text-[#28282B] font-sans">{srv.title}</h3>
        <p className="text-[#6B6B70] font-medium leading-relaxed max-w-sm flex-grow mb-8">{srv.desc}</p>

        <div className="flex flex-wrap gap-2 mt-auto mb-6">
          {srv.tags.map((tag: string) => (
            <span key={tag} className="joy-pill">
              {tag}
            </span>
          ))}
        </div>

        <a href="#cta" className="inline-flex items-center gap-2 text-[#28282B] font-bold w-max text-sm relative group/btn">
          <span>Hire {srv.title.split(' ')[0]}</span>
          <div className="w-8 h-8 rounded-full bg-[#FCFAEF] flex items-center justify-center group-hover/btn:bg-[#FF6B4A] group-hover/btn:text-white transition-colors">
            <ArrowRight weight="bold" size={14} className="group-hover/btn:-rotate-45 transition-transform duration-300" />
          </div>
        </a>
      </div>
    </motion.div>
  )
}
