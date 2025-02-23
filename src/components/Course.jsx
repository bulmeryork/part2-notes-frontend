const Courses = ({ courses }) => {
  return (
    <>
      {courses.map((course) => {
        const totalExercises = course.parts.reduce(
          (sum, part) => sum + part.exercises,
          0
        );
        return (
          <div key={course.id}>
            <h2>{course.name}</h2>
            {course.parts.map((part) => (
              <p key={part.id}>
                {part.name} {part.exercises}
              </p>
            ))}
            <p>
              <strong>Total Exercises: {totalExercises}</strong>
            </p>
          </div>
        );
      })}
    </>
  );
};

export default Courses;
