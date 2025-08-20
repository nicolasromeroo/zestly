import { motion, useScroll, useTransform } from "framer-motion";
import {
  ChartBarIcon,
  LightBulbIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";
import { fadeInUp, buttonHover } from "../config/motion";
import { useRef } from "react";

export default function HeroSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const dashboardY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const dashboardScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);
  const dashboardOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.6]);

  const floatAnimation = {
    y: [0, -10, 0],
    transition: {
      repeat: Infinity,
      duration: 5,
      ease: "easeInOut",
    },
  };

  const slowFloatAnimation = {
    y: [0, -5, 0],
    transition: {
      repeat: Infinity,
      duration: 7,
      ease: "easeInOut",
    },
  };

  return (
    <>
      <section
        ref={containerRef}
        className="relative pt-32 pb-24 overflow-hidden bg-gradient-to-b from-gray-50 via-white to-gray-50"
      >
        <div className="absolute inset-0 overflow-hidden z-0">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
            className="absolute top-20 right-[5%] w-[600px] h-[600px] bg-zestly-primary/5 rounded-full"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
            className="absolute -top-[300px] -left-[300px] w-[600px] h-[600px] bg-zestly-secondary/5 rounded-full"
          />
          <motion.img
            src="/images/hero/dots.svg"
            className="absolute top-[20%] left-[5%] w-[180px] opacity-30"
            animate={slowFloatAnimation}
          />
          <motion.img
            src="/images/hero/wave.svg"
            className="absolute bottom-[15%] right-[10%] w-[250px] opacity-40"
            animate={floatAnimation}
          />
          <motion.img
            src="/images/hero/circle.svg"
            className="absolute bottom-[25%] left-[8%] w-[120px] opacity-50"
            animate={slowFloatAnimation}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="lg:pr-8">
              <motion.div
                {...fadeInUp}
                className="mb-6 inline-block py-1 px-3 bg-zestly-light/30 text-zestly-dark rounded-full text-sm font-medium"
              >
                Introducing Data Harvest
              </motion.div>
              <motion.h1
                {...fadeInUp}
                transition={{ delay: 0.1 }}
                className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight"
              >
                Harvest Data, <br />
                <span className="text-zestly-primary">Grow Decisions</span>
              </motion.h1>
              <motion.p
                {...fadeInUp}
                transition={{ delay: 0.2 }}
                className="text-xl text-gray-600 max-w-xl mb-8"
              >
                Transform your retail business data into actionable insights
                with our specialized platform for mid-sized retailers. Increase
                sales and optimize operations with predictive analytics.
              </motion.p>
              <motion.div
                {...fadeInUp}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap gap-4 items-center"
              >
                <motion.button
                  {...buttonHover}
                  className="bg-zestly-primary text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-zestly-dark transition-colors shadow-lg"
                >
                  Request a Demo
                </motion.button>
                <a
                  href="#how-it-works"
                  className="inline-flex items-center text-zestly-dark font-medium hover:text-zestly-primary transition-colors"
                >
                  <span>How it works</span>
                  <svg
                    className="ml-2 w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
              style={{
                y: dashboardY,
                scale: dashboardScale,
                opacity: dashboardOpacity,
              }}
              className="relative lg:absolute lg:right-[5%] lg:w-[45%] shadow-2xl rounded-lg overflow-hidden border border-gray-200"
            >
              <img
                src="/images/hero/dashboard.svg"
                alt="Zestly Dashboard Preview"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-white/30 rounded-lg"></div>
            </motion.div>
          </div>

          <div className="mt-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <h2 className="text-base font-semibold text-zestly-primary mb-3">
                KEY FEATURES
              </h2>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Everything you need to <br />
                maximize your data potential
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our platform provides all the tools necessary to transform data
                into real results
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0 }}
              >
                <Feature
                  icon={ChartBarIcon}
                  title="Data-Driven Growth"
                  description="Transform scattered retail data into actionable insights with our advanced analytics platform"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <Feature
                  icon={LightBulbIcon}
                  title="Smart Solutions"
                  description="AI-powered recommendations for better business decisions that drive revenue and efficiency"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Feature
                  icon={ClockIcon}
                  title="Real-Time Updates"
                  description="Fresh insights delivered when you need them most to keep your business one step ahead"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Feature({ icon: Icon, title, description }) {
  return (
    <motion.div
      whileHover={{ y: -5, boxShadow: "0 10px 40px -15px rgba(0, 0, 0, 0.1)" }}
      className="flex flex-col p-8 bg-white rounded-2xl shadow-lg border border-gray-100 hover:border-zestly-primary/30 transition-all"
    >
      <div className="p-3 bg-gradient-to-br from-zestly-light to-zestly-light/20 rounded-xl mb-6 w-14 h-14 flex items-center justify-center">
        <Icon className="h-7 w-7 text-zestly-primary" />
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
      <div className="mt-5 flex items-center text-zestly-dark font-medium">
        <span className="text-sm">Learn more</span>
        <svg
          className="ml-2 w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
      </div>
    </motion.div>
  );
}
