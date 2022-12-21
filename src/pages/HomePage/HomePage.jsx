// import { useState } from 'react';
// import Popup from '../../components/Popup/Popup';
// require('./HomePage.css');

// export default function HomePage({ workouts, user, setWorkoutBeingEdited, setWorkouts }) {
//   const [newWorkoutPopupOn, setNewWorkoutPopupOn] = useState(false);
  
//   return (
//     <main>
//       <h1>Home</h1>
//       <div 
//         className="newWorkoutBtn" 
//         onClick={() => setNewWorkoutPopupOn(true)}>
//           New Workout
//       </div>
//       {newWorkoutPopupOn ? <Popup 
//         setWorkoutBeingEdited={setWorkoutBeingEdited} 
//         setNewWorkoutPopupOn={setNewWorkoutPopupOn} 
//         user={user}
//         setWorkouts={setWorkouts}
//         workouts={workouts}
//         window={'newWorkout'}
//         /> 
//         : 
//         ''
//       }
//     </main>
//   );
// }