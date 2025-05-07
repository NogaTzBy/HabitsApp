export const Card = ({ children }) => {
  return <div className="rounded-2xl shadow p-2 bg-white dark:bg-black">{children}</div>;
};

export const CardContent = ({ children, className }) => {
  return <div className={className}>{children}</div>;
};