import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative mt-20'>
    <h1 className='text-center font-semibold text-4xl'>Here's why Saraswathi Printers is a right fit for you</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 mt-32 gap-10 ">
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.5 }}
          className="col-span-2 lg:col-span-1"
        >
          <img className="rounded-lg" src="offset-1.jpg" alt="About Us" loading='lazy' />
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.5 }}
          className="col-span-2 lg:col-span-1 flex flex-col justify-center"
        >
          <h1 className="text-4xl font-semibold pb-1">About Us</h1>
          <br />
          <p className="font-[400] text-[18px] text-gray-700">
            At Saraswathi Offset Printers, we are dedicated to delivering high-quality printing solutions since 1968. Starting as a sister concern to Sri Krishna Fireworks, we now serve a diverse range of clients with our advanced printing solutions. Our commitment to precision, innovation, and customer satisfaction ensures that we meet your needs with unparalleled quality and efficiency.
          </p>
          <br />
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 mt-28 gap-10 ">
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.5 }}
          className="col-span-2 lg:col-span-1 flex flex-col justify-center"
        >
          <h1 className="text-4xl font-semibold pb-1">Our Mission</h1>
          <br />
          <p className="font-light text-xl text-gray-700">
            Saraswathi Offset Printers is dedicated to providing high-quality, innovative, and sustainable printing solutions. We prioritize exceptional customer service, cutting-edge technology, and a supportive work environment to consistently exceed client expectations and build lasting relationships.
          </p>
          <br />
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.5 }}
          className="col-span-2 lg:col-span-1"
        >
          <img className="rounded-lg" src="offset-2.jpg" alt="Our Mission" loading='lazy' />
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 mt-32 gap-10 mb-32">
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.5 }}
          className="col-span-2 lg:col-span-1"
        >
          <img className="rounded-lg" src="offset-3.jpg" alt="Our Vision" loading='lazy' />
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.5 }}
          className="col-span-2 lg:col-span-1 flex flex-col justify-center "
        >
          <h1 className="text-4xl font-semibold pb-1">Our Vision</h1>
          <br />
          <p className="font-light text-xl text-gray-700">
            Our vision is to lead the industry in innovative and sustainable printing solutions, delivering unmatched quality and customer satisfaction. We are dedicated to advancing our technology and processes, fostering a culture of excellence, and creating lasting value for our clients and community through responsible practices.
          </p>
          <br />
        </motion.div>
      </div>
    </div>
  );
}

export default About;
