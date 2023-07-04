export default function getListStudentId(arr) {
  const emptyArr = [];

  if (!Array.isArray(arr)) {
    return emptyArr;
  }

  const ids = arr.map((student) => student.id);

  return ids;
}
