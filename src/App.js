import React from 'react'
import './App.css';

import ListOfPeople from './lists'

let obj = [
  {
    id: 1,
    name: "Object 1",
    value: 10.5
  },
  {
    id: 2,
    name: "Object 2",
    value: true
  },
  {
    id: 3,
    name: "Object 3",
    value: "This is a string"
  },
  {
    id: 4,
    name: "Object 4",
    value: null
  },
  {
    id: 5,
    name: "Object 5",
    value: true // Nested array
  },
  {
    id: 6,
    name: "Object 6",
    value: false  // Nested object
  },
  {
    id: 7,
    name: "Object 7",
    value: 1234567890  // Large number
  },
  {
    id: 8,
    name: "Object 8",
    value: false
  },
  {
    id: 9,
    name: "Object 9",
    value: "Another string"
  },
  {
    id: 10,
    name: "Object 10",
    value: 3.14
  }
]



function App() {
  return (
    <div>
      {obj.map((ele) => (
        <ListOfPeople key={ele.id} data = {ele}/> // Pass entire object as data
      ))}
    </div>
  );
}

export default App;
