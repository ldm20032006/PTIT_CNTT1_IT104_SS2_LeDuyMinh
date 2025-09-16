import React from 'react';

const ColorBox: React.FC = () => {
  const colors = [
    { name: 'red', label: 'red' },
    { name: 'blue', label: 'blue' },
    { name: 'green', label: 'green' },
  ];

  return (
    <div>
      {colors.map((color, index) => (
        <div
          key={index}
          style={{
            width: '200px',
            height: '200px',
            backgroundColor: color.name,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
            margin: '10px',
          }}
        >
          Box
        </div>
      ))}
    </div>
  );
};

export default ColorBox;