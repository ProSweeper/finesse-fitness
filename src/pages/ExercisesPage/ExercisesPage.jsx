import { useState, useRef, useEffect } from 'react';
import * as exercisesAPI from '../../utilities/exercises-api';
import ExerciseList from '../../components/ExerciseList/ExerciseList';
import './ExercisesPage.css';

export default function ExercisesPage() {
  const [exercisesShown, SetExercisesShown] = useState([]);
  
  // get all exercises from db, only want to happen on first render
  useEffect(function () {
    async function getExercises() {
      const exercises = await exercisesAPI.getAll();
      SetExercisesShown(exercises);
    }
    getExercises();
  }, []);
  return (
    <main className="exercisePage">
      <h1>exercises</h1>
      <ExerciseList exercises={exercisesShown} />
    </main>
  );
}