// const Select = ({ label, options }) => {
//     return (
//       <div>
//         <label>{label}</label>
//         <select>
//           {options.map((option) => (
//             <option key={option.value} value={option.value}>
//               {option.label}
//             </option>
//           ))}
//         </select>
//       </div>
//     );
//   };
  
//   export default Select;
const Select = ({ label, options }) => {
  return (
    <div>
      <label>{label}</label>
      <select>
        {options && options.map((option, index) => (
          <option key={index} value={option}>{option}</option>
        ))}
      </select>
    </div>
  );
};

export default Select;
  