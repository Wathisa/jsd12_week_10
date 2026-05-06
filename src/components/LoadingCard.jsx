function LoadingCard() {
  return (
    <div className="w-full rounded-2xl bg-white/80 p-8 text-center shadow-xl ring-1 ring-white/70">
      <div className="mx-auto size-14 animate-spin rounded-full border-4 border-violet-200 border-t-violet-500"></div>
      <h1 className="mt-7 text-3xl font-bold">Signing in...</h1>
      <p className="mt-3 text-sm text-slate-500">Please wait a moment.</p>
    </div>
  );
}

export default LoadingCard;
