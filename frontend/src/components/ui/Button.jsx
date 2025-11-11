
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
  ...props 
}) => {
  return (
    <button 
      type={type} 
      className={containerStyle}
      {...props}
    >
      {text}
    </button>
  );
};

export default Button;