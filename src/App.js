
import './App.css';
import Weather from "./Weather.js"

 export default function App() {
  return (
    <div className=" App container">

 <Weather defaultCity="Paris" />
<footer>
This  project was created by Cristina Mihalachi and is <a href="https://github.com/cristina793/weather-app-react" target="_blank" rel="noopener noreferrer"> open-sourced on GitHub.</a>
  </footer>
    </div>
  );
}

