import React, { useEffect, useRef, useState } from "react";

const About = ({ darkMode }) => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const themeClasses = darkMode
    ? "bg-gray-800 text-gray-300"
    : "bg-gray-300 text-gray-900";

  const sectionClasses = `
    py-20 section transition-colors duration-300 
    ${themeClasses} 
    ${isVisible ? "visible" : ""}
  `;

  return (
    <section id="about" ref={sectionRef} className={sectionClasses}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 mt-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            About <span className="text-blue-500">Me</span>
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </div>

        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/3 mb-8 md:mb-0 flex justify-center">
            <img
              src="IMG_20230707_100924.jpg"
              alt="About Me"
              className="w-64 h-64 rounded-full object-cover border-4 border-white dark:border-gray-800 shadow-lg"
            />
          </div>

          <div className="md:w-2/3 md:pl-12">
            <h3 className="text-2xl font-semibold mb-4">Who am I?</h3>
            <p className="mb-6">
              Aspiring Software Developer with expertise in front-end
              development using JavaScript, React.js, and modern CSS frameworks
              like Tailwind CSS and Bootstrap. Skilled in building responsive,
              user-friendly web applications and integrating RESTful APIs. My
              goal is to build applications that are not only functional but
              also provide an exceptional user experience.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <h4 className="font-medium mb-2 flex items-center">
                  <i className="fas fa-user mr-2 text-blue-500"></i> Name
                </h4>
                <p>Tapfuma Arnold</p>
              </div>
              <div>
                <h4 className="font-medium mb-2 flex items-center">
                  <i className="fas fa-envelope mr-2 text-blue-500"></i> Email
                </h4>
                <p>tapfumamundondo@gmail.com</p>
              </div>
              <div>
                <h4 className="font-medium mb-2 flex items-center">
                  <i className="fas fa-phone mr-2 text-blue-500"></i> Phone
                </h4>
                <p>+27 677 805 891</p>
              </div>
              <div>
                <h4 className="font-medium mb-2 flex items-center">
                  <i className="fas fa-map-marker-alt mr-2 text-blue-500"></i>{" "}
                  Location
                </h4>
                <p>Capetown, South Africa</p>
              </div>
            </div>

            <div className="flex space-x-4">
              <a
                href="/Tapfuma Arnold Mundondo.pdf"
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-medium transition duration-300 flex items-center"
              >
                <i className="fas fa-download mr-2"></i> Download CV
              </a>
              <a
                href="/contact"
                className="border border-blue-500 text-blue-500 hover:bg-blue-50 dark:hover:bg-gray-700 px-6 py-2 rounded-lg font-medium transition duration-300"
              >
                Hire Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
