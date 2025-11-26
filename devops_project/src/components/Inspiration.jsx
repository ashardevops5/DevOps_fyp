import React, { forwardRef } from "react";

const Inspiration = forwardRef((props, ref) => (
  <section
    ref={ref}
    id="inspiration"
    className="min-h-screen py-20 snap-start flex flex-col justify-center items-center bg-gray-50 dark:bg-gray-900 text-center px-6"
  >
    <h2 className="text-5xl font-extrabold text-indigo-600 dark:text-teal-400 mb-8">
      Why DevOps Matters
    </h2>
    <p className="max-w-4xl mb-12 text-lg sm:text-xl">
      DevOps is a transformative approach that bridges development and operations to deliver software faster, reliably, and efficiently. It fosters collaboration, ensures quality, and drives innovation in organizations of any scale.
    </p>

    <div className="max-w-6xl w-full grid sm:grid-cols-3 gap-10">
      {/* Card 1 */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 hover:scale-105 transition">
        <h3 className="text-5xl font-bold text-indigo-500 dark:text-teal-400 mb-4">200x</h3>
        <h4 className="text-xl font-semibold mb-2">Faster Deployments</h4>
        <p className="text-gray-600 dark:text-gray-300 text-base">
          Automate your deployment pipeline and release features at lightning speed while minimizing manual errors and downtime.
        </p>
      </div>

      {/* Card 2 */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 hover:scale-105 transition">
        <h3 className="text-5xl font-bold text-indigo-500 dark:text-teal-400 mb-4">3x</h3>
        <h4 className="text-xl font-semibold mb-2">Higher Reliability</h4>
        <p className="text-gray-600 dark:text-gray-300 text-base">
          Improve system stability and reduce outages by integrating automated testing, monitoring, and continuous feedback loops.
        </p>
      </div>

      {/* Card 3 */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 hover:scale-105 transition">
        <h3 className="text-5xl font-bold text-indigo-500 dark:text-teal-400 mb-4">50%</h3>
        <h4 className="text-xl font-semibold mb-2">Reduced Failures</h4>
        <p className="text-gray-600 dark:text-gray-300 text-base">
          By standardizing processes, using automation, and fostering collaboration, teams experience fewer failures and faster recovery when incidents occur.
        </p>
      </div>
    </div>

    {/* Optional: Add more inspiration points */}
    <div className="mt-16 max-w-4xl grid sm:grid-cols-2 gap-8">
      <div className="bg-indigo-50 dark:bg-teal-900 rounded-xl p-6 shadow hover:scale-105 transition">
        <h4 className="font-semibold text-lg mb-2">Enhanced Collaboration</h4>
        <p className="text-gray-700 dark:text-gray-200 text-sm">
          Developers and operations work together seamlessly, sharing responsibility and improving workflow efficiency.
        </p>
      </div>
      <div className="bg-indigo-50 dark:bg-teal-900 rounded-xl p-6 shadow hover:scale-105 transition">
        <h4 className="font-semibold text-lg mb-2">Continuous Improvement</h4>
        <p className="text-gray-700 dark:text-gray-200 text-sm">
          DevOps encourages experimentation, learning from feedback, and evolving processes for better software outcomes.
        </p>
      </div>
    </div>
  </section>
));

export default Inspiration;
