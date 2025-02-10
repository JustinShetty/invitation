import './App.css'
import { useState } from 'react';

function App() {
  const [yesSize, setYesSize] = useState(16);
  const [noSize, setNoSize] = useState(16);

  const handleNoClick = () => {
    // Make the YES button bigger, NO button smaller
    setYesSize(prev => prev + 5);
    setNoSize(prev => Math.max(prev - 2, 0)); // limit how small it gets
  };

  const handleYesClick = () => {
    // TODO: Decide what to do when she clicks "Yes"
    alert("She said yes! (Customize this action)");
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <button
        onClick={handleYesClick}
        style={{ fontSize: yesSize, marginRight: '20px' }}
      >
        Yes
      </button>
      <button
        onClick={handleNoClick}
        style={{ fontSize: noSize }}
      >
        No
      </button>
    </div>
  );
}

export default App
