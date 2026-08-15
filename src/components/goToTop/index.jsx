import { useEffect, useState } from "react";
import { FiArrowUp } from "react-icons/fi";
import { Styled } from "./styled";

const GoToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > 250);
        };

        handleScroll();

        window.addEventListener("scroll", handleScroll, {
            passive: true,
        });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleGoToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <Styled.Wrapper>
            <button
                className={`goToTopButton ${isVisible ? "visible" : ""}`}
                type="button"
                onClick={handleGoToTop}
                aria-label="Go to top"
                title="Go to top"
            >
                <FiArrowUp />
            </button>
        </Styled.Wrapper>
    );
};

export default GoToTop;
