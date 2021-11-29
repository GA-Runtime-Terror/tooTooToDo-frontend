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
        // addItem.push(listItem);
        setAddItem([...addItem, listItem])
    
        console.log(addItem);
      };

      const removeClick = (index) => (event) => {
        event.preventDefault();
        const copy = [...addItem];
        copy.splice(index,1)
        setAddItem(copy)
      }

    useEffect(() => {
        console.log("use effect");
      }, []);

      const addList = addItem.map((item, index) => {
        return (
          <li className='listItem-form'>
            <div className='listItem-landing'>{item}</div>
            <button className='button' onClick={removeClick(index)}>
              remove
            </button>
          </li>
        );
      });
   

    return (
      <ul>
      <li className='listItem-form'>
        <div className='listItem-landing'>Example Item</div>
        <button className='button'>remove</button>
      </li>

      {addList}
      <li className='listItem-form'>
        <div className='listItem-landing'>
          <input
            className='input-landing list-input'
            onChange={handleChange}
            type='text'
            placeholder='Add new item'
          />
        </div>
        <button className='button' onClick={handleClick} type='submit'>
          Submit
        </button>
      </li>
    </ul>
    )
}

export default List;