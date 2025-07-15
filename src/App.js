import './App.css';
import {useEffect} from "react";
import {UseTelegram} from "./hooks/useTelegram";
import Header from "./components/Header/Header";


function App() {
    const {tg, onToggleButton} = UseTelegram();
    useEffect( () => {
        tg.ready()
    })

  return (
    <div className="App">
      <Header />
        <button onClick={onToggleButton}>toggle</button>
    </div>

  );
}

export default App;
