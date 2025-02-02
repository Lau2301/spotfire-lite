"use client"; // ✅ Ensures this file runs on the client side

import { createContext, useContext, useState, ReactNode } from "react";

// Define a type for CSV data
type CSVRow = Record<string, string | number>;

// Define the context type
interface DataContextType {
  data: CSVRow[];
  setData: (newData: CSVRow[]) => void;
}

// Create context
const DataContext = createContext<DataContextType | null>(null);

// Provider Component
export function DataProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<CSVRow[]>([]);

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
}

// Custom Hook
export function useData() {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useData must be used within a <DataProvider>");
  }
  return context;
}
