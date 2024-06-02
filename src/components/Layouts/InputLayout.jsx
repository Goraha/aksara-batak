
const InputAksara = (props) => {
  const {children, title} = props
  return (
    <div className="w-full max-w-xs">
      <h1 className="text-3xl font-bold mb-2 text-blue-500">{title}</h1>
      {children}
    </div>
  )
}

export default InputAksara