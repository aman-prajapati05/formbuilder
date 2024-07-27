// // // // // "use client"
// // // // // import TextInput from './TextInput';
// // // // // import Checkbox from './Checkbox';
// // // // // import Select from './Select';
// // // // // import { useFormContext } from '@/app/context/FormContext';

// // // // // const FormBuilder = () => {
// // // // //   const { formElements, addFormElement } = useFormContext();

// // // // //   const renderFormElement = (element) => {
// // // // //     switch (element.type) {
// // // // //       case 'text':
// // // // //         return <TextInput key={element.id} {...element} />;
// // // // //       case 'checkbox':
// // // // //         return <Checkbox key={element.id} {...element} />;
// // // // //       case 'select':
// // // // //         return <Select key={element.id} {...element} />;
// // // // //       default:
// // // // //         return null;
// // // // //     }
// // // // //   };

// // // // //   return (
// // // // //     <div className='flex justify-between w-[80vw] bg-blue'>
     
// // // // //       <div>
// // // // //         {formElements.map((element) => renderFormElement(element))}
// // // // //       </div>
// // // // //       <div className=' flex-end'>
// // // // //       <button onClick={() => addFormElement('text')}>Add Text</button>
// // // // //       <button onClick={() => addFormElement('checkbox')}>Add Checkbox</button>
// // // // //       <button onClick={() => addFormElement('select')}>Add Select</button>
// // // // //       </div>
// // // // //       <button>Publish</button>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default FormBuilder;
// // // // "use client"
// // // // import { useEffect, useCallback } from 'react';
// // // // import TextInput from './TextInput';
// // // // import Checkbox from './Checkbox';
// // // // import Select from './Select';
// // // // import { useFormContext } from '@/app/context/FormContext';
// // // // import { useAuth } from '@/app/context/AuthContext';
// // // // import { db } from '@/app/firebase/firebase';
// // // // import { doc, setDoc } from 'firebase/firestore';
// // // // import { debounce } from 'lodash'; // You'll need to install lodash: npm install lodash

// // // // const FormBuilder = () => {
// // // //   const { formElements, addFormElement } = useFormContext();
// // // //   const { user } = useAuth();

// // // //   const saveFormToFirebase = useCallback(async () => {
// // // //     if (user) {
// // // //       try {
// // // //         const formDoc = doc(db, 'forms', user.uid);
// // // //         await setDoc(formDoc, { formElements: JSON.stringify(formElements) }, { merge: true });
// // // //         console.log('Form saved successfully');
// // // //       } catch (error) {
// // // //         console.error('Error saving form:', error);
// // // //       }
// // // //     }
// // // //   }, [formElements, user]);

// // // //   const debouncedSave = debounce(saveFormToFirebase, 5000);

// // // //   useEffect(() => {
// // // //     debouncedSave();
// // // //     return debouncedSave.cancel;
// // // //   }, [formElements, debouncedSave]);

// // // //   const renderFormElement = (element) => {
// // // //     switch (element.type) {
// // // //       case 'text':
// // // //         return <TextInput key={element.id} {...element} />;
// // // //       case 'checkbox':
// // // //         return <Checkbox key={element.id} {...element} />;
// // // //       case 'select':
// // // //         return <Select key={element.id} {...element} />;
// // // //       default:
// // // //         return null;
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div className='flex justify-between w-[80vw] bg-blue'>
// // // //       <div>
// // // //         {formElements.map((element) => renderFormElement(element))}
// // // //       </div>
// // // //       <div className='flex-end'>
// // // //         <button onClick={() => addFormElement('text')}>Add Text</button>
// // // //         <button onClick={() => addFormElement('checkbox')}>Add Checkbox</button>
// // // //         <button onClick={() => addFormElement('select')}>Add Select</button>
// // // //       </div>
// // // //       <button onClick={saveFormToFirebase}>Publish</button>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default FormBuilder;

// // // "use client"
// // // import { useEffect, useCallback, useState } from 'react';
// // // import TextInput from './TextInput';
// // // import Checkbox from './Checkbox';
// // // import Select from './Select';
// // // import { useFormContext } from '@/app/context/FormContext';
// // // import { useAuth } from '@/app/context/AuthContext';
// // // import { db } from '@/app/firebase/firebase';
// // // import { doc, setDoc } from 'firebase/firestore';
// // // import { debounce } from 'lodash';

