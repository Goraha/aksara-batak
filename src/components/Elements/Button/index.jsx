const Button = (props) =>{
  const { children, variant="bg-red", onClick=() => {}, type} = props;
  return (
    <button type={type} className={`${variant} text-white py-2 px-4 mb-1 rounded`}
    onClick={onClick}>
      {children}
    </button>
  )
}

export default Button