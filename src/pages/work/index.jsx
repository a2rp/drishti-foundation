import {
    FiArrowRight,
    FiBookOpen,
    FiHeart,
    FiMonitor,
    FiUsers,
} from "react-icons/fi";
import { Link } from "react-router-dom";

import { Styled } from "./styled";

const Work = () => {
    const initiatives = [
        {
            id: "01",
            icon: <FiBookOpen />,
            title: "Education",
            text: "Supporting access to knowledge, learning resources and practical awareness.",
        },
        {
            id: "02",
            icon: <FiMonitor />,
            title: "Digital Awareness",
            text: "Helping people understand and use digital tools with greater confidence.",
        },
        {
            id: "03",
            icon: <FiUsers />,
            title: "Community",
            text: "Encouraging collaboration, participation and shared progress.",
        },
        {
            id: "04",
            icon: <FiHeart />,
            title: "Support",
            text: "Creating pathways for useful assistance, information and opportunity.",
        },
    ];

    return (
        <Styled.Wrapper>
            <section className="heroSection">
                <div className="heroMeta">
                    <span>OUR WORK</span>
                    <span>03 / FOUNDATION</span>
                </div>

                <div className="heroGrid">
                    <div>
                        <h1>
                            Ideas matter when
                            <span>they become action.</span>
                        </h1>
                    </div>

                    <div className="heroCopy">
                        <p>
                            Drishti Foundation focuses on practical areas where
                            awareness, access and participation can create
                            meaningful improvement in everyday life.
                        </p>

                        <Link to="/contact">
                            Work with us
                            <FiArrowRight />
                        </Link>
                    </div>
                </div>
            </section>

            <section className="featureImage">
                <img
                    src="https://picsum.photos/seed/drishti-work-main/1800/1000"
                    alt="People working together"
                />

                <div className="imageOverlay" />

                <div className="imageContent">
                    <span>Purpose / Participation / Progress</span>

                    <h2>
                        Building impact
                        <br />
                        through practical work.
                    </h2>
                </div>
            </section>

            <section className="initiativesSection">
                <div className="sectionHeading">
                    <span>FOCUS AREAS</span>

                    <h2>
                        Where we aim
                        <span>to make a difference.</span>
                    </h2>
                </div>

                <div className="initiativesList">
                    {initiatives.map((item) => (
                        <article className="initiative" key={item.id}>
                            <span className="initiativeNumber">{item.id}</span>

                            <div className="initiativeIcon">{item.icon}</div>

                            <h3>{item.title}</h3>

                            <p>{item.text}</p>
                        </article>
                    ))}
                </div>
            </section>

            <section className="approachSection">
                <div className="approachImage">
                    <img
                        src="https://picsum.photos/seed/drishti-work-approach/1100/1200"
                        alt="Community initiative"
                    />
                </div>

                <div className="approachContent">
                    <span className="eyebrow">OUR APPROACH</span>

                    <h2>
                        Listen.
                        <span>Understand.</span>
                        Act.
                    </h2>

                    <p>
                        Sustainable progress starts with understanding real
                        needs. Our approach is to keep initiatives simple,
                        relevant and connected to the people they are intended
                        to support.
                    </p>

                    <div className="approachSteps">
                        <div>
                            <span>01</span>
                            <strong>Identify</strong>
                            <p>
                                Understand the need before defining the
                                solution.
                            </p>
                        </div>

                        <div>
                            <span>02</span>
                            <strong>Connect</strong>
                            <p>
                                Bring together people, knowledge and useful
                                resources.
                            </p>
                        </div>

                        <div>
                            <span>03</span>
                            <strong>Act</strong>
                            <p>
                                Turn ideas into practical initiatives and
                                measurable outcomes.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="closingSection">
                <span>CREATE IMPACT WITH US</span>

                <div>
                    <h2>
                        Every meaningful change
                        <strong>starts somewhere.</strong>
                    </h2>

                    <Link to="/contact">
                        Start a conversation
                        <FiArrowRight />
                    </Link>
                </div>
            </section>
        </Styled.Wrapper>
    );
};

export default Work;
