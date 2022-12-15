export default function ExerciseListItem({exercise}) {
  return (
    <>
      <h3>{exercise.name}</h3>
      <p>Equipment: {exercise.equipment}</p>
      <p>Target Muscle: {exercise.target}</p>
    </>
  );
}