import React from 'react';

const FormatName: React.FC = () => {
  const user = {
    firstName: "Nguyễn",
    lastName: "Văn",
  };

  const formatName = (user: { firstName: string; lastName: string }) => {
    return `${user.lastName} ${user.firstName} Nam`;
  };

  return (
    <div>
      <h3>Họ và tên: {formatName(user)}</h3>
    </div>
  );
};

export default FormatName;