'use client'
import React from "react";

import { User, Mail, Phone, Lock, CreditCard } from "lucide-react";
import { postUser } from "@/actions/server/auth";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";


const Registerform = () => {
  const router = useRouter();
  const handleSubmit = async (e)=>{
    e.preventDefault();

    const formData = {
      name : e.target.name.value,
      email: e.target.email.value,
      tel : e.target.tel.value,
      nid: e.target.nid.value,
      password: e.target.password.value
    }

    const result = await postUser(formData);
    console.log('reached before acknowledge')
    if(result?.success){
      toast.success('submitted successfully');
      router.push('/login');
    }

  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 to-white p-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Create Account</h2>
          <p className="text-gray-500 mt-2 text-sm">
            Join CareConnect and book trusted care services
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <div className="flex items-center border rounded-xl px-3 py-2 focus-within:ring-2 focus-within:ring-emerald-400">
              <User size={18} className="text-gray-400 mr-2" />
              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                className="w-full outline-none text-sm"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <div className="flex items-center border rounded-xl px-3 py-2 focus-within:ring-2 focus-within:ring-emerald-400">
              <Mail size={18} className="text-gray-400 mr-2" />
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="w-full outline-none text-sm"
              />
            </div>
          </div>

          {/* Contact */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Contact Number
            </label>
            <div className="flex items-center border rounded-xl px-3 py-2 focus-within:ring-2 focus-within:ring-emerald-400">
              <Phone size={18} className="text-gray-400 mr-2" />
              <input
                type="tel"
                name="tel"
                placeholder="Enter your phone number"
                className="w-full outline-none text-sm"
              />
            </div>
          </div>

          {/* NID */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              NID Number
            </label>
            <div className="flex items-center border rounded-xl px-3 py-2 focus-within:ring-2 focus-within:ring-emerald-400">
              <CreditCard size={18} className="text-gray-400 mr-2" />
              <input
                type="text"
                name="nid"
                placeholder="Enter your NID number"
                className="w-full outline-none text-sm"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <div className="flex items-center border rounded-xl px-3 py-2 focus-within:ring-2 focus-within:ring-emerald-400">
              <Lock size={18} className="text-gray-400 mr-2" />
              <input
                type="password"
                name="password"
                placeholder="Create a password"
                className="w-full outline-none text-sm"
              />
            </div>

            {/* Password Hint */}
            <p className="text-xs text-gray-500 mt-2">
              Password must be at least 6 characters, include 1 uppercase and 1
              lowercase letter.
            </p>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-3 rounded-xl font-medium transition shadow-md"
          >
            Register
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-1 h-px bg-gray-200"></div>
          <span className="px-3 text-gray-400 text-sm">OR</span>
          <div className="flex-1 h-px bg-gray-200"></div>
        </div>

        {/* Google Button */}
        <button
          type="button"
          className="w-full border border-gray-300 py-3 rounded-xl text-gray-700 hover:bg-gray-50 transition font-medium"
        >
          Continue with Google
        </button>

        {/* Login Redirect */}
        <p className="text-center text-sm text-gray-600 mt-6">
          Already have an account?{" "}
          <span className="text-emerald-600 font-medium cursor-pointer hover:underline">
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default Registerform;
