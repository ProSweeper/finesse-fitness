import { useState } from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';
import Features from '../../components/Features/Features';
import './AuthPage.css';

export default function AuthPage({ setUser }) {
  const [showSignUp, setShowSignUp] = useState(false);
  return (
    <main className='authPage'>
      <header className='authBanner'></header>
      { showSignUp ?
        <SignUpForm setUser={setUser} showSignUp={showSignUp} setShowSignUp={setShowSignUp} />
        :
        <LoginForm setUser={setUser} showSignUp={showSignUp} setShowSignUp={setShowSignUp} />
      }
      <Features />
    </main>
  );
}