import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Our Print Story",
    img: "offset -1.jpg",
    desc: "Our company, THE SARASWATHI OFFSET PRINTERS, was established as a sister concern to Sri Krishna Fireworks in 1968. Over time, we evolved to support external clients by providing high-quality packaging materials. Our ability to make prompt decisions allows us to meet customer needs with greater precision, ensuring the required quality at every production stage. Our facility is equipped with advanced machinery, enabling us to serve clients from diverse market segments.",
  },
  {
    id: 2,
    title: "Our Vision",
    img: "offset-2.jpg",
    desc: "Saraswathi Offset Printers aims to be the industry leader in innovative and sustainable printing solutions, delivering unmatched quality and customer satisfaction. We are dedicated to advancing our technology and processes, fostering a culture of excellence, and creating lasting value for our clients and community through responsible practices.",
  },
  {
    id: 3,
    title: "Our Mission",
    img: "offset-3.jpg",
    desc: "Saraswathi Offset Printers is dedicated to providing high-quality, innovative, and sustainable printing solutions. We prioritize exceptional customer service, cutting-edge technology, and a supportive work environment to consistently exceed client expectations and build lasting relationships.",
  },
];

const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const yImage = useTransform(scrollYProgress, [0, 1], [300, -300]);
  const yText = useTransform(scrollYProgress, [0, 1], [1000, -1000]);

  return (
    <section className="h-screen flex flex-col lg:flex-row gap-5 p-5 lg:gap-20" ref={ref}>
      <div className="flex-1 flex items-center justify-center overflow-hidden">
        <motion.div style={{ y: yImage }}>
          <img
            src={item.img}
            alt="image"
            className="h-auto w-auto max-w-full max-h-full rounded-2xl mt-5"
          />
        </motion.div>
      </div>
      <div className="flex-1 flex items-center justify-center text-xl mt-5">
        <motion.div style={{ y: yText }}>
          <h2 className="text-6xl font-bold mb-4">{item.title}</h2>
          <p className="font-normal text-2xl ">{item.desc}</p>
        </motion.div>
      </div>
    </section>
  );
};

const About = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="relative mt-20 " ref={ref}>
      <div className="lg:sticky bg-black z-10 top-0 left-0 pt-10 text-center text-8xl font-bold">
        <h1 className="bg-gradient-to-r from-sky-400 to-pink-400 bg-clip-text text-transparent">
          ABOUT US
        </h1>
        <motion.div className="h-2 bg-red-200 mt-4" style={{ scaleX }}></motion.div>
      </div>
      <div className="flex flex-col mx-5 lg:mx-52">
        {items.map((item) => (
          <Single item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default About;
