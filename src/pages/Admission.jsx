import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
const VITE_API_URL = import.meta.env.VITE_API_URL;

export default function Admission() {
  console.log("🔗 API URL:", VITE_API_URL);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await fetch(`${VITE_API_URL}/student`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          Username: data.username,
          PhoneNo: data.phoneNo,
          email: data.email,
        }),
      });

      const result = await response.json();
      console.log("Server response:", result);

      alert("Admission submitted successfully!");
      window.location.href = "/";
      reset();
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to submit admission form.");
    }
  };

  return (
    <div className="h-screen w-screen flex justify-center items-center bg-gray-50 relative">
      {/* Soft Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200"></div>

      {/* Form Card */}
      <Card className="relative z-10 w-[400px] p-8 bg-white rounded-2xl shadow-2xl border border-gray-200">
        <CardHeader className="mb-4">
          <CardTitle className="text-gray-900 text-center text-3xl font-semibold font-['Inter']">
            Admission Form
          </CardTitle>
        </CardHeader>

        <CardContent className="flex flex-col gap-6">
          {/* Username Field */}
          <div>
            <Label className="text-gray-700 font-medium">Username</Label>
            <Input
              placeholder="Enter your name"
              {...register("username", { required: true })}
              className={`mt-1 ${errors.username ? "border-red-500" : "border-gray-300"} rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500`}
            />
            {errors.username && (
              <p className="text-red-500 text-sm mt-1">Username is required</p>
            )}
          </div>

          {/* Email Field */}
          <div>
            <Label className="text-gray-700 font-medium">Email</Label>
            <Input
              type="email"
              placeholder="Enter your email"
              {...register("email", {
                required: true,
                pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i,
              })}
              className={`mt-1 ${errors.email ? "border-red-500" : "border-gray-300"} rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">Valid email is required</p>
            )}
          </div>

          {/* Phone Number Field */}
          <div>
            <Label className="text-gray-700 font-medium">Phone Number</Label>
            <Input
              type="number"
              placeholder="Enter your number"
              {...register("phoneNo", {
                required: true,
                minLength: 10,
                maxLength: 10,
              })}
              className={`mt-1 ${errors.phoneNo ? "border-red-500" : "border-gray-300"} rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500`}
            />
            {errors.phoneNo && (
              <p className="text-red-500 text-sm mt-1">
                Phone number must be 10 digits
              </p>
            )}
          </div>

          {/* Submit Button */}
          <Button
            onClick={handleSubmit(onSubmit)}
            className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-3 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 font-semibold"
          >
            Submit
          </Button>

          {/* Footer Note */}
          <p className="text-gray-500 text-center text-sm mt-2">
            Our management will contact you shortly.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
