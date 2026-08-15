import React, { useEffect, useRef, useState } from "react";
import {
    FiFacebook,
    FiGithub,
    FiLinkedin,
    FiMail,
    FiMenu,
    FiX,
    FiYoutube,
} from "react-icons/fi";
import { Link, NavLink, useLocation } from "react-router-dom";

import { Styled } from "./styled";

const headerNavItems = [
    {
        id: 1,
        label: "Our Work",
        to: "/work",
        matchPaths: ["/work"],
    },
    {
        id: 2,
        label: "About Us",
        to: "/about-us",
        matchPaths: ["/about-us"],
    },
    {
        id: 3,
        label: "Stories",
        to: "/articles",
        matchPaths: ["/articles"],
    },
    {
        id: 4,
        label: "Summit",
        to: "/events/drishti-summit-2025",
        matchPaths: ["/events"],
    },
];

const drawerNavItems = [
    {
        id: 1,
        label: "Home",
        to: "/",
        matchPaths: ["/"],
        exact: true,
    },
    {
        id: 2,
        label: "Our Work",
        to: "/work",
        matchPaths: ["/work"],
    },
    {
        id: 3,
        label: "About Us",
        to: "/about-us",
        matchPaths: ["/about-us"],
    },
    {
        id: 4,
        label: "Stories",
        to: "/articles",
        matchPaths: ["/articles"],
    },
    {
        id: 5,
        label: "Initiatives",
        to: "/publications",
        matchPaths: ["/publications"],
    },
    {
        id: 6,
        label: "Opportunities",
        to: "/opportunities",
        matchPaths: ["/opportunities"],
    },
    {
        id: 6,
        label: "Summit",
        to: "/events/drishti-summit-2025",
        matchPaths: ["/events"],
    },
    {
        id: 8,
        label: "Legal",
        to: "/legal",
        matchPaths: ["/legal"],
    },
    {
        id: 7,
        label: "Contact",
        to: "/contact",
        matchPaths: ["/contact"],
    },
];

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const drawerRef = useRef(null);
    const location = useLocation();

    const pathname = location.pathname;

    const isItemActive = (item) => {
        if (item.exact) {
            return pathname === item.to;
        }

        return item.matchPaths.some(
            (path) => pathname === path || pathname.startsWith(`${path}/`),
        );
    };

    const handleMenuToggle = () => {
        setIsMenuOpen((prev) => !prev);
    };

    const handleMenuClose = () => {
        setIsMenuOpen(false);
    };

    useEffect(() => {
        setIsMenuOpen(false);
    }, [pathname]);

    useEffect(() => {
        const handleEscape = (event) => {
            if (event.key === "Escape") {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener("keydown", handleEscape);

        return () => {
            document.removeEventListener("keydown", handleEscape);
        };
    }, []);

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [isMenuOpen]);

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (!isMenuOpen) {
                return;
            }

            if (
                drawerRef.current &&
                !drawerRef.current.contains(event.target)
            ) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener("mousedown", handleOutsideClick);

        document.addEventListener("touchstart", handleOutsideClick);

        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);

            document.removeEventListener("touchstart", handleOutsideClick);
        };
    }, [isMenuOpen]);

    return (
        <>
            <Styled.Header>
                <Styled.Inner>
                    <Styled.Brand as={Link} to="/">
                        <Styled.BrandMark aria-hidden="true">
                            <i />
                            <span className="span1" />
                            <span className="span2" />
                            <span className="span3" />
                        </Styled.BrandMark>

                        <Styled.BrandText>
                            <strong>Drishti</strong>
                            <strong>Foundation</strong>
                        </Styled.BrandText>
                    </Styled.Brand>

                    <Styled.Nav>
                        {headerNavItems.map((item) => {
                            const isActive = isItemActive(item);

                            return (
                                <Styled.NavLinkItem
                                    key={item.id}
                                    as={NavLink}
                                    to={item.to}
                                    className={isActive ? "active" : undefined}
                                >
                                    {item.label}
                                </Styled.NavLinkItem>
                            );
                        })}
                    </Styled.Nav>

                    <Styled.MenuButton
                        type="button"
                        onClick={handleMenuToggle}
                        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                        aria-expanded={isMenuOpen}
                        aria-controls="mobile-drawer-menu"
                    >
                        {isMenuOpen ? <FiX /> : <FiMenu />}
                    </Styled.MenuButton>
                </Styled.Inner>
            </Styled.Header>

            <Styled.Overlay
                type="button"
                $isMenuOpen={isMenuOpen}
                onClick={handleMenuClose}
                aria-hidden={!isMenuOpen}
            />

            <Styled.Drawer
                ref={drawerRef}
                id="mobile-drawer-menu"
                $isMenuOpen={isMenuOpen}
                aria-hidden={!isMenuOpen}
            >
                <Styled.DrawerTop>
                    <Styled.DrawerTitle>Menu</Styled.DrawerTitle>

                    <Styled.CloseButton
                        type="button"
                        onClick={handleMenuClose}
                        aria-label="Close menu"
                    >
                        <FiX />
                    </Styled.CloseButton>
                </Styled.DrawerTop>

                <Styled.DrawerNav>
                    {drawerNavItems.map((item) => {
                        const isActive = isItemActive(item);

                        return (
                            <Styled.DrawerNavLink
                                key={item.id}
                                as={NavLink}
                                to={item.to}
                                className={isActive ? "active" : undefined}
                                onClick={handleMenuClose}
                            >
                                {item.label}
                            </Styled.DrawerNavLink>
                        );
                    })}
                </Styled.DrawerNav>

                <Styled.DrawerBottom>
                    <Styled.ContactLink href="mailto:ash.ranjan09@gmail.com">
                        <FiMail />

                        <span>ash.ranjan09@gmail.com</span>
                    </Styled.ContactLink>

                    <Styled.Socials>
                        <Styled.SocialLink
                            href="https://github.com/a2rp"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="GitHub"
                        >
                            <FiGithub />
                        </Styled.SocialLink>

                        <Styled.SocialLink
                            href="https://www.linkedin.com/in/aashishranjan"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="LinkedIn"
                        >
                            <FiLinkedin />
                        </Styled.SocialLink>

                        <Styled.SocialLink
                            href="https://www.facebook.com/theash.ashish/"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Facebook"
                        >
                            <FiFacebook />
                        </Styled.SocialLink>

                        <Styled.SocialLink
                            href="https://www.youtube.com/@ashishranjan-ashz?sub_confirmation=1"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="YouTube"
                        >
                            <FiYoutube />
                        </Styled.SocialLink>
                    </Styled.Socials>
                </Styled.DrawerBottom>
            </Styled.Drawer>
        </>
    );
};

export default Header;
