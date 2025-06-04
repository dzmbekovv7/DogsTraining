import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
const faqs = [
  {
    question: "When should I start training my puppy?",
    answer:
      "You can start training as early as 8 weeks old. Puppies learn best when training is consistent and positive.",
  },
  {
    question: "What is positive reinforcement?",
    answer:
      "Positive reinforcement involves rewarding your dog for desired behaviors to encourage them to repeat it.",
  },
  {
    question: "How often should I train my dog?",
    answer:
      "Short, daily sessions of 5–10 minutes are more effective than infrequent long ones.",
  },
  {
    question: "Can older dogs still learn new tricks?",
    answer:
      "Absolutely! Dogs of any age can learn. It might take longer, but patience is key.",
  },
  {
    question: "How do I stop my dog from barking excessively?",
    answer:
      "Identify the cause, then use training, exercise, and redirect attention to reduce barking.",
  },
  {
    question: "Should I use a clicker?",
    answer:
      "Clicker training can be a powerful way to mark desired behaviors with consistency and clarity.",
  },
  {
    question: "Is crate training necessary?",
    answer:
      "It’s not mandatory, but crate training helps with house training and gives your dog a safe space.",
  },
  {
    question: "How do I socialize my puppy?",
    answer:
      "Expose your puppy to different people, animals, and environments gradually and positively.",
  },
  {
    question: "What should I do if my dog is aggressive?",
    answer:
      "Consult a professional dog trainer or behaviorist. Aggression is serious and needs careful handling.",
  },
  {
    question: "Can I train my dog without treats?",
    answer:
      "Yes, but treats are often effective. You can also use praise, toys, or play as rewards.",
  },
  {
    question: "How do I teach my dog to come when called?",
    answer:
      "Practice in distraction-free areas with treats and praise. Gradually increase difficulty and distance.",
  },
];
const FAQItem = ({ question, answer, isOpen, onClick }) => {
    return (
      <div
        className="bg-white rounded-xl shadow-md mb-4 overflow-hidden"
        onClick={onClick}
      >
        <button className="w-full px-6 py-5 flex justify-between items-center text-left">
          <span className="text-lg font-medium text-gray-800">{question}</span>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronDown size={24} />
          </motion.div>
        </button>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="px-6 pb-5 text-gray-600"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <p>{answer}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };
  
  const DogTrainingFAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);
    const [inView, setInView] = useState(false);
    const sectionRef = useRef(null);
  
    const toggleIndex = (index) => {
      setOpenIndex(openIndex === index ? null : index);
    };
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setInView(entry.isIntersecting);
        },
        {
          threshold: 0.2, // триггер при 20% видимости блока
        }
      );
  
      if (sectionRef.current) {
        observer.observe(sectionRef.current);
      }
  
      return () => {
        if (sectionRef.current) {
          observer.unobserve(sectionRef.current);
        }
      };
    }, []);
  
    return (
      <section
        ref={sectionRef}
        className="min-h-screen py-24 px-6 flex justify-center bg-white"
      >
        <AnimatePresence mode="wait">
          {inView && (
            <motion.div
              key="faq"
              className="bg-gradient-to-tr from-pink-50 to-indigo-50 rounded-3xl shadow-xl max-w-4xl w-full p-10"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-900">
                Frequently Asked Questions
              </h2>
  
              <div>
                {faqs.map((faq, index) => (
                  <FAQItem
                    key={index}
                    question={faq.question}
                    answer={faq.answer}
                    isOpen={openIndex === index}
                    onClick={() => toggleIndex(index)}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    );
  };
  
  export default DogTrainingFAQ;