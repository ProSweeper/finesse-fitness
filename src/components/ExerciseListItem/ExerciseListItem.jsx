import './ExerciseListItem.css';

export default function ExerciseListItem({exercise, capitalize}) {

  return (
    <div className='exerciseListItem'>
      <div className='info'>
        <h3>{capitalize(exercise.name)}</h3>
        <p><span className='lable'>Equipment:</span> {capitalize(exercise.equipment)}</p>
        <p><span className='lable'>Target Muscle:</span> {capitalize(exercise.target)}</p>
      </div>
      <div className='gif'>
        <img src={exercise.gifUrl} alt="demo gif" width={'100%'} />
      </div>
      <div className='buttons'>
        <div className="button detail" data-alttext="D"><span>Detail</span></div>
        <div className="button add" data-alttext="A"><span>Add</span></div>
      </div>
    </div>
  );
}