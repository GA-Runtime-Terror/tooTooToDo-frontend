import React, { useState, useRef } from 'react';

function List(props) {
	const [addItem, setAddItem] = useState([]);
	const textInput = useRef(null);

	const handleSubmit = (e) => {
		e.preventDefault();
		setAddItem([...addItem, textInput.current.value]);
		e.target[0].value = '';
	};

	const removeClick = (index) => (event) => {
		event.preventDefault();
		const copy = [...addItem];
		copy.splice(index, 1);
		setAddItem(copy);
	};

	const addList = addItem.map((item, index) => {
		return (
			<li className='listItem-form' key={index}>
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
					<form onSubmit={handleSubmit} className='task'>
						<input
							ref={textInput}
							className='input-landing list-input'
							type='text'
							placeholder='Add new item'
						/>
						<button className='button' type='submit'>
							Submit
						</button>
					</form>
				</div>
			</li>
		</ul>
	);
}

export default List;
