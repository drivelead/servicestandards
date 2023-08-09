export const MDXSerializers = {
  h1: ({ children }) => (
    <>
      <h1 className="mt-2 mb-6 font-bold text-4xl tracking-tight text-zinc-400 dark:text-slate-200">
        {children}
      </h1>
    </>
  ),
  h2: ({ children }) => (
    <>
      <h2 className="mt-2 mb-4 font-bold text-2xl tracking-tight text-zinc-500 dark:text-slate-100">
        {children}
      </h2>
    </>
  ),
  p: ({ children }) => (
    <>
      <p className="mt-2 mb-4 text-lg tracking-tight text-zinc-700 dark:text-slate-100">
        {children}
      </p>
    </>
  ),
  li: ({ children }) => (
    <>
      <li className="mb-4 text-lg tracking-tight text-zinc-700 dark:text-slate-100">
        {children}
      </li>
    </>
  ),
};

export default MDXSerializers;