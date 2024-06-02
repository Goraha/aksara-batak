const Textarea = (props) => {
  const { type, placeholder,name,rows,cols} = props;
  return (
    <textarea type={type}
    placeholder={placeholder}
    name={name}
    id={name}
    rows={rows}
    cols={cols}
    className="text-sm  border border-rounded w-full py-2 px-3 text-slate-500"/>
  )
}

export default Textarea