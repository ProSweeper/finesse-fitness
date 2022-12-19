import { useState } from 'react';
import NewWorkoutPopup from '../../components/NewWorkoutPopup/NewWorkoutPopup';
require('./HomePage.css');

export default function HomePage({ user }) {
  const [popupOn, setPopupOn] = useState(false);
  
  return (
    <>
    <h1>Home</h1>
    <div 
      className="newWorkoutBtn" 
      onClick={() => setPopupOn(true)}>
        New Workout
    </div>
    {popupOn ? <NewWorkoutPopup setPopupOn={setPopupOn} user={user}/> : ''}
    </>
  );
}