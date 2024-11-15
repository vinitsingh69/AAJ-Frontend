import React from 'react'

const Form = () => {
  return (
    <div><div className="bg-white ml-12 p-8 rounded-lg shadow-lg w-3/4">
      <h2 className="text-3xl mb-6 font-semibold place-items-center"><div>Register</div></h2>
      <form className="space-y-6">
        <div>
          <label className="block text-xl font-medium text-gray-700 mb-1">Email Id</label>
          <input type="email" className="w-full p-3 border border-gray-300 rounded-md bg-gray-50" />
        </div>

        <div>
          <label className="block text-xl font-medium text-gray-700 mb-1">Mobile No.</label>
          <input type="tel" className="w-full p-3 border border-gray-300 rounded-md bg-gray-50" />
        </div>

        <div>
          <label className="block text-xl font-medium text-gray-700 mb-1">
            Are you a business which needs GST invoice
          </label>

          <div className="grid grid-cols-5 gap-5">

            <button type="" className="w-full bg-red-700 text-white py-3 rounded-lg hover:bg-red-700 transition-colors">
              Yes
            </button>


            <button type="" className="w-full text-gray-700 border border-gray-300 rounded-lg bg-gray-50">
              No
            </button>
          </div>

        </div>

        <div>
          <label className="block text-xl font-medium text-gray-700 mb-1">Company Name</label>
          <input type="text" className="w-full p-3 border border-gray-300 rounded-md bg-gray-50" />
        </div>

        <div>
          <label className="block text-xl font-medium text-gray-700 mb-1">Company Address</label>
          <textarea className="w-full p-3 border border-gray-300 rounded-md bg-gray-50" rows="2"></textarea>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xl font-medium text-gray-700 mb-1">State</label>
            <input type="text" className="w-full p-3 border border-gray-300 rounded-md bg-gray-50" />
          </div>
          <div>
            <label className="block text-xl font-medium text-gray-700 mb-1">Pincode</label>
            <input type="text" className="w-full p-3 border border-gray-300 rounded-md bg-gray-50" />
          </div>
        </div>

        <div>
          <label className="block text-xl font-medium text-gray-700 mb-1">GST Number</label>
          <input type="text" className="w-full p-3 border border-gray-300 rounded-md bg-gray-50" />
        </div>

        <button type="button" className="text-red-600 text-xl p-3 rounded-xl border-2 border-red-600 bg-trueGray-50">Add New GST</button>

        <button type="submit" className="w-full bg-red-700 text-white py-3 rounded-md hover:bg-red-700 transition-colors">
          Register
        </button>

        <p className="text-xl text-gray-500 text-center">
          By continuing you agree to the  
          <a href="#" className="text-blue-600 hover:underline">Terms & Conditions</a>
        </p>
      </form>
    </div></div>
  )
}

export default Form