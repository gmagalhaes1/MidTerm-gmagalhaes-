import React from 'react';
import { useForm } from 'react-hook-form';

const SignUpUser = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const password = watch('password');  // Watch the password field to validate the confirmation

  const onSubmit = (data) => {
    if (data.password !== data.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    // Show an alert with all data in the useForm
    alert(`Form submitted!\nFirst Name: ${data.firstName}\nLast Name: ${data.lastName}\nUsername: ${data.userName}\nEmail: ${data.email}\nPassword: ${data.password}`);
    // Log the object from the useForm in the console
    console.log('Form Data:', data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          {...register('firstName', { required: 'First name is required' })}
        />
        {errors.firstName && <span>{errors.firstName.message}</span>}
      </div>
      <div>
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          {...register('lastName', { required: 'Last name is required' })}
        />
        {errors.lastName && <span>{errors.lastName.message}</span>}
      </div>
      <div>
        <label htmlFor="userName">Username:</label>
        <input
          type="text"
          id="userName"
          {...register('userName', { required: 'Username is required' })}
        />
        {errors.userName && <span>{errors.userName.message}</span>}
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^\S+@\S+$/i,
              message: 'Entered value does not match email format'
            }
          })}
        />
        {errors.email && <span>{errors.email.message}</span>}
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          {...register('password', { required: 'Password is required' })}
        />
        {errors.password && <span>{errors.password.message}</span>}
      </div>
      <div>
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input
          type="password"
          id="confirmPassword"
          {...register('confirmPassword', { required: 'Confirm password is required' })}
        />
        {errors.confirmPassword && <span>{errors.confirmPassword.message}</span>}
      </div>
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignUpUser;
