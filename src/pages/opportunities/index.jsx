import {
    FiArrowRight,
    FiArrowUpRight,
    FiBriefcase,
    FiClock,
    FiMapPin,
    FiUsers,
} from "react-icons/fi";
import { Link } from "react-router-dom";

import { Styled } from "./styled";

const opportunities = [
    {
        id: "01",
        type: "Volunteer",
        title: "Community Volunteer",
        location: "Bengaluru",
        commitment: "Flexible",
        description:
            "Support awareness, community participation and foundation-led activities.",
        slug: "community-volunteer",
    },
    {
        id: "02",
        type: "Volunteer",
        title: "Digital Awareness Volunteer",
        location: "Hybrid",
        commitment: "4 hrs / week",
        description:
            "Help create simple digital awareness resources and support learning sessions.",
        slug: "digital-awareness-volunteer",
    },
    {
        id: "03",
        type: "Contributor",
        title: "Content & Research Contributor",
        location: "Remote",
        commitment: "Flexible",
        description:
            "Contribute useful research, stories and educational content for foundation initiatives.",
        slug: "content-research-contributor",
    },
    {
        id: "04",
        type: "Community",
        title: "Local Community Coordinator",
        location: "Bengaluru",
        commitment: "Part-time",
        description:
            "Help coordinate community conversations, activities and participation opportunities.",
        slug: "community-coordinator",
    },
];

const Opportunities = () => {
    return (
        <Styled.Wrapper>
            <section className="heroSection">
                <div className="heroMeta">
                    <span>OPPORTUNITIES</span>
                    <span>08 / FOUNDATION</span>
                </div>

                <div className="heroGrid">
                    <h1>
                        Your time can
                        <span>create impact.</span>
                    </h1>

                    <div className="heroCopy">
                        <FiUsers />

                        <p>
                            Explore ways to volunteer, contribute and take part
                            in initiatives focused on awareness, education and
                            community progress.
                        </p>
                    </div>
                </div>
            </section>

            <section className="featureSection">
                <div className="featureImage">
                    <img
                        src="https://picsum.photos/seed/drishti-opportunities/1500/950"
                        alt="People collaborating"
                    />

                    <div className="imageOverlay" />
                </div>

                <div className="featureContent">
                    <span className="eyebrow">GET INVOLVED</span>

                    <h2>
                        Meaningful work starts
                        <span>with participation.</span>
                    </h2>

                    <p>
                        You do not need to have all the answers to contribute.
                        Time, skills, ideas and willingness to help can all
                        become part of positive change.
                    </p>

                    <Link to="/contact">
                        Start a conversation
                        <FiArrowRight />
                    </Link>
                </div>
            </section>

            <section className="opportunitiesSection">
                <div className="sectionHeader">
                    <span>OPEN OPPORTUNITIES</span>

                    <strong>
                        {String(opportunities.length).padStart(2, "0")} Roles
                    </strong>
                </div>

                <div className="opportunitiesList">
                    {opportunities.map((opportunity) => (
                        <Link
                            key={opportunity.id}
                            to={`/opportunities/${opportunity.slug}`}
                            className="opportunityRow"
                        >
                            <span className="opportunityNumber">
                                {opportunity.id}
                            </span>

                            <span className="opportunityIcon">
                                <FiBriefcase />
                            </span>

                            <div className="opportunityMain">
                                <span>{opportunity.type}</span>

                                <strong>{opportunity.title}</strong>

                                <p>{opportunity.description}</p>
                            </div>

                            <div className="opportunityMeta">
                                <span>
                                    <FiMapPin />
                                    {opportunity.location}
                                </span>

                                <span>
                                    <FiClock />
                                    {opportunity.commitment}
                                </span>
                            </div>

                            <span className="opportunityAction">
                                <FiArrowUpRight />
                            </span>
                        </Link>
                    ))}
                </div>
            </section>

            <section className="valuesSection">
                <div className="valuesHeading">
                    <span>WHAT MATTERS</span>

                    <h2>
                        Skills help.
                        <span>Intent matters more.</span>
                    </h2>
                </div>

                <div className="valuesGrid">
                    <article>
                        <span>01</span>
                        <strong>Curiosity</strong>
                        <p>
                            Be willing to learn, ask questions and understand
                            the people you are working with.
                        </p>
                    </article>

                    <article>
                        <span>02</span>
                        <strong>Reliability</strong>
                        <p>
                            Consistency and follow-through are often more
                            valuable than short bursts of activity.
                        </p>
                    </article>

                    <article>
                        <span>03</span>
                        <strong>Respect</strong>
                        <p>
                            Listen carefully, communicate clearly and treat
                            every person with dignity.
                        </p>
                    </article>

                    <article>
                        <span>04</span>
                        <strong>Participation</strong>
                        <p>
                            Positive change becomes stronger when people
                            contribute together.
                        </p>
                    </article>
                </div>
            </section>

            <section className="closingSection">
                <div>
                    <span>JOIN THE JOURNEY</span>

                    <h2>
                        Bring what you know.
                        <strong>Learn what you do not.</strong>
                    </h2>
                </div>

                <Link to="/contact">
                    Get in touch
                    <FiArrowUpRight />
                </Link>
            </section>
        </Styled.Wrapper>
    );
};

export default Opportunities;
