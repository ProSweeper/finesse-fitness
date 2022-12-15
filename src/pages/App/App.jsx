import { useState } from 'react';
import { Routes, Route, Navigate} from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import ExercisesPage from '../ExercisesPage/ExercisesPage';
import HomePage from '../HomePage/HomePage';
import NavBar from '../../components/NavBar/NavBar';

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      { user ?
          <>
            <NavBar user={user} setUser={setUser} />
            <Routes>
              {/* client-side route that renders the component instance if the path matches the url in the address bar */}
              <Route path='/exercises' element={<ExercisesPage />} />
              <Route path='/' element={<HomePage />} />
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
