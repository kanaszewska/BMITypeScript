import React, { useState } from 'react';
import './App.css';


function App() {
const [weight, setWeight] = useState<number | undefined>(undefined);
const [height, setHeight] = useState<number | undefined>(undefined);
const [bmi, setBmi] = useState<number | string>(0);
const [message, setMessage] = useState<string>('');

const handleOnChangeWeighth = (e: any): void => {
  setWeight(e.target.value);
};

const handleOnChangeHeight = (e: any): void => {
  setHeight(e.target.value);
};

let calcBmi = (event: any): void => {
  event.preventDefault();

  const re = /^(0|[1-9]\d*)([.]\d*)?$/;

  if (weight === undefined || height === undefined) {
    alert("Please enter your details");
  } else if (height > 3 ){
    alert ("Please enter your height in meters!");
  } else if (!(re.test(height.toString())) || !(re.test(weight.toString())) ) {
    alert("Please enter numbers or a fraction after the dot!");
  } else {
    setBmi(( weight / (height * height)).toFixed(1));

    if (bmi < 18.5) {
      setMessage('You are underweight');
    } else if (bmi >= 18.5 && bmi < 25) {
      setMessage('You have the correct weight');
    } else if (bmi >= 25 && bmi < 30) {
      setMessage ('You are overweight');
    } else if ( bmi >=30 && bmi < 35) {
      setMessage('You have 1st degree obesity');
     } else if ( bmi >= 35) {
      setMessage('You have obesity treated clinically');
     };
    };
  };
  
let imgSrc;

if (bmi < 1) {
  imgSrc = null 
} else {
if (bmi < 18.5 ) {
  imgSrc = require('./images/img1.jpg')
} else if (bmi >= 18.5 && bmi < 25) {
  imgSrc = require('./images/img2.jpg')
} else if (bmi >= 25 && bmi < 30) {
  imgSrc = require('./images/img3.jpg')
} else if ( bmi >=30 && bmi < 35) {
  imgSrc = require('./images/img4.jpg')
 } else if ( bmi >= 35) {
  imgSrc = require('./images/img5.jpg')
 }
}

let reload = () => { 
window.location.reload()
}

  return(
    <div className='app'>
      <div className='container'>
        <h2 className='center'>Calculator BMI</h2>
        <form onSubmit={calcBmi}>
          <div>
            <label>Weight (kg)</label>
            <input 
              value={weight}
              onChange={handleOnChangeWeighth}
              placeholder = 'Enter weight...' />
          </div>
          <div>
            <label>Height (m)</label>
            <input 
              value={height}
              onChange={handleOnChangeHeight}
              placeholder = 'Enter height...' />
          </div>
          <div>
            <button className='btn' type='submit'>Calculate</button>
            <button className='btn-outline' onClick={reload} type='submit'>Refresh</button>
          </div>
        </form>
        <div className='center'>
          <h3>Your BMI is {bmi}</h3>
          <p>{message}</p>
        </div>
        <div className='images'>
          <img src={imgSrc} alt="" />
        </div>
      </div>
    </div>
  );
};

export default App;
