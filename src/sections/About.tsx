import Link from 'next/link';
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { useInView, motion } from "framer-motion";

function About() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  useEffect(() => {
    console.log("Element is in view: ", isInView);
  }, [isInView]);
  return (
    <motion.div 
    className='about' 
    id='about'
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    variants={{
      visible: { opacity: 1, y: -50},
      hidden: { opacity: 0, y: 0}
    }}
    >
      <div className="title">
        <h2>About Me</h2>
      </div>
      <div className="about-grid">
        <div className="about-grid-info">
            <p className="about-grid-info-text">
            My name is Paras, and I am passionate about creating
            for the web. My interest in web development was
            sparked in 2023 when I created my first project called Mi Clone, a
            Mi Store app built using React.js.
            </p>
            <p className="about-grid-info-text">
            Fast-forward to today, I specialize in designing and developing
            high-quality solutions that delight our clients and exceed their
            expectations at{" "}
            <Link href="https://rapidops.com" target="_blank" className="link">
          Rapidops.
            </Link>
            </p>

            <p className="about-grid-info-text">
            I am also working on a new project called&nbsp;
            <Link
              className="link"
              target="_blank"
              href="https://frontendvita.com"
            >
              FrontendVita,
            </Link>
            &nbsp;aimed at enhancing frontend development skills.
          </p>
            <ul className="about-grid-info-list">
            <li className="about-grid-info-list-item">React.js</li>
            <li className="about-grid-info-list-item">MongoDb</li>
            <li className="about-grid-info-list-item">Next.js</li>
            <li className="about-grid-info-list-item">Typescript</li>
            <li className="about-grid-info-list-item">Javascript</li>
            <li className="about-grid-info-list-item">Node.js</li>
            <li className="about-grid-info-list-item">MySQl</li>
            <li className="about-grid-info-list-item">HTML</li>
            <li className="about-grid-info-list-item">CSS</li>
          </ul>
        </div>
        <div className="about-grid-photo">
          <div className="overlay"></div>
          <div className="overlay-border"></div>
          <div className="about-grid-photo-container">
            <Image src="/Paras.jpeg" alt="profile" fill />
          </div>
        </div>
      </div>
      </motion.div>
  )
}

export default About;