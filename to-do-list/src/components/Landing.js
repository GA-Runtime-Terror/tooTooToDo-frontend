import React, { useState, useEffect } from 'react';
import Footer from './Footer';
import Header from './Header';

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
		setAddItem([...addItem, listItem]);

		console.log(addItem);
	};

	const removeClick = (index) => (event) => {
		event.preventDefault();
		const copy = [...addItem];
		copy.splice(index, 1);
		setAddItem(copy);
	};

	const api_url =
		'https://zenquotes.io/api/random/a8d087f3df39b78ba4412d5c810d601af7cc7969';

	async function getapi(url) {
		const response = await fetch(url);
		let data = await response.json();
		console.log(data);
		setRandomQuote(data);
	}

	useEffect(() => {
		getapi(api_url);
		console.log('use effect');
	}, []);

	const quoteHTML = randomQuote.map((quote) => {
		return <p>{quote.q}</p>;
	});

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
		<div className='App'>
			<Header />

			<div className='body-div'>
				{/* <h2>Toucan do it! </h2> */}
				<div id='quote-div'>{quoteHTML}</div>
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
			</div>

			<Footer />
		</div>
	);
}

export default Landing;
