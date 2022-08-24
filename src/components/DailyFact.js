import { useEffect, useState } from "react";

const DailyFact = () => {

    const [daily, setDaily] = useState('')
    const [newFact, setNewFact] = useState(false)

    useEffect(() => {
      fetch('http://numbersapi.com/random/trivia?json')
      .then(res => res.json())
      .then(json => setDaily(json.text))
      .catch(err => console.log(err))    
    }, [newFact])
    
    return (
        <div className="col">
        <h2>Daily Fact</h2>
        <p>{daily}</p>
        <button onClick={() => setNewFact(!newFact)}>New Fact</button>
      </div>
    );
}

export default DailyFact