import { useState } from 'react';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [userEmail, setUserEmail] = useState('');

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

    setUserEmail(email);
    setPassword('');
    setErrors({});
  }

  function handleLogout() {
    setUserEmail('');
    setEmail('');
    setPassword('');
    setErrors({});
    setShowPassword(false);
  }

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_15%_85%,#f7c7dd_0,#f7c7dd_16%,transparent_34%),radial-gradient(circle_at_82%_16%,#d8c8ff_0,#d8c8ff_22%,transparent_42%),linear-gradient(135deg,#edf1ff_0%,#fbedf8_48%,#eef5ff_100%)] px-5 py-8 text-slate-900">
      <section className="mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-md items-center justify-center">
        {userEmail ? (
          <div className="w-full rounded-2xl bg-white/80 p-8 text-center shadow-[0_24px_80px_rgba(111,89,145,0.18)] ring-1 ring-white/70 backdrop-blur">
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
            className="w-full rounded-2xl bg-white/80 p-8 shadow-[0_24px_80px_rgba(111,89,145,0.18)] ring-1 ring-white/70 backdrop-blur"
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
