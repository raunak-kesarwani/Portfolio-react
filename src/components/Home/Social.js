import React from 'react'
import './styles.css'
import { SlSocialInstagram, SlSocialLinkedin } from "react-icons/sl";
import { FaGithub } from "react-icons/fa6";
import { FaKaggle } from "react-icons/fa";
import { TiSocialYoutube } from "react-icons/ti";
import { MdEmail } from "react-icons/md";


const Social = (props) => {
    return (
        <div className="social">
            <div className="social-title">Follow Me</div>
            <div className="social-links">
                <a href={props.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <SlSocialInstagram />
                </a>
                <a href={props.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <SlSocialLinkedin />
                </a>
                <a href={props.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                    <TiSocialYoutube />
                </a>
                <a href={props.email} target="_blank" rel="noopener noreferrer" aria-label="Email">
                    <MdEmail />
                </a>
                <a href={props.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <FaGithub />
                </a>
                <a href={props.kaggle} target="_blank" rel="noopener noreferrer" aria-label="Kaggle">
                    <FaKaggle />
                </a>
            </div>
        </div>
    )
}

export default Social