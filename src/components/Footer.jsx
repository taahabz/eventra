"use client";

import { Github, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0f1621] relative z-10 text-white py-12 px-4 border-t border-[#00E5FF]/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 bg-[#1a202c] p-8 rounded-2xl shadow-lg border border-[#00E5FF]/10 hover:border-[#00E5FF]/30 transition-all duration-300">
        {/* Branding Section */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="bg-[#00E5FF]/10 p-2 rounded-lg border border-[#00E5FF]/20">
              <div className="w-6 h-6 text-[#00E5FF] flex items-center justify-center font-bold">E</div>
            </div>
            <span className="text-xl font-bold tracking-wide bg-gradient-to-r from-[#00E5FF] to-[#c471ed] bg-clip-text text-transparent">
              EVENTRA
            </span>
          </div>
          <p className="text-sm text-zinc-300 leading-relaxed">
            Event planning made simple. Your one-stop solution for organizing and managing all your events.
          </p>
        </div>

        {/* Team Member Section - TAAHA */}
        <div className="space-y-4">
          <h4 className="font-bold text-white text-sm tracking-wider uppercase flex items-center">
            <span className="w-3 h-3 bg-[#00E5FF] rounded-full mr-2"></span>
            TAAHA
          </h4>
          <p className="text-sm text-zinc-300 leading-relaxed">
            Web Developer & UI Designer
          </p>
          <ul className="space-y-3 text-zinc-300 text-sm">
            <li>
              <a href="#" className="flex items-center gap-3 group">
                <div className="bg-[#00E5FF]/10 p-2 rounded-lg border border-[#00E5FF]/20 group-hover:bg-[#00E5FF]/20 transition-all">
                  <Mail className="w-4 h-4 text-[#00E5FF]" />
                </div>
                <span className="group-hover:text-[#00E5FF] transition-colors">taahabz@email.com</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-3 group">
                <div className="bg-[#00E5FF]/10 p-2 rounded-lg border border-[#00E5FF]/20 group-hover:bg-[#00E5FF]/20 transition-all">
                  <Github className="w-4 h-4 text-[#00E5FF]" />
                </div>
                <span className="group-hover:text-[#00E5FF] transition-colors">Github</span>
              </a>
            </li>
          </ul>
        </div>

       {/* Team Member Section - HAMZA */}
<div className="space-y-4">
  <h4 className="font-bold text-white text-sm tracking-wider uppercase flex items-center">
    <span className="w-3 h-3 bg-[#FF00FF] rounded-full mr-2 shadow-[0_0_8px_#FF00FF]"></span>
    HAMZA
  </h4>
  <p className="text-sm text-zinc-300 leading-relaxed">
    Web Developer
  </p>
  <ul className="space-y-3 text-zinc-300 text-sm">
    <li>
      <a href="#" className="flex items-center gap-3 group">
        <div className="bg-[#00E5FF]/10 p-2 rounded-lg border border-[#00E5FF]/20 group-hover:bg-[#00E5FF]/20 transition-all">
          <Mail className="w-4 h-4 text-[#00E5FF]" />
        </div>
        <span className="group-hover:text-[#00E5FF] transition-colors">hamza@email.com</span>
      </a>
    </li>
    <li>
      <a href="#" className="flex items-center gap-3 group">
        <div className="bg-[#00E5FF]/10 p-2 rounded-lg border border-[#00E5FF]/20 group-hover:bg-[#00E5FF]/20 transition-all">
          <Github className="w-4 h-4 text-[#00E5FF]" />
        </div>
        <span className="group-hover:text-[#00E5FF] transition-colors">GitHub</span>
      </a>
    </li>
  </ul>
</div>

        {/* Team Member Section - JUNAID */}
        <div className="space-y-4">
          <h4 className="font-bold text-white text-sm tracking-wider uppercase flex items-center">
            <span className="w-3 h-3 bg-[#c471ed] rounded-full mr-2"></span>
            JUNAID
          </h4>
          <p className="text-sm text-zinc-300 leading-relaxed">
            Backend Integration
          </p>
          <ul className="space-y-3 text-zinc-300 text-sm">
            
          <li>
              <a href="#" className="flex items-center gap-3 group">
                <div className="bg-[#00E5FF]/10 p-2 rounded-lg border border-[#00E5FF]/20 group-hover:bg-[#00E5FF]/20 transition-all">
                  <Mail className="w-4 h-4 text-[#00E5FF]" />
                </div>
                <span className="group-hover:text-[#00E5FF] transition-colors">junaidalam1177@email.com</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-3 group">
                <div className="bg-[#00E5FF]/10 p-2 rounded-lg border border-[#00E5FF]/20 group-hover:bg-[#00E5FF]/20 transition-all">
                  <Github className="w-4 h-4 text-[#00E5FF]" />
                </div>
                <span className="group-hover:text-[#00E5FF] transition-colors">Github</span>
              </a>
            </li>

          </ul>
        </div>
      </div>
    </footer>
  );
} 