
const Button = ({containerStyle='', text, onClick='', ...props}) => {
  return (
    <button
    {...props}
    className={containerStyle}
    onClick={onClick}
    >
      {text}
    </button>
  )
}

export default Button