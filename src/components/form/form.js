import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import classes from "../form/form.module.scss";

const Form = () => {
  const { handleSubmit, register, errors } = useForm({ reValidateMode: "onSubmit" });

    const onSubmit = (formData) => {
    console.log(formData);
  }


  return (
    <div className={classes.FormContainer}>
      <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="firstName">First Name:</label>
        <input type="text" name="firstName" ref={register({required: true, minLength: 2})} />
        {errors.firstName && <p>First name invalid!</p>}
        <label htmlFor="lastName">Last Name:</label>
        <input type="text" name="lastName" ref={register({required: true, minLength: 2})} />
        {errors.lastName && <p>Last name invalid!</p>}
        <label htmlFor="email">Email:</label>
        <input type="email" name="email" ref={register({required: true})} />
        {errors.email && <p>Email must be in a correct format</p>}

        <label htmlFor="phoneNumber">Phone Number:</label>
        <input type="text" name="phoneNumber" ref={register} />

        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Form;