import {
    FiArrowUpRight,
    FiFacebook,
    FiGithub,
    FiLinkedin,
    FiMail,
    FiMapPin,
    FiPhone,
    FiSend,
    FiYoutube,
} from "react-icons/fi";

import { Styled } from "./styled";

const Contact = () => {
    return (
        <Styled.Wrapper>
            <section className="heroSection">
                <div className="heroMeta">
                    <span>CONTACT</span>
                    <span>04 / FOUNDATION</span>
                </div>

                <div className="heroGrid">
                    <div>
                        <h1>
                            Start a<span>conversation.</span>
                        </h1>
                    </div>

                    <div className="heroCopy">
                        <p>
                            Have an idea, question, collaboration opportunity or
                            simply want to connect? Reach out and start a
                            conversation with Drishti Foundation.
                        </p>
                    </div>
                </div>
            </section>

            <section className="contactSection">
                <div className="contactDetails">
                    <span className="eyebrow">GET IN TOUCH</span>

                    <h2>
                        We would love
                        <span>to hear from you.</span>
                    </h2>

                    <div className="contactList">
                        <a href="mailto:ash.ranjan09@gmail.com">
                            <span className="contactIcon">
                                <FiMail />
                            </span>

                            <div>
                                <small>Email</small>
                                <strong>ash.ranjan09@gmail.com</strong>
                            </div>

                            <FiArrowUpRight />
                        </a>

                        <div className="contactItem">
                            <span className="contactIcon">
                                <FiMapPin />
                            </span>

                            <div>
                                <small>Location</small>
                                <strong>Bengaluru, India</strong>
                            </div>
                        </div>

                        <div className="contactItem">
                            <span className="contactIcon">
                                <FiPhone />
                            </span>

                            <div>
                                <small>Availability</small>
                                <strong>
                                    Open for meaningful conversations
                                </strong>
                            </div>
                        </div>
                    </div>

                    <div className="socialLinks">
                        <span>Connect online</span>

                        <div>
                            <a
                                href="https://github.com/a2rp"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="GitHub"
                            >
                                <FiGithub />
                            </a>

                            <a
                                href="https://www.linkedin.com/in/aashishranjan"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="LinkedIn"
                            >
                                <FiLinkedin />
                            </a>

                            <a
                                href="https://www.facebook.com/theash.ashish/"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="Facebook"
                            >
                                <FiFacebook />
                            </a>

                            <a
                                href="https://www.youtube.com/@ashishranjan-ashz?sub_confirmation=1"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="YouTube"
                            >
                                <FiYoutube />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="contactFormWrapper">
                    <div className="formHeader">
                        <span>MESSAGE / 01</span>

                        <FiSend />
                    </div>

                    <form
                        className="contactForm"
                        action="mailto:ash.ranjan09@gmail.com"
                        method="post"
                        encType="text/plain"
                    >
                        <label>
                            <span>Your name</span>

                            <input
                                type="text"
                                name="name"
                                placeholder="Enter your name"
                                required
                            />
                        </label>

                        <label>
                            <span>Email address</span>

                            <input
                                type="email"
                                name="email"
                                placeholder="you@example.com"
                                required
                            />
                        </label>

                        <label>
                            <span>Subject</span>

                            <input
                                type="text"
                                name="subject"
                                placeholder="What would you like to discuss?"
                                required
                            />
                        </label>

                        <label>
                            <span>Message</span>

                            <textarea
                                name="message"
                                rows="7"
                                placeholder="Write your message..."
                                required
                            />
                        </label>

                        <button type="submit">
                            Send message
                            <FiArrowUpRight />
                        </button>
                    </form>
                </div>
            </section>

            <section className="visualSection">
                <img
                    src="https://picsum.photos/seed/drishti-contact/1800/900"
                    alt="People connecting"
                />

                <div className="visualOverlay" />

                <div className="visualContent">
                    <span>OPEN TO CONNECTION</span>

                    <h2>
                        Good conversations
                        <strong>can become meaningful action.</strong>
                    </h2>
                </div>
            </section>

            <section className="closingSection">
                <div>
                    <span>DRISHTI FOUNDATION</span>

                    <h2>
                        Awareness.
                        <span>Opportunity.</span>
                        Action.
                    </h2>
                </div>

                <a
                    href="https://www.ashishranjan.net"
                    target="_blank"
                    rel="noreferrer"
                >
                    Developer portfolio
                    <FiArrowUpRight />
                </a>
            </section>
        </Styled.Wrapper>
    );
};

export default Contact;
