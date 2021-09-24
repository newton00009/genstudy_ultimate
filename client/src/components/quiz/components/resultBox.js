<<<<<<< HEAD
import React from 'react';
import "../style.css";
=======

import React from 'react';
//import "../style.css";
>>>>>>> 7f87e16b579c6f630976e39ebb47829b0b9de75b
  
const Result = ({score, playAgain}) => (
  <div className="score-board">
    <div className="score"> Your score is {score} / 5 correct answer ! ! ! </div>
    <button className="playBtn" onClick={playAgain} > Play Again </button>
  </div>
)
  
export default Result;