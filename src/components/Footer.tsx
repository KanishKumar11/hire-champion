"use client"

import { motion } from "framer-motion"
import { ArrowRight, EnvelopeSimple, LinkedinLogo, TwitterLogo } from "@phosphor-icons/react"

export function Footer() {
  return (
    <footer className="relative mt-20" id="cta">
      {/* Massive Gradient Mesh Background for CTA */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B4A]/20 via-[#FCFAEF] to-[#8A4AFF]/20 overflow-hidden rounded-t-[64px]">
        <div className="absolute -top-[50%] -left-[10%] w-[80%] h-[150%] bg-[#FFB020]/20 rounded-[100%] blur-[120px] mix-blend-multiply" />
        <div className="absolute -bottom-[20%] right-[0%] w-[60%] h-[80%] bg-[#00C2A8]/20 rounded-[100%] blur-[120px] mix-blend-multiply" />
      </div>

      <div className="relative z-10 pt-32 pb-12">
        <div className="container mx-auto px-6 lg:px-12 max-w-7xl">

          {/* CTA Block */}
          <div className="text-center mb-32 max-w-4xl mx-auto">
            <motion.h2
              className="text-[64px] md:text-[88px] font-normal leading-tight text-[#28282B] mb-8 joy-heading"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Let's build something <br />
              <span className="italic text-[#FF6B4A]">incredible.</span>
            </motion.h2>
            <motion.p
              className="text-[#6B6B70] text-xl mb-12 font-medium max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Skip the 6-month hiring cycles. Start building tomorrow with the top 1% of global tech talent.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, type: "spring", stiffness: 100, damping: 20 }}
            >
              <button className="btn-joy text-lg px-10 py-5 w-full sm:w-auto flex items-center justify-center gap-3 mx-auto group shadow-2xl shadow-[#28282B]/20">
                Hire Your Champion <ArrowRight weight="bold" className="group-hover:translate-x-1 transition-transform" />
              </button>
              <p className="text-sm font-bold text-[#6B6B70] mt-6">Start your 15-day risk-free trial today.</p>
            </motion.div>
          </div>

          <div className="w-full h-px bg-[#28282B]/10 mb-12" />

          {/* Footer Navigation */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-16">
            <div className="col-span-2 lg:col-span-2">
              <a href="#" className="flex items-center gap-2.5 mb-6 group inline-flex w-fit">
                <div className="w-8 h-8 rounded-[10px] bg-[#FF6B4A] flex items-center justify-center text-white font-bold text-sm shadow-[0_4px_12px_rgba(255,107,74,0.3)] group-hover:scale-105 transition-transform duration-300">
                  H
                </div>
                <span className="font-bold text-xl tracking-tight text-[#28282B]">
                  HireChampion
                </span>
              </a>
              <p className="text-[#6B6B70] font-medium text-sm leading-relaxed max-w-sm mb-6">
                Connecting ambitious companies with outperforming global talent. Beautifully simple, highly effective.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-[12px] bg-white flex items-center justify-center text-[#28282B] hover:bg-[#28282B] hover:text-white transition-colors shadow-sm border border-[#28282B]/5"><TwitterLogo weight="fill" size={20} /></a>
                <a href="#" className="w-10 h-10 rounded-[12px] bg-white flex items-center justify-center text-[#28282B] hover:bg-[#28282B] hover:text-white transition-colors shadow-sm border border-[#28282B]/5"><LinkedinLogo weight="fill" size={20} /></a>
                <a href="#" className="w-10 h-10 rounded-[12px] bg-white flex items-center justify-center text-[#28282B] hover:bg-[#28282B] hover:text-white transition-colors shadow-sm border border-[#28282B]/5"><EnvelopeSimple weight="fill" size={20} /></a>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-[#28282B] mb-5 tracking-tight font-sans">Platform</h4>
              <ul className="space-y-4">
                <li><a href="#services" className="text-[#6B6B70] hover:text-[#FF6B4A] transition-colors text-sm font-medium">Engineers</a></li>
                <li><a href="#services" className="text-[#6B6B70] hover:text-[#FF6B4A] transition-colors text-sm font-medium">Designers</a></li>
                <li><a href="#services" className="text-[#6B6B70] hover:text-[#FF6B4A] transition-colors text-sm font-medium">Product Managers</a></li>
                <li><a href="#how-it-works" className="text-[#6B6B70] hover:text-[#FF6B4A] transition-colors text-sm font-medium">How it Works</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-[#28282B] mb-5 tracking-tight font-sans">Company</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-[#6B6B70] hover:text-[#00C2A8] transition-colors text-sm font-medium">About Us</a></li>
                <li><a href="#" className="text-[#6B6B70] hover:text-[#00C2A8] transition-colors text-sm font-medium">Careers</a></li>
                <li><a href="#" className="text-[#6B6B70] hover:text-[#00C2A8] transition-colors text-sm font-medium">Blog</a></li>
                <li><a href="#" className="text-[#6B6B70] hover:text-[#00C2A8] transition-colors text-sm font-medium">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-[#28282B] mb-5 tracking-tight font-sans">Legal</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-[#6B6B70] hover:text-[#8A4AFF] transition-colors text-sm font-medium">Privacy Policy</a></li>
                <li><a href="#" className="text-[#6B6B70] hover:text-[#8A4AFF] transition-colors text-sm font-medium">Terms of Service</a></li>
                <li><a href="#" className="text-[#6B6B70] hover:text-[#8A4AFF] transition-colors text-sm font-medium">Cookie Settings</a></li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-[#28282B]/10">
            <p className="text-[#6B6B70] text-sm font-medium mb-4 md:mb-0">
              © 2026 HireChampion. All rights reserved.
            </p>
            <div className="flex bg-white rounded-full p-1 shadow-sm border border-[#28282B]/5">
              <div className="px-4 py-1 flex items-center gap-2 text-xs font-bold text-[#28282B]">
                <div className="w-2 h-2 rounded-full bg-[#00C2A8] animate-pulse"></div> Local Server Running
              </div>
            </div>
          </div>

        </div>
      </div>
    </footer>
  )
}
