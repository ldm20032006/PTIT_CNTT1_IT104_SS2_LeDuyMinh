// Khai báo kiểu dữ liệu
type Subject = {
    subjectName: string;
    score: number | string;
};

type Student = {
    id: number;
    name: string;
    age: number | string;
    subjects: Subject[];
};

const students: Student[] = [];

const createStudent = (student: Student) => {
    students.push(student);
};

const updateStudent = (id: number, newStudent: Student) => {
    // Tìm kiếm sinh viên theo id
    const findIndexStudent = students.findIndex((st) => st.id === id);

    if (findIndexStudent === -1) {
        console.log("Khong tim thay sinh vien");
    } else {
        students[findIndexStudent] = {
            ...students[findIndexStudent],
            name: newStudent.name,
            age: newStudent.age,
            subjects: newStudent.subjects
        };
    }
};

const deleteStudent = (id: number): void => {
    const findIndexStudent = students.findIndex((st) => st.id === id);

    if (findIndexStudent !== -1) {
        students.splice(findIndexStudent, 1);
    } else {
        console.log("Khong tim thay sinh vien");
    }
};

// Áp dụng type guard để kiểm tra kiểu dữ liệu
const isNumber = (score: string | number): score is number => {
    return typeof score === "number";
};

// Chuyển đổi điểm từ chuỗi thành số
const converScoreToNumber = (score: string): number => {
    const scoreMap: { [key: string]: number } = {
        A: 10,
        B: 8,
        C: 6,
        D: 4,
    };
    return scoreMap[score] ?? 0;
};

const caculaAvg = (student: Student) => {
    const total = student.subjects.reduce((sum, subject) => {
        if (isNumber(subject.score)) {
            return sum + subject.score;
        } else {
            return sum + converScoreToNumber(subject.score);
        }
    }, 0);
    console.log("Total: ", total);
};
