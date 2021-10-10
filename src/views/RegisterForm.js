import { useFormik } from "formik";
import React, { useEffect } from "react";
import { Button, Form } from "semantic-ui-react";
import TextInput from "../components/TextInput";

const validate = (values) => {
  const errors = {};
  if (!values.email) {
    errors.email = "Required email validation";
  }
  if (!values.username) {
    errors.username = "Required Field";
  }
  if (!values.password) {
    errors.password = "Required Field";
  }
  return errors;
};

const RegisterForm = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      email: "",
    },
    validate,
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
    },
  });

  useEffect(() => {
    console.log("RegisterForm render inside useEffect");
    // navigator.geolocation.getCurrentPosition((p) => console.log(p));
    // if (navigator.geolocation) {
    //   navigator.geolocation.watchPosition((p) => {
    //     console.log("lat", p.coords.latitude);
    //     console.log("long", p.coords.longitude);
    //   });
    // }
  });

  return (
    <Form size={"big"} key={"big"} onSubmit={formik.handleSubmit}>
      <TextInput
        type="text"
        name="email"
        placeholder="email"
        onChange={formik.handleChange}
        value={formik.values.email}
        error={formik.errors.email}
      />
      <Form.Group widths="equal">
        <TextInput
          type="text"
          name="firstname"
          placeholder="first name"
          onChange={formik.handleChange}
          value={formik.values.firstname}
          error={formik.errors.firstname}
        />

        <TextInput
          type="text"
          name="lastname"
          placeholder="last name"
          onChange={formik.handleChange}
          value={formik.values.lastname}
          error={formik.errors.lastname}
        />
      </Form.Group>

      <Form.Group widths="equal">
        <TextInput
          type="text"
          name="city"
          placeholder="city"
          onChange={formik.handleChange}
          value={formik.values.city}
          error={formik.errors.city}
        />

        <TextInput
          type="text"
          name="street"
          placeholder="street"
          onChange={formik.handleChange}
          value={formik.values.street}
          error={formik.errors.street}
        />
        <TextInput
          type="text"
          name="number"
          placeholder="House number"
          onChange={formik.handleChange}
          value={formik.values.number}
          error={formik.errors.number}
        />

        <TextInput
          type="text"
          name="zipcode"
          placeholder="zipcode"
          onChange={formik.handleChange}
          value={formik.values.zipcode}
          error={formik.errors.zipcode}
        />
      </Form.Group>

      <TextInput
        type="number"
        name="phone"
        placeholder="phone number"
        onChange={formik.handleChange}
        value={formik.values.phone}
        error={formik.errors.phone}
      />

      <TextInput
        type="password"
        name="password"
        placeholder="password"
        onChange={formik.handleChange}
        value={formik.values.password}
        error={formik.errors.password}
      />
      <Button positive type="submit">
        REGISTER
      </Button>
    </Form>
  );
};

export default RegisterForm;
