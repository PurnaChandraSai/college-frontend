import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
const VITE_API_URL = import.meta.env.VITE_API_URL;

export default function Admission() {
  // ✅ Setup react-hook-form
  const {
    register,        // to register inputs
    handleSubmit,    // handles form submission
    formState: { errors }, // handles validation errors
    reset,           // clears form after submit
  } = useForm();

 
  const onSubmit = async (data) => {
    try {
      // send data to backend API
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
      reset(); // clears the form
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to submit admission form.");
    }
  };

  return (
    <div className="h-screen w-screen flex justify-center items-center bg-gray-900 relative">
      {/* Background Image */}
      <img
        src="https://www.raghuenggcollege.com/wp-content/uploads/2024/07/college-overview.png"
        alt="background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Form Card */}
      <Card className="relative z-10 w-[360px] p-6 bg-white/10 backdrop-blur-md rounded-xl shadow-lg">
        <CardHeader>
          <CardTitle className="text-white text-center text-2xl">
            Admission Form
          </CardTitle>
        </CardHeader>

        {/* Form Content */}
        <CardContent className="flex flex-col gap-4">
          {/* Username Field */}
          <div>
            <Label className="text-white">Username</Label>
            <Input
              placeholder="Enter your name"
              {...register("username", { required: true })}
              className={errors.username ? "border-red-500" : ""}
            />
            {errors.username && (
              <p className="text-red-400 text-sm mt-1">
                Username is required
              </p>
            )}
          </div>

          {/* Email Field */}
          <div>
            <Label className="text-white">Email</Label>
            <Input
              type="email"
              placeholder="Enter your email"
              {...register("email", {
                required: true,
                pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i,
              })}
              className={errors.email ? "border-red-500" : ""}
            />
            {errors.email && (
              <p className="text-red-400 text-sm mt-1">
                Valid email is required
              </p>
            )}
          </div>

          {/* Phone Number Field */}
          <div>
            <Label className="text-white">Phone Number</Label>
            <Input
              type="number"
              placeholder="Enter your number"
              {...register("phoneNo", {
                required: true,
                minLength: 10, // at least 10 digits
                maxLength: 10, // exactly 10 digits
              })}
              className={errors.phoneNo ? "border-red-500" : ""}
            />
            {errors.phoneNo && (
              <p className="text-red-400 text-sm mt-1">
                Phone number must be 10 digits
              </p>
            )}
          </div>

          {/* Submit Button */}
          <Button
            onClick={handleSubmit(onSubmit)}
            className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white hover:scale-105 transition-transform"
          >
            Submit
          </Button>

          {/* Footer Note */}
          <p className="text-white text-center text-sm mt-2 opacity-80">
            Our management will contact you shortly.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
