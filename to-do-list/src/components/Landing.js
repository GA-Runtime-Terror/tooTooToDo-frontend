import React, { useState, useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";

function Landing() {
  const [listItem, setListItem] = useState([]);
  const [addItem, setAddItem] = useState([]);
  const [randomQuote, setRandomQuote] = useState([]);

  const handleChange = (event) => {
    const value = event.target.value;
    console.log(value);
    setListItem(value);
  };

  const handleClick = (event) => {
    event.preventDefault();
    addItem.push(listItem);

    console.log(addItem);
  };

  const api_url =
    "https://zenquotes.io/api/random/a8d087f3df39b78ba4412d5c810d601af7cc7969";

  async function getapi(url) {
    const response = await fetch(url);
    let data = await response.json();
    console.log(data);
    setRandomQuote(data);
  }

  useEffect(() => {
    getapi(api_url);
    console.log("use effect");
  }, [addItem]);

  const quoteHTML = randomQuote.map((quote) => {
    return <p>{quote.q}</p>;
  });

  const addList = addItem.map((item) => {
    return <div className="listItem-form"><li className="listItem-landing">{item}  <button className="remove-button">remove</button> </li></div>;
  });

  return (
    <div className="App">
      <Header />

      <div className="body-div">
        {/* <h2>Toucan do it! </h2> */}
        <div id="quote-div">{quoteHTML}</div>
        <ul>
        <div className="listItem-form"><li className="listItem-landing"> Example item <button className="remove-button-example">remove</button> </li></div>
          {/* <li>Example item <button className="remove-button" >remove</button></li> */}
          
          
          <li>
            {addList} 
          </li>
        </ul>

        

        <form className="item-form">
          <input
            className="input-landing"
            onChange={handleChange}
            className="list-input"
            type="text"
            placeholder="Add new item"
          />
          <button className="submit-button" onClick={handleClick} type="submit">
            Submit
          </button>
        </form>
      </div>

      <Footer />
    </div>
  );
}

export default Landing;
