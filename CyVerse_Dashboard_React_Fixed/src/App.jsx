
import React, { useState } from "react";
import StudentTable from "./components/StudentTable";
import StudentProfile from "./components/StudentProfile";

export default function App() {
  const [selectedStudent, setSelectedStudent] = useState(null);

  return (
    <div className="p-8 space-y-12 bg-gray-900 min-h-screen text-gray-100">
      <header className="text-center">
        <h1 className="text-4xl font-bold">📊 CyVerse Student Engagement Dashboard (Live Preview)</h1>
        <p className="text-lg mt-2 text-gray-400">Click a student to view their engagement profile</p>
      </header>
      <StudentTable setSelectedStudent={setSelectedStudent} />
      {selectedStudent && (
        <StudentProfile student={selectedStudent} onClose={() => setSelectedStudent(null)} />
      )}
    </div>
  );
}
