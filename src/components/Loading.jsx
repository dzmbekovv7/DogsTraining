import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const loadingTexts = [
  'Fetching wild adventures...',
  'Loading playful pups...',
  'Gathering animal tales...',
  'Bringing furry friends...',
  'Just a moment more...',
]

const dogSvg = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 64 64"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-24 h-24 text-brown-600"
  >
    <path d="M12 44c0-12 20-16 24-16s24 4 24 16v4H12v-4z" />
    <circle cx="24" cy="28" r="4" fill="currentColor" />
    <circle cx="40" cy="28" r="4" fill="currentColor" />
    <path d="M32 44v8" />
    <path d="M20 44v8" />
    <path d="M44 44v8" />
    <path d="M28 36c4-2 8-2 10 0" />
    <path d="M20 28c-2-4-4-8-6-8s-4 2-4 6 2 6 4 6 2-2 6-4z" />
  </svg>
)


const Loading = () => {
  const [textIndex, setTextIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % loadingTexts.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex mt-[-5px] flex-col h-[300px] items-center justify-center text-center px-4">
<motion.div
  className="mb-6"
  initial={{ rotate: -10, scale: 0.8 }}
  animate={{
    rotate: [-10, 10, -10],
    scale: [0.8, 1, 0.8],
  }}
  transition={{
    duration: 2,
    repeat: Infinity,
    ease: 'easeInOut',
  }}
>
  {dogSvg}
</motion.div>

      <AnimatePresence mode="wait">
        <motion.p
          key={textIndex}
          className="text-lg sm:text-xl font-medium text-brown-800"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.6 }}
        >
          {loadingTexts[textIndex]}
        </motion.p>
      </AnimatePresence>
    </div>
  )
}

export default Loading
