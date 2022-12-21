import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './NewWorkoutPopup.css';
import * as workoutsAPI from '../../utilities/workout-api'

export default function NewWorkoutPopup({ setNewWorkoutPopupOn, user, setWorkoutBeingEdited, setWorkouts, workouts }) {
  const nameRef = useRef();
  const navigate = useNavigate();

  async function handleSubmit(evt) {
    evt.preventDefault();
    const newWorkout = await workoutsAPI.create({name: nameRef.current.value, user});
    setWorkoutBeingEdited(nameRef.current.value);
    const updatedWorkouts = ([...workouts, newWorkout])
    console.log('jsx', updatedWorkouts);
    setWorkouts(updatedWorkouts);
    navigate('/exercises');
  }
  
  return (
    <div className='innerPopup'>
      <h3>New Workout</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor='workoutName'>Name
          <input 
            ref={nameRef} 
            type='text' 
            name='name' 
            placeholder='New Workout'
            required
          />
        </label>
        <button type='submit' className='add'>Add Workout</button>
      </form>
      <button className="closeBtn" onClick={() => setNewWorkoutPopupOn(false)}>X</button>
    </div>
  );
}