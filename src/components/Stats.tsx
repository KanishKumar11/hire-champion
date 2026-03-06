"use client"

import { useEffect, useState, useRef } from "react"
import { motion, useInView } from "framer-motion"

interface StatProps {
  value: number;
  suffix: string;
  label: string;
  delay?: number;
}

function AnimatedNumber({ value, suffix, label, delay = 0 }: StatProps) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  useEffect(() => {
    if (isInView) {
      let start = 0
      const duration = 2000
      let startTime: number | null = null

      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp
        const progress = Math.min((timestamp - startTime) / duration, 1)
        const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress)
        setCount(Math.floor(easeProgress * (value - start) + start))

        if (progress < 1) {
          window.requestAnimationFrame(step)
        }
      }

      setTimeout(() => window.requestAnimationFrame(step), delay)
    }
  }, [isInView, value, delay])

  return (
    <div ref={ref} className="text-center pt-2">
      <h3 className="joy-heading text-5xl md:text-6xl font-normal text-[#28282B] mb-2">
        {count}{suffix}
      </h3>
      <p className="text-[#6B6B70] font-bold text-sm uppercase tracking-widest">{label}</p>
    </div>
  )
}

export function Stats() {
  return (
    <section className="relative z-20 pb-16 md:pb-24 -mt-10">
      <div className="container mx-auto px-6 lg:px-12 flex justify-center max-w-6xl">

        <motion.div
          className="w-full grid grid-cols-2 md:grid-cols-4 gap-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="joy-glass rounded-[32px] p-8 flex items-center justify-center hover:-translate-y-1 transition-transform duration-300">
            <AnimatedNumber value={100} suffix="k+" label="Talent Pool" delay={0} />
          </div>
          <div className="joy-glass rounded-[32px] p-8 flex items-center justify-center hover:-translate-y-1 transition-transform duration-300">
            <AnimatedNumber value={48} suffix="h" label="Avg Match" delay={200} />
          </div>
          <div className="joy-glass rounded-[32px] p-8 flex items-center justify-center hover:-translate-y-1 transition-transform duration-300">
            <AnimatedNumber value={97} suffix="%" label="Success Rate" delay={400} />
          </div>
          <div className="joy-glass rounded-[32px] p-8 flex items-center justify-center hover:-translate-y-1 transition-transform duration-300">
            <AnimatedNumber value={120} suffix="+" label="Skill Types" delay={600} />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
