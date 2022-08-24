import { useEffect, useState } from "react";

const MathsFact = () => {

    const [maths, setMaths] = useState('')
    const [newFact, setNewFact] = useState(false)

    useEffect(() => {
      fetch('http://numbersapi.com/random/math?json')
      .then(res => res.json())
      .then(json => setMaths(json.text))
      .catch(err => console.log(err))    
    }, [newFact])
   
    return (
        <div className="col">
        <h2>Maths Fact</h2>
        <p>{maths}</p>
        <button onClick={() => setNewFact(!newFact)}>New Fact</button>
      </div>
    );
}

export default MathsFact