// // // const FormBuilder = () => {
// // //   const { formElements, addFormElement, deleteFormElement, editFormElement } = useFormContext();
// // //   const { user } = useAuth();
// // //   const [editingId, setEditingId] = useState(null);

// // //   const saveFormToFirebase = useCallback(async () => {
// // //     if (user) {
// // //       try {
// // //         const formDoc = doc(db, 'forms', user.uid);
// // //         await setDoc(formDoc, { formElements: JSON.stringify(formElements) }, { merge: true });
// // //         console.log('Form saved successfully');
// // //       } catch (error) {
// // //         console.error('Error saving form:', error);
// // //       }
// // //     }
// // //   }, [formElements, user]);

// // //   const debouncedSave = debounce(saveFormToFirebase, 5000);

// // //   useEffect(() => {
// // //     debouncedSave();
// // //     return debouncedSave.cancel;
// // //   }, [formElements, debouncedSave]);

// // //   const handleEdit = (id) => {
// // //     setEditingId(id);
// // //   };

// // //   const handleSaveEdit = (id, updates) => {
// // //     editFormElement(id, updates);
// // //     setEditingId(null);
// // //   };

// // //   const renderFormElement = (element) => {
// // //     const EditComponent = () => (
// // //       <div>
// // //         <input
// // //           type="text"
// // //           value={element.label}
// // //           onChange={(e) => handleSaveEdit(element.id, { label: e.target.value })}
// // //           placeholder="Label"
// // //         />
// // //         {element.type === 'text' && (
// // //           <input
// // //             type="text"
// // //             value={element.placeholder}
// // //             onChange={(e) => handleSaveEdit(element.id, { placeholder: e.target.value })}
// // //             placeholder="Placeholder"
// // //           />
// // //         )}
// // //         <button onClick={() => setEditingId(null)}>Save</button>
// // //       </div>
// // //     );

// // //     return (
// // //       <div key={element.id}>
// // //         {editingId === element.id ? (
// // //           <EditComponent />
// // //         ) : (
// // //           <>
// // //             {element.type === 'text' && <TextInput {...element} />}
// // //             {element.type === 'checkbox' && <Checkbox {...element} />}
// // //             {element.type === 'select' && <Select {...element} />}
// // //             <button onClick={() => handleEdit(element.id)}>Edit</button>
// // //             <button onClick={() => deleteFormElement(element.id)}>Delete</button>
// // //           </>
// // //         )}
// // //       </div>
// // //     );
// // //   };

// // //   return (
// // //     <div className='flex justify-between w-[80vw] bg-blue'>
// // //       <div>
// // //         {formElements.map((element) => renderFormElement(element))}
// // //       </div>
// // //       <div className='flex-end'>
// // //         <button onClick={() => addFormElement('text')}>Add Text</button>
// // //         <button onClick={() => addFormElement('checkbox')}>Add Checkbox</button>
// // //         <button onClick={() => addFormElement('select')}>Add Select</button>
// // //       </div>
// // //       <button onClick={saveFormToFirebase}>Publish</button>
// // //     </div>
// // //   );
// // // };

// // // export default FormBuilder;
// // "use client"
// // import { useState } from 'react';
// // import TextInput from './TextInput';
// // import Checkbox from './Checkbox';
// // import Select from './Select';
// // import { useFormContext } from '@/app/context/FormContext';
// // import { useAuth } from '@/app/context/AuthContext';
// // import { db } from '@/app/firebase/firebase';
// // import { doc, setDoc } from 'firebase/firestore';

// // const FormBuilder = () => {
// //   const { formElements, addFormElement, deleteFormElement, editFormElement } = useFormContext();
// //   const { user } = useAuth();
// //   const [editingId, setEditingId] = useState(null);

// //   const saveFormToFirebase = async () => {
// //     if (user) {
// //       try {
// //         const formDoc = doc(db, 'forms', user.uid);
// //         await setDoc(formDoc, { formElements: JSON.stringify(formElements) }, { merge: true });
// //         console.log('Form saved successfully');
// //       } catch (error) {
// //         console.error('Error saving form:', error);
// //       }
// //     }
// //   };

