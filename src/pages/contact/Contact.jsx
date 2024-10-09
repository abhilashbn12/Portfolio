import React from 'react';
import { FaEnvelopeOpen, FaPhoneSquareAlt, FaLinkedin, FaGithub } from 'react-icons/fa';

import { FiSend } from 'react-icons/fi';
import "./contact.css";

const Contact = () => {
    return (
        <section className="contact section">
            <h2 className="section_title">Get In <span>Touch</span></h2>

            <div className="contact_container container grid">
                <div className="contact_data">
                    <h3 className='contact_title'>Don't be Shy!</h3>
                    <p className="contact_description">
                        Feel free to get in touch with me. I am always open to discuss new projects, creative ideas or opportunities to be part of your visions.
                    </p>

                    <div className="contact_info">
                        <div className="info_item">
                            <FaEnvelopeOpen className='info_icon' />

                            <div>
                                <span className="info_title">Mail Me</span>
                                <h4 className='info_desc'>bnabhilash2001@gmail.com</h4>
                            </div>
                        </div>
                        <div className="info_item">
                            <FaPhoneSquareAlt className='info_icon' />

                            <div>
                                <span className="info_title">Call Me</span>
                                <h4 className='info_desc'>8453552544</h4>
                            </div>
                        </div>
                    </div>

                    <div className="contact_socials">
                        <a href="https://www.linkedin.com/in/abhilashbn12" className="contact_social_link" target='_blank'>
                            <FaLinkedin />
                        </a>
                        <a href="https://github.com/abhilashbn12" className="contact_social_link" target='_blank'>
                            <FaGithub />
                        </a>
                    </div>
                </div>

                <form className="contact_form">
                    <div className="form_input_group">
                        <div className="form_input_div">
                            <input type='text' placeholder='Your Name' className='form_control' />
                        </div>
                        <div className="form_input_div">
                            <input type='email' placeholder='Your Email' className='form_control' />
                        </div>
                        <div className="form_input_div">
                            <input type='text' placeholder='Your Subject' className='form_control' />
                        </div>
                    </div>
                    <div className="form_input_div">
                        <textarea placeholder='Your Message' className="form_control textarea"></textarea>
                    </div>
                    <button className='button'>Send Message <span className="button_icon contact_button_icon"><FiSend /></span></button>
                </form>
            </div>
        </section>
    )
}

export default Contact