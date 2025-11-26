import React, { forwardRef } from "react";

const Pathway = forwardRef((props, ref) => (
  <section
    ref={ref}
    id="pathway"
    className="min-h-screen py-20 snap-start bg-gray-50 dark:bg-gray-900 px-6 flex flex-col items-center"
  >
    <h2 className="text-5xl font-extrabold text-indigo-600 dark:text-teal-400 mb-12 text-center">
      DevOps Pathway & Burger Model
    </h2>

    <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12">
      
      {/* BOX 1 — DevOps Burger */}
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-3xl p-8">
        <img
          src="https://i.ytimg.com/vi/AGqK1wXoQV4/sddefault.jpg"
          alt="DevOps Burger"
          className="rounded-2xl w-full mb-6"
        />

        <h3 className="text-3xl font-bold text-indigo-600 dark:text-teal-400 mb-4">
          DevOps Burger Model
        </h3>

        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          The DevOps Burger represents how every tool layer plays an essential role
          in the entire DevOps workflow. Just like layers in a burger, each tool sits
          on top of another — planning, coding, building, testing, deploying, monitoring,
          and providing feedback.  
          This helps students understand how tools connect and how DevOps truly works.
        </p>
      </div>

      {/* BOX 2 — DevOps Pathway */}
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-3xl p-8">
        <img
          src="https://miro.medium.com/v2/resize:fit:1400/1*pk-R-5ywLmyHrgYR58QHew.jpeg"
          alt="DevOps Pathway"
          className="rounded-2xl w-full mb-6"
        />

        <h3 className="text-3xl font-bold text-indigo-600 dark:text-teal-400 mb-4">
          Complete DevOps Learning Pathway
        </h3>

        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          This roadmap shows where to start and how to grow step-by-step.  
          Begin with Linux, Git, and Networking. Then move to CI/CD pipelines,
          Docker, Kubernetes, Terraform, monitoring tools, and finally AWS Cloud.  
          Follow the pathway in sequence to become a professional DevOps Engineer.
        </p>
      </div>

    </div>
  </section>
));

export default Pathway;
