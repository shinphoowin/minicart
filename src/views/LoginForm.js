import { useFormik } from "formik";
import { Button, Form } from "semantic-ui-react";
import TextInput from "../components/TextInput";

const validate = (values) => {
  const errors = {};
  if (!values.username) {
    errors.username = "Required Field";
  }
  if (!values.password) {
    errors.password = "Required Field";
  }
  return errors;
};

const LoginForm = ({ handleSubmit, loading, loginData }) => {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validate,
    onSubmit: handleSubmit,
  });

  return (
    <Form size={"big"} key={"big"} onSubmit={formik.handleSubmit}>
      <TextInput
        type="text"
        name="username"
        placeholder="name"
        onChange={formik.handleChange}
        value={formik.values.username}
        error={formik.errors.username}
      />

      <TextInput
        type="password"
        name="password"
        placeholder="password"
        onChange={formik.handleChange}
        value={formik.values.password}
        error={formik.errors.password}
      />
      {loginData ? <p className="Error">{loginData}</p> : ""}
      <Button positive loading={loading} type="submit">
        LOGIN
      </Button>
    </Form>
  );
};

export default LoginForm;
