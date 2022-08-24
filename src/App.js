import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Music from "./components/Music";
import DailyFact from "./components/DailyFact";
import MathsFact from "./components/MathsFact";
// import { useEffect, useState } from "react";


function App() {

  // const [daily, setDaily] = useState('')

  // useEffect(() => {
  //   fetch()
  // }, [])


  return (
    <div className='App'>
      <Header />
      <div className='container text-center'>
        <div className='row'>
          <Music />
          <DailyFact />
          <MathsFact />
        </div>
      </div>
    </div>
  );
}

export default App;
