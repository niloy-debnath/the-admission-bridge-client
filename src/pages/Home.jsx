import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Filters from "../components/Filter";
import UniversityCard from "../components/UniversityCard";
import { useEffect, useState } from "react";
import axios from "axios";
import CompareModal from "../components/CompareModal";

export default function Home() {
  const [universities, setUniversities] = useState([]);
  const [filters, setFilters] = useState({
    maxFee: "",
    gpa: "",
    ielts: "",
    country: "",
    degree: "",
  });
  const [compare, setCompare] = useState([]);

  // ✅ FIX HERE
  const { maxFee, gpa, ielts, country, degree } = filters;

  useEffect(() => {
    axios
      .get("https://the-admission-bridge-server.vercel.app/api/universities", {
        params: {
          maxFee,
          gpa,
          ielts,
          country,
          degree,
        },
      })
      .then((res) => setUniversities(res.data))
      .catch((err) => {
        console.error("Axios error:", err);
      });
  }, [filters]);

  return (
    <>
      <Navbar />
      <Hero filters={filters} setFilters={setFilters} />

      <div className="max-w-5xl mx-auto mt-5">
        <Filters setFilters={setFilters} filters={filters} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 max-w-6xl mx-auto">
        {universities.map((u) => (
          <UniversityCard
            key={u.id}
            university={u}
            compare={compare}
            setCompare={setCompare}
          />
        ))}
      </div>

      <CompareModal compare={compare} />
    </>
  );
}
