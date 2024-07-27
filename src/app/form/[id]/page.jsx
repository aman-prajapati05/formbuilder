// "use client"
// import { useEffect, useState } from 'react';
// import { useRouter } from 'next/router';
// import { db } from '@/app/firebase/firebase';
// import { doc, getDoc } from 'firebase/firestore';

// const FormDetail = ({ params }) => {
//   const { id } = params;
//   const [form, setForm] = useState(null);

//   useEffect(() => {
//     const fetchForm = async () => {
//       if (id) {
//         const formDoc = doc(db, 'forms', id);
//         const formSnapshot = await getDoc(formDoc);
//         if (formSnapshot.exists()) {
//           setForm({ id: formSnapshot.id, ...formSnapshot.data() });
//         } else {
//           console.error("Form not found");
//         }
//       }
//     };

//     fetchForm();
//   }, [id]);

//   if (!form) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="p-4">
//       <h1 className="text-2xl font-bold">Form ID: {form.id}</h1>
//       <div className="mt-4">
//         {form.formElements ? (
//           <pre>{JSON.stringify(JSON.parse(form.formElements), null, 2)}</pre>
//         ) : (
//           <p>No elements</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default FormDetail;

"use client"
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { db } from '@/app/firebase/firebase';
import { doc, getDoc } from 'firebase/firestore';
import TextInput from '../../components/Form/TextInput';
import Checkbox from '../../components/Form/Checkbox';
import Select from '../../components/Form/Select';

const FormDetail = ({ params }) => {
  const { id } = params;
  const [form, setForm] = useState(null);

  useEffect(() => {
    const fetchForm = async () => {
      if (id) {
        const formDoc = doc(db, 'forms', id);
        const formSnapshot = await getDoc(formDoc);
        if (formSnapshot.exists()) {
          setForm({ id: formSnapshot.id, ...formSnapshot.data() });
        } else {
          console.error("Form not found");
        }
      }
    };

    fetchForm();
  }, [id]);

  if (!form) {
    return <div>Loading...</div>;
  }

  const renderFormElement = (element) => {
    switch (element.type) {
      case 'text':
        return <TextInput key={element.id} {...element} />;
      case 'checkbox':
        return <Checkbox key={element.id} {...element} />;
      case 'select':
        return <Select key={element.id} {...element} />;
      default:
        return null;
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Form ID: {form.id}</h1>
      <div className="mt-4">
        {form.formElements ? (
          JSON.parse(form.formElements).map((element) => renderFormElement(element))
        ) : (
          <p>No elements</p>
        )}
      </div>
    </div>
  );
};

export default FormDetail;
