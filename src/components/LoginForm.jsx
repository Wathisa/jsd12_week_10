import { useState } from 'react';

function LoginForm({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  function validateForm() {
    const nextErrors = {};
    const emailValue = email.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailValue === '') {
      nextErrors.email = 'Email is required';
    } else if (!emailPattern.test(emailValue)) {
      nextErrors.email = 'Invalid email address';
    }

    if (password === '') {
      nextErrors.password = 'Password is required';
    } else if (password.length < 6) {
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

    onLogin(email.trim());
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
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
          type="text"
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
  );
}

export default LoginForm;
