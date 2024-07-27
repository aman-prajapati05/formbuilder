// // // "use client"
// // // import { createContext, useState, useContext } from 'react';

// // // const FormContext = createContext();

// // // export const FormProvider = ({ children }) => {
// // //   const [formElements, setFormElements] = useState([
// // //     { type: 'text', label: 'Name', placeholder: 'Enter your name', id: Date.now() }
// // //   ]);

// // //   const addFormElement = (type) => {
// // //     const newElement = { type, id: Date.now() };

// // //     switch (type) {
// // //       case 'text':
// // //         newElement.label = 'New Text';
// // //         newElement.placeholder = 'Enter text';
// // //         break;
// // //       case 'checkbox':
// // //         newElement.label = 'New Checkbox';
// // //         break;
// // //       case 'select':
// // //         newElement.label = 'New Select';
// // //         newElement.options = [
// // //           { label: 'Option 1', value: 'option1' },
// // //           { label: 'Option 2', value: 'option2' }
// // //         ];
// // //         break;
// // //       default:
// // //         break;
// // //     }

// // //     setFormElements([...formElements, newElement]);
// // //   };

// // //   return (
// // //     <FormContext.Provider value={{ formElements, addFormElement }}>
// // //       {children}
// // //     </FormContext.Provider>
// // //   );
// // // };

// // // export const useFormContext = () => useContext(FormContext);

// // // export default FormContext;

// // "use client"
// // import { createContext, useState, useContext } from 'react';

// // const FormContext = createContext();

// // export const FormProvider = ({ children }) => {
// //   const [formElements, setFormElements] = useState([
// //     { type: 'text', label: 'Name', placeholder: 'Enter your name', id: Date.now() }
// //   ]);

// //   const addFormElement = (type) => {
// //     const newElement = { type, id: Date.now() };

// //     switch (type) {
// //       case 'text':
// //         newElement.label = 'New Text';
// //         newElement.placeholder = 'Enter text';
// //         break;
// //       case 'checkbox':
// //         newElement.label = 'New Checkbox';
// //         break;
// //       case 'select':
// //         newElement.label = 'New Select';
// //         newElement.options = [
// //           { label: 'Option 1', value: 'option1' },
// //           { label: 'Option 2', value: 'option2' }
// //         ];
// //         break;
// //       default:
// //         break;
// //     }

// //     setFormElements([...formElements, newElement]);
// //   };

// //   const deleteFormElement = (id) => {
// //     setFormElements(formElements.filter(element => element.id !== id));
// //   };

// //   const editFormElement = (id, updates) => {
// //     setFormElements(formElements.map(element => 
// //       element.id === id ? { ...element, ...updates } : element
// //     ));
// //   };

// //   return (
// //     <FormContext.Provider value={{ formElements, addFormElement, deleteFormElement, editFormElement }}>
// //       {children}
// //     </FormContext.Provider>
// //   );
// // };

// // export const useFormContext = () => useContext(FormContext);

// // export default FormContext;

// "use client"
// import { createContext, useState, useContext } from 'react';

// const FormContext = createContext();

// export const FormProvider = ({ children }) => {
//   const [formElements, setFormElements] = useState([
//     { type: 'text', label: 'Name', placeholder: 'Enter your name', id: Date.now() }
//   ]);

//   const addFormElement = (type) => {
//     const newElement = { type, id: Date.now() };

//     switch (type) {
//       case 'text':
//         newElement.label = 'New Text';
//         newElement.placeholder = 'Enter text';
//         break;
//       case 'checkbox':
//         newElement.label = 'New Checkbox';
//         newElement.options = ['Option 1', 'Option 2'];
//         break;
//       case 'select':
//         newElement.label = 'New Select';
//         newElement.options = ['Option 1', 'Option 2'];
//         break;
//       default:
//         break;
//     }

//     setFormElements([...formElements, newElement]);
//   };

//   const deleteFormElement = (id) => {
//     setFormElements(formElements.filter(element => element.id !== id));
//   };

//   const editFormElement = (id, updates) => {
//     setFormElements(formElements.map(element => 
//       element.id === id ? { ...element, ...updates } : element
//     ));
//   };

//   return (
//     <FormContext.Provider value={{ formElements, setFormElements, addFormElement, deleteFormElement, editFormElement }}>
//       {children}
//     </FormContext.Provider>
//   );
// };

// export const useFormContext = () => useContext(FormContext);

// export default FormContext;
"use client"
import { createContext, useState, useContext } from 'react';

const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [formElements, setFormElements] = useState([
    { 
      type: 'text', 
      label: 'Name', 
      placeholder: 'Enter your name', 
      id: Date.now() 
    }
  ]);

  const addFormElement = (type) => {
    const newElement = { type, id: Date.now() };

    switch (type) {
      case 'text':
        newElement.label = 'New Text Input';
        newElement.placeholder = 'Enter text';
        break;
      case 'checkbox':
        newElement.label = 'New Checkbox Group';
        newElement.options = ['Option 1', 'Option 2'];
        break;
      case 'select':
        newElement.label = 'New Select Dropdown';
        newElement.options = ['Option 1', 'Option 2'];
        break;
      default:
        break;
    }

    setFormElements([...formElements, newElement]);
  };

  const deleteFormElement = (id) => {
    setFormElements(formElements.filter(element => element.id !== id));
  };

  const editFormElement = (id, updates) => {
    setFormElements(formElements.map(element => 
      element.id === id ? { ...element, ...updates } : element
    ));
  };

  const moveFormElement = (id, direction) => {
    const index = formElements.findIndex(element => element.id === id);
    if (
      (direction === 'up' && index === 0) || 
      (direction === 'down' && index === formElements.length - 1)
    ) {
      return; // Can't move further in this direction
    }

    const newIndex = direction === 'up' ? index - 1 : index + 1;
    const newFormElements = [...formElements];
    [newFormElements[index], newFormElements[newIndex]] = [newFormElements[newIndex], newFormElements[index]];
    
    setFormElements(newFormElements);
  };

  return (
    <FormContext.Provider 
      value={{ 
        formElements, 
        setFormElements, 
        addFormElement, 
        deleteFormElement, 
        editFormElement,
        moveFormElement
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => useContext(FormContext);

export default FormContext;