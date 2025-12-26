export default function CompareModal({ compare }) {
  if (compare.length < 2) return null; // Show only if 2+ selected

  return (
    <div className="overflow-x-auto p-4 bg-[#f8fef8] border-t border-[#7fd5ef] mt-6 rounded-xl shadow-md max-w-7xl mx-auto">
      <table className="min-w-full border-collapse">
        <thead>
          <tr className="bg-[#29e424] text-white text-left">
            <th className="px-4 py-2">University</th>
            <th className="px-4 py-2">Min GPA</th>
            <th className="px-4 py-2">Min IELTS</th>
            <th className="px-4 py-2">Tuition</th>
          </tr>
        </thead>
        <tbody>
          {compare.map((u) => (
            <tr
              key={u.id}
              className="border-b border-[#7fd5ef] hover:bg-[#e0f6e0] transition"
            >
              <td className="px-4 py-3 text-[#042004] font-medium">{u.name}</td>
              <td className="px-4 py-3 text-[#042004]">{u.min_gpa}</td>
              <td className="px-4 py-3 text-[#042004]">{u.min_ielts}</td>
              <td className="px-4 py-3 text-[#042004]">${u.tuition_fee}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
