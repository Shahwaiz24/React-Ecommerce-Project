import React, { useState } from "react";
import InputFieldsComponent from "../Input Fields/input-fields-component";

export default function LoginFoamComponent() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission
        console.log("Email:", email);
        console.log("Password:", password);
        // Add your custom login logic here
    };

    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            {/* Form Wrapper */}
            <form
                className="w-full max-w-md bg-white border border-gray-300 px-8 py-10 shadow-lg rounded-lg"
                onSubmit={handleSubmit}
            >
                {/* Heading */}
                <h1 className="text-2xl font-poppins font-semibold text-center text-black mb-6">
                    3legant.
                </h1>

                {/* Email Field */}
                <InputFieldsComponent
                    placeholder="Email"
                    required={true}
                    value={email}
                    onChanged={(e) => setEmail(e.target.value)}
                    className="w-full mb-4"
                />

                {/* Password Field */}
                <InputFieldsComponent
                    placeholder="Password"
                    value={password}
                    required={true}

                    onChanged={(e) => setPassword(e.target.value)}
                    className="w-full mb-6"
                />

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition-all duration-200"
                >
                    Login
                </button>
            </form>
        </div>
    );
}