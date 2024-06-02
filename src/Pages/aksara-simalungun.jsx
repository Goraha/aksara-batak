import FormAksara from "../components/Fragments/FormAksara";
import HasilAksara from "../components/Fragments/HasilAksara";
import InputLayout from "../components/Layouts/InputLayout";
const AksaraSimalungunPage = () => {

  return (
    <div className="flex flex-col justify-center items-center w-full">
      <InputLayout title="Aksara Simalungun" type="login">
        <FormAksara />
      </InputLayout>
      <HasilAksara />
    </div>
    
  )
}
export default AksaraSimalungunPage