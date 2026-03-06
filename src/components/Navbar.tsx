"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { List, X } from "@phosphor-icons/react"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4 pointer-events-none"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      >
        <div className={`
          pointer-events-auto flex items-center justify-between px-6 py-3 w-full max-w-5xl rounded-full transition-all duration-500
          ${isScrolled ? 'joy-glass-darker shadow-xl shadow-black/5' : 'bg-transparent'}
        `}>

          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 z-50 group">
            <div className="w-8 h-8 rounded-[10px] bg-[#FF6B4A] flex items-center justify-center text-white font-bold text-sm shadow-[0_4px_12px_rgba(255,107,74,0.3)] group-hover:scale-105 transition-transform duration-300">
              H
            </div>
            <span className="font-bold text-xl tracking-tight text-[#28282B] group-hover:opacity-80 transition-opacity">
              HireChampion
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            <NavLink href="#services">Services</NavLink>
            <NavLink href="#how-it-works">Experience</NavLink>
            <NavLink href="#trial">15 Days Free</NavLink>
            <NavLink href="#talent">The Top 1%</NavLink>
          </div>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-4">
            <a href="#login" className="text-sm font-semibold text-[#6B6B70] hover:text-[#28282B] transition-colors">
              Log in
            </a>
            <a href="#cta" className="btn-joy text-sm px-5 py-2">
              Hire Talent
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden relative z-50 p-2 text-[#28282B]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <List size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="fixed inset-0 z-40 p-4 pt-24"
          >
            <div className="joy-glass-darker w-full h-full rounded-[32px] p-6 flex flex-col justify-center items-center gap-8 shadow-2xl">
              <MobileNavLink href="#services" onClick={() => setIsMobileMenuOpen(false)}>Services</MobileNavLink>
              <MobileNavLink href="#how-it-works" onClick={() => setIsMobileMenuOpen(false)}>Experience</MobileNavLink>
              <MobileNavLink href="#trial" onClick={() => setIsMobileMenuOpen(false)}>15 Days Free</MobileNavLink>
              <MobileNavLink href="#talent" onClick={() => setIsMobileMenuOpen(false)}>The Top 1%</MobileNavLink>
              <div className="w-full h-px bg-black/10 my-4" />
              <a href="#cta" className="btn-joy w-full text-center text-lg py-4" onClick={() => setIsMobileMenuOpen(false)}>
                Start Hiring Today
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

function NavLink({ href, children }: { href: string, children: React.ReactNode }) {
  return (
    <a href={href} className="text-[15px] font-medium text-[#6B6B70] hover:text-[#28282B] transition-colors relative group py-2">
      {children}
      <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#FF6B4A] opacity-0 group-hover:opacity-100 transition-opacity" />
    </a>
  )
}

function MobileNavLink({ href, onClick, children }: { href: string, onClick: () => void, children: React.ReactNode }) {
  return (
    <a href={href} onClick={onClick} className="text-3xl font-serif text-[#28282B] tracking-tight">
      {children}
    </a>
  )
}
