import axios from "axios";
import "./App.css";

function App(props) {
  
  function handleResponse(response) {
    alert(`The weather in ${props.city} is ${response.data.main.temp} °C`);
  }

  let apiKey = "210d99196a88b9257ed8cb3535a0a0c5";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=${units}`;

  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="App">
      <header className="App-header">
        <h2>Hello with React!!!</h2>
      </header>
    </div>
  );
}

export default App;
