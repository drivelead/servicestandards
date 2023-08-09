export const MDXSerializers = {
  h1: ({ children }) => (
    <>
      <h1 className="mt-2 mb-6 font-medium
      text-5xl
       leading-tighter
       rtl:leading-tight
      text-emerald-600 dark:text-emerald-400">
        {children}
      </h1>
    </>
  ),
  h2: ({ children }) => (
    <>
      <h2 className="mt-2 mb-4 font-medium text-3xl tracking-tight text-zinc-500 dark:text-white">
        {children}
      </h2>
    </>
  ),
  p: ({ children }) => (
    <>
      <p className="mt-2 mb-4 text-xl font-light tracking-loose text-zinc-700 dark:text-slate-100">
        {children}
      </p>
    </>
  ),
  li: ({ children }) => (
    <>
      <li className="mb-4 text-xl font-light  tracking-tight text-zinc-700 dark:text-slate-100">
        {children}
      </li>
    </>
  ),
};

export default MDXSerializers;