// //   const handleEdit = (id) => {
// //     setEditingId(id);
// //   };

// //   const handleSaveEdit = (id, updates) => {
// //     editFormElement(id, updates);
// //     setEditingId(null);
// //   };

// //   const renderFormElement = (element) => {
// //     const EditComponent = () => {
// //       const [editedElement, setEditedElement] = useState({ ...element });

// //       const handleOptionChange = (index, value) => {
// //         const newOptions = [...editedElement.options];
// //         newOptions[index] = value;
// //         setEditedElement({ ...editedElement, options: newOptions });
// //       };

// //       const addOption = () => {
// //         setEditedElement({ 
// //           ...editedElement, 
// //           options: [...editedElement.options, `Option ${editedElement.options.length + 1}`] 
// //         });
// //       };

// //       const removeOption = (index) => {
// //         const newOptions = editedElement.options.filter((_, i) => i !== index);
// //         setEditedElement({ ...editedElement, options: newOptions });
// //       };

// //       return (
// //         <div>
// //           <input
// //             type="text"
// //             value={editedElement.label}
// //             onChange={(e) => setEditedElement({ ...editedElement, label: e.target.value })}
// //             placeholder="Label"
// //           />
// //           {element.type === 'text' && (
// //             <input
// //               type="text"
// //               value={editedElement.placeholder}
// //               onChange={(e) => setEditedElement({ ...editedElement, placeholder: e.target.value })}
// //               placeholder="Placeholder"
// //             />
// //           )}
// //           {(element.type === 'checkbox' || element.type === 'select') && (
// //             <div>
// //               {editedElement.options.map((option, index) => (
// //                 <div key={index}>
// //                   <input
// //                     type="text"
// //                     value={option}
// //                     onChange={(e) => handleOptionChange(index, e.target.value)}
// //                   />
// //                   <button onClick={() => removeOption(index)}>Remove</button>
// //                 </div>
// //               ))}
// //               <button onClick={addOption}>Add Option</button>
// //             </div>
// //           )}
// //           <button onClick={() => handleSaveEdit(element.id, editedElement)}>Save</button>
// //           <button onClick={() => setEditingId(null)}>Cancel</button>
// //         </div>
// //       );
// //     };

// //     return (
// //       <div key={element.id}>
// //         {editingId === element.id ? (
// //           <EditComponent />
// //         ) : (
// //           <>
// //             {element.type === 'text' && <TextInput {...element} />}
// //             {element.type === 'checkbox' && <Checkbox {...element} />}
// //             {element.type === 'select' && <Select {...element} />}
// //             <button onClick={() => handleEdit(element.id)}>Edit</button>
// //             <button onClick={() => deleteFormElement(element.id)}>Delete</button>
// //           </>
// //         )}
// //       </div>
// //     );
// //   };

// //   return (
// //     <div className='flex justify-between w-[80vw] bg-blue'>
// //       <div>
// //         {formElements.map((element) => renderFormElement(element))}
// //       </div>
// //       <div className='flex-end'>
// //         <button onClick={() => addFormElement('text')}>Add Text</button>
// //         <button onClick={() => addFormElement('checkbox')}>Add Checkbox</button>
// //         <button onClick={() => addFormElement('select')}>Add Select</button>
// //       </div>
// //       <button onClick={saveFormToFirebase}>Publish</button>
// //     </div>
// //   );
// // };

// // export default FormBuilder;
// // "use client"
// // import { useEffect, useState } from 'react';
// // import TextInput from './TextInput';
// // import Checkbox from './Checkbox';
// // import Select from './Select';
// // import { useFormContext } from '@/app/context/FormContext';
// // import { useAuth } from '@/app/context/AuthContext';
// // import { db } from '@/app/firebase/firebase';
// // import { doc, setDoc } from 'firebase/firestore';
// // import { debounce } from 'lodash';

// // const FormBuilder = () => {
// //   const { formElements, addFormElement, deleteFormElement, editFormElement } = useFormContext();
// //   const { user } = useAuth();
// //   const [editingId, setEditingId] = useState(null);

