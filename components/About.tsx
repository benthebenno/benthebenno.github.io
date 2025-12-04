import React from "react";
import { motion } from "framer-motion";

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="py-24 px-6 md:px-12 bg-brand-clay/10 relative"
    >
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-dark mb-6">
            About Me
          </h2>
          <div className="h-1 w-24 bg-brand-sage mb-8"></div>
          <p className="text-lg text-brand-dark/90 leading-relaxed mb-6 font-light">
            As a recent graduate from Oberlin College with majors in Computer
            Science and History, with Minors in MENA Studies and Jewish Studies,
            my experience spans many disciplines and methods. I am a creative
            and collaborative worker who loves the whole process of design,
            whether it is creating a coding project or a ceramic mug.
          </p>
          <p className="text-lg text-brand-dark/90 leading-relaxed font-light">
            When I'm not debugging, you can find me exploring local coffee
            shops, hiking through nature (hence the color palette!), or
            experimenting with new animation libraries.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring" }}
          className="relative"
        >
          <div className="absolute inset-0 bg-brand-dark rounded-xl transform translate-x-4 translate-y-4"></div>
          <div className="bg-brand-sage p-8 rounded-xl relative border-2 border-brand-dark shadow-xl">
            <h3 className="text-2xl font-bold mb-4 font-serif">My Skills</h3>
            <ul className="grid grid-cols-2 gap-3">
              {[
                "Python",
                "React & React Native",
                "MATLAB",
                "Autodesk Inventor",
                "Figma",
                "Git",
              ].map((tech, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-brand-dark rounded-full"></span>
                  <span className="font-medium">{tech}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
