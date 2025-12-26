import { motion } from "framer-motion";

export default function Hero({ filters, setFilters }) {
  return (
    <section className="bg-[#f8fef8] py-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-6 text-center md:text-left"
      >
        {/* Headline */}
        <h1 className="text-5xl md:text-6xl font-bold text-[#042004] mb-6">
          Find Your <span className="text-[#29e424]">Perfect University</span>
        </h1>

        {/* Subheadline */}
        <p className="text-gray-500 text-sm md:text-xl mb-10 max-w-xl">
          Compare universities by GPA, IELTS, and tuition. Quickly apply to the
          best fit for your future.
        </p>

        {/* Quick Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex flex-col md:flex-row gap-4 justify-center md:justify-start items-center"
        >
          {/* Country Input */}
          <input
            type="text"
            placeholder="Country"
            value={filters.country || ""}
            onChange={(e) =>
              setFilters((prev) => ({ ...prev, country: e.target.value }))
            }
            className="px-4 py-3 rounded-lg border border-[#7fd5ef] focus:outline-none focus:ring-2 focus:ring-[#29e424] w-full md:w-60"
          />

          {/* Degree Select */}
          <select
            value={filters.degree || ""}
            onChange={(e) =>
              setFilters((prev) => ({ ...prev, degree: e.target.value }))
            }
            className="px-4 py-3 rounded-lg border border-[#7fd5ef] focus:outline-none focus:ring-2 focus:ring-[#29e424] w-full md:w-60"
          >
            <option value="">Degree Level</option>
            <option value="Bachelor">Bachelor</option>
            <option value="Master">Master</option>
            <option value="PhD">PhD</option>
          </select>

          {/* Search Button (optional, you can leave onClick empty if filtering is real-time) */}
          <button
            className="bg-[#29e424] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#527fea] transition shadow-md w-full md:w-auto"
            onClick={() => setFilters(filters)}
          >
            Search
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}