// //   const saveFormToFirebase = async () => {
// //     if (user) {
// //       try {
// //         const formDoc = doc(db, 'forms', user.uid);
// //         await setDoc(formDoc, { formElements: JSON.stringify(formElements) }, { merge: true });
// //         console.log('Form saved successfully');
// //       } catch (error) {
// //         console.error('Error saving form:', error);
// //       }
// //     }
// //   };

// //   const debouncedSave = debounce(saveFormToFirebase, 1000);
// //   useEffect(() => {
// //          debouncedSave();
// //          return debouncedSave.cancel;
// // }, [formElements, debouncedSave]);

// //   const handleEdit = (id) => {
// //     setEditingId(id);
// //   };

// //   const handleSaveEdit = (id, updates) => {
// //     editFormElement(id, updates);
// //     setEditingId(null);
// //   };

// //   const renderFormElement = (element) => {
// //     const EditComponent = () => {
// //       const [editedElement, setEditedElement] = useState({ ...element });

// //       const handleOptionChange = (index, value) => {
// //         const newOptions = [...editedElement.options];
// //         newOptions[index] = value;
// //         setEditedElement({ ...editedElement, options: newOptions });
// //       };

// //       const addOption = () => {
// //         setEditedElement({ 
// //           ...editedElement, 
// //           options: [...editedElement.options, `Option ${editedElement.options.length + 1}`] 
// //         });
// //       };

// //       const removeOption = (index) => {
// //         const newOptions = editedElement.options.filter((_, i) => i !== index);
// //         setEditedElement({ ...editedElement, options: newOptions });
// //       };

// //       return (
// //         <div>
// //           <input
// //             type="text"
// //             value={editedElement.label}
// //             onChange={(e) => setEditedElement({ ...editedElement, label: e.target.value })}
// //             placeholder="Label"
// //           />
// //           {element.type === 'text' && (
// //             <input
// //               type="text"
// //               value={editedElement.placeholder}
// //               onChange={(e) => setEditedElement({ ...editedElement, placeholder: e.target.value })}
// //               placeholder="Placeholder"
// //             />
// //           )}
// //           {(element.type === 'checkbox' || element.type === 'select') && (
// //             <div>
// //               {editedElement.options.map((option, index) => (
// //                 <div key={index}>
// //                   <input
// //                     type="text"
// //                     value={option}
// //                     onChange={(e) => handleOptionChange(index, e.target.value)}
// //                   />
// //                   <button onClick={() => removeOption(index)}>Remove</button>
// //                 </div>
// //               ))}
// //               <button onClick={addOption}>Add Option</button>
// //             </div>
// //           )}
// //           <button onClick={() => handleSaveEdit(element.id, editedElement)}>Save</button>
// //           <button onClick={() => setEditingId(null)}>Cancel</button>
// //         </div>
// //       );
// //     };

// //     return (
// //       <div key={element.id}>
// //         {editingId === element.id ? (
// //           <EditComponent />
// //         ) : (
// //           <>
// //             {element.type === 'text' && <TextInput {...element} />}
// //             {element.type === 'checkbox' && <Checkbox {...element} />}
// //             {element.type === 'select' && <Select {...element} />}
// //             <button onClick={() => handleEdit(element.id)}>Edit</button>
// //             <button onClick={() => deleteFormElement(element.id)}>Delete</button>
// //           </>
// //         )}
// //       </div>
// //     );
// //   };

// //   return (
// //     <div className='flex justify-between w-[80vw] bg-blue'>
// //       <div>
// //         {formElements.map((element) => renderFormElement(element))}
// //       </div>
// //       <div className='flex-end'>
// //         <button onClick={() => addFormElement('text')}>Add Text</button>
// //         <button onClick={() => addFormElement('checkbox')}>Add Checkbox</button>
// //         <button onClick={() => addFormElement('select')}>Add Select</button>
// //       </div>
// //       <button onClick={saveFormToFirebase}>Publish</button>
// //     </div>
// //   );
// // };

// // export default FormBuilder;

// "use client"
// import { useEffect, useState } from 'react';
// import TextInput from './TextInput';
// import Checkbox from './Checkbox';
// import Select from './Select';
// import { useFormContext } from '@/app/context/FormContext';
// import { useAuth } from '@/app/context/AuthContext';
// import { db } from '@/app/firebase/firebase';
// import { doc, setDoc } from 'firebase/firestore';
// import { debounce } from 'lodash';

