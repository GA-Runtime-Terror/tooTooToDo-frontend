import React, {useState, useEffect} from 'react'

function List(props) {
    const [listItem, setListItem] = useState([]);
    const [addItem, setAddItem] = useState([]);

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

    //    const removeClick = (event) => {
    //     event.preventDefault();
    //     addItem.splice();
    //    }

    useEffect(() => {
        console.log("use effect");
      }, );

    const addList = addItem.map((item) => {
        return <div className="listItem-form"><li key={item} className="listItem-landing">{item}  <button  className="remove-button">Done</button> </li></div>;
      });
   
// onClick={removeClick}
    return (
       <div>

          {/* <p> List component </p>  */}





          <ul>
        <div className="listItem-form"><li className="listItem-landing"> Example item <button className="remove-button-example">Remove</button> </li></div>
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
    )
}

export default List;