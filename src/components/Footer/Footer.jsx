import React from "react";
import { footerVariants, staggerChildren } from "../../utils/motion";
import css from "./Footer.module.scss";
import {motion} from 'framer-motion'
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { SiCodechef } from "react-icons/si";
const Footer = () => {
  return (
    <motion.section
    variants={staggerChildren}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className={`paddings ${css.wrapper}`}>

      <motion.div
      variants={footerVariants}
      className={`innerWidth yPaddings flexCenter ${css.container}`}>
        <div className={css.left}>
          <span className="primaryText">
            Let's make something <br />
            amazing together.
          </span>
          <span className="primaryText">
            Start by <a mailto="Abhishek15mor@gmail.com">saying hi</a>
          </span>
        </div>

        <div className={css.right}>
          <div className={css.info}>
            <span className="secondaryText">Information</span>
            <p>+91 7494851179</p>
          </div>
          <ul className={css.menu}>
            <li><a href="https://linkedin.com/in/abhishek-mor-830b6b286"><FaLinkedinIn size={36} color="orange"/></a></li>
            <li><a href="https://www.instagram.com/abhishek.mor_/"><FaInstagram size={36} color="orange"/></a></li>
            <li><a href="https://github.com/abhismaxio"><FaGithub size={36} color="orange"/></a></li>
            <li><a href="https://www.codechef.com/users/cloud12"><SiCodechef size={36} color="orange"/></a></li>

          </ul>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Footer;
