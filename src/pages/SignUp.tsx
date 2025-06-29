import React from "react";
import { useAuthForm, signUpSchema } from "../hooks/useAuthForm";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useAuthForm(signUpSchema);

  const onSubmit = (data: typeof signUpSchema._type) => {
    if (data.email === "tansenkhan1990@gmail.com") {
      setError("email", {
        type: "manual",
        message: "User already exists",
      });
      return;
    }

    console.log("Sign Up Success:", data);
  };

  return (
    <div className="flex flex-1 items-center justify-center px-4 py-12">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Create an Account
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* First Name */}
          <div>
            <label htmlFor="firstName" className="block mb-1 font-medium text-gray-700">
              First Name
            </label>
            <input
              id="firstName"
              type="text"
              {...register("firstName")}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>
            )}
          </div>

          {/* Last Name */}
          <div>
            <label htmlFor="lastName" className="block mb-1 font-medium text-gray-700">
              Last Name
            </label>
            <input
              id="lastName"
              type="text"
              {...register("lastName")}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.lastName && (
              <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block mb-1 font-medium text-gray-700">
              Email
            </label>
            <input
              id="email"
              type="email"
              {...register("email")}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block mb-1 font-medium text-gray-700">
              Password
            </label>
            <input
              id="password"
              type="password"
              {...register("password")}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
            )}
          </div>

          {/* Confirm Password */}
          <div>
            <label htmlFor="confirmPassword" className="block mb-1 font-medium text-gray-700">
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              type="password"
              {...register("confirmPassword")}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-1">{errors.confirmPassword.message}</p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
