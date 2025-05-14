
import React from "react";

const students = [
  {
    name: "Janelle R.",
    attendance: "6/6",
    coaching: 3,
    aleks: "Active",
    lastContact: "2 days ago",
    wellbeing: true,
    thinkTank: "4/28 | Coaching | 45min",
    grade: "A-",
    aleksTopics: 12,
    survey: "Feeling confident, needs help with distractions."
  },
  {
    name: "Marcos V.",
    attendance: "3/6",
    coaching: 1,
    aleks: "Low",
    lastContact: "9 days ago",
    wellbeing: true,
    thinkTank: "4/21 | Drop-in Math | 30min",
    grade: "C",
    aleksTopics: 3,
    survey: "Falling behind, unsure how to catch up."
  }
];

export default function StudentTable({ setSelectedStudent }) {
  return (
    <div className="bg-gray-800 p-6 rounded-xl shadow-md overflow-x-auto">
      <table className="min-w-full text-left border border-gray-700 text-sm">
        <thead>
          <tr className="bg-gray-700">
            <th className="p-2">Name</th>
            <th className="p-2">UNIV 100 Attendance</th>
            <th className="p-2">Coaching Visits</th>
            <th className="p-2">ALEKS Activity</th>
            <th className="p-2">Last Contact</th>
            <th className="p-2">Well-Being</th>
            <th className="p-2">Think Tank Visits</th>
          </tr>
        </thead>
        <tbody>
          {students.map((s, idx) => (
            <tr key={idx} className="hover:bg-gray-700 cursor-pointer" onClick={() => setSelectedStudent(s)}>
              <td className="p-2 font-medium text-blue-400 underline">{s.name}</td>
              <td className="p-2">{s.attendance}</td>
              <td className="p-2">{s.coaching}</td>
              <td className="p-2">{s.aleks}</td>
              <td className="p-2">{s.lastContact}</td>
              <td className="p-2 text-green-400">✔️</td>
              <td className="p-2">{s.thinkTank}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
