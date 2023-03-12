import React from 'react';

function FormContainer({ children }) {
	return (
		<div className='w-full h-screen grid place-items-center'>{children}</div>
	);
}

export default FormContainer;
