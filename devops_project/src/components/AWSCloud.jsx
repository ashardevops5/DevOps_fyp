import React, { useRef, useState, useEffect, forwardRef, useCallback } from "react";

const AWSCloud = forwardRef((props, ref) => {
  const localRef = useRef(null);
  const setRefs = useCallback(
    (node) => {
      localRef.current = node;
      if (typeof ref === "function") {
        ref(node);
      } else if (ref) {
        ref.current = node;
      }
    },
    [ref]
  );
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = localRef.current;
    if (!node) {
      return undefined;
    }
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );

    observer.observe(node);

    return () => {
      observer.unobserve(node);
    };
  }, []);

  return (
    <section
      ref={setRefs}
      id="awscloud"
      className="min-h-screen snap-start py-24 px-6 transition-all duration-700
        bg-gradient-to-br from-blue-200 via-orange-300 to-indigo-100
        dark:from-gray-800 dark:via-gray-900 relative overflow-hidden"
    >
      
      {/* Title */}
      <h2 className="text-5xl font-extrabold text-center mb-8
        text-indigo-600 dark:text-orange-400 relative z-10">
        Why DevOps Engineers Must Learn AWS Cloud
      </h2>

      {/* Intro Paragraph */}
      <p className="max-w-4xl mx-auto text-lg text-gray-700 dark:text-gray-300 text-center mb-16 leading-relaxed relative z-10">
        AWS is the world’s most widely adopted cloud platform, powering millions of applications globally.
        For DevOps engineers, AWS is not just optional it is essential.  
        From automation and scaling to CI/CD pipelines, monitoring, and infrastructure as code,
        AWS provides every tool needed to build reliable, secure, and production-grade systems.
      </p>

      {/* Grid */}
      <div
        className={`grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto
        transition-all duration-700
        ${visible ? "opacity-100 scale-100" : "opacity-0 scale-95"} relative z-10`}
      >
        {/* CARD 1 */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700 hover:scale-105 transition">
          <h3 className="text-2xl font-bold text-indigo-600 dark:text-orange-400 mb-3">
            1. Real-World Deployments
          </h3>
          <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
            More than 80% of enterprise-grade DevOps pipelines run on AWS.  
            Understanding EC2, S3, VPC, Load Balancers, IAM, and EKS enables DevOps engineers
            to deploy scalable and secure cloud applications used by real companies worldwide.
          </p>
        </div>

        {/* CARD 2 */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700 hover:scale-105 transition">
          <h3 className="text-2xl font-bold text-indigo-600 dark:text-orange-400 mb-3">
            2. Automated CI/CD Workflows
          </h3>
          <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
            AWS CodePipeline, CodeBuild, and CodeDeploy allow fully automated CI/CD systems.  
            DevOps engineers use these services to automate testing, deployment, and rollback
            with almost zero downtime — a key requirement for modern production systems.
          </p>
        </div>

        {/* CARD 3 */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700 hover:scale-105 transition">
          <h3 className="text-2xl font-bold text-indigo-600 dark:text-orange-400 mb-3">
            3. Infrastructure as Code (IaC)
          </h3>
          <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
            AWS supports Terraform and CloudFormation — two of the most powerful IaC tools.
            Infrastructure becomes repeatable, version-controlled, and error-proof,
            which is the core principle of DevOps automation and reliability.
          </p>
        </div>
      </div>

      {/* Additional Info */}
      <div className="max-w-4xl mx-auto mt-16 text-center relative z-10">
        <h3 className="text-3xl font-bold text-indigo-600 dark:text-orange-400 mb-4">
          In Summary
        </h3>
        <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
          Without AWS, a DevOps skillset remains incomplete.  
          Cloud computing, automation, container orchestration, monitoring, and modern deployments — 
          all rely heavily on AWS.  
          Learning AWS gives DevOps engineers the power to build high-performing,
          scalable systems used in the real world.
        </p>
      </div>
    </section>
  );
});

export default AWSCloud;
