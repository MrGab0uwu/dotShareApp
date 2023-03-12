import { Field, Form, Formik } from 'formik';
import FormLabel from './FormLabel';
import FormTitle from './FormTitle';
import { createUser } from '../../api/user.api';
import FormSwitch from './FormSwitch';

function FormSignup() {
	const title = 'Create an account';

	return (
		<div className='form-container'>
			<Formik
				initialValues={{ username: '', email: '', password: '' }}
				onSubmit={async (values) => {
					// API
					console.log(values);
					const response = await createUser(values);
					console.log(response);
				}}
			>
				{({ handleSubmit, handleChange, isSubmitting }) => (
					<Form onSubmit={handleSubmit} className='form flex flex-col'>
						<FormLabel>Username</FormLabel>
						<Field
							type='text'
							onChange={handleChange}
							name='username'
							className='field'
							placeholder='e.g Kanye West'
						/>

						<FormLabel>Email</FormLabel>
						<Field
							type='email'
							onChange={handleChange}
							name='email'
							className='field'
							placeholder='e.g amazing@email.com'
						/>

						<FormLabel>Password</FormLabel>
						<Field
							type='password'
							onChange={handleChange}
							name='password'
							className='field'
							placeholder='e.g iloveapples123'
						/>
						<button
							type='submit'
							disabled={isSubmitting}
							className='text-white font-bold btn'
						>
							{isSubmitting ? 'Submiting...' : 'Submit'}
						</button>
					</Form>
				)}
			</Formik>
		</div>
	);
}

export default FormSignup;
