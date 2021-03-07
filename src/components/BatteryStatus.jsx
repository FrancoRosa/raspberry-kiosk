import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';



const BatteryStatus = () => {
  const [battery, setBattery] = useState('0')
  
  const getBatteryLevel = () => {
    const url = 'http://localhost:9999/api/v1/value'
    axios.get(url).then(response => setBattery(response.data.value))
  }

  // useEffect(() => {
  //   setInterval(getBatteryLevel, 5000)
  // }, []);
  
  return(
    <div className="battery__status">
      <img src="/icons/battery.png" alt="" srcset=""/>
      <p>{battery}%</p>
    </div>
  )
}

export default BatteryStatus;