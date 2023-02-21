import './App.css';
import React, { useRef, useState } from 'react';
import ReactStopwatch from 'react-stopwatch';
import Question from './Question';
import StopWatch from './StopWatch';

function App() {

  const [start, setStart] = useState(false);
  const [answer, setAnswer] = useState(false);
  const [done, setDone] = useState(false);
  const secondsTrack = useRef(0)

  const color_options = ["Blue", "Yellow", "Red", "Purple", "Black"]

  function checkAnswer(){
    setAnswer(!answer)
    secondsTrack.current = 0
  }
  
  function doneGame(){
    console.log("done")
    console.log(secondsTrack)
    setDone(true)
  }

  return (
    <div className="App">
      <header className="App-header">

        {start ? 
        <>

          {!done ? <>

          <h1>
            Select the correct answer
          </h1>

          <Question color_options={color_options} checkAnswer={checkAnswer} doneGame={doneGame} />
          <ReactStopwatch
            seconds={0}
            minutes={0}
            hours={0}
            onChange={({ hours, minutes, seconds }) => {
              secondsTrack.current++
            }}
            render={({ formatted, hours, minutes, seconds }) => {
                return (
                <div>
                    <p>
                    Time: { formatted }
                    </p>
                </div>
                );
            }}
          />
          
          </>
          : 
          <>
            <h1>
              Finished in {secondsTrack.current} seconds
            </h1>
          </>
          }

        </> 
        
        :

        <>
          <h1>
            Welcome to the Stroop test
          </h1>
          <h2>
            Answer 10 in a row correctly
          </h2>
          <button 
            type="button" 
            className="btn btn-primary" 
            style={{height: '30px', width : '100px'}}
            onClick={() => setStart(true)}
            >
            Begin
          </button>
        </>
      }

      </header>
      <body>
        
      </body>
    </div>
  );
}



export default App;
