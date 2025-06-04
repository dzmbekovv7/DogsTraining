import React from "react";
import { motion } from "framer-motion";
import { PawPrint, Dog, Cat, Heart, Star } from "lucide-react";
import { Link } from "react-router-dom";

const pawCount = 6;
const animalSteps = 5;

const Hero = () => {
  // Летающие лапки (как частицы)
  const flyingPaws = Array.from({ length: pawCount }).map((_, i) => {
    const size = 20 + Math.random() * 15; // px
    const left = Math.random() * 100; // %
    const duration = 8 + Math.random() * 5;
    const delay = Math.random() * 5;
    return (
      <motion.div
        key={i}
        style={{
          position: "absolute",
          top: "100%",
          left: `${left}%`,
          width: size,
          height: size,
          color: "#EFAE62",
          opacity: 0.7,
          pointerEvents: "none",
          userSelect: "none",
          filter: "drop-shadow(0 0 2px #d98c00)",
        }}
        animate={{ y: "-120vh", opacity: [0, 1, 0] }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
          duration: duration,
          delay: delay,
        }}
      >
        <PawPrint size={size} />
      </motion.div>
    );
  });

  // Анимированные животные, которые идут вперед (шаги)
  // Создаем несколько позиций с задержками и сдвигами
  const animalVariants = {
    hidden: { x: -150, opacity: 0 },
    visible: (i) => ({
      x: i * 60,
      opacity: 1,
      transition: {
        delay: i * 0.4,
        type: "spring",
        stiffness: 80,
        damping: 15,
      },
    }),
  };

  return (
    <section
      style={{
        position: "relative",
        overflow: "hidden",
        height: "650px",
        background:
          "radial-gradient(circle at top left, #ffffff, #f8f5f1 80%)",
        padding: "40px 20px",
        userSelect: "none",
      }}
      aria-label="Hero section"
    >
      {/* Летающие лапки сверху */}
      {flyingPaws}

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          height: "100%",
          gap: "40px",
          paddingTop: "40px",
        }}
      >
        {/* Заголовок и текст */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{
            color: "#4B2E2E",
            textAlign: "center",
            maxWidth: "700px",
            fontFamily:
              "'Georgia', serif, 'Times New Roman', Times, serif",
          }}
        >
          <h1
            style={{
              fontSize: "3.8rem",
              fontWeight: "900",
              marginBottom: "15px",
              position: "relative",
              display: "inline-block",
              paddingBottom: "8px",
              borderBottom: "5px solid #EFAE62",
              userSelect: "text",
            }}
          >
Discover Your Next Amazing Trained Dog
            {/* Под анимацией сияния */}
            <motion.span
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                height: "5px",
                width: "100%",
                background: "linear-gradient(90deg, #EFAE62, #FFBB66, #EFAE62)",
                filter: "blur(8px)",
                borderRadius: "4px",
                zIndex: -1,
              }}
              animate={{ opacity: [0.3, 0.9, 0.3] }}
              transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
            />
          </h1>
          <p
            style={{
              fontSize: "1.25rem",
              fontWeight: "500",
              lineHeight: "1.6",
              color: "#6B4B3B",
              marginBottom: "30px",
            }}
          >
  Explore the world of skilled, loyal, and well-trained dogs,
  ready to impress with their intelligence and charm—all waiting for you.
          </p>
          <Link to="/articles">
            <button
              style={{
                backgroundColor: "#EFAE62",
                border: "none",
                padding: "14px 36px",
                borderRadius: "30px",
                color: "#4B2E2E",
                fontWeight: "700",
                fontSize: "1.15rem",
                cursor: "pointer",
                boxShadow: "0 5px 15px rgba(239,174,98,0.5)",
                transition: "all 0.3s ease",
                userSelect: "none",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#FFBB66";
                e.currentTarget.style.boxShadow = "0 8px 20px rgba(255,187,102,0.7)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#EFAE62";
                e.currentTarget.style.boxShadow = "0 5px 15px rgba(239,174,98,0.5)";
              }}
            >
              Show articles 
            </button>
          </Link>
        </motion.div>

   {/* Контейнер с лапками и животными */}
<div
  style={{
    position: "relative",
    width: "320px",
    height: "140px",        // чуть больше высота, чтобы животные были ниже
    display: "flex",
    alignItems: "flex-end", // чтобы животные опустились вниз
    justifyContent: "flex-start",
    gap: "15px",
    marginBottom: "20px",
  }}
>
  {/* Лапки идут слева, по низу */}
  <div
    style={{
      display: "flex",
      alignItems: "center",
      gap: "12px",
      flexShrink: 0,
      height: "50px",
    }}
  >
    {[...Array(animalSteps)].map((_, i) => (
      <motion.div
        key={"paw-step-" + i}
        custom={i}
        variants={animalVariants}
        initial="hidden"
        animate="visible"
        style={{ color: "#EFAE62", userSelect: "none" }}
      >
        <PawPrint size={30} />
      </motion.div>
    ))}
  </div>

  {/* Блок с котом и собакой, чуть правее и ниже лапок */}
  <div
    style={{
      display: "flex",
      alignItems: "flex-end",
      gap: "10px",
      marginLeft: "40px", // смещаем вправо
      position: "relative",
      top: "12px",        // опускаем вниз относительно лапок
    }}
  >
    <motion.div
      initial={{ x: -200, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 70,
        damping: 12,
        delay: 2,
      }}
      style={{ color: "#4B2E2E" }}
    >
      <Cat size={50} />
    </motion.div>
    <motion.div
      initial={{ x: -260, opacity: 0 }}
      animate={{ x: 20, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 80,
        damping: 14,
        delay: 2.3,
      }}
      style={{ color: "#4B2E2E" }}
    >
      <Dog size={58} />
    </motion.div>
  </div>
</div>


        {/* Дополнительные иконки (звезды, сердечки) для живости */}
        <div
          style={{
            position: "relative",
            width: "100%",
            maxWidth: "900px",
            height: "60px",
            marginTop: "20px",
            userSelect: "none",
          }}
        >
          <motion.div
            style={{ position: "absolute", left: "10%", top: "20%", color: "#EFAE62" }}
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <Star size={24} />
          </motion.div>
          <motion.div
            style={{ position: "absolute", left: "50%", top: "10%", color: "#EFAE62" }}
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <Heart size={28} />
          </motion.div>
          <motion.div
            style={{ position: "absolute", left: "80%", top: "30%", color: "#EFAE62" }}
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4.3, repeat: Infinity, ease: "easeInOut" }}
          >
            <Star size={20} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
