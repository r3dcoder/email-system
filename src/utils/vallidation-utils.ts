import { formatFieldName } from "./formated-field-name";

export interface ValidationSchema {
    [key: string]: {
      required?: boolean;
      minLength?: number;
      // Add more validation rules as needed
    };
  }
  
  export interface ValidationErrors {
    [key: string]: string;
  }
  
  export function validateForm(formData: any, schema: ValidationSchema): ValidationErrors {
    const errors: ValidationErrors = {};
  
    for (const field in schema) {
      const rules = schema[field];
      for (const rule in rules) {
        if (rule === 'required' && rules[rule] && !formData[field]) {
          errors[field] = `${formatFieldName(field)} is required`;
        }
        if (rule === 'minLength' && formData[field]?.length < rules[rule]!) {
          errors[field] = `${field} must be at least ${rules[rule]} characters`;
        }
        // Add more validation rules handling here
      }
    }
  
    return errors;
  }
  