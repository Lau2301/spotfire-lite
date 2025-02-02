"use client";
import Papa from "papaparse";
import { useData } from "@/context/DataContext";

// Define a type for each row in the CSV
type CSVRow = Record<string, string | number>;

// Improved type for PapaParse result
interface ParsedResult<T> {
  data: T[];
  errors: Papa.ParseError[];
  meta: unknown;
}

export default function FileUpload() {
  const { setData } = useData();

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    Papa.parse<CSVRow>(file, {
      header: true,
      dynamicTyping: true,
      skipEmptyLines: true, // Ensures empty lines are ignored
      complete: (result: ParsedResult<CSVRow>) => {
        if (result.errors.length) {
          console.error("CSV Parsing Errors:", result.errors);
          return;
        }

        setData(result.data);
      },
    });
  };

  return (
    <div className="p-4 border rounded-lg shadow bg-white text-center">
      <label className="block font-semibold text-pink-600">
        Upload CSV File:
        <input
          type="file"
          accept=".csv"
          onChange={handleFileUpload}
          className="mt-2 block mx-auto p-2 border rounded-lg cursor-pointer"
        />
      </label>
    </div>
  );
}
