import React from "react";
import "./SubjectList.css";

const Subjects: React.FC = () => {
  const subjects: string[] = ["Toán", "Văn", "Anh", "Hóa", "Sinh"];

  return (
    <div className="container">
      <div className="header">
        <img
          src="https://img.icons8.com/fluency/48/books.png"
          alt="books"
          className="icon"
        />
        <h1 className="title">Danh sách môn học</h1>
      </div>

      <div className="list">
        {subjects.map((subject: string, index: number) => (
          <div className="card" key={index}>
            {subject}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Subjects;
