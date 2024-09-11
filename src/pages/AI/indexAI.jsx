import React, { useState } from 'react';

const App = () => {
  const [showCheckbox, setShowCheckbox] = useState(false);

  const handlePasswordChange = (e) => {
    // Logika untuk menentukan kapan checkbox harus muncul
    const inputValue = e.target.value;
    if (inputValue.length > 5) { // Misalnya, tampilkan checkbox jika panjang password lebih dari 5 karakter
      setShowCheckbox(true);
    } else {
      setShowCheckbox(false);
    }
  };

  return (
    <div>
      <input
        type="password"
        placeholder="Enter password"
        onChange={handlePasswordChange}
      />
      {showCheckbox && (
        <div>
          <input type="checkbox" id="rememberMe" />
          <label htmlFor="rememberMe">Remember Me</label>
        </div>
      )}
    </div>
  );
};

export default App;
