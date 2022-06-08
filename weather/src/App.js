import { useState } from "react";
import Cloud from './assests/cloud.jpg'

function App() {
  const [ place , setPlace] = useState("Tehran");
  const [placeInfo , setPlaceInfo] = useState({});

  const handleFetch =() => {
  fetch(`http://api.weatherapi.com/v1/current.json?key=2033d341bf9a4ca390270300220106&q=${place}`)
  .then(response => response.json())
  .then(data => setPlaceInfo({
    name: data.location.name,
    country: data.location.country,
    weather: {
      current: data.current.temp_c,
      feelslike_c : data.current.feelslike_c,
      humidity: data.current.humidity
    },
    condition: data.current.condition.text

  })

    )
}

console.log(placeInfo)

  return (
    <div className="App" style={placeInfo.condition.toLowerCase() === "Partly cloudy" ? backgroundImage: `url(${Cloud})`}> 
      <div className="search-input">
        <input type='text' value={place} onChange={(e) => setPlace(e.target.value)} />
        <button onClick={handleFetch}>Search</button>
      </div>
      <div className="weather-condition">
        <div className="top-part">
          <h1></h1>
          <div className="weather">
            <h1>{placeInfo.condition}</h1>
            <h1>{placeInfo.weather.feelslike_c}</h1>
            <h1>{placeInfo.weather.humidity}</h1>
          </div>
        </div>
        <h2>{placeInfo.name} , {placeInfo.country}</h2>

     </div>
      
    </div>
  );
}

export default App;
