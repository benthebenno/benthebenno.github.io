import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HEADSHOTS } from "../constants";
import { ArrowDown } from "lucide-react";

const Hero: React.FC = () => {
  const [imgIndex, setImgIndex] = useState(0);

  const handleNextImage = () => {
    setImgIndex((prev) => (prev + 1) % HEADSHOTS.length);
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-4"
    >
      {/* Decorative Background Elements */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 20, repeat: Infinity }}
        className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-brand-clay/30 rounded-full blur-3xl z-0"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -50, 0],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 25, repeat: Infinity }}
        className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-brand-sage/30 rounded-full blur-3xl z-0"
      />

      <div className="z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8 relative group cursor-pointer"
          onClick={handleNextImage}
        >
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-8 border-brand-clay shadow-2xl relative z-10 bg-brand-dark">
            <AnimatePresence mode="wait">
              <motion.img
                key={imgIndex}
                src={HEADSHOTS[imgIndex]}
                alt="Headshot"
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="w-full h-full object-cover"
              />
            </AnimatePresence>

            {/* Hover instruction overlay */}
            <div className="absolute inset-0 bg-brand-dark/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-brand-sand font-bold text-lg">
                Click to Swap
              </span>
            </div>
          </div>

          {/* Ring Animation */}
          <motion.div
            className="absolute inset-0 border-4 border-dashed border-brand-sage rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            style={{
              width: "110%",
              height: "110%",
              left: "-5%",
              top: "-5%",
              zIndex: 0,
            }}
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-5xl md:text-8xl font-serif font-bold text-brand-dark mb-4 tracking-tight"
        >
          Benjamin Rappoport
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-l md:text-2xl text-brand-dark font-sans font-light"
        >
          Turning{" "}
          <span className="text-brand-dark font-bold border-b-2 border-brand-sage">
            historical
          </span>{" "}
          insight into modern{" "}
          <span className="text-brand-dark font-bold border-b-2 border-brand-sage">
            software
          </span>
          .
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1, duration: 2, repeat: Infinity }}
        className="absolute bottom-10 z-10"
      >
        <ArrowDown className="w-8 h-8 text-brand-dark/50" />
      </motion.div>
    </section>
  );
};

export default Hero;
