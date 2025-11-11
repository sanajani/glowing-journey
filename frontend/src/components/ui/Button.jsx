
// const Button = ({containerStyle='', text, ...props}) => {
//   return (
//     <button
//     {...props}
//     className={containerStyle}
//     >
//       {text}
//     </button>
//   )
// }

// export default Button

// In your Button component (../../components/ui/Button)
const Button = ({ 
  text, 
  containerStyle, 
  type = "button", 
  onClick, 
  disabled = false,
  onMouseEnter,
  onMouseLeave,
  ...props 
}) => {
  return (
    <button 
      type={type} 
      className={containerStyle}
      onClick={onClick}
      disabled={disabled}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      {...props}
    >
      {text}
    </button>
  );
};

export default Button;