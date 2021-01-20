import React from 'react';

import { FaEdit, FaTrash } from 'react-icons/fa';
const List = ({ title, id, remove, edit }) => {
	return (
		<>
			<div className='grocery-list'>
				<article className='grocery-item' key={id}>
					<p className='title'>{title}</p>
					<div className='btn-container'>
						<button
							type='button'
							className='edit-btn'
							onClick={edit}
						>
							<FaEdit />
						</button>
						<button
							type='button'
							className='delete-btn'
							onClick={remove}
						>
							<FaTrash />
						</button>
					</div>
				</article>
			</div>
		</>
	);
};

export default List;
