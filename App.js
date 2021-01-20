import React, { useState } from 'react';
import List from './List';
import Alert from './Alert';
import './index.css';

function App() {
	const [input, setInput] = useState('');
	const [list, setList] = useState([]);
	const [alertState, setAlertState] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		if (input !== '') {
			const item = { id: new Date().getTime().toString(), input };
			setList((list) => {
				return [...list, item];
			});
			setInput('');
			setAlertState('submit');
			setTimeout(() => {
				setAlertState('');
			}, 3000);
		}
	};

	const removeItem = (id) => {
		let newList = list.filter((i) => i.id !== id);
		setList(newList);
		setAlertState('removed');
		setTimeout(() => {
			setAlertState('');
		}, 3000);
	};
	const editItem = (title, id) => {
		setInput(title);
		removeItem(id);
		setAlertState('edited');
	};

	return (
		<section className='section-center'>
			<form className='grocery-form' onSubmit={handleSubmit}>
				<Alert alert={alertState} />
				<h3>grocery bud</h3>
				<div className='form-control'>
					<input
						type='text'
						className='grocery'
						placeholder='e.g. eggs'
						value={input}
						onChange={(e) => setInput(e.target.value)}
					/>
					<button
						type='submit'
						className='submit-btn'
						id='submit-btn'
					>
						submit
					</button>
				</div>
			</form>
			<div className='grocery-container'>
				{list.map((item) => {
					return (
						<List
							title={item.input}
							key={item.id}
							li={list}
							remove={() => removeItem(item.id)}
							edit={() => editItem(item.input, item.id)}
						/>
					);
				})}
				{list.length !== 0 ? (
					<button
						className='clear-btn'
						onClick={() => {
							setList([]);
							setInput('');
							setAlertState('cleared');
							setTimeout(() => {
								setAlertState('');
							}, 3000);
						}}
					>
						clear items
					</button>
				) : null}
			</div>
		</section>
	);
}

export default App;
