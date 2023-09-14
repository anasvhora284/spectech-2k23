import React from 'react';
import DateTimeDisplay from '../DateTimeDisplay';
import { useCountdown } from './useCountdown';
import '../App.css' 

const ExpiredNotice = () => {
  return (
    <div className="expired-notice">
      <span>Expired!!!</span>
      <p>Please select a future date and time.</p>
    </div>
  );
};

const ShowCounter = ({ days, hours, minutes, seconds }) => {
  return (
    <div className="show-counter">
      <div className="countdown-link">
        <DateTimeDisplay value={days} type={'Days'} />
        <p className='timeDots'>:</p>
        <DateTimeDisplay value={hours} type={'Hours'} />
        <p className='timeDots'>:</p>
        <DateTimeDisplay value={minutes} type={'Mins'} />
        <p className='timeDots'>:</p>
        <DateTimeDisplay value={seconds} type={'Seconds'} />
      </div>
    </div>
  );
};

const CountDown = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    return <ExpiredNotice />;
  } else {
    return (
      <ShowCounter
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
  }
};

export default CountDown;