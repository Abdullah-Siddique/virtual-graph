/*
import React, { useState } from 'react';
import LineCalculator from './LineCalculator'; // Ensure this is correctly exported
import AreaCalculator from './AreaCalculator'; // Ensure this is correctly exported
import './App.css'; // Ensure this path is correct

function App() {
  const [choice, setChoice] = useState('');

  return (
    <div className="App">
      <h1 className="app-title">Virtual Graph System</h1>
      <p className="subtitle">What do you want to calculate?</p>
      
      <div className="button-group">
        <button className={`button ${choice === 'Line' ? 'active' : ''}`} onClick={() => setChoice('Line')}>
          Line
        </button>
        <button className={`button ${choice === 'Area' ? 'active' : ''}`} onClick={() => setChoice('Area')}>
          Area
        </button>
      </div>

      {choice === 'Line' && <LineCalculator />}
      {choice === 'Area' && <AreaCalculator />}

      {}
      <footer>
        <h4>Authority: Abdullah Siddique</h4>
        <h4>
                   Contact: siddiqueabdullah581@gmail.com<br />
          Github: <strong><a href="https://github.com/Abdullah-Siddique" target="_blank" rel="noopener noreferrer">Abdullah Siddique</a></strong>
        </h4>
        <p>© 2024 Virtual Graph. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
*/

import React, { useState } from 'react';
import LineCalculator from './LineCalculator'; // Ensure this is correctly exported
import AreaCalculator from './AreaCalculator'; // Ensure this is correctly exported
import './App.css'; // Ensure this path is correct

function App() {
  const [choice, setChoice] = useState('');

  const handleGoBack = () => {
    setChoice(''); // Reset the choice to go back to the main screen
  };

  return (
    <div className="App">
      <h1 className="app-title">Virtual Graph System</h1>
      <p className="subtitle">
  What do you want to calculate?(Area/Line)<br />
  Please don't change the number of points after entering once.<br />
  If you have to calculate again, click on the<br />
  "Go Back" button and start again.
</p>
      <div className="button-group">
        <button className={`button ${choice === 'Line' ? 'active' : ''}`} onClick={() => setChoice('Line')}>
          Line
        </button>
        <button className={`button ${choice === 'Area' ? 'active' : ''}`} onClick={() => setChoice('Area')}>
          Area
        </button>
      </div>

      {choice === 'Line' && <LineCalculator onGoBack={handleGoBack} />}
      {choice === 'Area' && <AreaCalculator onGoBack={handleGoBack} />}

      <footer>
        <h4>Authority: Abdullah Siddique</h4>
        <h4>
          Contact: siddiqueabdullah581@gmail.com<br />
          Github: <strong><a href="https://github.com/Abdullah-Siddique" target="_blank" rel="noopener noreferrer">Abdullah Siddique</a></strong>
        </h4>
        <p>© 2024 Virtual Graph. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
