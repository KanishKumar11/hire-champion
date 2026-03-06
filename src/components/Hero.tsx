"use client"

import { useEffect, useState, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, SealCheck, Star } from "@phosphor-icons/react"
import { cn } from "@/lib/utils"

export function Hero() {
  const containerRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  // Parallax the shapes slightly on scroll
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100])
  const floatY = useTransform(scrollYProgress, [0, 1], [0, -50])

  return (
    <section
      ref={containerRef}
      className="relative pt-[180px] pb-32 overflow-hidden min-h-[90vh] flex items-center"
      id="home"
    >
      <div className="container mx-auto px-6 lg:px-12 grid lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10 max-w-7xl">

        {/* Left Content */}
        <div className="lg:col-span-7 relative z-20">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="mb-8"
          >
            <span className="joy-pill bg-white shadow-sm border border-black/5">
              <span className="relative flex h-2 w-2 mr-1">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF6B4A] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF6B4A]"></span>
              </span>
              Top 1% Global Talent Pool
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.1 }}
            className="text-[48px] md:text-[64px] lg:text-[72px] leading-[1.05] text-[#28282B] mb-6 tracking-tight max-w-[800px]"
          >
            <span className="joy-heading font-normal whitespace-nowrap">The talent you need.</span><br />
            <span className="font-sans font-bold text-[#FF6B4A] relative inline-block mt-1 whitespace-nowrap">
              Hired beautifully.
              <svg className="absolute -bottom-2 lg:-bottom-4 left-0 w-full h-3 text-[#FF6B4A]/30" viewBox="0 0 200 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.00015 6.78442C48.0163 -0.52848 131.62 -1.75845 198.053 6.78442" stroke="currentColor" strokeWidth="4" strokeLinecap="round" /></svg>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
            className="text-[#6B6B70] text-[19px] md:text-xl mb-12 max-w-lg leading-relaxed font-medium"
          >
            The exclusive network for world-class engineering, design, and product talent. Match in 48 hours. Zero risk.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 mb-16"
          >
            <a href="#cta" className="btn-joy text-[17px] px-8 py-4 flex items-center justify-center gap-2 group shadow-xl shadow-orange-500/10">
              Start Hiring <ArrowRight weight="bold" className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#trial" className="px-8 py-4 rounded-full bg-white border border-[#28282B]/10 hover:bg-[#28282B]/5 hover:border-[#28282B]/20 transition-all flex items-center justify-center font-semibold text-[#28282B] text-[17px] shadow-sm">
              Explore 15-Day Trial
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="flex items-center gap-4"
          >
            <div className="flex -space-x-3">
              <img src="https://i.pravatar.cc/100?img=1" className="w-10 h-10 rounded-full border-2 border-[#FCFAEF] shadow-sm" alt="User" />
              <img src="https://i.pravatar.cc/100?img=2" className="w-10 h-10 rounded-full border-2 border-[#FCFAEF] shadow-sm" alt="User" />
              <img src="https://i.pravatar.cc/100?img=3" className="w-10 h-10 rounded-full border-2 border-[#FCFAEF] shadow-sm" alt="User" />
              <div className="w-10 h-10 rounded-full border-2 border-[#FCFAEF] shadow-sm bg-white flex items-center justify-center text-xs font-bold text-[#6B6B70]">+5k</div>
            </div>
            <div className="text-sm font-medium text-[#6B6B70]">
              <div className="flex gap-1 text-[#FFB020] mb-0.5"><Star weight="fill" size={14} /><Star weight="fill" size={14} /><Star weight="fill" size={14} /><Star weight="fill" size={14} /><Star weight="fill" size={14} /></div>
              Loved by fast-growing startups
            </div>
          </motion.div>

        </div>

        {/* Right Content - Playful Bento Cards */}
        <div className="hidden lg:block lg:col-span-5 relative h-[600px] w-full perspective-1000">

          {/* Main Glass Card */}
          <motion.div
            style={{ y: floatY }}
            initial={{ opacity: 0, scale: 0.9, rotate: -5, x: 50 }}
            animate={{ opacity: 1, scale: 1, rotate: -2, x: 0 }}
            transition={{ type: "spring", stiffness: 80, damping: 20, delay: 0.2 }}
            className="joy-glass absolute top-12 -left-4 xl:left-4 w-[380px] xl:w-[420px] rounded-[32px] p-6 z-20 hover:-rotate-1 transition-transform duration-500 cursor-grab active:cursor-grabbing"
          >
            <div className="flex items-start justify-between mb-6">
              <div className="flex gap-4 items-center">
                <img src="https://i.pravatar.cc/150?img=68" alt="Profile" className="w-16 h-16 rounded-[20px] object-cover shadow-sm bg-white p-1" />
                <div>
                  <h3 className="font-bold text-xl text-[#28282B] flex items-center gap-1 tracking-tight">
                    Sarah Jenkins <SealCheck weight="fill" className="text-[#00C2A8]" />
                  </h3>
                  <p className="text-sm text-[#6B6B70] font-medium">Senior React Developer</p>
                </div>
              </div>
            </div>

            <div className="space-y-3 mb-6">
              <div className="bg-white/50 rounded-2xl p-3 border border-white/60">
                <div className="flex justify-between text-[13px] mb-2 font-semibold text-[#28282B]">
                  <span>Component Architecture</span>
                  <span>99%</span>
                </div>
                <div className="w-full bg-[#28282B]/5 rounded-full h-2 overflow-hidden">
                  <motion.div initial={{ width: 0 }} animate={{ width: "99%" }} transition={{ duration: 1, delay: 0.5 }} className="bg-[#FF6B4A] h-full rounded-full"></motion.div>
                </div>
              </div>
              <div className="bg-white/50 rounded-2xl p-3 border border-white/60">
                <div className="flex justify-between text-[13px] mb-2 font-semibold text-[#28282B]">
                  <span>Performance Optimization</span>
                  <span>95%</span>
                </div>
                <div className="w-full bg-[#28282B]/5 rounded-full h-2 overflow-hidden">
                  <motion.div initial={{ width: 0 }} animate={{ width: "95%" }} transition={{ duration: 1, delay: 0.7 }} className="bg-[#8A4AFF] h-full rounded-full"></motion.div>
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <span className="joy-pill bg-[#00C2A8]/10 text-[#00A38D] border-[#00C2A8]/20 font-bold">
                Available Now
              </span>
              <button className="w-10 h-10 rounded-full bg-[#28282B] text-white flex items-center justify-center hover:scale-110 transition-transform">
                <ArrowRight weight="bold" />
              </button>
            </div>
          </motion.div>

          {/* Secondary Floating Card 1 */}
          <motion.div
            style={{ y: y1 }}
            initial={{ opacity: 0, scale: 0.8, x: -50, y: 100 }}
            animate={{ opacity: 1, scale: 0.9, x: -80, y: 140 }}
            transition={{ type: "spring", stiffness: 60, damping: 25, delay: 0.4 }}
            className="absolute top-32 -left-20 xl:-left-28 w-[240px] joy-glass-darker rounded-[24px] p-5 z-10 -rotate-3 shadow-2xl shadow-[#FF6B4A]/5"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-[12px] bg-[#8A4AFF]/10 text-[#8A4AFF] flex items-center justify-center text-xl">✨</div>
              <div>
                <div className="font-bold text-[#28282B] text-sm">AI Matched</div>
                <div className="text-xs text-[#6B6B70] font-medium">In exactly 48h</div>
              </div>
            </div>
            <img src="https://i.pravatar.cc/100?img=49" className="w-10 h-10 rounded-full border-2 border-white absolute -bottom-3 -right-3 shadow-sm" alt="match" />
            <img src="https://i.pravatar.cc/100?img=33" className="w-10 h-10 rounded-full border-2 border-white absolute -bottom-3 right-4 shadow-sm" alt="match" />
          </motion.div>

          {/* Secondary Floating Card 2 */}
          <motion.div
            style={{ y: y2 }}
            initial={{ opacity: 0, scale: 0.8, x: 50, y: 200 }}
            animate={{ opacity: 1, scale: 0.9, x: 80, y: 300 }}
            transition={{ type: "spring", stiffness: 70, damping: 20, delay: 0.5 }}
            className="absolute bottom-12 -right-8 xl:right-0 bg-white border border-[#28282B]/5 shadow-xl w-[260px] xl:w-[280px] rounded-[24px] p-4 z-30 rotate-6"
          >
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs font-bold text-[#6B6B70] uppercase tracking-wider">Interview Scheduled</span>
              <span className="text-xs font-bold text-[#00C2A8] bg-[#00C2A8]/10 px-2 py-0.5 rounded-md">Today</span>
            </div>
            <div className="font-serif text-lg text-[#28282B] font-bold">Product Designer Lead</div>
            <div className="text-sm text-[#6B6B70] mt-1 flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-[#FFB020]" /> 02:00 PM EST</div>
          </motion.div>

        </div>

      </div>
    </section>
  )
}
