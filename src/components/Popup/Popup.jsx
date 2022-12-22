import NewWorkoutPopup from '../NewWorkoutPopup/NewWorkoutPopup';
import ViewWorkoutPopup from '../ViewWorkoutPopup/ViewWorkoutPopup';
import './Popup.css';

export default function Popup({ 
  allExercises, 
  setWorkoutBeingViewed, 
  setViewWorkoutPopupOn, 
  window, 
  setWorkoutBeingEdited, 
  setWorkouts, 
  workouts, 
  user, 
  setNewWorkoutPopupOn, 
  workoutBeingViewed 
}) {
  const content = {
    newWorkout: <NewWorkoutPopup 
      setWorkoutBeingEdited={setWorkoutBeingEdited} 
      setNewWorkoutPopupOn={setNewWorkoutPopupOn} 
      setWorkouts={setWorkouts}
      workouts={workouts}
      user={user}
    />,
    viewWorkout: <ViewWorkoutPopup 
      workoutBeingViewed={workoutBeingViewed}
      setViewWorkoutPopupOn={setViewWorkoutPopupOn}
      setWorkoutBeingViewed={setWorkoutBeingViewed}
      allExercises={allExercises}
    />
  }
  const display = content[window];
  
  return (
    <div className='popup'>
      {display}
    </div>
  )
}