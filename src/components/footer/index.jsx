import {
    FiArrowUpRight,
    FiCode,
    FiCoffee,
    FiFacebook,
    FiGithub,
    FiGlobe,
    FiHeart,
    FiLinkedin,
    FiMail,
    FiYoutube,
} from "react-icons/fi";
import { Link } from "react-router-dom";
import { Styled } from "./styled";

const externalLinks = [
    { label: "Portfolio", href: "https://www.ashishranjan.net/", icon: FiGlobe },
    { label: "GitHub", href: "https://github.com/a2rp", icon: FiGithub },
    { label: "CodePen", href: "https://codepen.io/ash1198", icon: FiCode },
    {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/aashishranjan",
        icon: FiLinkedin,
    },
    {
        label: "Facebook",
        href: "https://www.facebook.com/theash.ashish/",
        icon: FiFacebook,
    },
    {
        label: "YouTube",
        href: "https://www.youtube.com/@ashishranjan-ashz?sub_confirmation=1",
        icon: FiYoutube,
    },
    { label: "Email", href: "mailto:ash.ranjan09@gmail.com", icon: FiMail },
    {
        label: "Support",
        href: "https://a2rp-donation-page.netlify.app/",
        icon: FiHeart,
    },
    {
        label: "Buy Me a Coffee",
        href: "https://buymeacoffee.com/a2rp",
        icon: FiCoffee,
    },
    { label: "Patreon", href: "https://www.patreon.com/a2rp", icon: FiHeart },
];

const Footer = () => (
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
                    <a className="primaryLink" href="mailto:ash.ranjan09@gmail.com">
                        Get in touch
                        <FiArrowUpRight aria-hidden="true" />
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

                    <div className="linkGroup iconGroup">
                        <span>Connect</span>
                        <div className="iconLinks" aria-label="External links">
                            {externalLinks.map(({ label, href, icon: Icon }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target={href.startsWith("mailto:") ? undefined : "_blank"}
                                    rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                                    aria-label={label}
                                    title={label}
                                >
                                    <Icon aria-hidden="true" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="footerBottom">
                <span>
                    Copyright © {new Date().getFullYear()} {" "}
                    <a
                        href="https://www.ashishranjan.net/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Ashish Ranjan
                    </a>
                </span>
                <span>Drishti Foundation</span>
            </div>
        </div>
    </Styled.Wrapper>
);

export default Footer;
