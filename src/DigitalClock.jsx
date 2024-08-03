import React ,{useState, useEffect} from 'react'
import Clock2 from './Clock2';

const DigitalClock = () => {

    const [time, setTime] = useState(new Date())

    useEffect(() => {
      
      const intervalId = setInterval(() => {
        setTime(new Date());
      }, 1000);
      
      return()=>{
        clearInterval(intervalId)
      }
    }, [])

    function formatTime(){
      let hours = time.getHours();
      const minutes = time.getMinutes();
      const seconds = time.getSeconds();
      const meridiem = hours >= 12 ? "PM" : "AM"

      hours = hours % 12 || 12;

      return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${meridiem}`
    }

    function padZero(number) {
      return (number < 10 ? "0" : "") + number;
    }
    

  return (
    <>
    <h1>Digital Clock</h1>
    <div className="clock-body">
    <div className='clock-container'>
      <div className="clock">
        <span>{formatTime()}
        <Clock2/>
        </span>
      </div>
    </div>
    </div>
    </>
  )
}

export default DigitalClock
