import React from 'react';

function FormSwitch({ text, action }) {
	return (
		<p className='text-sm text-gray-600'>
			<span onClick={action} className='text-cyan-400'></span>
		</p>
	);
}

export default FormSwitch;
