
import React, { useState, useEffect } from 'react';
import Graph from './Graph';

function AreaCalculator({ onGoBack }) {
  const [n, setN] = useState(3); // Number of points
  const [points, setPoints] = useState([]);
  const [area, setArea] = useState(null);
  const [inputs, setInputs] = useState([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleAddPoint = () => {
    const newPoints = inputs.map((input) => [Number(input.x), Number(input.y)]);
    setPoints(newPoints);
    calculateArea(newPoints);
  };

  const calculateArea = (points) => {
    let areaValue = 0;
    for (let i = 0; i < points.length; i++) {
      let j = (i + 1) % points.length;
      areaValue += points[i][0] * points[j][1] - points[j][0] * points[i][1];
    }
    areaValue = Math.abs(areaValue) / 2;
    setArea(areaValue);
  };

  const handlePointChange = (index, axis, value) => {
    const newInputs = [...inputs];
    newInputs[index] = { ...newInputs[index], [axis]: value };
    setInputs(newInputs);
  };

  const handleNChange = (e) => {
    const value = Number(e.target.value);
    if (value >= 3) {
      setN(value);
      setInputs(Array.from({ length: value }, () => ({ x: '', y: '' }))); // Reset inputs
    }
  };

  // Update window width on resize
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
      <h2>Calculate Area of Polygon</h2>
      <input
        type="number"
        placeholder="Number of points"
        value={n}
        onChange={handleNChange}
        style={inputStyle}
      />
      {Array.from({ length: n }).map((_, index) => (
        <div key={index} style={{ display: 'flex', justifyContent: 'center' }}>
          <input
            type="number"
            placeholder={`x${index + 1}`}
            onChange={(e) => handlePointChange(index, 'x', e.target.value)}
            style={inputStyle}
          />
          <input
            type="number"
            placeholder={`y${index + 1}`}
            onChange={(e) => handlePointChange(index, 'y', e.target.value)}
            style={inputStyle}
          />
        </div>
      ))}
      <button className='button' onClick={handleAddPoint} style={buttonStyle}>
        See Area
      </button>

      {area !== null && (
        <div>
          <p>Total Area = {area}</p>
          <Graph points={points} />
        </div>
      )}
      
      <button className="button" onClick={onGoBack} style={buttonStyle}>
        Go Back
      </button>
    </div>
  );
}

export default AreaCalculator;

