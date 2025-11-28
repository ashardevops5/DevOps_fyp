import React, { useRef, useState, useEffect, forwardRef, useCallback } from "react";

const Contact = forwardRef((props, ref) => {
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
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    const node = localRef.current;
    if (node) observer.observe(node);
    return () => node && observer.unobserve(node);
  }, []);

  return (
    <section
      ref={setRefs}
      id="contact"
      className={`min-h-screen snap-start py-24 px-6 bg-gray-100 dark:bg-gray-900 transition-all duration-700
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
    >
      <h2 className="text-5xl font-extrabold text-center text-indigo-600 dark:text-teal-400 mb-16">
        Connect With US
      </h2>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
        
        {/* Left: Contact Form */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg p-12">
          <h3 className="text-3xl font-bold mb-6 text-indigo-600 dark:text-teal-400">
            Contact
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            HI! I'm Muhammad Ashar (DevOps Engineer).  
            Fill the form below to connect or discuss DevOps related Information.
          </p>

          <form className="flex flex-col gap-5">
            <input
              type="text"
              placeholder="Your Name"
              className="px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white outline-none"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white outline-none"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white outline-none"
            />
            <textarea
              placeholder="Your Message"
              className="px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white outline-none h-32 resize-none"
            ></textarea>
            <button
              type="submit"
              className="bg-indigo-600 dark:bg-teal-400 text-white dark:text-gray-900 font-semibold px-6 py-3 rounded-lg hover:bg-indigo-500 dark:hover:bg-teal-500 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Right: Map + Info */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg p-8 flex flex-col gap-6">
          <h3 className="text-3xl font-bold text-indigo-600 dark:text-teal-400 mb-4">
            Navigation
          </h3>

          <iframe
            title="University of Lahore"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13623.543158767932!2d74.343203!3d31.450346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391904d935555555%3A0xabcdefabcdef!2sUniversity%20of%20Lahore!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
            className="w-full h-96 rounded-2xl border-0"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          <div className="text-gray-700 dark:text-gray-300 text-sm">
            <p><strong>Email:</strong> devOps@gmail.com.pk</p>
            <p><strong>Phone:</strong> +92 308-000-5566</p>
            <p><strong>Address:</strong> Pakistan</p>
          </div>
        </div>
      </div>

      {/* ⭐ Footer Added Here */}
      <footer className="mt-20 pt-10 text-center text-gray-600 dark:text-gray-400">
        <p>© 2025 DevOpsHub</p>
        <p className="text-sm">Learn • Build • Grow</p>
      </footer>

    </section>
  );
});

export default Contact;
