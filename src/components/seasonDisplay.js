import React from 'react'
import { getTTFB } from 'web-vitals';

const seasonDisplay = (props) => {

const lat  = props.latitude;
const month = new Date().getMonth();

function getSeason(lat, month){
  if(month > 2 && month <9){
    return lat >0 ? 'Sumer' : 'Winter'
    }else{
    return lat > 0? 'Winter' : 'Sumer'
    }
}

const DisplaySeason = () =>{

  if(getSeason() === 'Sumer'){
   return <> Its hot <i className="sun icon"></i></>
  }else{
    return <> Its Cold <i className="snowflake icon"></i></>
  }

}
 
  return (
    <div className={`ui raised very padded text container segment ${getSeason()}`}>
      <DisplaySeason />
    </div>
  )
}

export default  seasonDisplay;