// const FormBuilder = ({ formSessionId }) => {
//   const { formElements, addFormElement, deleteFormElement, editFormElement } = useFormContext();
//   const { user } = useAuth();
//   const [editingId, setEditingId] = useState(null);

//   const saveFormToFirebase = async () => {
//     if (user) {
//       try {
//         const formDoc = doc(db, 'forms', `${user.uid}-${formSessionId}`); // Use unique ID for each form
//         await setDoc(formDoc, { formElements: JSON.stringify(formElements) }, { merge: true });
//         console.log('Form saved successfully');
//       } catch (error) {
//         console.error('Error saving form:', error);
//       }
//     }
//   };

//   const debouncedSave = debounce(saveFormToFirebase, 1000);
//   useEffect(() => {
//     debouncedSave();
//     return debouncedSave.cancel;
//   }, [formElements, debouncedSave]);

//   const handleEdit = (id) => {
//     setEditingId(id);
//   };

//   const handleSaveEdit = (id, updates) => {
//     editFormElement(id, updates);
//     setEditingId(null);
//   };

//   const renderFormElement = (element) => {
//     const EditComponent = () => {
//       const [editedElement, setEditedElement] = useState({ ...element });

//       const handleOptionChange = (index, value) => {
//         const newOptions = [...editedElement.options];
//         newOptions[index] = value;
//         setEditedElement({ ...editedElement, options: newOptions });
//       };

//       const addOption = () => {
//         setEditedElement({
//           ...editedElement,
//           options: [...editedElement.options, `Option ${editedElement.options.length + 1}`]
//         });
//       };

//       const removeOption = (index) => {
//         const newOptions = editedElement.options.filter((_, i) => i !== index);
//         setEditedElement({ ...editedElement, options: newOptions });
//       };

//       return (
//         <div>
//           <input
//             type="text"
//             value={editedElement.label}
//             onChange={(e) => setEditedElement({ ...editedElement, label: e.target.value })}
//             placeholder="Label"
//           />
//           {element.type === 'text' && (
//             <input
//               type="text"
//               value={editedElement.placeholder}
//               onChange={(e) => setEditedElement({ ...editedElement, placeholder: e.target.value })}
//               placeholder="Placeholder"
//             />
//           )}
//           {(element.type === 'checkbox' || element.type === 'select') && (
//             <div>
//               {editedElement.options.map((option, index) => (
//                 <div key={index}>
//                   <input
//                     type="text"
//                     value={option}
//                     onChange={(e) => handleOptionChange(index, e.target.value)}
//                   />
//                   <button onClick={() => removeOption(index)}>Remove</button>
//                 </div>
//               ))}
//               <button onClick={addOption}>Add Option</button>
//             </div>
//           )}
//           <button onClick={() => handleSaveEdit(element.id, editedElement)}>Save</button>
//           <button onClick={() => setEditingId(null)}>Cancel</button>
//         </div>
//       );
//     };

//     return (
//       <div key={element.id}>
//         {editingId === element.id ? (
//           <EditComponent />
//         ) : (
//           <>
//             {element.type === 'text' && <TextInput {...element} />}
//             {element.type === 'checkbox' && <Checkbox {...element} />}
//             {element.type === 'select' && <Select {...element} />}
//             <button onClick={() => handleEdit(element.id)}>Edit</button>
//             <button onClick={() => deleteFormElement(element.id)}>Delete</button>
//           </>
//         )}
//       </div>
//     );
//   };

//   return (
//     <div className='flex justify-between w-[80vw] bg-blue'>
//       <div>
//         {formElements.map((element) => renderFormElement(element))}
//       </div>
//       <div className='flex-end'>
//         <button onClick={() => addFormElement('text')}>Add Text</button>
//         <button onClick={() => addFormElement('checkbox')}>Add Checkbox</button>
//         <button onClick={() => addFormElement('select')}>Add Select</button>
//       </div>
//       <button onClick={saveFormToFirebase}>Publish</button>
//     </div>
//   );
// };

