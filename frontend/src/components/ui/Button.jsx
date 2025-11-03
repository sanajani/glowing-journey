
const Button = ({containerStyle='', text, ...props}) => {
  return (
    <button
    {...props}
    className={containerStyle}
    >
      {text}
    </button>
  )
}

export default Button