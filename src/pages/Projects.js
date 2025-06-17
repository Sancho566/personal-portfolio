import React, { useEffect, useRef } from 'react';

const Projects = ({ darkMode }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = sectionRef.current.querySelectorAll('.project-card');
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const sectionClasses = `py-20 transition-colors duration-300 ${
    darkMode ? 'bg-gray-900' : 'bg-gray-300'
  }`;
  const sectionTitleClass = 'text-white';
  const projectTitleClass = 'text-white';
  const descTextClass = darkMode ? 'text-gray-300' : 'text-zinc-900';

  const projects = [
    {
      title: 'AKAS Studio',
      description:
        'A sleek design and interior architecture showcase built with Tailwind CSS and vanilla JavaScript. Features a responsive portfolio gallery, smooth animations, and a contact form to book consultations.',
      tags: ['html5', 'TailwindCSS', 'JavaScript'],
      image: '/akasstudio.jpg',
      demoUrl: 'https://akasstudio.co.za',
      githubUrl: 'https://github.com/Sancho566/akas-studio'
    },
    {
      title: 'PrimeFix',
      description:
        'An appliance repair service platform built with Tailwind CSS and JavaScript. Includes service booking, real‑time status updates, and an integrated contact form for quick technician scheduling.',
      tags: ['html5', 'TailwindCSS', 'JavaScript'],
      image: '/primefixlogo.png',
      demoUrl: 'https://appliance-repairs.netlify.app',
      githubUrl: 'https://github.com/Sancho566/Appliance-repairs'
    },
    {
      title: 'Book Connect App',
      description:
        'An interactive Book Connect App that lets you search for and discover books via a public Books API. Built with semantic HTML5, vanilla JavaScript for fetching and rendering data, and styled with modern CSS3. Features include search-by-title or author, detailed book views, and responsive design for an optimal reading discovery experience.',
      tags: ['html5', 'CSS3', 'API', 'JavaScript'],
      image: 
        'apple-touch-icon.png',
      demoUrl: 'https://thebookconnect.netlify.app',
      githubUrl: 'https://github.com/Sancho566/TAPMUN568_FTO2403_A1_Tapfuma-Mundondo_DJS03'
    }
  ];

  const tagColors = {
    html5: 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200',
    TailwindCSS: 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200',
    JavaScript: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
    API: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
    CSS3: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
  };

  return (
    <section id="projects" ref={sectionRef} className={sectionClasses}>
      <div className="container mx-auto px-6 mt-16">
        <div className="text-center mb-16">
          <h2
            className={`text-2xl md:text-3xl font-bold mb-4 ${sectionTitleClass}`}
          >
            My <span className="text-blue-500">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto" />
          <p
            className={`mt-4 max-w-2xl mx-auto ${
              darkMode ? 'text-gray-300' : 'text-zinc-900'
            }`}
          >
            Here are some of my recent projects. Each one was carefully crafted
            to solve specific problems and deliver exceptional user experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="project-card opacity-0 transform translate-y-8 transition duration-700 rounded-xl overflow-hidden shadow-lg bg-white dark:bg-gray-800"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition duration-500 hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className={`text-xl font-bold mb-2 ${projectTitleClass}`}>
                  {project.title}
                </h3>
                <p className={`${descTextClass} mb-4`}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, ti) => (
                    <span
                      key={ti}
                      className={`${tagColors[tag] || ''} text-xs px-3 py-1 rounded-full`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-3">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-700 dark:hover:text-blue-400 transition"
                  >
                    <i className="fas fa-external-link-alt" /> Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-100 transition"
                  >
                    <i className="fab fa-github" /> Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
