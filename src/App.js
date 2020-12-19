import './App.css';
import { useState } from 'react';
import axios from 'axios';
function App () {
  const [value, setValue] = useState(0)
  const [data, setData] = useState([])

  const getData = () => {
    axios.get('https://randomuser.me/api').then((res) => {
      const persons = res.data.results
      setData(...persons)
      console.log(persons)
    })
  };

  return (
    <div className='App'>
      <p>
        {value} <button onClick={() => setValue(value + 1)}>Add</button>
      </p>

      <button onClick={getData}>Get data</button>
      <p> {JSON.stringify(data.name)} </p>
    </div>
  )
}

export default App
