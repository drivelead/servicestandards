export const MDXSerializers = {
  h1: ({ children }) => (
    <>
      <h1 className="mt-2 font-bold text-4xl tracking-tight text-slate-900 dark:text-slate-100">
        {children}
      </h1>
    </>
  ),
};

export default MDXSerializers;
