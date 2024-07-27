import Image from "next/image";
import FormBuilder from "./components/Form/FormBuilder";
import { FormProvider } from "./context/FormContext";
import Signup from "./components/Signup";

export default function Home() {
  return (
    <div>
      {/* <FormProvider>
      <FormBuilder />
      </FormProvider> */}
     
      <Signup/>
    </div>
  );
}
