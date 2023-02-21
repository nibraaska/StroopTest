import './App.css';
import React, { useState } from 'react';
import ReactStopwatch from 'react-stopwatch';

function StopWatch({seconds}) {

  return (
    <div>

    <ReactStopwatch
    seconds={seconds}
    minutes={0}
    hours={0}
    onChange={({ hours, minutes, seconds }) => {
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

    </div>
  );
}



export default StopWatch;
