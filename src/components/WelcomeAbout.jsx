import React from "react";
import { motion } from "framer-motion";
const WelcomeAbout = ({ aboutData, aboutVision }) => {
  return (
    <div className="background-blob-wrapper">
      <div className="animated-blobs"></div>
      <div className="w-full bg-gradient-to-r from-[#f9f4f0] via-white to-[#f9f4f0] py-16 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.h1
            className="text-5xl md:text-5xl font-bold text-center text-gray-800 mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { delay: 0.1, duration: 0.5 },
            }}
            viewport={{ once: true, amount: 0.5 }}
          >
            Welcome to TradiCult
          </motion.h1>

          {aboutData.map((data, index) => (
            <>
              <div
                key={index}
                className={`flex flex-col md:flex-row items-center justify-evenly mb-16 ${
                  index % 2 !== 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/*Heading */}
                <div className="md:w-1/2 space-y-5 text-left">
                  <motion.h2
                    className="text-4xl font-bold text-gray-800 items- md:text-left"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                      transition: { delay: 0.2, duration: 0.5 },
                    }}
                    viewport={{ once: true, amount: 0.5 }}
                  >
                    {data.heading}
                  </motion.h2>
                  <motion.p
                    className="text-lg text-gray-700 leading-relaxed"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                      transition: { delay: 0.4, duration: 0.5 },
                    }}
                    viewport={{ once: true, amount: 0.5 }}
                  >
                    {data.p1}
                  </motion.p>
                  <motion.p
                    className="text-lg text-gray-700 leading-relaxed"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                      transition: { delay: 0.4, duration: 0.5 },
                    }}
                    viewport={{ once: true, amount: 0.5 }}
                  >
                    {data.p2}
                  </motion.p>
                </div>

                {/* Image Section */}
                <motion.div
                  className="md:w-1/3 group relative overflow-hidden rounded-xl shadow-xl"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    transition: { delay: 0.5, duration: 0.5 },
                  }}
                  viewport={{ once: true, amount: 0.5 }}
                >
                  <img
                    src={data.image}
                    alt="About"
                    className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Optional overlay effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-white/10 opacity-0 group-hover:opacity-100 transition duration-500" />
                </motion.div>
                <hr />
              </div>
            </>
          ))}
        </div>
      </div>
      <div className="w-full bg-gradient-to-r from-[#f9f4f0] via-white to-[#f9f4f0] py-16 px-4 sm:px-8 lg:px-24">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {aboutVision.map((data, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center space-y-4"
            >
              <motion.h1
                className="text-4xl font-semibold text-gray-900"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.2, duration: 0.5 },
                }}
                viewport={{ once: true, amount: 0.5 }}
              >
                {data.heading}
              </motion.h1>
              <motion.p
                className="text-base text-gray-700 leading-relaxed"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.4, duration: 0.5 },
                }}
                viewport={{ once: true, amount: 0.5 }}
              >
                {data.p1}
              </motion.p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WelcomeAbout;
