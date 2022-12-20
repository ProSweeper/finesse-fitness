import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './NewWorkoutPopup.css';
import * as workoutsAPI from '../../utilities/workout-api'

export default function NewWorkoutPopup({ setPopupOn, user, setWorkoutBeingEdited, setWorkouts, workouts }) {
  const nameRef = useRef();
  const navigate = useNavigate();

  async function handleSubmit(evt) {
    evt.preventDefault();
    const newWorkout = workoutsAPI.create({name: nameRef.current.value, user});
    setWorkoutBeingEdited(nameRef.current.value);
    setWorkouts(...workouts, newWorkout);
    navigate('/exercises');
  }
  
  return (
    <div className='popup'>
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
        <button className="closeBtn" onClick={() => setPopupOn(false)}>X</button>
      </div>
    </div>
  )
}