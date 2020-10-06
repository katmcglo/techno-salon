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
      <form autoComplete="off" onSubmit={handleSubmit(onSubmit)} >
        <div className={classes.FormRow}>
          <label htmlFor="firstName">First Name:</label>
          <input type="text" name="firstName" ref={register({ required: true, minLength: 2 })} />
          {errors.firstName && <p>First name invalid!</p>}
        </div>
        <div className={classes.FormRow}>
          <label htmlFor="lastName">Last Name:</label>
          <input type="text" name="lastName" ref={register({ required: true, minLength: 2 })} />
          {errors.lastName && <p>Last name invalid!</p>}
        </div>
        <div className={classes.FormRow}>
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" ref={register({ required: true })} />
          {errors.email && <p>Email must be in a correct format</p>}
        </div>
        <div className={classes.FormRow}>
          <label htmlFor="phoneNumber">Phone:</label>
          <input type="text" name="phoneNumber" ref={register} />
        </div>
        <div className={classes.FormRow}>
          <label htmlFor="description">Info:</label>
          <textarea name="description" rows="4" cols="20" ref={register} />
        </div>
        <div className={classes.FormRow}>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default Form;