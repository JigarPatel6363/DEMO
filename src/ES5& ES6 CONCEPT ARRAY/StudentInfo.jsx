


const StudentInfo = () => {
  const student = {
    name: 'gaurang',
    age: 20,
    grade: 'A',
  };

  return (
    <div>
      <h1>Student Information</h1>
      <p>Name: {student.name}</p>
      <p>Age: {student.age}</p>
      <p>Grade: {student.grade}</p>
    </div>
  );
};

export default StudentInfo;