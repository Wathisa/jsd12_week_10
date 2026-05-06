import { useState } from 'react';
import LoginForm from './components/LoginForm';

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
          <div className="w-full rounded-2xl bg-white/80 p-8 text-center shadow-xl ring-1 ring-white/70">
            <div className="mx-auto size-14 animate-spin rounded-full border-4 border-violet-200 border-t-violet-500"></div>
            <h1 className="mt-7 text-3xl font-bold">Signing in...</h1>
            <p className="mt-3 text-sm text-slate-500">
              Please wait a moment.
            </p>
          </div>
        ) : userEmail ? (
          <div className="w-full rounded-2xl bg-white/80 p-8 text-center shadow-xl ring-1 ring-white/70">
            <div className="mx-auto flex size-24 items-center justify-center rounded-full bg-violet-500 text-4xl font-bold text-white shadow-lg shadow-violet-200">
              {userEmail.charAt(0).toUpperCase()}
            </div>

            <h1 className="mt-7 text-3xl font-bold">Welcome!</h1>

            <div className="mt-7 rounded-xl bg-violet-50/80 p-5 text-left">
              <p className="text-sm font-medium text-slate-500">Email</p>
              <p className="mt-2 break-words text-lg font-semibold text-slate-900">
                {userEmail}
              </p>
            </div>

            <button
              type="button"
              onClick={handleLogout}
              className="mt-7 w-full rounded-xl bg-rose-500 px-5 py-3 font-bold text-white shadow-lg shadow-rose-200 transition hover:bg-rose-600 focus:outline-none focus:ring-4 focus:ring-rose-200"
            >
              Logout
            </button>
          </div>
        ) : (
          <LoginForm onLogin={handleLogin} />
        )}
      </section>
    </main>
  );
}

export default App;
