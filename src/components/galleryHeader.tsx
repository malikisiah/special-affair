"use client";
import { motion } from "framer-motion";
export default function Header() {
  return (
    <div className='max-w-xl mx-auto sm:text-center'>
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
        <h3 className='text-primary-content text-3xl font-semibold sm:text-4xl'>
          The BeeHive
        </h3>
      </motion.div>

      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
        <p className='text-secondary-content mt-3'>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s, when an unknown.
        </p>
      </motion.div>
    </div>
  );
}
