import React from 'react';
import { motion } from 'framer-motion';
import { SOCIAL_LINKS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-brand-dark text-brand-sand pt-20 pb-10 px-6 rounded-t-[3rem] mt-12 relative overflow-hidden">
        {/* Background Accents in Footer */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-brand-clay to-transparent opacity-30"></div>
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-brand-clay/10 rounded-full blur-3xl"></div>

        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="mb-12"
            >
                <h2 className="text-5xl md:text-7xl font-serif font-bold mb-6 text-brand-sage">Let's Talk.</h2>
                <p className="text-xl text-brand-sand/70 max-w-2xl mx-auto">
                    Have a project in mind or just want to chat about the latest in tech? 
                    My inbox is always open.
                </p>
            </motion.div>

            <motion.div 
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex gap-6 mb-16"
            >
                {SOCIAL_LINKS.map((link, index) => {
                    const Icon = link.icon;
                    return (
                        <a 
                            key={index} 
                            href={link.href}
                            className="w-14 h-14 rounded-full bg-brand-clay/20 flex items-center justify-center hover:bg-brand-sage hover:text-brand-dark transition-all duration-300 transform hover:scale-110 hover:-translate-y-2 border border-brand-sand/10"
                            aria-label={link.label}
                        >
                            <Icon className="w-6 h-6" />
                        </a>
                    )
                })}
            </motion.div>

            <div className="w-full border-t border-brand-sand/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-brand-sand/40">
                <p>&copy; {new Date().getFullYear()} Alex Dev. All rights reserved.</p>
                <p>Designed with <span className="text-red-400">❤</span> and React.</p>
            </div>
        </div>
    </footer>
  );
};

export default Footer;