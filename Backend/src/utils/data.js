const { faker } = require('@faker-js/faker');

function generateStudentData(n = 10) {
  const courses = [
    "Computer Science",
    "Mechanical Engineering",
    "Electrical Engineering",
    "Business Administration",
    "Psychology",
    "Economics",
    "Mathematics"
  ];

  const students = [];

  for (let i = 0; i < n; i++) {
    const year = faker.number.int({ min: 1, max: 4 });

    students.push({
      name: faker.person.fullName(),
      rollNumber: `ROLL${1000 + i}`,
      course: faker.helpers.arrayElement(courses),
      yearOfStudy: year,
      status: year === 4 ? "Graduated" : "Active"
    });
  }

  return students;
}

module.exports = generateStudentData;
