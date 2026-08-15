import {
    FiArrowUpRight,
    FiFacebook,
    FiGithub,
    FiLinkedin,
    FiMail,
    FiYoutube,
} from "react-icons/fi";
import { Link } from "react-router-dom";

import { Styled } from "./styled";

const Footer = () => {
    return (
        <Styled.Wrapper>
            <div className="footerInner">
                <div className="footerTop">
                    <div className="brandBlock">
                        <span className="eyebrow">DRISHTI FOUNDATION</span>

                        <h2>
                            Creating opportunities.
                            <span>Building better futures.</span>
                        </h2>

                        <p>
                            A digital space focused on awareness, education,
                            community support and positive social impact.
                        </p>

                        <a
                            className="primaryLink"
                            href="mailto:ash.ranjan09@gmail.com"
                        >
                            Get in touch
                            <FiArrowUpRight />
                        </a>
                    </div>

                    <div className="footerLinks">
                        <div className="linkGroup">
                            <span>Foundation</span>

                            <Link to="/">Home</Link>
                            <Link to="/work">Our Work</Link>
                            <Link to="/about-us">About Us</Link>
                            <Link to="/articles">Stories</Link>
                            <Link to="/contact">Contact</Link>
                        </div>

                        <div className="linkGroup">
                            <span>Developer</span>

                            <a
                                href="https://www.ashishranjan.net"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Portfolio
                                <FiArrowUpRight />
                            </a>

                            <a
                                href="https://github.com/a2rp"
                                target="_blank"
                                rel="noreferrer"
                            >
                                GitHub
                                <FiGithub />
                            </a>

                            <a
                                href="https://codepen.io/ash1198"
                                target="_blank"
                                rel="noreferrer"
                            >
                                CodePen
                                <FiArrowUpRight />
                            </a>

                            <a
                                href="https://www.linkedin.com/in/aashishranjan"
                                target="_blank"
                                rel="noreferrer"
                            >
                                LinkedIn
                                <FiLinkedin />
                            </a>
                        </div>

                        <div className="linkGroup">
                            <span>Social</span>

                            <a
                                href="https://www.facebook.com/theash.ashish/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Facebook
                                <FiFacebook />
                            </a>

                            <a
                                href="https://www.youtube.com/@ashishranjan-ashz?sub_confirmation=1"
                                target="_blank"
                                rel="noreferrer"
                            >
                                YouTube
                                <FiYoutube />
                            </a>

                            <a href="mailto:ash.ranjan09@gmail.com">
                                Email
                                <FiMail />
                            </a>
                        </div>

                        <div className="linkGroup">
                            <span>Support</span>

                            <a
                                href="https://buymeacoffee.com/a2rp"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Buy Me A Coffee
                                <FiArrowUpRight />
                            </a>

                            <a
                                href="https://patreon.com/a2rp"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Patreon
                                <FiArrowUpRight />
                            </a>

                            <a
                                href="https://a2rp-donation-page.netlify.app/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Support My Work
                                <FiArrowUpRight />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="footerBottom">
                    <span>
                        © {new Date().getFullYear()} Drishti Foundation. All
                        rights reserved.
                    </span>

                    <span>
                        Developed by{" "}
                        <a
                            href="https://www.ashishranjan.net"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Ashish Ranjan
                        </a>
                    </span>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default Footer;
