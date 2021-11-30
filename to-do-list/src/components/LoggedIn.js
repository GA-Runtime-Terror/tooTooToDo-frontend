import React, { useState, useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";

function LoggedIn(props) {
  const [randomQuote, setRandomQuote] = useState([]);
  const [list, setList] = useState();

  const [addItem, setAddItem] = useState([]);

  const handleChange = (event) => {
    const value = event.target.value;
    setAddItem(value);
  };

  console.log(props.user);

  const api_url =
    "https://zenquotes.io/api/random/a8d087f3df39b78ba4412d5c810d601af7cc7969";

  async function getapi(url) {
    const response = await fetch(url);
    let data = await response.json();
    setRandomQuote(data);
  }

  useEffect(() => {
    getapi(api_url);
    fetch(`https://toucan-do-it.herokuapp.com/lists/${props.user.toDoList}`)
      .then((res) => res.json())

      .then((data) => {
        console.log(data);
        setList(data.list[0].toDoItems);
      });

    console.log("use effect");
  }, []);

  const quoteHTML = randomQuote.map((quote) => {
    return <p>{quote.q}</p>;
  });

  console.log(list);

  const handleSubmit = (id) => {
    fetch(`https://toucan-do-it.herokuapp.com/lists/${props.user.toDoList}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: addItem }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setList(data.list);
        
      });
  };

  const handleRemove = (id) => {
    fetch(
      `https://toucan-do-it.herokuapp.com/lists/${props.user.toDoList}/${id}`,
      { method: "DELETE" }
    )
      .then((res) => res.json())
      .then((data) => setList(data.list.toDoItems));
  };
  console.log(addItem);

  let task = [];

  if (list)
    task = list.map((item) => {
      return (
        <li className="listItem-form">
          <div className="listItem-landing">{item.name}</div>
          <button onClick={() => handleRemove(item._id)} className="button">
            remove
          </button>
        </li>
      );
    });
  return (
    <div className="App">
      <Header />

      <div className="body-div">
        <div id="quote-div">{quoteHTML}</div>
        <h2 className="toucan-doit">Toucan do it! </h2>

        <ul>
          {task}
          <li className="listItem-form">
            <div className="listItem-landing">
              <input
                onChange={handleChange}
                className="input-landing list-input"
                type="text"
                placeholder="Add new item"
              />
            </div>
            <button onClick={handleSubmit} className="button" type="submit">
              Submit
            </button>
          </li>
        </ul>
      </div>

      <Footer />
    </div>
  );
}

export default LoggedIn;
