import { useEffect, useReducer } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import { countriesAPI } from "./api/api";
import { Route, Routes } from "react-router-dom";
import { initState, reducer } from "./store/store";
import AboutOneCountry from "./pages/AboutOneCountry";
import Home from "./pages/Home";
function App() {
  const [state, dispatch] = useReducer(reducer,initState);
  useEffect(() => {
    countriesAPI.getALL(dispatch)

  }, []);
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home countries={state.countries}/>} />
        <Route path="/:name" element={<AboutOneCountry dispatch={dispatch} state={state}/>}/>
      </Routes>
    </div>
  );
}

export default App;
