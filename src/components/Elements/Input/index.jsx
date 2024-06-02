import Label from "./Label.jsx";
import Textarea from "./Textarea.jsx";


const InputAksara = (props) => {
const {label,name,type,placeholder,rows,cols} = props;
  return (
    <div className="mb-6">
      <Label htmlFor={name}>{label}</Label>
      <Textarea name={name} type={type} placeholder={placeholder} rows={rows} cols={cols}/>
    </div>
  );
};
export default InputAksara