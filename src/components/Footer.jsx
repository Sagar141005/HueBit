import React from "react";
import { motion } from "motion/react";
import { Heart, ExternalLink, Eclipse } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-(--text)/5 bg-(--bg) transition-colors duration-500 mt-24">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 mb-12">
          <div className="md:col-span-5 space-y-6">
            <div className="flex items-center gap-2 text-(--text)">
              <div className="p-1.5 rounded-lg bg-(--primary) text-white">
                <Eclipse size={18} />
              </div>
              <span className="text-xl font-bold tracking-tight">HueBit</span>
            </div>
            <p className="text-(--text-muted) text-sm leading-relaxed max-w-sm">
              A semantic color system generator for modern web applications. We
              bridge the gap between design creativity and engineering
              constraints to solve the dark mode paradox.
            </p>
          </div>

          <div className="hidden md:block md:col-span-1" />

          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-(--text-muted)">
              Resources
            </h4>
            <ul className="space-y-3 text-sm font-medium text-(--text)/80">
              <FooterLink href="#">Documentation</FooterLink>
              <FooterLink href="https://tailwindcss.com" external>
                Tailwind CSS
              </FooterLink>
              <FooterLink
                href="https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html"
                external
              >
                WCAG Guidelines
              </FooterLink>
            </ul>
          </div>

          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-(--text-muted)">
              Connect
            </h4>
            <ul className="space-y-3 text-sm font-medium text-(--text)/80">
              <FooterLink href="https://x.com/not_sagar1410" external>
                Twitter / X
              </FooterLink>
              <FooterLink
                href="https://www.linkedin.com/in/sagar-saini-9b45a52b2/"
                external
              >
                LinkedIn
              </FooterLink>
              <FooterLink href="https://github.com/Sagar141005" external>
                GitHub
              </FooterLink>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-(--text)/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <div className="text-(--text-muted)">
            &copy; {currentYear} HueBit. All rights reserved.
          </div>

          <div className="flex items-center gap-1.5 text-(--text-muted)">
            <span>Made with</span>
            <motion.div
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="cursor-pointer"
            >
              <Heart
                size={14}
                className="fill-rose-500 text-rose-500 transition-all"
              />
            </motion.div>
            <span>by</span>
            <a
              href="https://sagarsaini.com"
              target="_blank"
              rel="noreferrer"
              className="font-medium text-(--text) hover:underline transition-colors"
            >
              Sagar
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ href, children, external }) {
  return (
    <li>
      <motion.a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noreferrer" : undefined}
        className="flex items-center gap-1 hover:text-(--primary) transition-colors w-fit"
        whileHover={{ x: 4 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {children}
        {external && <ExternalLink size={12} className="opacity-50" />}
      </motion.a>
    </li>
  );
}
