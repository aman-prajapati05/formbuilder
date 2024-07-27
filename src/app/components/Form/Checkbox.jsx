// const Checkbox = ({ label }) => {
//     return (
//       <div>
//         <label>
//           <input type="checkbox" />
//           {label}
//         </label>
//       </div>
//     );
//   };
  
//   export default Checkbox;

const Checkbox = ({ label, options }) => {
  return (
    <div>
      <label>{label}</label>
      {options && options.map((option, index) => (
        <div key={index}>
          <input type="checkbox" id={`option-${index}`} />
          <label htmlFor={`option-${index}`}>{option}</label>
        </div>
      ))}
    </div>
  );
};

export default Checkbox;
  