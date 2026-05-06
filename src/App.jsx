import { useState } from 'react';
import LoadingCard from './components/LoadingCard';
import LoginForm from './components/LoginForm';
import WelcomeCard from './components/WelcomeCard';

const STORAGE_KEY = 'userEmail';

function App() {
  const savedEmail = localStorage.getItem(STORAGE_KEY) || '';

  const [userEmail, setUserEmail] = useState(savedEmail);
  const [isLoading, setIsLoading] = useState(false);

  function handleLogin(email) {
    setIsLoading(true);

    setTimeout(() => {
      localStorage.setItem(STORAGE_KEY, email);
      setUserEmail(email);
      setIsLoading(false);
    }, 1500);
  }

  function handleLogout() {
    localStorage.removeItem(STORAGE_KEY);
    setUserEmail('');
    setIsLoading(false);
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-100 via-pink-100 to-sky-100 px-5 py-8 text-slate-900">
      <section className="mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-md items-center justify-center">
        {isLoading ? (
          <LoadingCard />
        ) : userEmail ? (
          <WelcomeCard userEmail={userEmail} onLogout={handleLogout} />
        ) : (
          <LoginForm onLogin={handleLogin} />
        )}
      </section>
    </main>
  );
}

export default App;
