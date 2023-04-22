import React from 'react'
import Button from '@/components/Button';
import { motion } from "framer-motion";

function Contact() {
  return (
    <motion.div 
    className="contact" 
    id="contact"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0},
    }}
    >
      <h2 className="contact-title">What@apos;s Next?</h2>
      <h2 className="contact-sub-title">Get in Touch</h2>
      <p className="contact-text">
      Although I’m not currently looking for any new opportunities, my inbox
        is always open. Whether you have a question or just want to say hi, I’ll
        try my best to get back to you!
      </p>
      <div className="contact-cta">
        <Button link="mailto:saxenaparas06@gmail.com" text="Say Hello" />
      </div>
    </motion.div>
  )
}

export default Contact;
