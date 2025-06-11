export const Button = ({ children, ...props }) => (
  <button
    className="btn btn-primary w-full"
    {...props}
  >
    {children}
  </button>
);