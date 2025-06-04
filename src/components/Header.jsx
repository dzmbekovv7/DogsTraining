import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, PawPrint } from 'lucide-react';
import { motion } from 'framer-motion';
import ScrollToTopButton from './ScrollToTop';

const navItems = ["Home", "Articles", "Reviews", "Privacy", "Contact", "About"];

const pawAnimations = [
  { top: '2', left: '6', rotate: 'rotate-6', delay: 0 },
  { top: '10', right: '4', rotate: '-rotate-6', delay: 0.2 },
  { bottom: '10', left: '8', rotate: 'rotate-12', delay: 0.4 },
  { bottom: '6', right: '6', rotate: '-rotate-12', delay: 0.6 },
  { top: '20', left: '12', rotate: 'rotate-3', delay: 0.8 },
  { bottom: '20', right: '12', rotate: '-rotate-3', delay: 1 },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
<header
  className="bg-[#FFF1DC] relative overflow-hidden"
  style={{
    backgroundImage:
      'url("https://www.transparenttextures.com/patterns/paw-print.png")',
  }}
>

      {/* Dark overlay for mobile menu */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col items-center justify-center relative z-40">

        {/* Заголовок */}
        <h1 className="text-4xl font-extrabold text-[#4B2E2E] tracking-wider z-10 mb-4 drop-shadow-sm">
          DogsTraining
        </h1>
        {/* type/Special%20training */}
        {/* Анимированные лапки */}
        {pawAnimations.map((paw, idx) => (
          <motion.div
            key={idx}
            className={`absolute text-[#EFAE62] ${paw.rotate}`}
            style={{
              top: paw.top ? `${paw.top}%` : undefined,
              bottom: paw.bottom ? `${paw.bottom}%` : undefined,
              left: paw.left ? `${paw.left}%` : undefined,
              right: paw.right ? `${paw.right}%` : undefined,
            }}
            animate={{ y: [0, -6, 0], scale: [1, 1.1, 1] }}
            transition={{
              duration: 2 + idx * 0.1,
              repeat: Infinity,
              delay: paw.delay,
              ease: 'easeInOut',
            }}
          >
            <PawPrint className="w-6 h-6 opacity-80" />
          </motion.div>
        ))}

        {/* Кнопка мобильного меню */}
        <button
          className="absolute top-6 right-6 md:hidden text-[#4B2E2E] z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>

        <nav className="hidden md:flex mt-4 space-x-6 text-lg">
  {navItems.map((item, index) => (
    <Link
      key={index}
      to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
      className="text-[#4B2E2E] hover:text-[#EFAE62] transition relative group"
    >
      {item}
      <span className="block h-[2px] w-0 group-hover:w-full bg-[#EFAE62] transition-all duration-300"></span>
    </Link>
  ))}
  
</nav>

      </div>

      {/* Мобильное меню */}
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: isOpen ? 0 : '100%' }}
        transition={{ type: 'spring', stiffness: 260, damping: 25 }}
        className="fixed top-0 right-0 h-full w-2/3 bg-[#FFF1DC] z-50 p-6 shadow-xl flex flex-col gap-6"
      >
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold text-[#4B2E2E]">Menu</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="text-[#4B2E2E] hover:text-[#EFAE62]"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {navItems.map((item, index) => (
  <Link
    key={index}
    to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
    className="text-lg text-[#4B2E2E] hover:text-[#EFAE62] transition"
    onClick={() => setIsOpen(false)}
  >
    {item}
  </Link>
))}

      </motion.div>
      <ScrollToTopButton />

    </header>
  );
};

export default Header;
