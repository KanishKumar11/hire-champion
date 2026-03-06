"use client"

import { useRef } from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { ArrowRight, Star } from "@phosphor-icons/react"

const TALENTS = [
  {
    name: "Alexey Volkov",
    role: "Senior Full-Stack Engineer",
    img: "https://i.pravatar.cc/300?img=59",
    skills: ["React", "Node", "PostgreSQL"],
    match: "99.8%",
    bgName: "Ex-Stripe",
    bio: "Architected Stripe's microservices billing engine processing $2B+ monthly.",
    cardColor: "bg-[#FF6B4A]/10",
    iconColor: "text-[#FF6B4A]",
  },
  {
    name: "Priya Sharma",
    role: "AI/ML Solutions Architect",
    img: "https://i.pravatar.cc/300?img=47",
    skills: ["PyTorch", "OpenAI", "Python"],
    match: "98.5%",
    bgName: "Ex-Google",
    bio: "Lead researcher on the Brain team optimizing LLM inference latency by 40%.",
    cardColor: "bg-[#8A4AFF]/10",
    iconColor: "text-[#8A4AFF]",
  },
  {
    name: "Marcus Thorne",
    role: "UX/UI Design Lead",
    img: "https://i.pravatar.cc/300?img=12",
    skills: ["Figma", "Design Systems", "Framer"],
    match: "97.2%",
    bgName: "Ex-Airbnb",
    bio: "Designed the core booking flow that increased conversion by 12% globally.",
    cardColor: "bg-[#00C2A8]/10",
    iconColor: "text-[#00C2A8]",
  }
]

export function TalentShowcase() {
  const containerVars = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } }

  return (
    <section className="py-24 relative overflow-hidden" id="talent">
      <div className="container mx-auto px-6 lg:px-12 relative z-10 max-w-7xl">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <motion.h2
            className="text-[48px] md:text-[64px] leading-tight text-[#28282B] mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="joy-heading font-normal">Meet the</span><br />
            <span className="font-sans font-bold tracking-tight text-[#28282B]/30">Top 1%.</span>
          </motion.h2>
          <motion.p
            className="text-[#6B6B70] text-lg leading-relaxed max-w-2xl mx-auto font-medium"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            We don't accept just anyone. Our rigorous vetting ensures you only ever see the absolute finest technical and creative minds available globally.
          </motion.p>
        </div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 perspective-1000"
          style={{ perspective: 1200 }}
          variants={containerVars}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {TALENTS.map((talent, idx) => (
            <TalentCard key={idx} talent={talent} idx={idx} />
          ))}
        </motion.div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <a href="#cta" className="btn-joy inline-flex items-center gap-2">
            Browse the full network <ArrowRight weight="bold" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

function TalentCard({ talent, idx }: { talent: any, idx: number }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x)
  const mouseYSpring = useSpring(y)

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["6deg", "-6deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-6deg", "6deg"])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5
    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      initial={{ opacity: 0, scale: 0.9, y: 40 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay: idx * 0.1, type: "spring", stiffness: 100, damping: 20 }}
      className="relative z-10 w-full cursor-crosshair group h-full"
    >
      <div className={`joy-glass rounded-[32px] overflow-hidden flex flex-col pt-1 h-full ${talent.cardColor}`}>

        <div className="px-6 pt-6 pb-2 flex justify-between items-start" style={{ transform: "translateZ(20px)" }}>
          <div className="bg-white px-3 py-1.5 rounded-full shadow-sm text-xs font-bold text-[#28282B] flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-white border-2 border-current" />
            {talent.match} Match
          </div>
          <div className={`w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center ${talent.iconColor}`}>
            <Star weight="fill" size={16} />
          </div>
        </div>

        <div className="px-8 pb-8 flex-grow flex flex-col items-center text-center mt-2" style={{ transform: "translateZ(40px)" }}>
          <img
            src={talent.img}
            alt={talent.name}
            className="w-28 h-28 rounded-[24px] border-4 border-white object-cover mb-6 shadow-md"
          />

          <h3 className="text-[22px] font-bold tracking-tight mb-1 text-[#28282B]">
            {talent.name}
          </h3>
          <p className="text-[#6B6B70] font-medium text-[15px] mb-4">{talent.role} <br /><span className="text-xs font-bold text-[#28282B] bg-white px-2 py-0.5 rounded shadow-sm opacity-80 inline-block mt-2">{talent.bgName}</span></p>

          <div className="text-[#6B6B70] text-[15px] leading-relaxed mb-6 font-serif italic mx-auto">
            "{talent.bio}"
          </div>

          <div className="flex flex-wrap justify-center gap-2 mt-auto mb-6">
            {talent.skills.map((skill: string) => (
              <span key={skill} className="bg-white shadow-sm text-[#28282B] font-bold text-xs px-3 py-1.5 rounded-full inline-block">
                {skill}
              </span>
            ))}
          </div>

          <button className="w-full mt-2 py-3.5 rounded-2xl bg-white border border-transparent hover:border-[#28282B]/10 text-[#28282B] font-bold hover:bg-[#28282B] hover:text-white transition-all shadow-sm group-hover:shadow-md text-[15px] relative overflow-hidden">
            Interview
          </button>
        </div>

      </div>
    </motion.div>
  )
}
