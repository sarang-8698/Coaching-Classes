import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function HeroSection() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="relative bg-blue-600 text-white flex flex-col items-center justify-center py-20">
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Welcome to Our Coaching Center
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-center max-w-2xl mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          Empowering students to achieve their dreams. Register today and access
          exclusive courses and resources.
        </motion.p>

        <div className="flex gap-4">
          <Link to="/register">
            <motion.button
              className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg shadow-lg transform hover:scale-105 transition duration-200"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Register
            </motion.button>
          </Link>
          <Link to="/login">
            <motion.button
              className="bg-transparent border-2 border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition duration-200"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Login
            </motion.button>
          </Link>
        </div>
      </section>

      {/* Feature Highlights Section */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="text-center mb-12">
          <motion.h2
            className="text-3xl font-bold"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Why Choose Us?
          </motion.h2>
          <p className="text-gray-600 mt-4 max-w-md mx-auto">
            Discover the benefits of joining our coaching center and take your
            learning to the next level.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-xl font-semibold mb-2">Expert Tutors</h3>
            <p className="text-gray-700">
              Learn from experienced professionals who are dedicated to your
              success.
            </p>
          </motion.div>

          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-2">
              Personalized Learning
            </h3>
            <p className="text-gray-700">
              Customized courses tailored to meet the unique needs of each
              student.
            </p>
          </motion.div>

          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-xl font-semibold mb-2">Career Guidance</h3>
            <p className="text-gray-700">
              Get expert advice and resources to guide your career path.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-6 bg-blue-50">
        <div className="text-center mb-12">
          <motion.h2
            className="text-3xl font-bold"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Testimonials
          </motion.h2>
          <p className="text-gray-600 mt-4 max-w-md mx-auto">
            Hear from our successful students and discover how our coaching
            center has helped them.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="text-gray-700 italic mb-4">
              The coaching center helped me achieve my dreams. The tutors were
              supportive and the environment was motivating.
            </p>
            <h4 className="text-lg font-semibold">— John Doe</h4>
          </motion.div>

          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-gray-700 italic mb-4">
              I loved the personalized attention and the way the courses were
              structured. Highly recommended!
            </p>
            <h4 className="text-lg font-semibold">— Jane Smith</h4>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default HeroSection;
