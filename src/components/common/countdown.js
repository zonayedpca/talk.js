import React, { useState, useEffect } from 'react';
import timediff from 'timediff';

const EVENT_TIME = 'Sat Jul 06 2019 15:00:00 GMT+0600 (Bangladesh Standard Time)';

const CountDown = () => {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  useEffect(() => {
    const evTime = new Date(EVENT_TIME);
    const diff = timediff(Date.now(), evTime, {
      units: {
        years:false,
        months: false,
        weeks: false,
        days: true,
        hours: true,
        minutes: true,
        seconds: true,
        milliseconds: false
      },
      returnZeros: true,
      callback: null
    });
    setTime(diff);
  }, [time]);

  const { days, hours, minutes, seconds } = time;

  return (
    <div className="intro-time">
      <div className="time">
        <p>{days}<span>{`Day${days > 1 && 's'}`}</span></p>
      </div>
      <div className="time">
        <p>{hours}<span>{`Hour${hours > 1 && 's'}`}</span></p>
      </div>
      <div className="time">
        <p>{minutes}<span>{`Minute${minutes > 1 && 's'}`}</span></p>
      </div>
      <div className="time">
        <p>{seconds}<span>{`Second${seconds > 1 && 's'}`}</span></p>
      </div>
    </div>
  )
}

export { CountDown };
