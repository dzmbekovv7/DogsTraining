import React, { useState } from "react";
import { motion } from "framer-motion";
import { toast, ToastContainer } from "react-toastify";
import { PawPrint } from "lucide-react";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    toast.success("Thank you! Your message has been sent 🐶");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <>
      <motion.form
        onSubmit={handleSubmit}
        className="space-y-6 bg-gradient-to-br from-white via-[#FFF8E7] to-[#FFF1DC] 
                   rounded-3xl p-8 shadow-lg max-w-full"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Name input */}
        <div className="relative">
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            placeholder=" "
            required
            className="peer w-full rounded-xl border-2 border-[#EFAE62] bg-white bg-opacity-80 
                       py-4 px-5 text-[#4B2E2E] font-semibold 
                       focus:outline-none focus:ring-4 focus:ring-[#EFAE62]/50 
                       backdrop-blur-sm placeholder-transparent"
          />
          <label
            htmlFor="name"
            className="absolute left-5 top-3 text-[#4B2E2E]/70 text-sm font-semibold 
                       transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-base 
                       peer-placeholder-shown:text-[#4B2E2E]/40 peer-focus:top-3 peer-focus:text-sm peer-focus:text-[#4B2E2E]"
          >
            Your Name
          </label>
          <PawPrint
            size={20}
            className="absolute right-5 top-4 text-[#EFAE62] opacity-80"
          />
        </div>

        {/* Email input */}
        <div className="relative">
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            placeholder=" "
            required
            className="peer w-full rounded-xl border-2 border-[#EFAE62] bg-white bg-opacity-80
                       py-4 px-5 text-[#4B2E2E] font-semibold 
                       focus:outline-none focus:ring-4 focus:ring-[#EFAE62]/50 
                       backdrop-blur-sm placeholder-transparent"
          />
          <label
            htmlFor="email"
            className="absolute left-5 top-3 text-[#4B2E2E]/70 text-sm font-semibold 
                       transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-base 
                       peer-placeholder-shown:text-[#4B2E2E]/40 peer-focus:top-3 peer-focus:text-sm peer-focus:text-[#4B2E2E]"
          >
            Your Email
          </label>
          <PawPrint
            size={20}
            className="absolute right-5 top-4 text-[#EFAE62] opacity-80"
          />
        </div>

        {/* Message textarea */}
        <div className="relative">
          <textarea
            name="message"
            id="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            placeholder=" "
            required
            className="peer w-full rounded-xl border-2 border-[#EFAE62] bg-white bg-opacity-80
                       py-4 px-5 text-[#4B2E2E] font-semibold 
                       focus:outline-none focus:ring-4 focus:ring-[#EFAE62]/50 
                       resize-none backdrop-blur-sm placeholder-transparent"
          />
          <label
            htmlFor="message"
            className="absolute left-5 top-3 text-[#4B2E2E]/70 text-sm font-semibold 
                       transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-base 
                       peer-placeholder-shown:text-[#4B2E2E]/40 peer-focus:top-3 peer-focus:text-sm peer-focus:text-[#4B2E2E]"
          >
            Your Message
          </label>
          <PawPrint
            size={20}
            className="absolute right-5 top-4 text-[#EFAE62] opacity-80"
          />
        </div>

        {/* Submit button */}
        <motion.button
          type="submit"
          whileHover={{ scale: 1.07, boxShadow: "0 0 20px #EFAE62" }}
          whileTap={{ scale: 0.95 }}
          className="w-full rounded-2xl bg-gradient-to-r from-[#EFAE62] to-[#D98C00] 
                     py-4 text-white font-bold text-lg shadow-lg transition-transform duration-300"
        >
          Send Message 🐾
        </motion.button>
      </motion.form>

      <ToastContainer position="top-right" autoClose={3500} />
    </>
  );
};

export default ContactForm;
