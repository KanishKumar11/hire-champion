"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { Layout, Handshake, Users, RocketLaunch } from "@phosphor-icons/react"
import clsx from "clsx"

const STEPS = [
  {
    num: "1",
    title: "Define Needs",
    desc: "Share precise requirements, tech stack, and culture fit through our streamlined AI intake.",
    icon: <Layout size={40} weight="duotone" className="text-[#FF6B4A]" />,
    bg: "bg-[#FF6B4A]/10",
    color: "text-[#FF6B4A]"
  },
  {
    num: "2",
    title: "AI Matrix Match",
    desc: "Our model curates the top 1% from our pool, verified by a rigorous human technical lead.",
    icon: <Users size={40} weight="duotone" className="text-[#8A4AFF]" />,
    bg: "bg-[#8A4AFF]/10",
    color: "text-[#8A4AFF]"
  },
  {
    num: "3",
    title: "Instant Setup",
    desc: "Meet a shortlisted, interview-ready panel of elite candidates within exactly 48 hours.",
    icon: <Handshake size={40} weight="duotone" className="text-[#00C2A8]" />,
    bg: "bg-[#00C2A8]/10",
    color: "text-[#00C2A8]"
  },
  {
    num: "4",
    title: "Seamless Build",
    desc: "Begin your 15-day risk-free trial. We handle all global HR complexities natively.",
    icon: <RocketLaunch size={40} weight="duotone" className="text-[#FFB020]" />,
    bg: "bg-[#FFB020]/10",
    color: "text-[#FFB020]"
  }
]

export function HowItWorks() {
  const containerRef = useRef<HTMLElement>(null)

  // Track scroll for the entire section to drive animations
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  // Smooth out the scroll progress
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  // Determine active step (0 to 3) based on scroll progress
  const [activeStep, setActiveStep] = useState(0)

  useEffect(() => {
    return smoothProgress.on("change", (latest) => {
      // Map progress 0-1 to step 0-3
      if (latest < 0.25) setActiveStep(0)
      else if (latest < 0.5) setActiveStep(1)
      else if (latest < 0.75) setActiveStep(2)
      else setActiveStep(3)
    })
  }, [smoothProgress])

  return (
    <section ref={containerRef} className="py-24 relative" id="how-it-works">
      <div className="container mx-auto px-6 lg:px-12 relative z-10 max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 relative">

          {/* Left Column: Sticky Header & Progress Indicator */}
          <div className="lg:col-span-5 relative">
            <div className="sticky top-32 z-20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-6"
              >
                <span className="joy-pill bg-[#8A4AFF]/10 text-[#8A4AFF] border-[#8A4AFF]/20">The Experience</span>
              </motion.div>
              <motion.h2
                className="text-[48px] md:text-[64px] lg:text-[72px] font-normal leading-[1.05] text-[#28282B] mb-6 joy-heading tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                How it <span className="italic">flows.</span>
              </motion.h2>
              <motion.p
                className="text-[#6B6B70] text-lg lg:text-xl max-w-md leading-relaxed font-medium mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                A seamless, accelerated hiring process designed to get you the industry's highest echelon of talent in days, not months.
              </motion.p>

              {/* Progress Tracker (Desktop) */}
              <div className="hidden lg:block relative pl-4 border-l-2 border-[#28282B]/5 space-y-8">
                {/* Background Line */}
                <div className="absolute left-[21px] top-3 bottom-0 w-[2px] bg-[#28282B]/10 rounded-full" />

                {/* Animated Line */}
                <motion.div
                  className="absolute left-[21px] top-3 w-[2px] bg-gradient-to-b from-[#FF6B4A] via-[#8A4AFF] to-[#00C2A8] origin-top rounded-full"
                  style={{ scaleY: smoothProgress, height: "100%" }}
                />

                {STEPS.map((step, idx) => (
                  <div key={idx} className={clsx("transition-all duration-500 relative pl-8", activeStep >= idx ? "opacity-100" : "opacity-30")}>
                    <div className={clsx("absolute left-0 top-1.5 w-3 h-3 rounded-full transition-colors duration-500 z-10", activeStep >= idx ? step.bg.replace('/10', '') : "bg-[#28282B]/20")} />
                    <h4 className="text-xl font-bold text-[#28282B]">{step.title}</h4>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Scrolling Bento Cards */}
          <div className="lg:col-span-7 pb-[10vh] relative z-20">
            {STEPS.map((step, idx) => (
              <StepCard key={idx} step={step} idx={idx} total={STEPS.length} />
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

function StepCard({ step, idx, total }: { step: any, idx: number, total: number }) {
  const isLast = idx === total - 1

  return (
    <div
      className={clsx(
        "sticky w-full",
        !isLast ? "mb-[40vh] lg:mb-[60vh]" : "mb-[50vh] lg:mb-[80vh]"
      )}
      style={{ top: `calc(120px + ${idx * 30}px)`, zIndex: 10 + idx }}
    >
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: false, margin: "-10% 0px -10% 0px" }}
        transition={{ duration: 0.6, type: "spring", stiffness: 100, damping: 20 }}
        className="joy-glass rounded-[40px] p-8 md:p-12 relative group shadow-2xl shadow-[#28282B]/5 bg-white/60 backdrop-blur-2xl ring-1 ring-white"
      >
        <div className="flex flex-col md:flex-row md:items-start gap-8">
          <div className="shrink-0 relative">
            <div className={clsx("w-20 h-20 md:w-24 md:h-24 rounded-[28px] flex items-center justify-center relative z-20 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]", step.bg)}>
              {step.icon}
            </div>
            <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-white shadow-xl border border-[#28282B]/5 flex items-center justify-center text-xl font-black text-[#28282B] font-sans z-30 group-hover:bg-[#28282B] group-hover:text-white transition-colors duration-300">
              {step.num}
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-bold mb-4 text-[#28282B] tracking-tight">{step.title}</h3>
            <p className="text-[#6B6B70] font-medium leading-relaxed text-lg">{step.desc}</p>

            {/* Subtle aesthetic ornament */}
            <div className="mt-8 flex gap-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className={clsx("w-2 h-2 rounded-full", step.bg.replace('/10', '/30'))} />
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
