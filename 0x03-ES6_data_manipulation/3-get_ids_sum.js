const getStudentIdsSum = (listStudents) => {
  return listStudents.reduce((sum, student) => sum + student.id, 0);
};

export default getStudentIdsSum;
