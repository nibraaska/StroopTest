import './App.css';
import React, { useState } from 'react';

function Question({ color_options, checkAnswer, doneGame }) {

    const [newQuestion, setNewQuestion] = useState(false);
    const [numCorrect, setNumCorrect] = useState(0);
    const correctValue = color_options[Math.floor(Math.random() * color_options.length)];
    const correctButton = Math.floor(Math.random() * (3) + 1)

    let shuffledColors = color_options.filter(function(item) {
        return item !== correctValue
    })
    shuffledColors = shuffledColors.sort(() => Math.random() - 0.5)


    const handleClick = (event) => {

        if (event.target.value == correctValue){
            setNewQuestion(!newQuestion)
            setNumCorrect(numCorrect + 1)
        } else {
            checkAnswer()
            setNumCorrect(0)
        }
    };

    console.log(correctButton)

    if (numCorrect == 10){
        doneGame()
    }

  return (

    <div>

        <h2 style={{color: correctValue}}>
            {color_options[Math.floor(Math.random() * color_options.length)]}
        </h2>

        <div className="row mx-md-n5">

        {[...Array(4)].map((x, i) =>
            <button 
                type="button" 
                className="btn btn-primary" 
                style={{height: '30px', width : '100px'}}
                value= { i ==  correctButton ? correctValue : shuffledColors[i]}
                onClick={handleClick}
                >
                { i ==  correctButton ? correctValue : shuffledColors[i]}
            </button>

        )}

        <h5>
            Number correct: {numCorrect}
        </h5>
        
        </div>

    </div>

  );
}



export default Question;
