import React, { useState } from "react";

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ email: "", password: "", name: "" });
  const [errors, setErrors] = useState({});

  const toggleForm = () => {
    setFormData({ email: "", password: "", name: "" });
    setErrors({});
    setIsLogin(!isLogin);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.password) newErrors.password = "Password is required";
    if (!isLogin && !formData.name) newErrors.name = "Name is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert(`${isLogin ? "Login" : "Registration"} Successful!`);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center text-[#e53935]">
          {isLogin ? "Login" : "Register"}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
                className={`w-full border px-3 py-2 rounded ${
                  errors.name ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
            </div>
          )}
          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              className={`w-full border px-3 py-2 rounded ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>
          <div>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className={`w-full border px-3 py-2 rounded ${
                errors.password ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
          </div>
          {isLogin && (
            <div className="text-right text-sm">
              <a href="#" className="text-blue-500 hover:underline">
                Forgot Password?
              </a>
            </div>
          )}
          <button
            type="submit"
            className="w-full bg-[#e53935] text-white py-2 rounded hover:bg-[#d32f2f] transition duration-200"
          >
            {isLogin ? "Login" : "Register"}
          </button>
        </form>
        <div className="text-center mt-4 text-sm">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <button onClick={toggleForm} className="text-blue-500 hover:underline ml-1">
            {isLogin ? "Register" : "Login"}
          </button>
        </div>
      </div>
    </div>
  );
}
