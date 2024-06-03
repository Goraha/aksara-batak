import { Fragment,useState } from "react";
import Button from "../Elements/Button";
import InputAksara from "../Elements/Input";
import decsKalimat from "../mod/Surat";

const FormAksara = (props) => {
 const [surats, setSurats] = useState([
  
  
]);

  const {title} = props
  const handleSubmit = (event) => {
    event.preventDefault();
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
      <div className="w-full px-5 m-5">
        <div className="flex justify-center">
          <h1 className="text-3xl font-bold mb-2 text-blue-500">{title}</h1>
        </div>
        
        <form onSubmit={handleSubmit}>
          <InputAksara label="Kalimat" name="kalimat" type="text" placeholder="Kalimat...." rows="5" cols="5"/>
          <Button variant="bg-blue-500 w-full" type="submit">
            Ubah
          </Button>
        </form>
      </div>
      
      <div className="w-full">
        <div className="flex flex-wrap items-center  min-h-28 border border-gray-500 m-5">
        {
          surats.map((item) =>{
            return(
              <div className="grid justify-items-center max-w-16" key={item.id}>
                <img src={`./images/aksara/${item.name}.png`} alt={`${item.name}`} />
                <p>{item.name}</p>
              </div>
            )
          })
          
        }
        </div>
      </div>
      
      
    </Fragment>
    
  );
}

export default FormAksara