import { useState, useRef, useEffect } from 'react';
import ExerciseList from '../../components/ExerciseList/ExerciseList';
import Popup from '../../components/Popup/Popup';
import Workouts from '../../components/Workouts/Workouts';
import ExerciseFilter from '../../components/ExerciseFilter/ExerciseFilter';
import './ExercisesPage.css';

export default function ExercisesPage({ 
  setWorkouts, 
  allExercises, 
  workouts, 
  setWorkoutBeingEdited, 
  workoutBeingEdited, 
  capitalize, 
  exercisesShown, 
  setExercisesShown, 
  bodyParts, 
  equipment, 
  targets,
  user,
  activeFilters, 
  setActiveFilters
}) 
{
  const [newWorkoutPopupOn, setNewWorkoutPopupOn] = useState(false);

  return (
    <main className='exercisePage'>
      <div className='leftContainer'>
        <Workouts 
          workoutBeingEdited={workoutBeingEdited} 
          setWorkoutBeingEdited={setWorkoutBeingEdited}
          setWorkouts={setWorkouts} 
          workouts={workouts}
          allExercises={allExercises}
        />
        <div 
          className='newWorkoutBtn' 
          onClick={() => setNewWorkoutPopupOn(true)}>
          New Workout
        </div>
        {newWorkoutPopupOn ? <Popup 
        setWorkoutBeingEdited={setWorkoutBeingEdited} 
        setNewWorkoutPopupOn={setNewWorkoutPopupOn} 
        user={user}
        setWorkouts={setWorkouts}
        workouts={workouts}
        window={'newWorkout'}
        /> 
        : 
        ''
      }
        <ExerciseFilter 
          activeFilters={activeFilters} 
          equipment={equipment} 
          target={targets} 
          bodyPart={bodyParts}  
          setExercisesShown={setExercisesShown}
        />
      </div>
      <ExerciseList workoutBeingEdited={workoutBeingEdited} capitalize={capitalize} exercisesShown={exercisesShown} setWorkouts={setWorkouts} workouts={workouts}/>
    </main>
  );
}

