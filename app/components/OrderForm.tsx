
'use client';

import React from 'react';

interface OrderFormProps {
  onSubmit: (formData: {
    name: string;
    phone: string;
    email: string;
  }) => void;
}

const OrderForm: React.FC<OrderFormProps> = ({ onSubmit }) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    onSubmit({
      name: formData.get('name') as string,
      phone: formData.get('phone') as string,
      email: formData.get('email') as string
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-md mx-4">
        <div className="bg-[#c3e0df] text-black p-4">
          <h3 className="text-xl">Complete your profile</h3>
          <p className="text-sm opacity-80">Profile Status: 0% Complete</p>
        </div>
        <form onSubmit={handleSubmit} className="p-4">
          <div className="space-y-4">
            <div>
              <label className="flex items-center text-sm text-gray-600">
                <span className="mr-2">•</span>
                Add your Email
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full mt-1 px-3 py-2 border rounded-md"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="flex items-center text-sm text-gray-600">
                <span className="mr-2">•</span>
                Add your Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                required
                className="w-full mt-1 px-3 py-2 border rounded-md"
                placeholder="Enter your phone number"
              />
            </div>
            <div>
              <label className="flex items-center text-sm text-gray-600">
                <span className="mr-2">•</span>
                Add your Name
              </label>
              <input
                type="text"
                name="name"
                required
                className="w-full mt-1 px-3 py-2 border rounded-md"
                placeholder="Enter your name"
              />
            </div>
          </div>
          <div className="mt-6 flex space-x-3">
            <button
              type="submit"
              className="flex-1 bg-[#c3e0df] text-black py-2 rounded-md hover:bg-[#b2cfce]"
            >
              Submit
            </button>
            <button
              type="button"
              onClick={() => window.history.back()}
              className="flex-1 bg-gray-100 text-gray-800 py-2 rounded-md hover:bg-gray-200"
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OrderForm;
