import { useState } from 'react';

const STORAGE_KEY = 'userEmail';

function App() {
  const savedEmail = localStorage.getItem(STORAGE_KEY) || '';

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [userEmail, setUserEmail] = useState(savedEmail);
  const [isLoading, setIsLoading] = useState(false);

  function validateForm() {
    const nextErrors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      nextErrors.email = 'Invalid email address';
    }

    if (password.length < 6) {
      nextErrors.password = 'Password must be at least 6 characters long';
    }

    setErrors(nextErrors);

    return Object.keys(nextErrors).length === 0;
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      localStorage.setItem(STORAGE_KEY, email);
      setUserEmail(email);
      setPassword('');
      setErrors({});
      setIsLoading(false);
    }, 1500);
  }

  function handleLogout() {
    localStorage.removeItem(STORAGE_KEY);
    setUserEmail('');
    setEmail('');
    setPassword('');
    setErrors({});
    setShowPassword(false);
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
          <form
            onSubmit={handleSubmit}
            className="w-full rounded-2xl bg-white/80 p-8 shadow-xl ring-1 ring-white/70"
          >
          <p className="text-center text-xs font-bold uppercase tracking-[0.25em] text-violet-500">
            Login
          </p>

          <h1 className="mt-3 text-center text-3xl font-bold">Welcome back</h1>

          <div className="mt-8">
            <label htmlFor="email" className="text-sm font-semibold">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className={`mt-2 w-full rounded-xl border bg-white/90 px-4 py-3 outline-none transition focus:ring-4 ${
                errors.email
                  ? 'border-rose-400 focus:border-rose-400 focus:ring-rose-100'
                  : 'border-violet-100 focus:border-violet-400 focus:ring-violet-100'
              }`}
              placeholder="name@example.com"
            />
            {errors.email && (
              <p className="mt-2 text-sm font-medium text-rose-500">
                {errors.email}
              </p>
            )}
          </div>

          <div className="mt-5">
            <label htmlFor="password" className="text-sm font-semibold">
              Password
            </label>
            <input
              id="password"
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className={`mt-2 w-full rounded-xl border bg-white/90 px-4 py-3 outline-none transition focus:ring-4 ${
                errors.password
                  ? 'border-rose-400 focus:border-rose-400 focus:ring-rose-100'
                  : 'border-violet-100 focus:border-violet-400 focus:ring-violet-100'
              }`}
              placeholder="At least 6 characters"
            />
            {errors.password && (
              <p className="mt-2 text-sm font-medium text-rose-500">
                {errors.password}
              </p>
            )}
          </div>

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="mt-4 rounded-xl border border-violet-100 bg-white/70 px-4 py-2 text-sm font-semibold text-violet-600 transition hover:bg-violet-50 focus:outline-none focus:ring-4 focus:ring-violet-100"
          >
            {showPassword ? 'Hide Password' : 'Show Password'}
          </button>

          <button
            type="submit"
            disabled={isLoading}
            className="mt-7 w-full rounded-xl bg-violet-500 px-5 py-3 font-bold text-white shadow-lg shadow-violet-200 transition hover:bg-violet-600 focus:outline-none focus:ring-4 focus:ring-violet-200"
          >
            Submit
          </button>
          </form>
        )}
      </section>
    </main>
  );
}

export default App;
