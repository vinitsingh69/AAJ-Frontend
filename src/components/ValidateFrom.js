/**
 * Validates an email address
 * @param {string} email - The email address to validate
 * @returns {boolean} - Whether the email is valid
 */
export const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  
  /**
   * Validates a mobile number (10 digits)
   * @param {string} mobile - The mobile number to validate
   * @returns {boolean} - Whether the mobile number is valid
   */
  export const isValidMobile = (mobile) => {
    const mobileRegex = /^[0-9]{10}$/;
    return mobileRegex.test(mobile);
  };
  
  /**
   * Validates an Indian GST number
   * @param {string} gst - The GST number to validate
   * @returns {boolean} - Whether the GST number is valid
   */
  export const isValidGST = (gst) => {
    // GST format: 22AAAAA0000A1Z5
    const gstRegex = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/;
    return gstRegex.test(gst);
  };
  
  /**
   * Validates an Indian pincode
   * @param {string} pincode - The pincode to validate
   * @returns {boolean} - Whether the pincode is valid
   */
  export const isValidPincode = (pincode) => {
    const pincodeRegex = /^[1-9][0-9]{5}$/;
    return pincodeRegex.test(pincode);
  };
  
  /**
   * Validates form data
   * @param {Object} formData - The form data to validate
   * @returns {Object} - Object containing validation errors
   */
  export const validateForm = (formData) => {
    const errors = {};
  
    // Email validation
    if (!formData.email) {
      errors.email = 'Email is required';
    } else if (!isValidEmail(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }
  
    // Mobile validation
    if (!formData.mobile) {
      errors.mobile = 'Mobile number is required';
    } else if (!isValidMobile(formData.mobile)) {
      errors.mobile = 'Please enter a valid 10-digit mobile number';
    }
  
    // If GST is needed, validate business details
    if (formData.needsGST) {
      // Company name validation
      if (!formData.companyName?.trim()) {
        errors.companyName = 'Company name is required';
      }
  
      // Company address validation
      if (!formData.companyAddress?.trim()) {
        errors.companyAddress = 'Company address is required';
      }
  
      // State validation
      if (!formData.state?.trim()) {
        errors.state = 'State is required';
      }
  
      // Pincode validation
      if (!formData.pincode) {
        errors.pincode = 'Pincode is required';
      } else if (!isValidPincode(formData.pincode)) {
        errors.pincode = 'Please enter a valid 6-digit pincode';
      }
  
      // GST number validation
      if (!formData.gstNumber) {
        errors.gstNumber = 'GST number is required';
      } else if (!isValidGST(formData.gstNumber)) {
        errors.gstNumber = 'Please enter a valid GST number';
      }
    }
  
    return errors;
  };
  
  /**
   * Checks if the form has any errors
   * @param {Object} errors - The errors object
   * @returns {boolean} - Whether the form has any errors
   */
  export const hasErrors = (errors) => {
    return Object.keys(errors).length > 0;
  };
  
  
  export const initialFormState = {
    email: '',
    mobile: '',
    needsGST: true,
    companyName: '',
    companyAddress: '',
    state: '',
    pincode: '',
    gstNumber: ''
  };
  
  
  export const formFields = {
    email: {
      type: 'email',
      label: 'Email Id',
      required: true
    },
    mobile: {
      type: 'tel',
      label: 'Mobile No.',
      required: true
    },
    companyName: {
      type: 'text',
      label: 'Company Name',
      required: true,
      showIf: 'needsGST'
    },
    companyAddress: {
      type: 'textarea',
      label: 'Company Address',
      required: true,
      showIf: 'needsGST'
    },
    state: {
      type: 'text',
      label: 'State',
      required: true,
      showIf: 'needsGST'
    },
    pincode: {
      type: 'text',
      label: 'Pincode',
      required: true,
      showIf: 'needsGST'
    },
    gstNumber: {
      type: 'text',
      label: 'GST Number',
      required: true,
      showIf: 'needsGST'
    }
  };