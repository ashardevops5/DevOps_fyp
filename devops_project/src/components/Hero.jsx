import React, { forwardRef } from "react";

const Hero = forwardRef((props, ref) => (
  <section
    ref={ref}
    id="hero"
    className={`
      min-h-screen flex flex-col justify-center items-center snap-start
      relative text-center p-10
      bg-gradient-to-r from-indigo-200 via-pink-200 to-yellow-200 
      dark:bg-[url('https://images.ctfassets.net/wfutmusr1t3h/6z2nwPNKt4d23LDLfBNWES/84d4fa15451ef6b7a4b2263dbf129081/Productivity-DarkMode-2.webp?w=1280&q=75')]
      bg-cover bg-center
    `}
  >
    <div className="absolute inset-0 bg-black/0 dark:bg-black/60"></div>

    <div className="relative z-10 flex flex-col justify-center items-center text-center
                    opacity-0 animate-fadeIn">
      <h1 className="text-5xl font-extrabold text-indigo-600 dark:text-teal-400 mb-12 text-center">
        Welcome to DevOps Learning Hub
      </h1>
      <p className="text-lg sm:text-2xl max-w-3xl mb-8 text-gray-800 dark:text-gray-200">
        Learn, deploy, and scale with modern DevOps tools and best practices. Master cloud, CI/CD pipelines, containerization, and more.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 mb-12">
        <button className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 dark:bg-teal-400 dark:hover:bg-teal-500 rounded-md text-white font-semibold transition">
          Get Started
        </button>
        <button className="px-6 py-3 bg-white dark:bg-gray-800 text-indigo-600 dark:text-gray-200 rounded-md font-semibold hover:bg-gray-100 dark:hover:bg-gray-700 transition">
          Learn More
        </button>
      </div>

      {/* Side by side box for learning + future */}
      <div className="flex flex-col md:flex-row gap-6 max-w-6xl w-full">
        {/* What you will learn */}
        <div className="flex-1 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-left">
          <p className="mb-2 font-semibold text-lg">What you will learn:</p>
          <ul className="list-disc list-inside space-y-1 text-gray-800 dark:text-gray-200">
            <li>CI/CD pipelines using Jenkins & GitHub Actions</li>
            <li>Infrastructure as Code with Terraform & Ansible</li>
            <li>Containerization and orchestration with Docker & Kubernetes</li>
            <li>Monitoring & logging with Prometheus and Grafana</li>
            <li>Cloud deployments on AWS & Azure</li>
          </ul>
        </div>

        {/* Future of DevOps */}
        <div className="flex-1 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-left">
          <p className="mb-2 font-semibold text-lg">The Future of DevOps:</p>
          <ul className="list-disc list-inside space-y-1 text-gray-800 dark:text-gray-200">
            <li>Rapidly growing demand for DevOps professionals worldwide</li>
            <li>Increased adoption of cloud-native & automated infrastructures</li>
            <li>High-paying career opportunities in both startups and enterprises</li>
            <li>Integration of AI/ML in DevOps for smarter automation</li>
            <li>Continuous evolution of tools & practices ensuring long-term relevance</li>
          </ul>
        </div>
      </div>
    </div>

    <style jsx>{`
      @keyframes fadeIn {
        0% { opacity: 0; transform: translateY(20px); }
        100% { opacity: 1; transform: translateY(0); }
      }
      .animate-fadeIn {
        animation: fadeIn 1s ease-out forwards;
      }
    `}</style>
  </section>
));

export default Hero;
