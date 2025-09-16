import React, { useState } from "react";

const CountText = () => {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <textarea
        value={text}
        onChange={handleChange}
        rows="4"
        cols="50"
        placeholder="Nhập văn bản..."
      />
      <p>Số ký tự: {text.length}</p>
    </div>
  );
};

export default CountText;
