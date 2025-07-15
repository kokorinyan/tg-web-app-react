import './App.css';
import {useEffect} from "react";
import {UseTelegram} from "./hooks/useTelegram";


function App() {
    const {tg, onToggleButton} = UseTelegram();
    useEffect( () => {
        tg.ready()
    })

  return (
    <div className="App">
      work
        <button onClick={onToggleButton}>toggle</button>
    </div>

  );
}

export default App;
