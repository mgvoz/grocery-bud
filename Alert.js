const Alert = ({ alert }) => {
	if (alert === '') {
		return <p className='alert'> </p>;
	}
	if (alert === 'submit') {
		return <p className='alert alert-success'>item updated</p>;
	}

	if (alert === 'removed') {
		return <p className='alert alert-danger'>item removed from list</p>;
	}

	if (alert === 'edited') {
		return <p className='alert alert-success'>editing item...</p>;
	}

	if (alert === 'cleared') {
		return <p className='alert alert-danger'>list emptied</p>;
	}
	return null;
};

export default Alert;
