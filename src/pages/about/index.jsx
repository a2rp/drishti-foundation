import {
    FiArrowRight,
    FiEye,
    FiHeart,
    FiTarget,
    FiUsers,
} from "react-icons/fi";
import { Link } from "react-router-dom";

import { Styled } from "./styled";

const About = () => {
    return (
        <Styled.Wrapper>
            <section className="heroSection">
                <div className="heroTop">
                    <span className="eyebrow">ABOUT DRISHTI FOUNDATION</span>

                    <span className="pageNumber">02 / FOUNDATION</span>
                </div>

                <div className="heroGrid">
                    <div className="heroCopy">
                        <h1>
                            We believe in
                            <span>seeing possibility.</span>
                        </h1>

                        <p>
                            Drishti Foundation is a platform focused on
                            education, awareness, opportunity and community
                            participation. Our aim is to encourage practical
                            actions that can help people create stronger and
                            more independent futures.
                        </p>
                    </div>

                    <div className="heroImage">
                        <img
                            src="https://picsum.photos/seed/drishti-about-hero/1200/950"
                            alt="People connecting and working together"
                        />

                        <div className="imageOverlay" />

                        <div className="imageLabel">
                            <span>Our perspective</span>
                            <strong>
                                See clearly.
                                <br />
                                Act meaningfully.
                            </strong>
                        </div>
                    </div>
                </div>
            </section>

            <section className="storySection">
                <div className="storyMeta">
                    <span>OUR STORY</span>
                    <span>01</span>
                </div>

                <div className="storyGrid">
                    <h2>Change does not always begin with something big.</h2>

                    <div className="storyCopy">
                        <p>
                            It can begin with access to information, a useful
                            opportunity, a supportive community or someone
                            willing to help another person move forward.
                        </p>

                        <p>
                            Drishti Foundation exists to create space for those
                            moments. We want to connect awareness with action
                            and ideas with meaningful outcomes.
                        </p>
                    </div>
                </div>
            </section>

            <section className="visionSection">
                <article className="visionCard">
                    <div className="cardTop">
                        <FiEye />
                        <span>01</span>
                    </div>

                    <div>
                        <span className="cardLabel">Vision</span>

                        <h3>
                            A future where opportunity is easier to see and
                            easier to reach.
                        </h3>
                    </div>
                </article>

                <article className="visionCard dark">
                    <div className="cardTop">
                        <FiTarget />
                        <span>02</span>
                    </div>

                    <div>
                        <span className="cardLabel">Mission</span>

                        <h3>
                            Create useful initiatives that turn awareness into
                            practical progress.
                        </h3>
                    </div>
                </article>

                <article className="visionCard imageCard">
                    <img
                        src="https://picsum.photos/seed/drishti-about-card/900/1000"
                        alt="Community support"
                    />

                    <div className="imageOverlay" />

                    <div className="cardTop">
                        <FiUsers />
                        <span>03</span>
                    </div>

                    <div>
                        <span className="cardLabel">Community</span>

                        <h3>
                            Progress becomes stronger when people move forward
                            together.
                        </h3>
                    </div>
                </article>
            </section>

            <section className="valuesSection">
                <div className="valuesIntro">
                    <span className="eyebrow">WHAT GUIDES US</span>

                    <h2>
                        Simple principles.
                        <span>Meaningful outcomes.</span>
                    </h2>
                </div>

                <div className="valuesList">
                    <div className="valueRow">
                        <span className="valueNumber">01</span>

                        <div>
                            <strong>Respect</strong>
                            <p>
                                Every person deserves dignity, consideration and
                                the opportunity to participate.
                            </p>
                        </div>

                        <FiHeart />
                    </div>

                    <div className="valueRow">
                        <span className="valueNumber">02</span>

                        <div>
                            <strong>Clarity</strong>
                            <p>
                                We value simple communication, useful
                                information and transparent intent.
                            </p>
                        </div>

                        <FiEye />
                    </div>

                    <div className="valueRow">
                        <span className="valueNumber">03</span>

                        <div>
                            <strong>Action</strong>
                            <p>
                                Ideas matter most when they lead to something
                                practical, useful and measurable.
                            </p>
                        </div>

                        <FiTarget />
                    </div>

                    <div className="valueRow">
                        <span className="valueNumber">04</span>

                        <div>
                            <strong>Participation</strong>
                            <p>
                                Sustainable progress grows through collaboration
                                and shared responsibility.
                            </p>
                        </div>

                        <FiUsers />
                    </div>
                </div>
            </section>

            <section className="closingSection">
                <div>
                    <span>THE NEXT STEP</span>

                    <h2>
                        Vision becomes valuable
                        <strong>when it becomes action.</strong>
                    </h2>
                </div>

                <div className="closingAction">
                    <p>
                        Discover the initiatives and areas where Drishti
                        Foundation aims to create meaningful impact.
                    </p>

                    <Link to="/work">
                        Explore our work
                        <FiArrowRight />
                    </Link>
                </div>
            </section>
        </Styled.Wrapper>
    );
};

export default About;
