"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { CaretLeft, CaretRight, Quotes } from "@phosphor-icons/react"

const TESTIMONIALS = [
  {
    quote: "We spent 6 months trying to hire a principal engineer. HireChampion matched us with Lena in 48 hours, and she shipped our core feature in her trial week.",
    name: "David Chen",
    role: "CTO, FinTech Scaleup",
    img: "https://i.pravatar.cc/150?img=11",
    logoColor: "bg-[#FF6B4A]"
  },
  {
    quote: "The quality of the talent pool is exceptional. It's fundamentally changed how we view remote hiring—from a risk to our biggest competitive advantage.",
    name: "Sarah Miller",
    role: "VP Engineering, SaaS Co",
    img: "https://i.pravatar.cc/150?img=5",
    logoColor: "bg-[#8A4AFF]"
  },
  {
    quote: "Our design system was a mess. The UX Lead we hired through HireChampion rebuilt it entirely within a month. Worth every single penny.",
    name: "James Wilson",
    role: "Product Flow",
    img: "https://i.pravatar.cc/150?img=8",
    logoColor: "bg-[#00C2A8]"
  }
]

export function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  const next = () => {
    setCurrent((prev) => (prev + 1) % TESTIMONIALS.length)
    setAutoplay(false) // Pause on manual interaction
  }

  const prev = () => {
    setCurrent((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)
    setAutoplay(false) // Pause on manual interaction
  }

  useEffect(() => {
    if (autoplay) {
      timerRef.current = setInterval(() => {
        setCurrent((prev) => (prev + 1) % TESTIMONIALS.length)
      }, 5000)
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [autoplay])

  return (
    <section className="py-24 relative overflow-hidden" id="testimonials">
      <div className="container mx-auto px-6 lg:px-12 relative z-10 max-w-5xl">

        <div className="text-center mb-16">
          <motion.h2
            className="text-[48px] md:text-[56px] font-normal leading-tight text-[#28282B] mb-6 joy-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Don't just take <br /><span className="italic text-[#6B6B70]">our word for it.</span>
          </motion.h2>
        </div>

        <div className="relative joy-glass rounded-[40px] p-8 md:p-16 text-center shadow-xl shadow-[#28282B]/5 border border-white">

          <Quotes size={64} weight="fill" className="text-[#FFB020]/20 absolute top-8 left-8 md:top-12 md:left-12 rotate-180" />

          <div className="relative overflow-hidden h-[240px] md:h-[200px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -20 }}
                transition={{ duration: 0.4, type: "spring", stiffness: 200, damping: 20 }}
                className="absolute inset-0 flex flex-col items-center justify-center"
              >
                <p className="text-2xl md:text-[32px] leading-tight text-[#28282B] mb-8 joy-heading max-w-3xl">
                  "{TESTIMONIALS[current].quote}"
                </p>
                <div className="flex items-center gap-4">
                  <div className={`w-14 h-14 rounded-[16px] p-1 bg-white shadow-sm flex-shrink-0 relative`}>
                    <img
                      src={TESTIMONIALS[current].img}
                      alt={TESTIMONIALS[current].name}
                      className="w-full h-full rounded-[12px] object-cover"
                    />
                    <div className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-white ${TESTIMONIALS[current].logoColor}`} />
                  </div>
                  <div className="text-left">
                    <div className="font-bold text-[#28282B] text-[17px] tracking-tight">{TESTIMONIALS[current].name}</div>
                    <div className="text-[#6B6B70] text-sm font-medium">{TESTIMONIALS[current].role}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex gap-4 justify-center mt-12">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full border border-[#28282B]/10 flex items-center justify-center text-[#28282B] hover:bg-[#28282B] hover:text-white hover:border-transparent transition-all shadow-sm group"
              aria-label="Previous testimonial"
            >
              <CaretLeft weight="bold" className="group-hover:-translate-x-1 transition-transform" />
            </button>
            <button
              onClick={next}
              className="w-12 h-12 rounded-full border border-[#28282B]/10 flex items-center justify-center text-[#28282B] hover:bg-[#28282B] hover:text-white hover:border-transparent transition-all shadow-sm group"
              aria-label="Next testimonial"
            >
              <CaretRight weight="bold" className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

        </div>
      </div>
    </section>
  )
}
