const TextInput = ({ label, placeholder }) => {
    return (
      <div>
        <label>{label}</label>
        <input type="text" placeholder={placeholder} />
      </div>
    );
  };
  
  export default TextInput;
  