import React, {useEffect, useState} from 'react'

const Clock2 = () => {
    const [clock, setClock] = useState(new Date().toString())

    useEffect(() => {
      let clr = setInterval(() => {
        setClock(new Date().toString())
      }, 1000);
    
      return () => {
        clearInterval(clr)
      }
    }, [])
    
  return (
    <div>
      <h2>{clock}</h2>
    </div>
  )
}

export default Clock2
