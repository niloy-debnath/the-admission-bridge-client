export default function Filters({ filters, setFilters }) {
  return (
    <div className="bg-[#f8fef8] p-6 rounded-xl shadow-md mb-8">
      <h2 className="text-[#042004] text-xl font-bold mb-4 ">
        Filter Universities
      </h2>

      {/* Tuition Sliders */}
      <div className="flex flex-col md:flex-row gap-6 mb-4">
        <div className="flex-1">
          <label className="text-[#042004] font-medium mb-1 block">
            Min Tuition: ${filters.minFee || 0}
          </label>
          <input
            type="range"
            min="0"
            max="50000"
            value={filters.minFee || 0}
            onChange={(e) =>
              setFilters((prev) => ({ ...prev, minFee: e.target.value }))
            }
            className="w-full h-2 bg-[#7fd5ef] rounded-lg accent-[#29e424] cursor-pointer"
          />
        </div>

        <div className="flex-1">
          <label className="text-[#042004] font-medium mb-1 block">
            Max Tuition: ${filters.maxFee || 50000}
          </label>
          <input
            type="range"
            min="0"
            max="50000"
            value={filters.maxFee || 50000}
            onChange={(e) =>
              setFilters((prev) => ({ ...prev, maxFee: e.target.value }))
            }
            className="w-full h-2 bg-[#7fd5ef] rounded-lg accent-[#29e424] cursor-pointer"
          />
        </div>
      </div>

      {/* GPA & IELTS Inputs */}
      <div className="flex flex-col md:flex-row gap-6">
        <input
          type="number"
          placeholder="Your GPA"
          value={filters.gpa || ""}
          onChange={(e) =>
            setFilters((prev) => ({ ...prev, gpa: e.target.value }))
          }
          className="flex-1 px-4 py-2 border border-[#7fd5ef] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#29e424]"
        />
        <input
          type="number"
          placeholder="Your IELTS"
          value={filters.ielts || ""}
          onChange={(e) =>
            setFilters((prev) => ({ ...prev, ielts: e.target.value }))
          }
          className="flex-1 px-4 py-2 border border-[#7fd5ef] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#29e424]"
        />
      </div>
    </div>
  );
}
