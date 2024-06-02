const Input = (props) => {
  // eslint-disable-next-line react/prop-types
  const { type, placeholder,name} = props;
  return (
    <input type={type}
    placeholder={placeholder}
    name={name}
    id={name}
    className="text-sm  border border-rounded w-full py-2 px-3 text-slate-500"/>
  )
}

export default Input