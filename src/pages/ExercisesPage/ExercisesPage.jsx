import { useState, useRef, useEffect } from 'react';
import * as exercisesAPI from '../../utilities/exercises-api';
import ExerciseList from '../../components/ExerciseList/ExerciseList';
import Workouts from '../../components/Workouts/Workouts';
import ExerciseFilter from '../../components/ExerciseFilter/ExerciseFilter';
import './ExercisesPage.css';

export default function ExercisesPage({ setWorkouts, allExercises, workouts, setWorkoutBeingEdited, workoutBeingEdited, capitalize, exercisesShown, setExercisesShown, bodyParts, equipment, targets}) {

  // function updateFilters(evt) {
  //   const cat = evt.target.textContent;
  //   console.log( cat, activeFilters.includes(cat));
  //   activeFilters.includes(cat) ? 
  //   // remove from filters if true
  //   setActiveFilters(activeFilters.filter(fil => fil !== cat))
  //   :
  //   // add to filters if not
  //   setActiveFilters([...activeFilters, cat]);
  // }
  // useEffect(() => (console.log('hello')), [activeFilters])
  // useEffect(() => (setExercisesShown(allExercises.filter(ex => {
  //   activeFilters.includes(ex.target) || activeFilters.includes(ex.bodyPart) || activeFilters.includes(ex.equipment)
  // }))),[activeFilters] )

  return (
    <main className="exercisePage">
      <Workouts 
        workoutBeingEdited={workoutBeingEdited} 
        setWorkoutBeingEdited={setWorkoutBeingEdited}
        setWorkouts={setWorkouts} 
        workouts={workouts}
        allExercises={allExercises}
        
      />
      <ExerciseList workoutBeingEdited={workoutBeingEdited} capitalize={capitalize} exercises={exercisesShown} setWorkouts={setWorkouts} workouts={workouts}/>
      <ExerciseFilter equipment={equipment} target={targets} bodyPart={bodyParts} />
    </main>
  );
}

