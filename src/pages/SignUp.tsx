import React from "react";
import { useAuthForm, signUpSchema } from "../hooks/useAuthForm";

// ✅ Let the hook infer the type from the schema
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
    <div className="flex flex-col min-h-screen bg-gray-50">
      <div className="flex-grow flex items-center justify-center px-4">
        <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
            Sign Up
          </h1>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label className="block mb-1 font-medium text-gray-700">
                First Name
              </label>
              <input
                type="text"
                {...register("firstName")}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.firstName && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.firstName.message}
                </p>
              )}
            </div>
            <div>
              <label className="block mb-1 font-medium text-gray-700">
                Last Name
              </label>
              <input
                type="text"
                {...register("lastName")}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.lastName && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.lastName.message}
                </p>
              )}
            </div>
            <div>
              <label className="block mb-1 font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                {...register("email")}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div>
              <label className="block mb-1 font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                {...register("password")}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>
            <div>
              <label className="block mb-1 font-medium text-gray-700">
                Confirm Password
              </label>
              <input
                type="password"
                {...register("confirmPassword")}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
