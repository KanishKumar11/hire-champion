"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ShieldCheck, CalendarCheck, Wallet, ArrowsLeftRight, LockKey } from "@phosphor-icons/react"

export function Trial() {
  const containerRef = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  // Subtle parallax for the background blob
  const y = useTransform(scrollYProgress, [0, 1], [-100, 100])

  return (
    <section ref={containerRef} className="py-24 relative overflow-hidden" id="trial">

      {/* Playful background blob */}
      <motion.div style={{ y }} className="absolute -right-[20%] top-[10%] w-[600px] h-[600px] bg-[#FFB020]/20 rounded-full blur-[140px] pointer-events-none z-0" />

      <div className="container mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10 max-w-7xl">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-black/5 text-sm font-bold text-[#28282B] mb-8">
            <ShieldCheck weight="fill" className="text-[#00C2A8]" size={20} /> Zero Commitments
          </div>
          <h2 className="text-[40px] md:text-[52px] lg:text-[64px] font-normal leading-[1.05] text-[#28282B] mb-6 tracking-tight">
            <span className="joy-heading lg:whitespace-nowrap">Experience the magic.</span><br />
            <span className="text-[#6B6B70] italic">On us.</span>
          </h2>
          <p className="text-[#6B6B70] text-lg mb-12 max-w-lg leading-relaxed font-medium">
            We are supremely confident in our talent quality. Let them prove themselves on your actual codebase before you process a single invoice.
          </p>

          <div className="space-y-8">
            <div className="flex gap-6 relative group bg-white p-6 rounded-[24px] shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-12 h-12 rounded-[16px] bg-[#FF6B4A]/10 text-[#FF6B4A] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                <CalendarCheck size={24} weight="duotone" />
              </div>
              <div>
                <h4 className="text-[19px] font-bold tracking-tight mb-2 text-[#28282B]">15-Day Trial Period</h4>
                <p className="text-[#6B6B70] leading-relaxed text-sm font-medium">Integrate the candidate into your daily standups and sprint cycles alongside your team.</p>
              </div>
            </div>

            <div className="flex gap-6 relative group bg-white p-6 rounded-[24px] shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-12 h-12 rounded-[16px] bg-[#00C2A8]/10 text-[#00C2A8] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                <Wallet size={24} weight="duotone" />
              </div>
              <div>
                <h4 className="text-[19px] font-bold tracking-tight mb-2 text-[#28282B]">Pay ONLY if Retained</h4>
                <p className="text-[#6B6B70] leading-relaxed text-sm font-medium">You only process the first invoice if you enthusiastically decide to retain the talent after Day 15.</p>
              </div>
            </div>

            <div className="flex gap-6 relative group bg-white p-6 rounded-[24px] shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-12 h-12 rounded-[16px] bg-[#8A4AFF]/10 text-[#8A4AFF] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                <ArrowsLeftRight size={24} weight="duotone" />
              </div>
              <div>
                <h4 className="text-[19px] font-bold tracking-tight mb-2 text-[#28282B]">Instant Replacement</h4>
                <p className="text-[#6B6B70] leading-relaxed text-sm font-medium">Not a perfect fit? We'll replace them immediately, no questions asked, resetting the trial.</p>
              </div>
            </div>
          </div>

        </motion.div>

        {/* Right Content - Playful timeline bubbles */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10"
        >
          <div className="joy-glass rounded-[40px] p-6 md:p-10 lg:p-12 relative overflow-hidden h-[600px] flex flex-col justify-center lg:ml-8">

            <div className="absolute top-8 right-8">
              <span className="text-xs font-bold bg-white text-[#28282B] px-4 py-2 rounded-full shadow-sm flex items-center gap-2">
                <LockKey size={16} weight="fill" className="text-[#8A4AFF]" /> Secure Process
              </span>
            </div>

            <div className="space-y-8 relative z-10">
              {/* Bubble 1 */}
              <motion.div
                initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}
                className="bg-white rounded-[24px] p-4 md:p-5 shadow-sm ml-0 md:w-[90%] relative"
              >
                <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-[#FCFAEF] flex items-center justify-center border-2 border-white shadow-sm">
                  <div className="w-2 h-2 rounded-full bg-[#28282B]" />
                </div>
                <h5 className="font-bold tracking-tight text-lg mb-1 text-[#28282B] ml-4">Day 1: Onboarding</h5>
                <p className="text-[#6B6B70] text-sm ml-4">$0.00 charged. Welcome them aboard.</p>
              </motion.div>

              {/* Connecting swoosh */}
              <svg className="absolute left-6 top-[80px] w-8 h-[60px] opacity-20" viewBox="0 0 32 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 0C16 30 32 30 32 60" stroke="#28282B" strokeWidth="2" strokeDasharray="4 4" />
              </svg>

              {/* Bubble 2 */}
              <motion.div
                initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}
                className="bg-white rounded-[24px] p-4 md:p-5 shadow-sm md:ml-[10%] ml-4 md:w-[90%] relative border-2 border-[#00C2A8]/20"
              >
                <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-[#FCFAEF] flex items-center justify-center border-2 border-white shadow-sm">
                  <div className="w-2 h-2 rounded-full bg-[#00C2A8]" />
                </div>
                <h5 className="font-bold tracking-tight text-lg mb-1 text-[#28282B] ml-4 pb-1">
                  Day 1-14: Evaluation
                  <span className="text-[#00C2A8] font-bold text-xs ml-2 bg-[#00C2A8]/10 px-2 py-1 rounded-full">Active</span>
                </h5>
                <p className="text-[#6B6B70] text-sm ml-4">Assess technical skills & cultural fit live.</p>
              </motion.div>

              {/* Connecting swoosh */}
              <svg className="absolute left-[45px] top-[220px] w-8 h-[60px] opacity-20" viewBox="0 0 32 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 0C16 30 0 30 0 60" stroke="#28282B" strokeWidth="2" strokeDasharray="4 4" />
              </svg>

              {/* Bubble 3 */}
              <motion.div
                initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.7 }}
                className="bg-[#28282B] text-white rounded-[24px] p-4 md:p-5 shadow-xl ml-0 md:w-[90%] relative"
              >
                <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#FF6B4A] flex items-center justify-center border-[3px] border-[#28282B] shadow-sm">
                  <div className="w-3 h-3 rounded-full bg-white" />
                </div>
                <h5 className="font-bold tracking-tight text-lg mb-1 ml-6">Day 15: Decision</h5>
                <p className="text-white/70 text-sm ml-6">Approve talent. First invoice securely processed.</p>
              </motion.div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
