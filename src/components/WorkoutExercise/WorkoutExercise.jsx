export default function WorkoutExercise({ allExercises, name, reps, sets, weight}) {
  const exerciseName = allExercises.find(e => e._id === name).name;
  return (
    <tr>
      <td>{exerciseName}</td>
      <td><input className='workoutInput' type="number" name="weight" placeholder={weight} /></td>
      <td><input className='workoutInput' type="number" name="sets" placeholder={sets} /></td>
      <td><input className='workoutInput' type="number" name="reps" placeholder={reps} /></td>
    </tr>

  )
}