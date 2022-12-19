import { useState, useEffect, useRef } from 'react';
import { Routes, Route, Navigate} from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import ExercisesPage from '../ExercisesPage/ExercisesPage';
import HomePage from '../HomePage/HomePage';
import NavBar from '../../components/NavBar/NavBar';
import * as exercisesAPI from '../../utilities/exercises-api';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [allExercises, setAllExercises] = useState([]);
  const [exercisesShown, setExercisesShown] = useState([]);
  const [activeFilters, setActiveFilters] = useState([]);
  const equipmentRef = useRef([]);
  const targetRef = useRef([]);
  const bodyPartRef = useRef([]);

  useEffect(function () {
    async function getExercises() {
      const exercises = await exercisesAPI.getAll();
      setAllExercises(exercises);
      setExercisesShown(exercises);
    }
    getExercises();
  }, []);

  useEffect( () => {
    equipmentRef.current = Array.from(new Set(allExercises.map((exercise, idx) => (
      `${exercise.equipment}`
    ))));
    targetRef.current = Array.from(new Set(allExercises.map((exercise, idx) => (
      `${exercise.target}`
    ))));
  
    bodyPartRef.current = Array.from(new Set(allExercises.map((exercise, idx) => (
      `${exercise.bodyPart}`
    ))));
  }, [allExercises]);

  // const [activeFilters, setActiveFilters] = useState([]);

  // useEffect(() => {
  //   setActiveFilters([...bodyPartRef, ...equipmentRef, ...targetRef]);
  //   console.log(activeFilters);
  // }, []);
  
  function capitalize(string) {
    const arr = string.split(' ');
    const newArr = arr.map((word) => word = word.charAt(0).toUpperCase() + word.slice(1));
    return newArr.join(' ');
  }

  return (
    <main className="App">
      { user ?
          <>
            <NavBar user={user} setUser={setUser} />
            <Routes>
              {/* client-side route that renders the component instance if the path matches the url in the address bar */}
              <Route path='/exercises' element={<ExercisesPage 
                allExercises={allExercises}
                exercisesShown={exercisesShown} 
                setExercisesShown={setExercisesShown} 
                activeFilters={activeFilters}
                setActiveFilters={setActiveFilters}
                capitalize={capitalize} 
                equipment = {equipmentRef.current}
                bodyParts = {bodyPartRef.current}
                targets = {targetRef.current}
                />} 
              />
              <Route path='/' element={<HomePage user={user}/>} />
              {/* redirect to /orders/new if path in address bar hasn't matched a <Route> above */}
              <Route path='/*' element={<Navigate to='/' />} />
            </Routes>
          </>
          :
          <AuthPage setUser={setUser} />
      }
    </main>
  );
}
