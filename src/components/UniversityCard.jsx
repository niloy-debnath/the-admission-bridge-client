export default function UniversityCard({ university, compare, setCompare }) {
  const selected = compare.some((c) => c.id === university.id);

  return (
    <div className="bg-[#f8fef8] border border-[#7fd5ef] rounded-xl shadow-md p-6 flex flex-col justify-between hover:shadow-xl transition">
      {/* Top row: Name + Compare */}
      <div className="flex justify-between items-start mb-4">
        <h2 className="text-xl font-bold text-[#042004]">{university.name}</h2>
        <label className="flex items-center gap-2 text-[#042004] font-medium">
          <input
            type="checkbox"
            checked={selected}
            onChange={() =>
              setCompare((prev) =>
                selected
                  ? prev.filter((c) => c.id !== university.id)
                  : prev.length < 3
                  ? [...prev, university]
                  : prev
              )
            }
            className="w-5 h-5 accent-[#29e424]"
          />
          Compare
        </label>
      </div>

      {/* Middle info */}
      <p className="text-[#042004] font-medium mb-1">
        <span className="font-semibold">Country:</span> {university.country}
      </p>
      <p className="text-[#042004] font-medium mb-1">
        <span className="font-semibold">Degree:</span> {university.degree_level}
      </p>
      <p className="text-[#042004] font-medium mb-3">
        <span className="font-semibold">Tuition:</span> $
        {university.tuition_fee}
      </p>

      {/* Eligibility Badge */}
      {university.eligible ? (
        <span className="bg-[#29e424] text-white px-3 py-1 rounded-full text-sm font-semibold w-max">
          Eligible
        </span>
      ) : (
        <span className="bg-[#527fea] text-white px-3 py-1 rounded-full text-sm font-semibold w-max">
          Not Eligible
        </span>
      )}
    </div>
  );
}
