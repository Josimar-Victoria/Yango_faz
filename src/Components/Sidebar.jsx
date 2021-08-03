import { useEffect, useState } from 'react';
import { useStateValue } from '../StateProvide';
import '../Styles/sidebar.css';

export const Sidebar = () => {
    const [{user}] = useStateValue()
    const [weatherdata, setweatherdata] = useState()
   console.log(weatherdata);
    useEffect(() => {
        const successCallback = (position) => {
            console.log(position.coords.latitude, position.coords.longitude);
            let URL = `https://community-open-weather-map.p.rapidapi.com/forecast?units=metric&lat=${position.coords.latitude}&lon=${position.coords.longitude}`
            fetch(URL, {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "c0908053bamshb16dd1f756305d4p188010jsna11056b7131d",
		"x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
	}
})
.then(response => response.json())
.then(data => setweatherdata(data))
        }
        const errorCallback = err => console.log(err)
       
        navigator.geolocation.getCurrentPosition(successCallback, errorCallback)
    },[])
    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <h4>{weatherdata?.city.name}</h4>
                <img  src={weatherdata?.list[0].weather[0].icon} alt='log'/>
                <h1>{Math.round(weatherdata?.list[0].main.temp)} °C</h1>
            </div>
            <div className="sidebar__bottom">
                <h4>Bienvenido</h4>
                <p>{user?.displayName}</p>
            </div>
        </div>
    )
}
