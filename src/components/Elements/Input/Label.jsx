
const Label = (props) => {
  // eslint-disable-next-line react/prop-types
  const { htmlFor,children }= props;
  return (
    <label htmlFor={htmlFor} className="block text-slate-500 font-medium text-sm font-bold mb2">{children}</label>
  )
}

export default Label