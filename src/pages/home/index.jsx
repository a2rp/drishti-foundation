import {
    FiArrowRight,
    FiArrowUpRight,
    FiBookOpen,
    FiHeart,
    FiUsers,
} from "react-icons/fi";
import { Link } from "react-router-dom";

import { Styled } from "./styled";

const Home = () => {
    return (
        <Styled.Wrapper>
            <section className="heroSection">
                <div className="heroContent">
                    <span className="eyebrow">DRISHTI FOUNDATION / INDIA</span>

                    <h1>
                        A clearer vision
                        <span>for a better tomorrow.</span>
                    </h1>

                    <p className="heroDescription">
                        We work to create meaningful opportunities through
                        education, awareness, community action and initiatives
                        that help people move forward.
                    </p>

                    <div className="heroActions">
                        <Link to="/work" className="primaryButton">
                            Explore our work
                            <FiArrowRight />
                        </Link>

                        <Link to="/about-us" className="textButton">
                            Who we are
                            <FiArrowUpRight />
                        </Link>
                    </div>
                </div>

                <div className="heroVisual">
                    <img
                        src="https://picsum.photos/seed/drishti-foundation-hero/1200/1400"
                        alt="Community and human connection"
                    />

                    <div className="heroVisualOverlay" />

                    <div className="heroVisualNote">
                        <span>Our purpose</span>

                        <strong>
                            Enabling people.
                            <br />
                            Strengthening communities.
                        </strong>
                    </div>

                    <div className="heroNumber">
                        <span>01</span>
                        <small>Vision in action</small>
                    </div>
                </div>
            </section>

            <section className="introSection">
                <div className="sectionMeta">
                    <span>WHAT WE BELIEVE</span>
                </div>

                <div className="introContent">
                    <h2>
                        Real change begins when
                        <span>people are given a chance.</span>
                    </h2>

                    <div className="introCopy">
                        <p>
                            Drishti Foundation is built around a simple idea:
                            progress becomes possible when knowledge, access and
                            opportunity reach the people who need them.
                        </p>

                        <Link to="/about-us">
                            Learn about the foundation
                            <FiArrowUpRight />
                        </Link>
                    </div>
                </div>
            </section>

            <section className="impactSection">
                <article className="impactCard educationCard">
                    <div className="cardIcon">
                        <FiBookOpen />
                    </div>

                    <span className="cardIndex">01</span>

                    <div className="cardContent">
                        <span>Education</span>

                        <h3>Knowledge that creates possibilities.</h3>

                        <p>
                            Supporting learning, digital awareness and access to
                            information that can help people build stronger
                            futures.
                        </p>
                    </div>
                </article>

                <article className="impactCard communityCard">
                    <img
                        src="https://picsum.photos/seed/drishti-community/1000/900"
                        alt="People working together"
                    />

                    <div className="imageOverlay" />

                    <div className="cardIcon light">
                        <FiUsers />
                    </div>

                    <span className="cardIndex light">02</span>

                    <div className="cardContent light">
                        <span>Community</span>

                        <h3>Progress that includes everyone.</h3>
                    </div>
                </article>

                <article className="impactCard supportCard">
                    <div className="cardIcon">
                        <FiHeart />
                    </div>

                    <span className="cardIndex">03</span>

                    <div className="cardContent">
                        <span>Support</span>

                        <h3>Small actions can create lasting impact.</h3>

                        <p>
                            Connecting people, ideas and resources to encourage
                            practical and positive change.
                        </p>
                    </div>
                </article>
            </section>

            <section className="storySection">
                <div className="storyImage">
                    <img
                        src="https://picsum.photos/seed/drishti-story/1500/950"
                        alt="Social impact story"
                    />
                </div>

                <div className="storyContent">
                    <span className="eyebrow">OUR WORK / REAL PEOPLE</span>

                    <h2>
                        Impact is not a number.
                        <span>It is a changed life.</span>
                    </h2>

                    <p>
                        Our work focuses on practical initiatives that can make
                        a visible difference in everyday lives. We believe
                        meaningful impact is built through consistency,
                        collaboration and trust.
                    </p>

                    <Link to="/work">
                        See what we do
                        <FiArrowRight />
                    </Link>
                </div>
            </section>

            <section className="ctaSection">
                <div className="ctaInner">
                    <span>JOIN THE JOURNEY</span>

                    <h2>
                        Better futures are
                        <strong>built together.</strong>
                    </h2>

                    <div className="ctaBottom">
                        <p>
                            Explore our initiatives, stories and opportunities
                            to contribute to meaningful change.
                        </p>

                        <Link to="/contact">
                            Get involved
                            <FiArrowUpRight />
                        </Link>
                    </div>
                </div>
            </section>
        </Styled.Wrapper>
    );
};

export default Home;
