export const Button = ({ children, onClick, variant = 'default' }) => {
  const style = variant === 'outline'
    ? "border px-3 py-1 rounded-xl"
    : "bg-black text-white px-3 py-1 rounded-xl";
  return <button onClick={onClick} className={style}>{children}</button>;
};