import React from 'react';

function FormTitle({ title }) {
	return (
		<h1 className='text-2xl lg:text-3xl text-white mx-auto font-semibold tracking-wider capitalize'>
			{title}
		</h1>
	);
}

export default FormTitle;
