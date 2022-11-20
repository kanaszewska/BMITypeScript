import React, { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [weight, setWeight] = useState<string>()
  const [height, setHeight] = useState<string>()
  const [bmi, setBmi] = useState<number | string>(0)
  const [message, setMessage] = useState<string>('')

  const handleOnChangeWeighth = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    const { value } = event.target
    setWeight(value)
  }

  const handleOnChangeHeight = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    const { value } = event.target
    setHeight(value)
  }

  let calcBmi = (
    event: React.FormEvent<HTMLButtonElement>
    ): void => {
    event.preventDefault()

    const re = /^(0|[1-9]\d*)([.]\d*)?$/

    if (weight === undefined || height === undefined) {
      alert('Please enter your details')
    } else if (!re.test(height.toString()) || !re.test(weight.toString())) {
      alert('Please enter numbers')
    } else {
      setBmi(
        (
          parseInt(weight) /
          ((parseInt(height) * parseInt(height)) / 10000)
        ).toFixed(1),
      )
    }
  }

  useEffect(() => {
    if (bmi < 18.5) {
      setMessage('You are underweight')
    } else if (bmi >= 18.5 && bmi < 25) {
      setMessage('You have the correct weight')
    } else if (bmi >= 25 && bmi < 30) {
      setMessage('You are overweight')
    } else if (bmi >= 30 && bmi < 35) {
      setMessage('You have 1st degree obesity')
    } else if (bmi >= 35) {
      setMessage('You have obesity treated clinically')
    }
  }, [bmi])

  let imgSrc

  if (bmi < 18.5) {
    imgSrc = require('./images/img1.jpg')
  } else if (bmi >= 18.5 && bmi < 25) {
    imgSrc = require('./images/img2.jpg')
  } else if (bmi >= 25 && bmi < 30) {
    imgSrc = require('./images/img3.jpg')
  } else if (bmi >= 30 && bmi < 35) {
    imgSrc = require('./images/img4.jpg')
  } else if (bmi >= 35) {
    imgSrc = require('./images/img5.jpg')
  }

  let reload = () => {
    window.location.reload()
  }

  return (
    <div className="app">
      <div className="container">
        <h2 className="center">Calculator BMI</h2>
        <form>
          <div>
            <label>Weight (kg)</label>
            <input
              value={weight}
              onChange={handleOnChangeWeighth}
              placeholder="Enter weight..."
            />
          </div>
          <div>
            <label>Height (cm)</label>
            <input
              value={height}
              onChange={handleOnChangeHeight}
              placeholder="Enter height..."
            />
          </div>
          <div>
            <button className="btn" onClick={calcBmi} type="submit">
              Calculate
            </button>
            <button className="btn-outline" onClick={reload} type="submit">
              Refresh
            </button>
          </div>
        </form>
        <div className="center">
          {bmi ? <h3>Your BMI is {bmi}</h3> : null}
          {bmi ? <p>{message}</p> : null}
        </div>
        <div className="images">{bmi ? <img src={imgSrc} alt="" /> : null}</div>
      </div>
    </div>
  )
}

export default App
