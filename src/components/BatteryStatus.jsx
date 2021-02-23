import axios from 'axios';
import { useEffect } from 'react';

const getBatteryLevel = () => {
  console.log('Kill me');
}

const BatteryStatus = () => {
  useEffect(() => {
    setInterval(getBatteryLevel, 1000)
  }, []);
  return(
    <div className="battery__status">
      <img src="/icons/battery.png" alt="" srcset=""/>
      <p>100</p>
    </div>
  )
}

export default BatteryStatus;