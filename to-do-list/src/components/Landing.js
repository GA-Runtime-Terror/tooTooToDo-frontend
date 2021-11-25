import React, { useState, useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";

function Landing() {
  const [listItem, setListItem] = useState([]);
  const [addItem, setAddItem] = useState([]);
  const [randomQuote, setRandomQuote] = useState([])

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
    setRandomQuote(data)
  }

  useEffect(() => {
    getapi(api_url);
    console.log("use effect");
  }, {});

  const quoteHTML = randomQuote.map ((quote) => {
  return (
    <p>{quote}</p>
  )
  })

  const addList = addItem.map((item) => {
    return <li>{item} </li>;
  });

  return (
    <div className="App">
      <Header />
      {quoteHTML.q}

      <div className="body-div">
        <h2>Toucan do it! </h2>

        <ul>
          <li>placeholder item</li>
          <li>
            
            {addList} <button className="remove-button">remove</button>
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
