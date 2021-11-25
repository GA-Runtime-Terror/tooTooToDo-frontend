import React, { useState, useEffect } from "react"
import Footer from './Footer'
import Header from './Header'

function Landing () {

   const [listItem, setListItem] = useState([]);
   const [addItem, setAddItem] = useState([]);

   

   const handleChange = (event) => {
    const value = event.target.value;
    console.log(value);
    setListItem(value)
  };


  const handleClick = (event) => {
    event.preventDefault();
    addItem.push(listItem)

      console.log(addItem) 

  }
  
  useEffect  (() => {
console.log("use effect")
  }, [addItem])

const addList = addItem.map ((item) => {
  return (
    <li>{item} </li>

  )
  })



    return (
      <div className="App">
        
        <Header />
      
  
       <div className="body-div">

       <h2>Toucan do it! </h2>

       <ul>
          <li>placeholder item</li>
          <li> {addList} <button className="remove-button">remove</button> </li>
         
          
        </ul>

        <form className="item-form">
        <input onChange={handleChange}  className="list-input" type="text" placeholder="Add new item" />
        <button className="submit-button" onClick={handleClick} type="submit">Submit</button>
        </form>

       </div>
  
  <Footer />
       
      </div>
    );
  }
  
  export default Landing;