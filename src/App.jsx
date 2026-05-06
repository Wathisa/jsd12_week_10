function App() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_15%_85%,#f7c7dd_0,#f7c7dd_16%,transparent_34%),radial-gradient(circle_at_82%_16%,#d8c8ff_0,#d8c8ff_22%,transparent_42%),linear-gradient(135deg,#edf1ff_0%,#fbedf8_48%,#eef5ff_100%)] px-5 py-8 text-slate-900">
      <section className="mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-md items-center justify-center">
        <form className="w-full rounded-[2rem] bg-white/80 p-8 shadow-[0_24px_80px_rgba(111,89,145,0.18)] ring-1 ring-white/70 backdrop-blur">
          <p className="text-center text-xs font-bold uppercase tracking-[0.25em] text-violet-500">
            Login
          </p>

          <h1 className="mt-3 text-center text-3xl font-bold">
            Welcome back
          </h1>

          <div className="mt-8">
            <label htmlFor="email" className="text-sm font-semibold">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="mt-2 w-full rounded-2xl border border-violet-100 bg-white/90 px-4 py-3 outline-none transition focus:border-violet-400 focus:ring-4 focus:ring-violet-100"
              placeholder="name@example.com"
            />
          </div>

          <div className="mt-5">
            <label htmlFor="password" className="text-sm font-semibold">
              Password
            </label>
            <input
              id="password"
              type="password"
              className="mt-2 w-full rounded-2xl border border-violet-100 bg-white/90 px-4 py-3 outline-none transition focus:border-violet-400 focus:ring-4 focus:ring-violet-100"
              placeholder="At least 6 characters"
            />
          </div>

          <button
            type="button"
            className="mt-4 rounded-xl border border-violet-100 bg-white/70 px-4 py-2 text-sm font-semibold text-violet-600 transition hover:bg-violet-50 focus:outline-none focus:ring-4 focus:ring-violet-100"
          >
            Show Password
          </button>

          <button
            type="submit"
            className="mt-7 w-full rounded-2xl bg-violet-500 px-5 py-3 font-bold text-white shadow-lg shadow-violet-200 transition hover:bg-violet-600 focus:outline-none focus:ring-4 focus:ring-violet-200"
          >
            Submit
          </button>
        </form>
      </section>
    </main>
  )
}

export default App
