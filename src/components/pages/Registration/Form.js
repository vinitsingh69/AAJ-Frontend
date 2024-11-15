import React, { useState } from 'react'

import {
  validateForm,
  initialFormState,
  hasErrors
} from '../../ValidateFrom';

const Form = () => {
  const [formData, setFormData] = useState(initialFormState);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleGSTChoice = (choice) => {
    setFormData(prev => ({
      ...prev,
      needsGST: choice
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm(formData);
    
    if (!hasErrors(newErrors)) {
      console.log('Form is valid:', formData);
      alert('Form submitted successfully, Thank you!');
      // Add your API call here
    } else {
      setErrors(newErrors);
      console.log('Form has errors:', newErrors);
      alert('Error in submitting the form', newErrors);
      // throw new Error('Form has errors');
    }
  };

  return (
    <div>
      <div className="bg-white ml-12 p-8 rounded-lg shadow-lg w-3/4">
        <h2 className="text-3xl mb-6 font-semibold place-items-center">
          <div>Register</div>
        </h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-xl font-medium text-gray-700 mb-1">Email Id</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full p-3 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md bg-gray-50`}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          <div>
            <label className="block text-xl font-medium text-gray-700 mb-1">Mobile No.</label>
            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              className={`w-full p-3 border ${errors.mobile ? 'border-red-500' : 'border-gray-300'} rounded-md bg-gray-50`}
            />
            {errors.mobile && <p className="text-red-500 text-sm mt-1">{errors.mobile}</p>}
          </div>

          <div>
            <label className="block text-xl font-medium text-gray-700 mb-1">
              Are you a business which needs GST invoice
            </label>
            <div className="grid grid-cols-5 gap-5">
              <button
                type="button"
                onClick={() => handleGSTChoice(true)}
                className={`w-full ${formData.needsGST ? 'bg-red-700 text-white' : 'bg-gray-50 text-gray-700'} py-3 rounded-lg hover:bg-red-700 transition-colors`}
              >
                Yes
              </button>
              <button
                type="button"
                onClick={() => handleGSTChoice(false)}
                className={`w-full ${!formData.needsGST ? 'bg-red-700 text-white' : 'text-gray-700 border border-gray-300'} rounded-lg bg-gray-50`}
              >
                No
              </button>
            </div>
          </div>

          {formData.needsGST && (
            <>
              <div>
                <label className="block text-xl font-medium text-gray-700 mb-1">Company Name</label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  className={`w-full p-3 border ${errors.companyName ? 'border-red-500' : 'border-gray-300'} rounded-md bg-gray-50`}
                />
                {errors.companyName && <p className="text-red-500 text-sm mt-1">{errors.companyName}</p>}
              </div>

              <div>
                <label className="block text-xl font-medium text-gray-700 mb-1">Company Address</label>
                <textarea
                  name="companyAddress"
                  value={formData.companyAddress}
                  onChange={handleChange}
                  className={`w-full p-3 border ${errors.companyAddress ? 'border-red-500' : 'border-gray-300'} rounded-md bg-gray-50`}
                  rows="2"
                ></textarea>
                {errors.companyAddress && <p className="text-red-500 text-sm mt-1">{errors.companyAddress}</p>}
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xl font-medium text-gray-700 mb-1">State</label>
                  <input
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    className={`w-full p-3 border ${errors.state ? 'border-red-500' : 'border-gray-300'} rounded-md bg-gray-50`}
                  />
                  {errors.state && <p className="text-red-500 text-sm mt-1">{errors.state}</p>}
                </div>
                <div>
                  <label className="block text-xl font-medium text-gray-700 mb-1">Pincode</label>
                  <input
                    type="text"
                    name="pincode"
                    value={formData.pincode}
                    onChange={handleChange}
                    className={`w-full p-3 border ${errors.pincode ? 'border-red-500' : 'border-gray-300'} rounded-md bg-gray-50`}
                  />
                  {errors.pincode && <p className="text-red-500 text-sm mt-1">{errors.pincode}</p>}
                </div>
              </div>

              <div>
                <label className="block text-xl font-medium text-gray-700 mb-1" >GST Number</label>
                <input
                  type="text"
                  name="gstNumber"
                  value={formData.gstNumber}
                  onChange={handleChange}
                  placeholder='22AAAAA0000A1Z5 (GST Sample)'
                  className={`w-full p-3 border ${errors.gstNumber ? 'border-red-500' : 'border-gray-300'} rounded-md bg-gray-50`}
                />
                {errors.gstNumber && <p className="text-red-500 text-sm mt-1">{errors.gstNumber}</p>}
              </div>

              <button
                type="button"
                className="text-red-600 text-xl p-3 rounded-xl border-2 border-red-600 bg-trueGray-50"
              >
                Add New GST
              </button>
            </>
          )}

          <button
            type="submit"
            className="w-full bg-red-700 text-white py-3 rounded-md hover:bg-red-700 transition-colors"
          >
            Register
          </button>

          <p className="text-xl text-gray-500 text-center">
            By continuing you agree to the{' '}
            <a href="#" className="text-blue-600 hover:underline">
              Terms & Conditions
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Form;