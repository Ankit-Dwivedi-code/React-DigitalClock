import React, {useState, useEffect} from 'react'

const DigitalClock2 = () => {
    const [clock, setClock] = useState(new Date())

    useEffect(() => {
      let intervalId = setInterval(() => {
        setClock(new Date())
      }, 1000);
    
      return () => {
        clearInterval(intervalId)
      }
    }, [])

    function settime() {
        let hours = clock.getHours();
        const minutes = clock.getMinutes();
        const seconds = clock.getSeconds();
        const meridem = hours >= 12 ? "PM" : "AM";

        hours = hours % 12 || 12

        return (`${setZero(hours)}:${setZero(minutes)}:${setZero(seconds)} ${setZero(meridem)}`)
    }

    function setZero(number) {
        return (number < 10 ? "0" : "") + number
    }
    
  return (
    <div>
      <p style={{color : 'white'}} >{settime()}</p>
    </div>
  )
}

export default DigitalClock2
