import React from "react";
import { LineChart, Line } from "recharts";
const LineCharts = () => {
  const studentData = [
    { id: 1, name: "Student 1", math: 85, physics: 92, chemistry: 78 },
    { id: 2, name: "Student 2", math: 78, physics: 88, chemistry: 82 },
    { id: 3, name: "Student 3", math: 92, physics: 94, chemistry: 76 },
    { id: 4, name: "Student 4", math: 76, physics: 90, chemistry: 85 },
    { id: 5, name: "Student 5", math: 89, physics: 85, chemistry: 90 },
    { id: 6, name: "Student 6", math: 95, physics: 91, chemistry: 88 },
    { id: 7, name: "Student 7", math: 80, physics: 87, chemistry: 81 },
    { id: 8, name: "Student 8", math: 87, physics: 93, chemistry: 77 },
    { id: 9, name: "Student 9", math: 91, physics: 89, chemistry: 83 },
    { id: 10, name: "Student 10", math: 84, physics: 86, chemistry: 79 },
  ];

  return (
    <div>
      <LineChart width={600} height={400} data={studentData}>
        <Line  dataKey="math" stroke="#8884d8" />
        <Line dataKey={'physics'} stroke="red"></Line>
      </LineChart>
    </div>
  );
};

export default LineCharts;
