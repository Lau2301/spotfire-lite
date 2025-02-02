"use client"; // ✅ Ensure this is a Client Component

import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer, ScatterChart, Scatter, Legend } from "recharts";
import { useData } from "@/context/DataContext";

export default function Chart() {
  const { data } = useData();

  if (!data.length) return <p className="text-gray-500 text-center">No data to visualize.</p>;

  // Extract numeric columns for the line chart
  const numericColumns = Object.keys(data[0]).filter((key) => typeof data[0][key] === "number");

  // Colors for multiple lines and scatter plot categories
  const colors = ["#FF5733", "#1E90FF", "#32CD32", "#FFB400", "#9400D3"];

  return (
    <div className="p-6 border rounded-lg shadow-xl bg-white">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">📊 Data Visualization</h2>

      {/* Line Chart for Trends */}
      <ResponsiveContainer width="100%" height={350}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="5 5" strokeOpacity={0.3} />
          <XAxis
            dataKey={Object.keys(data[0])[0]}
            tick={{ fill: "#333", fontSize: 14 }}
            label={{ value: "Categories", position: "insideBottom", offset: -10, style: { fill: "#333", fontSize: 14, fontWeight: "bold" } }}
          />
          <YAxis
            tick={{ fill: "#333", fontSize: 14 }}
            label={{ value: "Values", angle: -90, position: "insideLeft", offset: -10, style: { fill: "#333", fontSize: 14, fontWeight: "bold" } }}
          />
          <Tooltip
            contentStyle={{ backgroundColor: "rgba(255, 255, 255, 0.9)", borderRadius: "10px", borderColor: "#ddd", fontSize: "14px" }}
            itemStyle={{ color: "#333" }}
            cursor={{ strokeDasharray: "3 3" }}
          />
          <Legend wrapperStyle={{ fontSize: "14px", fontWeight: "bold" }} />
          {numericColumns.map((col, index) => (
            <Line
              key={col}
              type="monotone"
              dataKey={col}
              stroke={colors[index % colors.length]}
              strokeWidth={3}
              dot={{ r: 6, fill: colors[index % colors.length], strokeWidth: 2, stroke: "#fff" }}
              activeDot={{ r: 8 }}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>

      {/* Scatter Chart for Individual Points */}
      <h2 className="text-2xl font-bold text-gray-800 mt-8 text-center">📍 Scatter Plot</h2>
      <ResponsiveContainer width="100%" height={350}>
        <ScatterChart>
          <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.3} />
          <XAxis
            dataKey="x_value"
            name="X Axis"
            tick={{ fill: "#333", fontSize: 14 }}
            label={{ value: "X Value", position: "insideBottom", offset: -10, style: { fill: "#333", fontSize: 14, fontWeight: "bold" } }}
          />
          <YAxis
            dataKey="y_value"
            name="Y Axis"
            tick={{ fill: "#333", fontSize: 14 }}
            label={{ value: "Y Value", angle: -90, position: "insideLeft", offset: -10, style: { fill: "#333", fontSize: 14, fontWeight: "bold" } }}
          />
          <Tooltip
            cursor={{ strokeDasharray: "3 3" }}
            contentStyle={{ backgroundColor: "rgba(255, 255, 255, 0.9)", borderRadius: "10px", borderColor: "#ddd", fontSize: "14px" }}
          />
          <Legend wrapperStyle={{ fontSize: "14px", fontWeight: "bold" }} />
          <Scatter name="Category A" data={data} fill={colors[0]} />
          <Scatter name="Category B" data={data} fill={colors[1]} />
          <Scatter name="Category C" data={data} fill={colors[2]} />
          <Scatter name="Category D" data={data} fill={colors[3]} />
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  );
}
