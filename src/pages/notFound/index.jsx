import { FiArrowLeft, FiArrowRight, FiCompass, FiHome } from "react-icons/fi";
import { Link } from "react-router-dom";

import { Styled } from "./styled";

const NotFound = () => {
    return (
        <Styled.Wrapper>
            <section className="errorSection">
                <div className="topBar">
                    <span>DRISHTI FOUNDATION</span>
                    <span>ERROR / 404</span>
                </div>

                <div className="errorGrid">
                    <div className="errorNumber">
                        <span>4</span>

                        <div className="zero">
                            <FiCompass />
                        </div>

                        <span>4</span>
                    </div>

                    <div className="errorContent">
                        <span className="eyebrow">PAGE NOT FOUND</span>

                        <h1>
                            This path does not
                            <span>lead anywhere.</span>
                        </h1>

                        <p>
                            The page may have moved, the address may be
                            incorrect, or the content may no longer be
                            available.
                        </p>

                        <div className="actions">
                            <Link to="/" className="primaryAction">
                                <FiHome />
                                Return home
                            </Link>

                            <Link to="/work" className="secondaryAction">
                                Explore our work
                                <FiArrowRight />
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="bottomBar">
                    <Link to="/">
                        <FiArrowLeft />
                        Drishti Foundation
                    </Link>

                    <span>SEE CLEARLY / MOVE FORWARD</span>
                </div>
            </section>

            <section className="navigationSection">
                <div className="navigationHeading">
                    <span>FIND YOUR WAY</span>

                    <h2>
                        Try somewhere
                        <strong>more useful.</strong>
                    </h2>
                </div>

                <div className="navigationGrid">
                    <Link to="/work">
                        <span>01</span>

                        <div>
                            <strong>Our Work</strong>
                            <p>Explore the areas and ideas we focus on.</p>
                        </div>

                        <FiArrowRight />
                    </Link>

                    <Link to="/articles">
                        <span>02</span>

                        <div>
                            <strong>Stories</strong>
                            <p>Read perspectives, stories and ideas.</p>
                        </div>

                        <FiArrowRight />
                    </Link>

                    <Link to="/opportunities">
                        <span>03</span>

                        <div>
                            <strong>Opportunities</strong>
                            <p>Find ways to participate and contribute.</p>
                        </div>

                        <FiArrowRight />
                    </Link>

                    <Link to="/contact">
                        <span>04</span>

                        <div>
                            <strong>Contact</strong>
                            <p>Start a conversation with the foundation.</p>
                        </div>

                        <FiArrowRight />
                    </Link>
                </div>
            </section>
        </Styled.Wrapper>
    );
};

export default NotFound;
