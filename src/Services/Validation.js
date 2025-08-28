import * as Yup from 'yup';

export const LoginSchema = Yup.object().shape({
  phoneNumber: Yup.string()
    .matches(
      /^[0-9]{10}$/, // Adjust regex to match your phone number requirements
      'Phone number must be exactly 10 digits',
    )
    .required('Phone number is required'),
  // password: Yup.string()
  //   .min(6, 'Password must be at least 8 characters long')
  //   // .matches(
  //   //   /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/,
  //   //   'Password must contain at least one letter, one number, and one special character'
  //   // )
  //   .required('Password is required'),
});

export const ForgotSchema = Yup.object().shape({
  phoneNumber: Yup.string()
    .matches(
      /^[0-9]{10}$/, // Adjust regex to match your phone number requirements
      'Phone number must be exactly 10 digits',
    )
    .required('Phone number is required'),
});

export const ResetSchema = Yup.object().shape({
  password: Yup.string()
    .min(6, 'Password must be at least 8 characters')
    .required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required'),
});

export const ChangePassSchema = Yup.object().shape({
  oldPassword: Yup.string()
    .min(6, 'Old password must be at least 6 characters')
    .required('Old password is required'),

  newPassword: Yup.string()
    .min(6, 'New password must be at least 6 characters')
    .notOneOf([Yup.ref('oldPassword')], 'New password must be different')
    .required('New password is required'),

  confirmPassword: Yup.string()
    .oneOf([Yup.ref('newPassword')], 'Passwords must match')
    .required('Confirm password is required'),
});

export const ProfileSchema = Yup.object().shape({
  first_name: Yup.string()
    .min(2, 'First name must be at least 2 characters')
    .required('First name is required'),

  last_name: Yup.string()
    .min(2, 'Last name must be at least 2 characters')
    .required('Last name is required'),

  email: Yup.string()
    .email('Invalid email format')
    .required('Email is required'),

  phone: Yup.string()
    .matches(/^\+?\d{10,15}$/, 'Invalid phone number')
    .required('Phone number is required'),

  gender: Yup.string().required('Gender is required'),

  street_address: Yup.string()
    .min(5, 'Address must be at least 5 characters')
    .required('Street address is required'),

  city: Yup.string().required('City is required'),

  country: Yup.string().required('Country is required'),

  province: Yup.string().required('Province is required'),

  postal_code: Yup.string()
    .matches(/^[A-Za-z0-9]{4,10}$/, 'Invalid postal code')
    .required('Postal code is required'),
});

export const TM1Schema = Yup.object().shape({
  trademark_type: Yup.string().required('Trademark type is required'),
  client_reference: Yup.string().required('Client reference is required'),
  trademark_natures: Yup.string().required('Trademark nature is required'),
});

export const TM2Schema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  address: Yup.string().required('Address is required'),
  town: Yup.string().required('Town is required'),
  country: Yup.string().required('Country is required'),
  fax: Yup.string()
    .nullable()
    .matches(/^\d{10,15}$/, 'Enter a valid fax number'),
  email: Yup.string()
    .email('Enter a valid email')
    .required('Email is required'),
});

export const TM3Schema = Yup.object().shape({
  good_services: Yup.string().required('Goods and services is required'),
});

export const TM4Schema = Yup.object().shape({
  supporting_documents: Yup.array()
    .min(1, 'At least one document is required')
    .required('Supporting documents are required'),

  file_type: Yup.string().required('File type is required'),

  upload_image: Yup.array()
    .min(1, 'At least one image is required')
    .required('Upload image is required'),
});
