import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-[#f8fef8] border-b border-[#29e424]/20"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-bold text-[#042004]">
          <span className="text-[#29e424]">Admission</span>Bridge
        </div>

        {/* Nav Links */}
        <div className="hidden md:flex gap-8 text-[#042004] font-medium">
          {["Home", "Universities", "Compare"].map((item) => (
            <a
              key={item}
              href="#"
              className="relative hover:text-[#527fea] transition"
            >
              {item}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#29e424] transition-all group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* CTA */}
        <button className="bg-[#29e424] text-white px-5 py-2 rounded-lg font-semibold hover:bg-[#527fea] transition shadow-md">
          Apply Now
        </button>
      </div>
    </motion.nav>
  );
}
