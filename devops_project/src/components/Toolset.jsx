import React, { forwardRef } from "react";

const tools = [
  {
    name: "Docker",
    logo: "https://www.docker.com/wp-content/uploads/2022/03/Moby-logo.png",
    desc: "Containerize applications for consistent environments."
  },
  {
    name: "Kubernetes",
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/39/Kubernetes_logo_without_workmark.svg",
    desc: "Orchestrate containerized apps at scale."
  },
  {
    name: "Terraform",
    logo: "https://plugins.jetbrains.com/files/22300/885463/icon/default.png",
    desc: "Manage infrastructure as code for reproducible environments."
  },
  {
    name: "Git",
    logo: "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png",
    desc: "Track code changes and collaborate with teams."
  },
  {
    name: "Jenkins",
    logo: "https://www.jenkins.io/images/logos/jenkins/jenkins.png",
    desc: "Automate CI/CD pipelines for fast delivery."
  },
  {
    name: "Ansible",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Ansible_logo.svg/1664px-Ansible_logo.svg.png",
    desc: "Automate configuration management and deployments."
  },
  {
    name: "Prometheus",
    logo: "https://d15shllkswkct0.cloudfront.net/wp-content/blogs.dir/1/files/2017/11/prometheus_logo.png",
    desc: "Monitor applications and infrastructure."
  },
  {
    name: "Grafana",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Grafana_icon.svg/1969px-Grafana_icon.svg.png",
    desc: "Visualize metrics and logs beautifully."
  },
  {
    name: "AWS",
    logo: "https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/aws-color.png",
    desc: "Cloud computing platform for scalable apps."
  },
  {
    name: "Azure",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Microsoft_Azure.svg/1200px-Microsoft_Azure.svg.png",
    desc: "Microsoft’s cloud platform for building and managing apps."
  },
  {
    name: "CI/CD Pipelines",
    logo: "https://miro.medium.com/1*v57IL3HDCCgbowOLbzFVkw.png",
    desc: "Implement CI/CD pipelines using tools like Jenkins, GitHub Actions, GitLab CI, or AWS CodePipeline for automated build, test, and deployment."
  },
  {
    name: "Linux",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/af/Tux.png",
    desc: "Open-source OS powering servers and cloud systems."
  }
];

const Toolset = forwardRef((props, ref) => (
  <section
    ref={ref}
    id="toolset"
    className="min-h-screen py-20 snap-start bg-gray-100 dark:bg-gray-800 text-center px-6 flex flex-col justify-center items-center"
  >
    <h2 className="text-5xl font-extrabold text-indigo-600 dark:text-teal-400 mb-12">
      Core DevOps Toolset
    </h2>
    <p className="max-w-4xl mb-10 text-lg">
      Explore essential DevOps tools and their real-world applications. Students can select any tool to learn and practice hands-on skills.
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl w-full">
      {tools.map((tool, i) => (
        <div
          key={i}
          className="bg-white dark:bg-gray-900 rounded-xl border-2 border-indigo-400 dark:border-teal-400 shadow p-6 flex flex-col items-center hover:scale-105 transition cursor-pointer"
        >
          {tool.name === "CI/CD using Jenkins & GitHub Actions" ? (
            <>
              {/* CI/CD Card: Name on top, logo + desc below */}
              <h3 className="font-semibold text-lg text-indigo-600 dark:text-teal-400 mb-2 text-center whitespace-nowrap">
                {tool.name}
              </h3>
              <div className="flex flex-col items-center">
                <img
                  src={tool.logo}
                  alt={tool.name}
                  className="h-16 w-16 mb-2 object-contain"
                />
                <p className="text-gray-600 dark:text-gray-300 text-sm text-center">
                  {tool.desc}
                </p>
              </div>
            </>
          ) : (
            <>
              {/* Other tools: Logo first, then name, then desc */}
              <img
                src={tool.logo}
                alt={tool.name}
                className="h-16 w-16 mb-4 object-contain"
              />
              <h3 className="font-semibold text-lg text-indigo-600 dark:text-teal-400 mb-2">
                {tool.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">{tool.desc}</p>
            </>
          )}
        </div>
      ))}
    </div>
  </section>
));

export default Toolset;