// export default FormBuilder;

"use client"
import { useEffect, useState } from 'react';
import TextInput from './TextInput';
import Checkbox from './Checkbox';
import Select from './Select';
import { useFormContext } from '@/app/context/FormContext';
import { useAuth } from '@/app/context/AuthContext';
import { db } from '@/app/firebase/firebase';
import { doc, setDoc } from 'firebase/firestore';
import { debounce } from 'lodash';

const FormBuilder = ({ formSessionId }) => {
  const { formElements, addFormElement, deleteFormElement, editFormElement } = useFormContext();
  const { user } = useAuth();
  const [editingId, setEditingId] = useState(null);

  const saveFormToFirebase = async () => {
    if (user) {
      try {
        const formDoc = doc(db, 'forms', `${user.uid}-${formSessionId}`);
        await setDoc(formDoc, { 
          formElements: JSON.stringify(formElements), 
          userId: user.uid // Add userId to the document
        }, { merge: true });
        console.log('Form saved successfully');
      } catch (error) {
        console.error('Error saving form:', error);
      }
    }
  };

  const debouncedSave = debounce(saveFormToFirebase, 1000);
  useEffect(() => {
    debouncedSave();
    return debouncedSave.cancel;
  }, [formElements, debouncedSave]);

  const handleEdit = (id) => {
    setEditingId(id);
  };

  const handleSaveEdit = (id, updates) => {
    editFormElement(id, updates);
    setEditingId(null);
  };

  const renderFormElement = (element) => {
    const EditComponent = () => {
      const [editedElement, setEditedElement] = useState({ ...element });

      const handleOptionChange = (index, value) => {
        const newOptions = [...editedElement.options];
        newOptions[index] = value;
        setEditedElement({ ...editedElement, options: newOptions });
      };

      const addOption = () => {
        setEditedElement({
          ...editedElement,
          options: [...editedElement.options, `Option ${editedElement.options.length + 1}`]
        });
      };

      const removeOption = (index) => {
        const newOptions = editedElement.options.filter((_, i) => i !== index);
        setEditedElement({ ...editedElement, options: newOptions });
      };

      return (
        <div>
          <input
            type="text"
            value={editedElement.label}
            onChange={(e) => setEditedElement({ ...editedElement, label: e.target.value })}
            placeholder="Label"
          />
          {element.type === 'text' && (
            <input
              type="text"
              value={editedElement.placeholder}
              onChange={(e) => setEditedElement({ ...editedElement, placeholder: e.target.value })}
              placeholder="Placeholder"
            />
          )}
          {(element.type === 'checkbox' || element.type === 'select') && (
            <div>
              {editedElement.options.map((option, index) => (
                <div key={index}>
                  <input
                    type="text"
                    value={option}
                    onChange={(e) => handleOptionChange(index, e.target.value)}
                  />
                  <button onClick={() => removeOption(index)}>Remove</button>
                </div>
              ))}
              <button onClick={addOption}>Add Option</button>
            </div>
          )}
          <button onClick={() => handleSaveEdit(element.id, editedElement)}>Save</button>
          <button onClick={() => setEditingId(null)}>Cancel</button>
        </div>
      );
    };

    return (
      <div key={element.id}>
        {editingId === element.id ? (
          <EditComponent />
        ) : (
          <>
            {element.type === 'text' && <TextInput {...element} />}
            {element.type === 'checkbox' && <Checkbox {...element} />}
            {element.type === 'select' && <Select {...element} />}
            <button onClick={() => handleEdit(element.id)}>Edit</button>
            <button onClick={() => deleteFormElement(element.id)}>Delete</button>
          </>
        )}
      </div>
    );
  };

  return (
    <div className='flex justify-between w-[80vw] bg-blue'>
      <div>
        {formElements.map((element) => renderFormElement(element))}
      </div>
      <div className='flex-end'>
        <button onClick={() => addFormElement('text')}>Add Text</button>
        <button onClick={() => addFormElement('checkbox')}>Add Checkbox</button>
        <button onClick={() => addFormElement('select')}>Add Select</button>
      </div>
      <button onClick={saveFormToFirebase}>Publish</button>
    </div>
  );
};

export default FormBuilder;

