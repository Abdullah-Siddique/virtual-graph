/*

import React, { useState, useEffect } from 'react';
import Graph from './Graph';

function LineCalculator({ onGoBack }) {
  const [x1, setX1] = useState('');
  const [y1, setY1] = useState('');
  const [x2, setX2] = useState('');
  const [y2, setY2] = useState('');
  const [slope, setSlope] = useState(null);
  const [points, setPoints] = useState([]);
  const [lineEquation, setLineEquation] = useState('');
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const calculateSlope = () => {
    const x1Num = Number(x1);
    const y1Num = Number(y1);
    const x2Num = Number(x2);
    const y2Num = Number(y2);

    // Set points to always include the given coordinates
    setPoints([[x1Num, y1Num], [x2Num, y2Num]]);

    // Check for division by zero
    if (x2Num === x1Num) {
      setSlope(null); // Indicate slope is undefined
      setLineEquation(`x = ${x1Num}`); // Equation of a vertical line
      return;
    }

    const slopeValue = (y2Num - y1Num) / (x2Num - x1Num);
    setSlope(slopeValue);
    calculateLineEquation(x1Num, y1Num, x2Num, y2Num);
  };

  const calculateLineEquation = (x1Num, y1Num, x2Num, y2Num) => {
    const a = y2Num - y1Num; // y2 - y1
    const b = x1Num - x2Num; // x1 - x2
    const c = (x2Num * y1Num) - (x1Num * y2Num); // x2 * y1 - x1 * y2

    const aStr = a !== 0 ? `${a}x` : '';
    const bStr = b !== 0 ? (b > 0 ? ` + ${b}y` : ` - ${Math.abs(b)}y`) : '';
    const cStr = c !== 0 ? (c > 0 ? ` + ${c}` : ` - ${Math.abs(c)}`) : '';

    setLineEquation(`${aStr}${bStr}${cStr} = 0`);
  };

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const buttonStyle = {
    backgroundColor: '#2196F3',
    color: 'white',
    padding: windowWidth < 600 ? '8px 16px' : '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: windowWidth < 600 ? '14px' : '16px',
    transition: 'background-color 0.3s',
    marginTop: '10px',
  };

  const inputStyle = {
    padding: '10px',
    margin: '5px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    width: windowWidth < 600 ? '100%' : 'calc(50% - 12px)',
    boxSizing: 'border-box',
  };

  return (
    <div style={{ maxWidth: '600px', margin: 'auto', padding: '20px', textAlign: 'center', backgroundColor: '#f9f9f9', borderRadius: '10px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
      <h2>Calculate Slope and Line Equation</h2>
      <input
        type="number"
        placeholder="x1"
        value={x1}
        onChange={(e) => setX1(e.target.value)}
        style={inputStyle}
      />
      <input
        type="number"
        placeholder="y1"
        value={y1}
        onChange={(e) => setY1(e.target.value)}
        style={inputStyle}
      />
      <input
        type="number"
        placeholder="x2"
        value={x2}
        onChange={(e) => setX2(e.target.value)}
        style={inputStyle}
      />
      <input
        type="number"
        placeholder="y2"
        value={y2}
        onChange={(e) => setY2(e.target.value)}
        style={inputStyle}
      />
      <button className='button' onClick={calculateSlope} style={buttonStyle}>
        See Line
      </button>

      {slope !== null && (
        <div>
          <p>Slope (m) = {slope}</p>
          <p>Line Equation: {lineEquation}</p>
          <Graph points={points} />
        </div>
      )}
      
      <button className="button" onClick={onGoBack} style={buttonStyle}>
        Go Back
      </button>
    </div>
  );
}

export default LineCalculator;

*/

import React, { useState, useEffect } from 'react';
import Graph from './Graph';

function LineCalculator({ onGoBack }) {
  const [x1, setX1] = useState('');
  const [y1, setY1] = useState('');
  const [x2, setX2] = useState('');
  const [y2, setY2] = useState('');
  const [slope, setSlope] = useState(null);
  const [points, setPoints] = useState([]);
  const [lineEquation, setLineEquation] = useState('');
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const calculateSlope = () => {
    const x1Num = Number(x1);
    const y1Num = Number(y1);
    const x2Num = Number(x2);
    const y2Num = Number(y2);

    // Set points to always include the given coordinates
    setPoints([[x1Num, y1Num], [x2Num, y2Num]]);

    // Check for division by zero (vertical line case)
    if (x1Num === x2Num) {
      setSlope(undefined); // Indicate slope is undefined for a vertical line
      setLineEquation(`x = ${x1Num}`); // Equation of a vertical line
      return;
    }

    const slopeValue = (y2Num - y1Num) / (x2Num - x1Num);
    setSlope(slopeValue);
    calculateLineEquation(x1Num, y1Num, x2Num, y2Num);
  };

  const calculateLineEquation = (x1Num, y1Num, x2Num, y2Num) => {
    const a = y2Num - y1Num; // y2 - y1
    const b = x1Num - x2Num; // x1 - x2
    const c = (x2Num * y1Num) - (x1Num * y2Num); // x2 * y1 - x1 * y2

    const aStr = a !== 0 ? `${a}x` : '';
    const bStr = b !== 0 ? (b > 0 ? ` + ${b}y` : ` - ${Math.abs(b)}y`) : '';
    const cStr = c !== 0 ? (c > 0 ? ` + ${c}` : ` - ${Math.abs(c)}`) : '';

    setLineEquation(`${aStr}${bStr}${cStr} = 0`);
  };

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const buttonStyle = {
    backgroundColor: '#2196F3',
    color: 'white',
    padding: windowWidth < 600 ? '8px 16px' : '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: windowWidth < 600 ? '14px' : '16px',
    transition: 'background-color 0.3s',
    marginTop: '10px',
  };

  const inputStyle = {
    padding: '10px',
    margin: '5px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    width: windowWidth < 600 ? '100%' : 'calc(50% - 12px)',
    boxSizing: 'border-box',
  };

  return (
    <div style={{ maxWidth: '600px', margin: 'auto', padding: '20px', textAlign: 'center', backgroundColor: '#f9f9f9', borderRadius: '10px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
      <h2>Calculate Slope and Line Equation</h2>
      <input
        type="number"
        placeholder="x1"
        value={x1}
        onChange={(e) => setX1(e.target.value)}
        style={inputStyle}
      />
      <input
        type="number"
        placeholder="y1"
        value={y1}
        onChange={(e) => setY1(e.target.value)}
        style={inputStyle}
      />
      <input
        type="number"
        placeholder="x2"
        value={x2}
        onChange={(e) => setX2(e.target.value)}
        style={inputStyle}
      />
      <input
        type="number"
        placeholder="y2"
        value={y2}
        onChange={(e) => setY2(e.target.value)}
        style={inputStyle}
      />
      <button className='button' onClick={calculateSlope} style={buttonStyle}>
        See Line
      </button>

      {slope !== null && (
        <div>
          <p>Slope (m) = {slope !== undefined ? slope : 'undefined'}</p>
          <p>Line Equation: {lineEquation}</p>
          <Graph points={points} />
        </div>
      )}
      
      <button className="button" onClick={onGoBack} style={buttonStyle}>
        Go Back
      </button>
    </div>
  );
}

export default LineCalculator;
