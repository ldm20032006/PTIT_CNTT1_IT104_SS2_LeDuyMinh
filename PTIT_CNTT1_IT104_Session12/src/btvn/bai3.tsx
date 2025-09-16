import React from 'react';

const UserInfo: React.FC = () => {
  const personalInfo = {
    fullName: 'Nguyễn Văn A',
    birthDate: '06/03/2024',
    email: 'nva@gmail.com',
    address: 'Thanh Xuân, Hà Nội'
  };

  return (
    <div>
      <h3>Thông tin cá nhân</h3>
      <p>Họ và tên: {personalInfo.fullName}</p>
      <p>Ngày sinh: {personalInfo.birthDate}</p>
      <p>Email: {personalInfo.email}</p>
      <p>Địa chỉ: {personalInfo.address}</p>
    </div>
  );
};

export default UserInfo;