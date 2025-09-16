"use strict";
const printStaffInfo = (staff) => {
    console.log(`Nhân viên: ${staff.name} (${staff.age} tuổi) , Mã nhân viên: ${staff.employeeId} - Phòng: ${staff.department}`);
};
const staffInfo = {
    name: "Dinh Trong An",
    age: 28,
    employeeId: "EMP001",
    department: "Ke toan",
};
printStaffInfo(staffInfo);