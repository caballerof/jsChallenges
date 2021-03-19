/**
 * Crate a funtion getStudents thats takes an argument calles classroom
 */
function getStudent(classroom) {
  let { hasTeachingAsistant, classList } = classroom;
  let teacher, teachingAsistant, students;

  if (hasTeachingAsistant) {
    [teacher, teachingAsistant, ...students] = classList;
  } else {
    [teacher, ...students] = classList;
  }

  return { teacher, teachingAsistant, students };
}

console.log(
  getStudent({
    hasTeachingAsistant: true,
    classList: ['Rashida', 'John', 'Roman', 'Pepito', 'Juan'],
  })
);
