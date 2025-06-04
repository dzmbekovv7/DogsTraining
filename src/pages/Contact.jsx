import React from "react";
import { motion } from "framer-motion";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <div className="font-sans bg-[#FFF1DC] min-h-screen px-6 py-16">
      {/* Заголовок */}
      <motion.div 
        className="max-w-4xl mx-auto text-center mb-16 relative"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl font-extrabold text-[#4B2E2E] mb-3">Get in Touch with Us!</h1>
        <p className="text-xl text-[#4B2E2E]/90 max-w-2xl mx-auto">
          We love hearing from you! Whether you have questions about training, want to share your dog’s story, or just say hi, this is the place.
        </p>

        {/* Лапки анимация */}
        <motion.div 
          className="flex justify-center gap-6 mt-6"
          animate={{ rotate: [0, 15, -15, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        >
          <span className="text-[#EFAE62] text-4xl">🐾</span>
          <span className="text-[#EFAE62] text-4xl">🐶</span>
          <span className="text-[#EFAE62] text-4xl">🐕</span>
          <span className="text-[#EFAE62] text-4xl">🐾</span>
        </motion.div>
      </motion.div>

      {/* Основной контент: слева текст с вопросом и справа картинка щенка */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center mb-20">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-[#4B2E2E] text-lg leading-relaxed"
        >
          <h2 className="text-3xl font-semibold mb-5">🐾 What do you want to share?</h2>
          <p className="mb-4">
            Whether it’s a training challenge you’re facing, a success story about your furry friend, or just some puppy love you want to spread, we’re all ears! Tell us anything – no topic is too big or small.
          </p>
          <p className="mb-4">
            Need advice on leash training? Want to recommend your favorite dog treats? Or maybe you have a funny dog moment to brighten our day? Send it over!
          </p>
          <p>
            We’re passionate about building a caring community where every dog owner feels supported and inspired.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <img
            src="https://getodie.com/wp-content/uploads/2021/12/Happy-chocolate-brown-puppy.jpg"
            alt="Cute Puppy"
            className="rounded-3xl shadow-lg max-w-full w-80 object-cover"
            loading="lazy"
          />
        </motion.div>
      </section>

      {/* Нижний раздел с формой и справочником контактов */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
        {/* Форма - занимает 2 колонки */}
        <motion.div
          className="md:col-span-2"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <ContactForm />
        </motion.div>

        {/* Справочник контактов справа */}
        <motion.div
          className="bg-white rounded-3xl shadow-lg p-8 flex flex-col gap-8 text-[#4B2E2E]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3 className="text-2xl font-bold mb-6 text-center">Contact Info</h3>

          <div className="flex items-center gap-4">
            <span className="text-[#EFAE62] text-3xl">📧</span>
            <div>
              <div className="font-semibold">Email</div>
              <a href="mailto:support@dogtraining.com" className="hover:underline text-[#4B2E2E]/90">
                support@dogtraining.com
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-[#EFAE62] text-3xl">📞</span>
            <div>
              <div className="font-semibold">Phone</div>
              <a href="tel:+15551234567" className="hover:underline text-[#4B2E2E]/90">
                +1 (555) 123-4567
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-[#EFAE62] text-3xl">📍</span>
            <div>
              <div className="font-semibold">Location</div>
              <address className="not-italic text-[#4B2E2E]/90">
                456 Puppy Lane, Dogtown, USA
              </address>
            </div>
          </div>

          <div className="flex items-center gap-4 mt-6 justify-center text-[#EFAE62] text-4xl animate-bounce">
            <span>🐾</span>
            <span>🐕‍🦺</span>
            <span>🐩</span>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Contact;
