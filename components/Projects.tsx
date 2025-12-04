import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';
import { ExternalLink } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-32 px-4 md:px-12 bg-brand-sand">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-brand-dark mb-4">Selected Works</h2>
          <p className="text-brand-dark/60">A curation of my recent digital endeavors</p>
        </motion.div>

        <div className="space-y-32">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center`}
            >
              {/* Image Side */}
              <div className="w-full md:w-3/5 group cursor-pointer relative">
                <div className="absolute inset-0 bg-brand-clay rounded-2xl transform translate-x-3 translate-y-3 transition-transform group-hover:translate-x-5 group-hover:translate-y-5"></div>
                <div className="relative rounded-2xl overflow-hidden border-2 border-brand-dark aspect-video">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-brand-dark/20 group-hover:bg-transparent transition-colors"></div>
                </div>
              </div>

              {/* Text Side */}
              <div className="w-full md:w-2/5 space-y-6">
                <h3 className="text-3xl font-serif font-bold text-brand-dark flex items-center gap-3">
                  {project.title}
                </h3>
                <p className="text-lg text-brand-dark/80 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-brand-sage/50 text-brand-dark text-sm font-semibold rounded-full border border-brand-dark/10">
                      {tag}
                    </span>
                  ))}
                </div>
                <button className="flex items-center gap-2 text-brand-dark font-bold border-b-2 border-brand-dark hover:text-brand-clay hover:border-brand-clay transition-all pb-1 mt-4">
                  View Case Study <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;