import React, { useState } from 'react';
import index from '../style/index.css';

const BMI = [
  {
    BMI:18.5,//0 ->18.5
    Comment:"Thiếu Cân"
  },
  {
    BMI:22,// 18.5 ->22
    Comment:"Bình Thường"
  },
  {
    BMI:25,//22->25
    Comment:"Thừa Cân"
  },
  {
    BMI:30,//25->30
    Comment:"Béo Phì Cấp 1"
  },
  {
    BMI:40,//30->40
    Comment:"Béo Phì Cấp 2"
  },
  {
    BMI:50,//>40
    Comment:"Béo Phì Cấp 3"
  },
  
];

const Body = () => {
  const [weight, setWeight] = useState(60);
  const [height, setHeight] = useState(160);
  const [bmi, setBmi] = useState(0);
  const comment = BMI.find((element) => element.BMI >= bmi );
  const handleWeightSliderChange = (event) => {
    setWeight(event.target.value);
  };

  const handleInputWeightChange = (event) => {
    setWeight(event.target.value);
  };
  
  const handleHeightSliderChange = (event) => {
    setHeight(event.target.value);
  };

  const handleInputHeightChange = (event) => {
    setHeight(event.target.value);
  };
  const handleCalculateButtonClick = () => {
    setBmi(weight / ((height*0.01)*(height*0.01)) );
  };
  return (
    <body>
      <form name='bmiform'>
        <div className='bmi-calculator'>
          <h1> Calculate your BMI</h1>
          <div className='bmi-calculator-weight'>
            <input className='weight-slider' name='realweight' id='myweight' type='range' min={0} max={200} value={weight} onChange={handleWeightSliderChange}></input>
            <p>Cân Nặng: <input id='inputweight' type='number' min={0} max={200} value={weight} onChange={handleInputWeightChange}></input>KG</p>
          </div>
          <div className='bmi-calculator-height'>
            <input className='height-slider' name='realweight' id='myweight' type='range' min={0} max={200} value={height} onChange={handleHeightSliderChange}></input>
            <p>Chiều Cao: <input id='inputheight' type='number' value={height} min={0} max={200} onChange={handleInputHeightChange}></input>CM</p>
          </div>
          <input className='btn' type='button' value="Tính" onClick={handleCalculateButtonClick}></input>
          <p>YOUR BMI: {bmi.toFixed(2)}</p>
          <p>{comment.Comment}</p>
        </div>
      </form>
      
    </body>
  );
};
export default Body;
