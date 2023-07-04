export default function getStudentIdsSum(studentList) {
  const idsSum = studentList.reduce((acc, student) => acc + student.id, 0);

  return idsSum;
}
