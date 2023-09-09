import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';


function App() {

  const[people, setPeople] = useState([])

  const fetchData = () => {
    return axios.get('/api')
    .then((response) => setPeople(response.data));
  }


  useEffect(() => {
    fetchData();
  }, []);

  return  people.map((p, index) => {
    return  <p key={index}> {p.name} </p>
     }) 

   
  
}

export default App;
