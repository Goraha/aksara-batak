import { Fragment,useState } from "react";
import Button from "../Elements/Button";
import InputAksara from "../Elements/Input";
import decsKalimat from "../mod/Surat";

const FormAksara = (props) => {
 const [surats, setSurats] = useState([
  
  
]);

  const {title} = props
  const handleSubmit = (event) => {
    event.preventDefault();// prevent page refresh
    //window.location.href = "/products";
    //window.alert(event.target.kalimat.value);
    const kalimat = decsKalimat(event.target.kalimat.value);
    const result = kalimat.map(item => ({id: item ,name: item}));
    console.log(result);

    setSurats([
      ...result
    ])
    console.log(surats);
    
  }
  return (
    <Fragment>
      <div className="w-full max-w-xs">
        <h1 className="text-3xl font-bold mb-2 text-blue-500">{title}</h1>
        <form onSubmit={handleSubmit}>
          <InputAksara label="Kalimat" name="kalimat" type="text" placeholder="Kalimat...." rows="5" cols="5"/>
          <Button variant="bg-blue-500 w-full" type="submit">
            Ubah
          </Button>
        </form>
      </div>
      
      <div className="flex flex-wrap items-center w-full">
        {
          surats.map((item) =>{
            return(
              <div className="w-1/4" key={item.id}>
                <img src={`../public/images/aksara/${item.name}.png`} alt={`${item.name}`} />
                
              </div>
            )
          })
          
        }
      </div>
      
    </Fragment>
    
  );
}

export default FormAksara