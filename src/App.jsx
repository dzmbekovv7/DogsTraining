import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { PawPrint, Dog, Cat, Heart } from 'lucide-react'; // иконки лапок и животных

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Introduction from './pages/Introduction';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import AshleyArticlesPage from './pages/Articles';
import AshleyArticleDetailPage from './pages/ArticlesDetailPage';
import AnimatedPage from './components/FadeTransition';
import CategoryArticlesPage from './pages/CategoryArticlesPage'
import ReviewsPage from './pages/Reviews';
const loadingMessages = [
  "🐾 Приготовься к погружению в сказочный мир!",
  "🐕 Книги и лапки уже в пути...",
  "😺 Листаем страницы с мягкой лапкой.",
  "📚 Истории собираются в твою коллекцию!",
  "🐾 Читаем вместе, как настоящие друзья!"
];

function App() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  const [loadingText, setLoadingText] = useState('');

  useEffect(() => {
    const message = loadingMessages[Math.floor(Math.random() * loadingMessages.length)];
    setLoadingText(message);

    const timer = setTimeout(() => setIsLoading(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-white relative overflow-hidden px-6">
        {/* Фон с необычной текстурой — мягкий кремовый узор */}
        <motion.div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(circle at 20% 20%, #FFF1DC 15%, transparent 16%),' +
              'radial-gradient(circle at 80% 80%, #FFF1DC 15%, transparent 16%)',
            backgroundSize: '100px 100px',
            backgroundRepeat: 'repeat',
            opacity: 0.2,
            zIndex: 0,
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 120, repeat: Infinity, ease: 'linear' }}
        />

        {/* Анимированные лапки и животные вокруг */}
        <motion.div
          className="absolute top-10 left-10 text-[#EFAE62] opacity-70"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
        >
          <PawPrint size={48} />
        </motion.div>
        <motion.div
          className="absolute bottom-10 right-10 text-[#EFAE62] opacity-70"
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
        >
          <Cat size={44} />
        </motion.div>
        <motion.div
          className="absolute top-20 right-20 text-[#EFAE62] opacity-70"
          animate={{ x: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut' }}
        >
          <Dog size={48} />
        </motion.div>
        <motion.div
          className="absolute bottom-20 left-20 text-[#EFAE62] opacity-70"
          animate={{ x: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut' }}
        >
          <PawPrint size={36} />
        </motion.div>

        {/* Главный контент загрузки */}
        <motion.img
          src="https://cdn-icons-png.flaticon.com/512/616/616408.png" // заменил иконку на книгу с лапками
          alt="Loading book"
          className="w-28 h-28 mb-8 z-10"
          animate={{ scale: [1, 1.15, 1], rotate: [0, 5, -5, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        />

        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl text-[#4B2E2E] font-serif font-semibold max-w-lg z-10"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {loadingText}
        </motion.h2>

        <motion.div
          className="flex space-x-6 mt-8 z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <PawPrint size={24} color="#EFAE62" className="animate-pulse" />
          <Heart size={24} color="#EFAE62" className="animate-pulse" />
          <PawPrint size={24} color="#EFAE62" className="animate-pulse" />
        </motion.div>
      </div>
    );
  }

  return (
    <>
      <Header />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<AnimatedPage><Home /></AnimatedPage>} />
          <Route path="/about" element={<AnimatedPage><About /></AnimatedPage>} />
          <Route path="/introduction" element={<AnimatedPage><Introduction /></AnimatedPage>} />
          <Route path="/contact" element={<AnimatedPage><Contact /></AnimatedPage>} />
          <Route path='/reviews' element={<AnimatedPage><ReviewsPage /></AnimatedPage>} />
          <Route path="/articles" element={<AnimatedPage><AshleyArticlesPage /></AnimatedPage>} />
          <Route path="/articles/:slug" element={<AnimatedPage><AshleyArticleDetailPage /></AnimatedPage>} />
          <Route path="/type/:typename" element={<AnimatedPage><CategoryArticlesPage /></AnimatedPage>} />
          <Route path='/privacy' element={<AnimatedPage><Privacy /></AnimatedPage>} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  );
}

export default App;
