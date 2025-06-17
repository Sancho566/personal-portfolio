import React from 'react';
import { motion } from 'framer-motion';

const technicalSkills = [
  { name: "HTML/CSS", level: 0.95 },
  { name: "JavaScript", level: 0.9 },
  { name: "React", level: 0.85 }
];

const professionalSkills = [
  { name: "UI/UX Design", level: 0.85 },
  { name: "Communication", level: 0.9 },
  { name: "Teamwork", level: 0.95 },
  { name: "Problem Solving", level: 0.9 }
];

const tools = [
  { name: "HTML5", icon: "fab fa-html5", color: "text-orange-500" },
  { name: "CSS3", icon: "fab fa-css3-alt", color: "text-blue-500" },
  { name: "JavaScript", icon: "fab fa-js", color: "text-yellow-500" },
  { name: "Tailwind CSS", icon: "fas fa-wind", color: "text-blue-600" },
  { name: "Bootstrap", icon: "fab fa-bootstrap", color: "text-purple-600" },
  { name: "React", icon: "fab fa-react", color: "text-blue-400" },
  { name: "Git", icon: "fab fa-git-alt", color: "text-orange-600" },
  { name: "Figma", icon: "fab fa-figma", color: "text-purple-500" },
  { name: "Canva", icon: "fas fa-paint-brush", color: "text-blue-400" }
];

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.2, duration: 0.8, ease: "easeOut" }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const Skills = ({ darkMode }) => {
  const sectionClasses = `py-20 section transition-colors duration-300 ${
    darkMode ? 'bg-gray-900 text-gray-300' : 'bg-gray-300 text-zinc-900'
  }`;

  return (
    <motion.section
      id="skills"
      className={sectionClasses}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-6">
        <motion.div variants={itemVariants} className="text-center mb-16 mt-16">
          <h2 className="text-2xl font-bold mb-4 text-blue-500">
            My Skills
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-4 rounded"></div>
          <p className="max-w-2xl mx-auto">
            I've worked with a variety of technologies in the web development world. Here are my core competencies.
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {[
            { title: 'Technical Skills', data: technicalSkills },
            { title: 'Professional Skills', data: professionalSkills }
          ].map((group, idx) => (
            <motion.div key={idx} variants={itemVariants}>
              <h3 className="text-2xl font-semibold mb-6">
                {group.title}
              </h3>
              <div className="space-y-6">
                {group.data.map((skill, i) => (
                  <div key={i}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">
                        {skill.name}
                      </span>
                      <span className="font-medium">
                        {Math.round(skill.level * 100)}%
                      </span>
                    </div>
                    <div className="bg-gray-200 dark:bg-gray-700 rounded-full h-4 overflow-hidden">
                      <motion.div
                        className="bg-blue-500 h-4 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level * 100}%` }}
                        transition={{ duration: 1.2, ease: 'easeOut' }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div variants={itemVariants} className="mt-16">
          <h3 className="text-2xl font-semibold mb-8 text-center">
            Tools & Technologies
          </h3>
          <motion.div
            className="flex flex-wrap justify-center gap-8"
            variants={containerVariants}
          >
            {tools.map((tool, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="flex flex-col items-center"
              >
                <motion.div
                  className="w-16 h-16 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-lg"
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <i className={`${tool.icon} text-3xl ${tool.color}`}></i>
                </motion.div>
                <span className="mt-2">
                  {tool.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Skills;
