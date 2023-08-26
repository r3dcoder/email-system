import { ValidationSchema } from "./vallidation-utils";

export const registrationValidationSchema: ValidationSchema = {
    firstName: { required: true },
    lastName: { required: true },
    email: { required: true },
    password: { required: true, minLength: 6 },
    confirmPassword: { required: true },
    // Define more validation rules as needed
  };