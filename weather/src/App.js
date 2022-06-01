import { useState } from "react";

function App() {
  const [ place , setPlace] = useState("Tehran");

  const handleFetch =() => {
  fetch(`http://api.weatherapi.com/v1/current.json?key=2033d341bf9a4ca390270300220106&q=${place}`)
  .then(response => response.json())
  .then(data => console.log(data))
}

  return (
    <div className="App">
      <input type='text' value={place} onChange={(e) => setPlace(e.target.value)} />
      <button onClick={handleFetch}>Search</button>
    </div>
  );
}

export default App;
