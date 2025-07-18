import './App.css';
import {useEffect} from "react";
import {UseTelegram} from "./hooks/useTelegram";
import Header from "./components/Header/Header";
import {Route, Routes} from 'react-router-dom'
import ProductList from "./components/ProductList/ProductList";
import Form from "./components/Form/Form";


function App() {
    const {tg} = UseTelegram();
    useEffect( () => {
        tg.ready()
    })

  return (
    <div className="App">
        wow
        <Header />
        <Routes>
            <Route index element={<ProductList />}/>
            <Route path={'/form'} element={<Form />}/>

        </Routes>

    </div>

  );
}

export default App;
