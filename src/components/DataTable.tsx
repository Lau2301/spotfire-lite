"use client"; // ✅ Ensure this is a client component

import { useData } from "@/context/DataContext";

export default function DataTable() {
  const { data } = useData();

  if (!data.length) return <p className="text-gray-500 text-center">No data uploaded yet.</p>;

  return (
    <div className="p-6 border rounded-lg shadow-xl bg-white w-full">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">📄 Uploaded Data</h2>

      {/* Table Container */}
      <div className="overflow-x-auto max-h-[500px] border rounded-lg shadow-md">
        <table className="w-full border-collapse bg-white">
          {/* Table Header */}
          <thead className="sticky top-0 bg-gray-800 text-white uppercase text-lg">
            <tr>
              {Object.keys(data[0]).map((key) => (
                <th key={key} className="border p-4 text-center font-semibold">{key}</th>
              ))}
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {data.slice(0, 50).map((row, i) => ( // ✅ Increased visible rows for a fuller look
              <tr key={i} className={`text-gray-700 ${i % 2 === 0 ? "bg-gray-100" : "bg-white"} hover:bg-gray-200 transition-all`}>
                {Object.values(row).map((val, j) => (
                  <td key={j} className="border p-4 text-center">{val}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
