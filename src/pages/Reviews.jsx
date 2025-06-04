import React from "react";
import { motion } from "framer-motion";
import { PawPrint } from "lucide-react";

const ReviewsPage = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12 font-sans text-[#4B2E2E]">
      {/* Top Section: Why people can rely on us */}
      <motion.section
        className="flex flex-col md:flex-row items-center gap-10 mb-16 bg-gradient-to-br from-[#FFF8E7] via-[#FFF1DC] to-[#FFF1DC] rounded-3xl p-10 shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="md:w-1/2">
          <h1 className="text-4xl font-extrabold mb-4 flex items-center gap-3 text-[#D98C00]">
            <PawPrint size={40} className="text-[#EFAE62]" />
            Why People Can Rely on Us?
          </h1>
          <p className="text-lg font-medium leading-relaxed">
            We provide reliable, transparent, and professional services backed by years of experience and a commitment to your satisfaction. Our clients trust us because we always prioritize their needs, deliver consistent quality, and listen carefully to their feedback.
          </p>
        </div>
        <div className="md:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?auto=format&fit=crop&w=600&q=80"
            alt="Happy customer with dog"
            className="rounded-2xl shadow-lg object-cover w-full h-64 md:h-80"
          />
        </div>
      </motion.section>

      {/* Reviews Title */}
      <motion.h2
        className="text-3xl font-bold mb-10 text-[#D98C00] border-b-4 border-[#EFAE62] pb-2 w-max mx-auto"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        What They Really Say
      </motion.h2>

      {/* Reviews Comments */}
      <ReviewsList />

      {/* Bottom Section */}
      <motion.section
        className="mt-16 bg-gradient-to-r from-[#EFAE62]/30 to-[#D98C00]/30 rounded-3xl p-12 text-center shadow-inner"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <h3 className="text-2xl font-extrabold mb-4">
          You Really Can Rely on Us
        </h3>
        <p className="text-lg max-w-3xl mx-auto font-medium leading-relaxed">
          We are committed to building trust through transparency, professionalism, and unparalleled customer support. Your satisfaction is our top priority, and we continually strive to exceed your expectations.
        </p>
      </motion.section>
    </div>
  );
};

const ReviewsList = () => {
  // Можно заменить на реальные данные или получать из props/API
  const reviews = [
    {
      id: 1,
      name: "Emily R.",
      comment:
        "Absolutely wonderful experience! Their team was attentive and really understood my needs. Highly recommended.",
      avatar:
        "https://randomuser.me/api/portraits/women/68.jpg",
    },
    {
      id: 2,
      name: "Michael S.",
      comment:
        "Trustworthy and professional. The service exceeded my expectations and I will definitely return.",
      avatar:
        "https://randomuser.me/api/portraits/men/75.jpg",
    },
    {
      id: 3,
      name: "Sophia L.",
      comment:
        "I’ve never felt more confident working with a company. They are truly reliable and kind.",
      avatar:
        "https://randomuser.me/api/portraits/women/44.jpg",
    },
  ];

  return (
    <motion.div
      className="grid gap-8 md:grid-cols-3"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.2,
          },
        },
      }}
    >
      {reviews.map(({ id, name, comment, avatar }) => (
        <motion.div
          key={id}
          className="bg-[#FFF8E7] rounded-2xl p-6 shadow-md flex flex-col items-center text-center"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <img
            src={avatar}
            alt={`${name} avatar`}
            className="w-20 h-20 rounded-full mb-4 object-cover border-4 border-[#EFAE62]"
          />
          <h4 className="font-bold text-lg mb-2 text-[#4B2E2E]">{name}</h4>
          <p className="text-[#4B2E2E]/90 font-medium">{comment}</p>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ReviewsPage;
