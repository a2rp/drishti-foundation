import {
    FiArrowLeft,
    FiArrowRight,
    FiBookOpen,
    FiGlobe,
    FiUsers,
    FiZap,
} from "react-icons/fi";
import { Link, useParams } from "react-router-dom";

import { Styled } from "./styled";

const workAreas = {
    education: {
        number: "01",
        category: "Education",
        title: "Learning that creates possibility.",
        intro: "Exploring ways to make useful knowledge, educational resources and learning opportunities easier to understand and access.",
        image: "https://picsum.photos/seed/drishti-work-education/1600/1050",
        icon: <FiBookOpen />,
        focus: [
            {
                number: "01",
                title: "Accessible learning",
                description:
                    "Present useful information in clear and understandable ways.",
            },
            {
                number: "02",
                title: "Practical knowledge",
                description:
                    "Focus on learning that can support everyday decisions and opportunities.",
            },
            {
                number: "03",
                title: "Confidence",
                description:
                    "Encourage curiosity, questions and continued learning.",
            },
        ],
    },

    "digital-awareness": {
        number: "02",
        category: "Digital Awareness",
        title: "Confidence in a connected world.",
        intro: "Helping people understand digital tools, online environments and practical technology with greater clarity and confidence.",
        image: "https://picsum.photos/seed/drishti-work-digital/1600/1050",
        icon: <FiGlobe />,
        focus: [
            {
                number: "01",
                title: "Digital confidence",
                description:
                    "Make everyday technology feel easier to understand and use.",
            },
            {
                number: "02",
                title: "Awareness",
                description:
                    "Encourage informed and thoughtful use of digital services.",
            },
            {
                number: "03",
                title: "Access",
                description:
                    "Help connect people with useful digital resources and information.",
            },
        ],
    },

    community: {
        number: "03",
        category: "Community",
        title: "Progress built through participation.",
        intro: "Creating space for people to share perspectives, understand local needs and participate in constructive community action.",
        image: "https://picsum.photos/seed/drishti-work-community/1600/1050",
        icon: <FiUsers />,
        focus: [
            {
                number: "01",
                title: "Listen",
                description:
                    "Understand perspectives before trying to define solutions.",
            },
            {
                number: "02",
                title: "Connect",
                description:
                    "Create opportunities for useful conversations and collaboration.",
            },
            {
                number: "03",
                title: "Participate",
                description:
                    "Encourage people to become active contributors to progress.",
            },
        ],
    },

    support: {
        number: "04",
        category: "Support",
        title: "Small support. Meaningful momentum.",
        intro: "Connecting useful information, people and opportunities so that practical support can become a starting point for progress.",
        image: "https://picsum.photos/seed/drishti-work-support/1600/1050",
        icon: <FiZap />,
        focus: [
            {
                number: "01",
                title: "Understand",
                description:
                    "Begin by understanding the actual need or barrier.",
            },
            {
                number: "02",
                title: "Guide",
                description:
                    "Help make relevant information and possible next steps clearer.",
            },
            {
                number: "03",
                title: "Enable",
                description:
                    "Support people in moving forward with greater confidence.",
            },
        ],
    },
};

const WorkDetails = () => {
    const { workSlug } = useParams();

    const work = workAreas[workSlug] || workAreas.education;

    return (
        <Styled.Wrapper>
            <section className="heroSection">
                <div className="topBar">
                    <Link to="/work">
                        <FiArrowLeft />
                        Back to our work
                    </Link>

                    <span>FOCUS AREA / {work.number}</span>
                </div>

                <div className="heroGrid">
                    <div className="heroContent">
                        <span className="eyebrow">{work.category}</span>

                        <h1>{work.title}</h1>
                    </div>

                    <div className="heroIntro">
                        <span className="heroIcon">{work.icon}</span>

                        <p>{work.intro}</p>
                    </div>
                </div>
            </section>

            <section className="imageSection">
                <img src={work.image} alt={work.category} />

                <div className="imageOverlay" />

                <div className="imageContent">
                    <span>DRISHTI / {work.number}</span>

                    <strong>{work.category}</strong>
                </div>
            </section>

            <section className="perspectiveSection">
                <div className="perspectiveMeta">
                    <span>OUR PERSPECTIVE</span>
                    <span>01</span>
                </div>

                <div className="perspectiveGrid">
                    <h2>
                        Change becomes stronger
                        <span>when people can participate.</span>
                    </h2>

                    <div>
                        <p>
                            Sustainable progress is rarely created by a single
                            action. It develops through understanding,
                            participation and consistent effort.
                        </p>

                        <p>
                            Our approach begins by making ideas, information and
                            opportunities easier to understand and engage with.
                        </p>
                    </div>
                </div>
            </section>

            <section className="focusSection">
                <div className="sectionHeader">
                    <span>WHAT WE FOCUS ON</span>

                    <strong>03 PRINCIPLES</strong>
                </div>

                <div className="focusGrid">
                    {work.focus.map((item) => (
                        <article key={item.number}>
                            <span>{item.number}</span>

                            <div>
                                <strong>{item.title}</strong>

                                <p>{item.description}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            <section className="approachSection">
                <div className="approachVisual">
                    <img
                        src={`https://picsum.photos/seed/drishti-${workSlug}-approach/1100/1200`}
                        alt={`${work.category} approach`}
                    />
                </div>

                <div className="approachContent">
                    <span>HOW WE THINK</span>

                    <h2>
                        Listen first.
                        <strong>Act with clarity.</strong>
                    </h2>

                    <p>
                        Good intentions become more useful when they are guided
                        by understanding. The first step is listening carefully
                        and identifying what can genuinely help.
                    </p>

                    <div className="approachSteps">
                        <div>
                            <span>01</span>
                            <strong>Understand</strong>
                        </div>

                        <div>
                            <span>02</span>
                            <strong>Explore</strong>
                        </div>

                        <div>
                            <span>03</span>
                            <strong>Act</strong>
                        </div>
                    </div>
                </div>
            </section>

            <section className="closingSection">
                <div>
                    <span>BE PART OF THE PROCESS</span>

                    <h2>
                        Better outcomes begin
                        <strong>with better conversations.</strong>
                    </h2>
                </div>

                <Link to="/contact">
                    Start a conversation
                    <FiArrowRight />
                </Link>
            </section>
        </Styled.Wrapper>
    );
};

export default WorkDetails;
