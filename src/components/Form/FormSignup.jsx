import { Field, Form, Formik } from "formik";
import FormLabel from "./FormLabel";
import { createUser } from "../../api/user.api";

function FormSignup({ changeForm }) {
  return (
    <div className="form-container">
      <section>
        <h1 className="text-4xl font-bold">DotShare</h1>
        <h3>
          Create an account to share your config files with the world.<br></br>
          It's free
        </h3>
      </section>
      <Formik
        initialValues={{ username: "", email: "", password: "" }}
        onSubmit={async (values) => {
          // API
          console.log(values);
          const response = await createUser(values);
          console.log(response);
        }}
      >
        {({ handleSubmit, handleChange, isSubmitting }) => (
          <Form onSubmit={handleSubmit} className="form flex flex-col">
            <FormLabel>Username</FormLabel>
            <Field
              type="text"
              onChange={handleChange}
              name="username"
              className="field"
              placeholder="max 20 characters"
              required
            />

            <FormLabel>Email</FormLabel>
            <Field
              type="email"
              onChange={handleChange}
              name="email"
              className="field"
              placeholder="myawesome@email.com"
              required
            />

            <FormLabel>Password</FormLabel>
            <Field
              type="password"
              onChange={handleChange}
              name="password"
              className="field"
              placeholder="min 8 characters"
              required
            />
            <div className="mb-2">
              <p className="text-gray-500">
                Already have an account?{" "}
                <a
                  onClick={changeForm}
                  className="text-blue-500 
                cursor-pointer
                "
                >
                  Login
                </a>
              </p>
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="text-white font-bold btn"
            >
              {isSubmitting ? "Creating account..." : "Create account"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default FormSignup;
