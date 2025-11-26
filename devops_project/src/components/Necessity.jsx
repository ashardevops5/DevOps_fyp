import React, { forwardRef } from "react";

const Necessity = forwardRef((props, ref) => (
  <section
    ref={ref}
    id="necessity"
    className="min-h-screen py-20 snap-start flex flex-col justify-center items-center bg-gray-50 dark:bg-gray-900 px-6"
  >
    {/* Main Heading & Description */}
    <div className="max-w-5xl w-full mb-12 text-center">
      <h2 className="text-5xl font-extrabold text-indigo-600 dark:text-teal-400 mb-6">
        Why DevOps is Essential
      </h2>
      <p className="text-gray-700 dark:text-gray-300 text-justify">
        Before DevOps, software development and IT operations worked in silos. Developers focused only on coding, while operations managed deployment and stability. This separation caused delays, deployment errors, and miscommunication.  
        <br /><br />
        DevOps bridges this gap, emphasizing collaboration, automation, and continuous improvement. It allows faster, reliable, and scalable software delivery by integrating both teams and leveraging automated pipelines.
      </p>
    </div>

    {/* Advantages & Disadvantages */}
    <div className="max-w-5xl w-full flex flex-col md:flex-row gap-8">
      {/* Advantages Box */}
      <div className="flex-1 bg-white dark:bg-gray-800 rounded-3xl shadow-lg p-8 flex flex-col border-l-4 border-green-500">
        <h3 className="text-3xl font-bold text-green-600 dark:text-green-400 mb-4">
          Key Advantages
        </h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
          <li>Faster software delivery through CI/CD pipelines</li>
          <li>Improved collaboration between development and operations</li>
          <li>Reduced deployment errors and downtime</li>
          <li>Continuous monitoring and feedback loops</li>
          <li>Scalable infrastructure management</li>
          <li>Quick response to market and customer needs</li>
        </ul>
      </div>

      {/* Disadvantages Box */}
      <div className="flex-1 bg-white dark:bg-gray-800 rounded-3xl shadow-lg p-8 flex flex-col border-l-4 border-red-500">
        <h3 className="text-3xl font-bold text-red-600 dark:text-red-400 mb-4">
          Challenges
        </h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
          <li>Initial setup and tooling cost</li>
          <li>Requires cultural shift and team mindset change</li>
          <li>Learning curve for developers and operations</li>
          <li>Complex pipeline configuration and management</li>
          <li>Continuous effort to maintain automation and monitoring</li>
        </ul>
      </div>
    </div>
  </section>
));

export default Necessity;
