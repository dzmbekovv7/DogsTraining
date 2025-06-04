import React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

const PawIcon = () => (
  <motion.svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#A67C00"
    className="inline-block ml-2"
    initial={{ y: 0 }}
    animate={{ y: [0, -5, 0] }}
    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
  >
    <path d="M12 2c-1.104 0-2 .896-2 2 0 .343.11.657.292.91-.2.184-.336.46-.336.79 0 .552.447 1 1 1s1-.448 1-1c0-.33-.136-.606-.336-.79.182-.253.292-.567.292-.91 0-1.104-.896-2-2-2zm-6.293 3.293c-.78 0-1.41.63-1.41 1.41 0 .535.312.996.763 1.224a1.005 1.005 0 01-.153.83c-.517.618-.183 1.527.59 1.527.507 0 .98-.237 1.283-.622a1.001 1.001 0 01.725-.378c.276 0 .544.122.72.34.294.344.568.68.819 1.004.496.627 1.553.513 1.804-.247.17-.493-.064-.993-.547-1.127a1.001 1.001 0 01-.65-1.3c.144-.457-.09-.94-.53-1.135a1.42 1.42 0 01-.757-1.32c0-.78-.63-1.41-1.41-1.41zm11.293 1.41c0-.78-.63-1.41-1.41-1.41-.48 0-.917.275-1.165.687a1.002 1.002 0 01-1.47.31c-.493-.322-1.152-.217-1.44.26-.28.47-.106 1.073.39 1.309a1.001 1.001 0 01.568 1.312c-.158.424.028.89.432 1.12a1.43 1.43 0 011.46.176c.484.396 1.153.22 1.4-.395a1.001 1.001 0 01.78-.638c.555 0 1.008-.45 1.008-1.005zm-8 7c-1.653 0-3 2.133-3 4 0 1.104.896 2 2 2h2c1.104 0 2-.896 2-2 0-1.867-1.347-4-3-4z" />
  </motion.svg>
);

const AboutPage = () => {
  const sections = [
    {
      title: "Who We Are",
      text: `We are a passionate team dedicated to providing exceptional services
        with integrity and professionalism. Our mission is to empower you
        with the best solutions while building lasting relationships based on
        trust and excellence. Over the years, our commitment to quality has
        helped us grow and become a reliable partner for our clients worldwide.`,
      img: "https://www.bellaandduke.com/wp-content/uploads/2024/11/Best-dog-breeds-for-first-time-owners-featured-image.webp",
    },
    {
      title: "Our Core Values",
      text: `Integrity, innovation, and customer-centricity form the foundation of
        everything we do. We believe in transparency, accountability, and
        continuous learning to ensure that we consistently deliver value
        and exceed expectations. We respect diversity and encourage creativity
        within our team to solve complex problems.`,
      img: "https://cmg-cmg-tv-10090-prod.cdn.arcpublishing.com/resizer/v2/6LYK2IF5WRINNIL5VTK4W3WJQ4.png?smart=true&auth=301c7f08a09f403fb0624eeb5b4d98f5b63e4cb1314af1dd93cae6e624067566&width=1010&height=568",
      reverse: true,
    },
    {
      title: "Our Story",
      text: `Founded in 2015 as a small startup, we have evolved into a company
        trusted by thousands. Our journey has been driven by passion and
        innovation, always putting the customer first. With each challenge,
        we learned, adapted, and grew stronger. Today, our story continues
        with new opportunities and goals to reach.`,
      img: "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Our Approach",
      text: `We believe in a personalized and data-driven approach. By leveraging
        technology and listening closely to client needs, we create tailored
        solutions that deliver measurable results. Our agile methods ensure
        flexibility and rapid adaptation to a constantly changing environment,
        keeping us ahead in the market.`,
      img: "https://www.kget.com/wp-content/uploads/sites/2/2023/02/Nature.jpg",
      reverse: true,
    },
    {
      title: "Why Choose Us?",
      text: `With years of experience and a client-first mindset, we stand out by
        delivering consistent excellence. We prioritize long-term partnerships
        over short-term gains, ensuring mutual success. Our transparent
        communication and proactive support create trust and satisfaction
        in every engagement.`,
      img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Meet Our Team",
      text: `Our diverse team brings together experts from various fields:
        technology, customer success, management, and analytics. Each member
        is committed to our shared mission and values, contributing unique
        skills and passion. Together, we work as one to deliver the best
        results for our clients.`,
      img: "https://www.doodycalls.com/cms/thumbnails/24/1060x560/images/articles/DC_Aug23_SingledOut_BlogHeader.1).2308070829127.jpg",
      reverse: true,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-16 font-sans text-[#4B2E2E] bg-[#F9F7F1]">
      {sections.map(({ title, text, img, reverse }, i) => (
        <SectionWithImage
          key={i}
          title={title}
          reverse={reverse}
          imageSrc={img}
          text={text}
        />
      ))}
      <TeamSection />
    </div>
  );
};

const SectionWithImage = ({ title, text, imageSrc, reverse }) => {
  return (
    <motion.section
      initial={{ opacity: 0, x: reverse ? 50 : -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className={`mb-20 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
    >
      <div className="md:w-1/2 text-[#5A4B3B] text-lg font-medium leading-relaxed">
        <h2 className="text-4xl font-semibold mb-6 text-[#7C6B4D] flex items-center">
          {title} <PawIcon />
        </h2>
        <p>{text}</p>
      </div>
      <motion.img
        src={imageSrc}
        alt={title}
        className="md:w-1/2 rounded-xl shadow-lg object-cover max-h-96"
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      />
    </motion.section>
  );
};

const TeamSection = () => {
  const team = [
    {
      name: "Alice Johnson",
      role: "CEO & Founder",
      photo: "https://randomuser.me/api/portraits/women/65.jpg",
      bio: "Visionary leader with over 10 years of experience in finance and management.",
    },
    {
      name: "Brian Lee",
      role: "Chief Technology Officer",
      photo: "https://randomuser.me/api/portraits/men/43.jpg",
      bio: "Tech guru driving innovation and overseeing product development.",
    },
    {
      name: "Catherine Smith",
      role: "Head of Customer Success",
      photo: "https://randomuser.me/api/portraits/women/52.jpg",
      bio: "Ensuring client satisfaction and building strong relationships.",
    },
    {
      name: "David Miller",
      role: "Lead Analyst",
      photo: "https://randomuser.me/api/portraits/men/36.jpg",
      bio: "Data expert with a passion for insights that drive growth.",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto">
      <h2 className="text-5xl font-extrabold mb-12 text-center text-[#7C6B4D] flex justify-center items-center gap-2">
        Meet Our Team <PawIcon />
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {team.map(({ name, role, photo, bio }) => (
          <motion.div
            key={name}
            className="bg-[#EFE6DD] rounded-xl p-6 shadow-lg text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img
              src={photo}
              alt={name}
              className="mx-auto rounded-full w-28 h-28 object-cover mb-4 shadow-md"
            />
            <h3 className="text-xl font-semibold text-[#4B2E2E]">{name}</h3>
            <p className="text-sm text-[#5A4B3B] italic mb-2">{role}</p>
            <p className="text-[#6E5A3F] text-sm">{bio}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AboutPage;
