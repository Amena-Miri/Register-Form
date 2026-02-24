import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { registerSchema } from '../schemas/registerSchema';

const RegisterForm = () => {
  const [showSuccess, setShowSuccess] = useState(false);

  const {register, handleSubmit, formState: { errors, isValid }} = useForm({
    resolver: yupResolver(registerSchema),
    mode: 'onChange'});

  const onSubmit = (data) => {
    console.log('Form Data:', data);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <div className="container">
      <div className="form-card">
        <h2>Register</h2>

        {showSuccess && (
          <div className="success-message">
            Registration Successful! 
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Full Name */}
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              className={errors.fullName ? 'error' : ''}
              {...register('fullName')}
            />
            {errors.fullName && (<div className="error-message">{errors.fullName.message}</div> )}
          </div>

          {/* Email */}
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your Email"
              className={errors.email ? 'error' : ''}
              {...register('email')}
            />
            {errors.email && (<div className="error-message">{errors.email.message}</div>)}
          </div>

          {/* Password */}
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className={errors.password ? 'error' : ''}
              {...register('password')}
            />
            {errors.password && (<div className="error-message">{errors.password.message}</div>)}
          </div>

          {/* Confirm Password */}
          <div className="form-group">
            <label>Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm your password"
              className={errors.confirmPassword ? 'error' : ''}
              {...register('confirmPassword')}
            />
            {errors.confirmPassword && (<div className="error-message">{errors.confirmPassword.message}</div>)}
          </div>

          {/* Terms Checkbox */}
          <div className="checkbox-group">
            <input
              type="checkbox"
              id="terms"
              {...register('terms')}
            />
            <label htmlFor="terms">I accept the Terms & Conditions</label>
          </div>
          {errors.terms && (<div className="error-message">{errors.terms.message}</div>)}

          {/* Submit Button */}
          <button type="submit" disabled={!isValid}>
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;