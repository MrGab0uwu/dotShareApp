import { Field, Form, Formik } from "formik";
import FormLabel from "./FormLabel";
import { loginUser, githubLogin } from "../../api/user.api";
import useUserStore from "../../storages/user";
import GitHubLoginButton from "./GithubOauth";

function FormLogin({ changeForm }) {
  const { setUser } = useUserStore();
  const githubHandler = async ({ code }) => {
    const user = await githubLogin(code);
    console.log(user);
    setUser(user);
  };
  return (
    <div className="form-container">
      <section>
        <h1 className="text-4xl font-bold">DotShare</h1>
        <h3 className="text-gray-500 text-base font-medium mt-2">
          Welcome back! <br></br>
          It's great to see you again. Please login to your account.
        </h3>
        <GitHubLoginButton onSuccess={githubHandler} />
      </section>
      <Formik
        initialValues={{ username: "", password: "" }}
        onSubmit={async (values) => {
          const response = await loginUser(values);
          setUser(response);
        }}
      >
        {({ handleSubmit, handleChange, isSubmitting }) => (
          <Form onSubmit={handleSubmit} className="form flex flex-col pr-5">
            <FormLabel>Username</FormLabel>
            <Field
              type="text"
              onChange={handleChange}
              name="username"
              className="field"
              placeholder="awesomeUsername"
              required
            />
            <FormLabel>Password</FormLabel>
            <Field
              type="password"
              onChange={handleChange}
              name="password"
              className="field"
              placeholder="mySecretPassword"
              required
            />
            <div className="mb-2">
              <p className="text-gray-500">
                You don't have an account?{" "}
                <a
                  onClick={changeForm}
                  className="text-blue-500 cursor-pointer"
                >
                  Create one
                </a>
              </p>
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="text-white font-bold btn"
            >
              {isSubmitting ? "Login..." : "Login"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default FormLogin;
