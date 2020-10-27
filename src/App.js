import React, { useEffect, useState } from 'react';
import './components/css/App.css';
import SeasonDisplay from './components/seasonDisplay';

function App() {
	const [latitude, setLatitude] = useState(null);
	const [longitude, setLongitude] = useState(null);
	const [deniedLat, setDeniedLat] = useState(false);
	const [deniedTxt, setdeniedTxt] = useState(false);




 

	useEffect(() => {
		getLocation();
	});


  function getLocation(){
    console.log('*****getLocation');
        const options = {
          enableHighAccuracy: true,
          timeout: 5000,
          maximumAge: 0,
        };

        if (navigator.geolocation)
        {
          console.log('getiitng geo');
          navigator.geolocation.getCurrentPosition(geoSuccess, error, options)
        }else{
          console.log('not supported ');
          setdeniedTxt('Geolocation is not supported by this browser.')
          setDeniedLat(true);
        }
  }



  
	function geoSuccess(pos) {
		const crd = pos.coords;
		setLatitude(crd.latitude);
    setLongitude(crd.longitude);
    // console.log('Your current position is:');
		// console.log(`Latitude : ${crd.latitude}`);
		// console.log(`Longitude: ${crd.longitude}`);
		// console.log(`More or less ${crd.accuracy} meters.`);
	}




	function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
    setdeniedTxt(err.message)
    setDeniedLat(true);
	}

	const DisplayInfo = () => {
		if (latitude) {
      return <SeasonDisplay latitude={latitude} longitude={longitude} />
    }	if (deniedLat) {
     return<h2 className='ui raised very padded text container segment'>Error:  {deniedTxt}</h2>
    }
     else {
			return <div className='ui text loader'>Loading</div>
		}
	};

	return (
		<div className='App'>
      	<div className='ui segment'>
					<div className='ui active dimmer'>
          <DisplayInfo />
					</div>
					<p></p>
				</div>
		</div>
	);
}

export default App;
