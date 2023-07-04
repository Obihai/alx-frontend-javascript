export default function updateStudentGradeByCity(studentList, city, newGrades) {
  const updatedStudents = studentList
    .filter((student) => student.location === city)
    .map((student) => {
      const newGradeObj = newGrades.find(
        (grade) => grade.studentId === student.id,
      );
      const grade = newGradeObj ? newGradeObj.grade : 'N/A';
      return { ...student, grade };
    });

  return updatedStudents;
}
