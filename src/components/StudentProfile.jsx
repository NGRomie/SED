import React from "react";

export default function StudentProfile({ student, onClose }) {
  return (
    <div className="bg-gray-800 p-6 rounded-xl shadow-md">
      <div className="flex justify-between items-center border-b border-gray-700 pb-2 mb-4">
        <h2 className="text-xl font-bold">{student.name}'s Profile</h2>
        <button className="text-red-400 hover:underline" onClick={onClose}>Close</button>
      </div>
      <div className="space-y-2 text-sm text-gray-200">
        <p><strong>UNIV 100 Grade:</strong> {student.grade}</p>
        <p><strong>Coaching Visits:</strong> {student.coaching}</p>
        <p><strong>Think Tank Log:</strong> {student.thinkTank}</p>
        <p><strong>ALEKS Topics Completed:</strong> {student.aleksTopics}</p>
        <p><strong>Survey Response:</strong> {student.survey}</p>
      </div>
    </div>
  );
}