import React, { useState, useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";
import List from "./List";

function Landing() {
  
  const [randomQuote, setRandomQuote] = useState([]);

  

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
  }, []);

  const quoteHTML = randomQuote.map((quote) => {
    return <p>{quote.q}</p>;
  });

 

  return (
    <div className="App">
      <Header />
      

      <div className="body-div">
       
        <div id="quote-div">{quoteHTML}</div>
         <h2>Toucan do it! </h2>
<List />
        

        
      </div>

      <Footer />
    </div>
  );
}

export default Landing;
