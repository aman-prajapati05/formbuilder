// "use client"
// import { useEffect, useState } from 'react';
// import { useAuth } from '@/app/context/AuthContext';
// import { db } from '@/app/firebase/firebase';
// import { collection, query, where, getDocs } from 'firebase/firestore';

// const FormList = () => {
//   const { user } = useAuth();
//   const [forms, setForms] = useState([]);

//   useEffect(() => {
//     const fetchForms = async () => {
//       if (user) {
//         const q = query(collection(db, 'forms'), where('userId', '==', user.uid));
//         const querySnapshot = await getDocs(q);
//         const userForms = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
//         setForms(userForms);
//       }
//     };

//     fetchForms();
//   }, [user]);

//   if (!user) {
//     return null; // or a loading indicator
//   }

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
//       {forms.map(form => (
//         <div key={form.id} className="border p-4 rounded shadow">
//           <h3 className="text-lg font-bold">Form ID: {form.id}</h3>
//           <p>{form.formElements ? JSON.stringify(form.formElements) : "No elements"}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default FormList;

"use client"
import { useEffect, useState } from 'react';
import { useAuth } from '@/app/context/AuthContext';
import { db } from '@/app/firebase/firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';
import Link from 'next/link';

const FormList = () => {
  const { user } = useAuth();
  const [forms, setForms] = useState([]);

  useEffect(() => {
    const fetchForms = async () => {
      if (user) {
        const q = query(collection(db, 'forms'), where('userId', '==', user.uid));
        const querySnapshot = await getDocs(q);
        const userForms = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setForms(userForms);
      }
    };

    fetchForms();
  }, [user]);

  if (!user) {
    return null; // or a loading indicator
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {forms.map(form => (
        <div key={form.id} className="border p-4 rounded shadow">
          <h3 className="text-lg font-bold">Form ID: {form.id}</h3>
          <Link href={`/form/${form.id}`}>
            <div className="text-blue-500 underline">View Form</div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default FormList;

