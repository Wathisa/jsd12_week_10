function WelcomeCard({ userEmail, onLogout }) {
  return (
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
        onClick={onLogout}
        className="mt-7 w-full rounded-xl bg-rose-500 px-5 py-3 font-bold text-white shadow-lg shadow-rose-200 transition hover:bg-rose-600 focus:outline-none focus:ring-4 focus:ring-rose-200"
      >
        Logout
      </button>
    </div>
  );
}

export default WelcomeCard;
