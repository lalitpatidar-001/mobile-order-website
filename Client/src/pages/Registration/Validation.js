export const validation = (values) => {
    const errors = {};

    if (!values.username) {
      errors.username = 'Username is required';
    } else if (values.username.length < 4 || values.username.length > 14) {
      errors.username = 'Username should be between 4 and 14 characters';
    }

    if (values.password.length < 8 || values.password.length > 14) {
      errors.password = 'Password should be between 8 and 14 characters';
    }

    if (values.confirmPassword.length < 8 || values.confirmPassword.length > 14) {
      errors.confirmPassword = 'Password should be between 8 and 14 characters';
    } else if (values.password !== values.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }

    return errors;
  };