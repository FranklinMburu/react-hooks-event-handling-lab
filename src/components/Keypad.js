function Keypad() {
    // Event handler for the onChange event
    const handleChange = () => {
      console.log('Entering password...');
    };
  
    return (
      <div>
        {/* Add an input field of type "password" and attach the onChange event handler */}
        <input type="password" onChange={handleChange} />
      </div>
    );
  }
  
  export default Keypad;