
import './App.css';
import React from "react"
import { useState, useEffect } from 'react';

function App(){
const [data, setData] = useState([]);

useEffect (() => {
    fetch("https://data.covid19india.org/data.json")
    .then((res) => res.json())
    .then((jsondata) => setData(jsondata.statewise))
}, []);
 return (
   <div className='imagevirus'>
    <center>
    <h3> Covid-19 tracker </h3>
    <table  className="table table-dark table-hover">
      <thead>
        <tr>
          <th>State</th>
          <th>Confirmed</th>
          <th>Recovered</th>
          <th>Deaths</th>
          <th>Active</th>
          <th>LastUpdated</th>
        </tr>
        </thead>
        <tbody>
          {data.map((item) => {
          return(
            <tr>
              <td>{item.state}</td>
              <td>{item.confirmed}</td>
              <td>{item.recovered}</td>
              <td>{item.deaths}</td>
              <td>{item.active}</td>
              <td>{item.lastupdatedtime}</td>
            </tr>
          )
        })};
          </tbody>
          </table>   
    </center>
</div>
  );
 }

export default App;



