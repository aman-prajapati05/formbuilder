// "use client"

// import FormBuilder from "../components/Form/FormBuilder";
// import { FormProvider } from "../context/FormContext";
// import { useRequireAuth } from "../hooks/useRequireAuth";


// export default function FormPage() {
//   const user = useRequireAuth();

//   if (!user) {
//     return null; // or a loading indicator
//   }

//   return (
//     <FormProvider>
//       <FormBuilder />
//     </FormProvider>
//   );
// }

"use client"

import FormBuilder from "../components/Form/FormBuilder";
import { FormProvider } from "../context/FormContext";
import { useRequireAuth } from "../hooks/useRequireAuth";
import { v4 as uuidv4 } from 'uuid';

export default function FormPage() {
  const user = useRequireAuth();

  if (!user) {
    return null; // or a loading indicator
  }

  const formSessionId = uuidv4(); // Generate a unique identifier for each session

  return (
    <FormProvider>
      <FormBuilder formSessionId={formSessionId} />
    </FormProvider>
  );
}
