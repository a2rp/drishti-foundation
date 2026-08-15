import {
    FiArrowLeft,
    FiArrowRight,
    FiBriefcase,
    FiClock,
    FiMapPin,
    FiUsers,
} from "react-icons/fi";
import { Link, useParams } from "react-router-dom";

import { Styled } from "./styled";

const opportunities = {
    "community-volunteer": {
        number: "01",
        type: "Volunteer",
        title: "Community Volunteer",
        location: "Bengaluru",
        commitment: "Flexible",
        image: "https://picsum.photos/seed/drishti-opportunity-community/1600/1000",
        intro: "Support awareness, community participation and foundation-led activities through practical involvement and consistent contribution.",
    },

    "digital-awareness-volunteer": {
        number: "02",
        type: "Volunteer",
        title: "Digital Awareness Volunteer",
        location: "Hybrid",
        commitment: "4 hrs / week",
        image: "https://picsum.photos/seed/drishti-opportunity-digital/1600/1000",
        intro: "Help create simple digital awareness resources and support learning sessions focused on practical digital confidence.",
    },

    "content-research-contributor": {
        number: "03",
        type: "Contributor",
        title: "Content & Research Contributor",
        location: "Remote",
        commitment: "Flexible",
        image: "https://picsum.photos/seed/drishti-opportunity-content/1600/1000",
        intro: "Contribute research, stories and educational content that can support awareness and community-focused initiatives.",
    },

    "community-coordinator": {
        number: "04",
        type: "Community",
        title: "Local Community Coordinator",
        location: "Bengaluru",
        commitment: "Part-time",
        image: "https://picsum.photos/seed/drishti-opportunity-coordinator/1600/1000",
        intro: "Help coordinate community conversations, activities and participation opportunities with consistency and care.",
    },
};

const OpportunityDetails = () => {
    const { opportunitySlug } = useParams();

    const opportunity =
        opportunities[opportunitySlug] || opportunities["community-volunteer"];

    return (
        <Styled.Wrapper>
            <section className="heroSection">
                <div className="topBar">
                    <Link to="/opportunities">
                        <FiArrowLeft />
                        Back to opportunities
                    </Link>

                    <span>OPPORTUNITY / {opportunity.number}</span>
                </div>

                <div className="heroGrid">
                    <div className="heroContent">
                        <span className="eyebrow">{opportunity.type}</span>

                        <h1>{opportunity.title}</h1>

                        <p>{opportunity.intro}</p>
                    </div>

                    <div className="opportunityInfo">
                        <div>
                            <FiMapPin />

                            <span>Location</span>

                            <strong>{opportunity.location}</strong>
                        </div>

                        <div>
                            <FiClock />

                            <span>Commitment</span>

                            <strong>{opportunity.commitment}</strong>
                        </div>

                        <div>
                            <FiBriefcase />

                            <span>Type</span>

                            <strong>{opportunity.type}</strong>
                        </div>
                    </div>
                </div>
            </section>

            <section className="heroImage">
                <img src={opportunity.image} alt={opportunity.title} />

                <div className="imageOverlay" />

                <div className="imageContent">
                    <span>DRISHTI FOUNDATION</span>

                    <strong>
                        Contribute what you can.
                        <br />
                        Learn along the way.
                    </strong>
                </div>
            </section>

            <section className="detailsSection">
                <aside className="detailsAside">
                    <span>OPPORTUNITY DETAILS</span>

                    <div className="asideMeta">
                        <div>
                            <FiMapPin />
                            <span>{opportunity.location}</span>
                        </div>

                        <div>
                            <FiClock />
                            <span>{opportunity.commitment}</span>
                        </div>

                        <div>
                            <FiUsers />
                            <span>Open participation</span>
                        </div>
                    </div>
                </aside>

                <article className="detailsContent">
                    <p className="lead">
                        This opportunity is for people who want to contribute
                        time, ideas and effort toward practical community
                        initiatives.
                    </p>

                    <p>
                        You do not need to be an expert. What matters most is
                        reliability, willingness to learn and respect for the
                        people and communities involved.
                    </p>

                    <h2>What you may work on</h2>

                    <div className="responsibilityGrid">
                        <div>
                            <span>01</span>

                            <strong>Support activities</strong>

                            <p>
                                Help with planning, coordination and basic
                                execution of foundation initiatives.
                            </p>
                        </div>

                        <div>
                            <span>02</span>

                            <strong>Share useful information</strong>

                            <p>
                                Assist in creating or distributing practical,
                                easy-to-understand awareness material.
                            </p>
                        </div>

                        <div>
                            <span>03</span>

                            <strong>Engage with people</strong>

                            <p>
                                Participate in conversations, sessions and
                                community-focused activities.
                            </p>
                        </div>
                    </div>

                    <h2>What we value</h2>

                    <p>
                        We value consistency, clarity, curiosity and respect.
                        Being dependable and willing to learn is more important
                        than having a long list of qualifications.
                    </p>

                    <div className="highlightBlock">
                        <FiUsers />

                        <div>
                            <span>WHO SHOULD APPLY</span>

                            <strong>
                                People who care about learning, participation
                                and practical social impact.
                            </strong>
                        </div>
                    </div>

                    <h2>How to apply</h2>

                    <p>
                        Use the contact page and mention the opportunity title
                        in your message. Share a short introduction, your
                        availability and how you would like to contribute.
                    </p>

                    <Link to="/contact" className="applyButton">
                        Apply / Get in touch
                        <FiArrowRight />
                    </Link>
                </article>
            </section>

            <section className="closingSection">
                <span>MORE WAYS TO CONTRIBUTE</span>

                <div>
                    <h2>
                        Participation can become
                        <strong>meaningful progress.</strong>
                    </h2>

                    <Link to="/opportunities">
                        View all opportunities
                        <FiArrowRight />
                    </Link>
                </div>
            </section>
        </Styled.Wrapper>
    );
};

export default OpportunityDetails;
