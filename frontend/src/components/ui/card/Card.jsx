const Card = ({ children, className = "", ...props }) => {
  return (
    <div
      className={`rounded-lg shadow-md border-2 hover:shadow-lg  border-gray-200 p-2 relative ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
