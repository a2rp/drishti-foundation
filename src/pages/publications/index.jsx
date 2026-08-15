import {
    FiArrowRight,
    FiArrowUpRight,
    FiBookOpen,
    FiCalendar,
    FiDownload,
} from "react-icons/fi";
import { Link } from "react-router-dom";

import { Styled } from "./styled";

const publications = [
    {
        id: "01",
        title: "Community Perspectives",
        subtitle: "Issue 01 / Education & Awareness",
        date: "Aug 2026",
        image: "https://picsum.photos/seed/drishti-publication-01/900/1200",
        slug: "community-perspectives",
        description:
            "A collection of observations and ideas around access to knowledge, participation and social awareness.",
    },
    {
        id: "02",
        title: "Digital Access",
        subtitle: "Issue 01 / Digital Awareness",
        date: "Jul 2026",
        image: "https://picsum.photos/seed/drishti-publication-02/900/1200",
        slug: "digital-access",
        description:
            "Practical perspectives on digital confidence, access and the growing role of technology in everyday life.",
    },
    {
        id: "03",
        title: "Opportunity Notes",
        subtitle: "Issue 01 / Community",
        date: "Jun 2026",
        image: "https://picsum.photos/seed/drishti-publication-03/900/1200",
        slug: "opportunity-notes",
        description:
            "Stories and reflections on opportunity, barriers and the importance of community-led progress.",
    },
];

const Publications = () => {
    return (
        <Styled.Wrapper>
            <section className="heroSection">
                <div className="heroMeta">
                    <span>PUBLICATIONS</span>
                    <span>07 / FOUNDATION</span>
                </div>

                <div className="heroGrid">
                    <h1>
                        Ideas collected.
                        <span>Perspectives preserved.</span>
                    </h1>

                    <div className="heroCopy">
                        <FiBookOpen />

                        <p>
                            Reports, collections and editorial publications
                            exploring education, awareness, community and
                            practical social impact.
                        </p>
                    </div>
                </div>
            </section>

            <section className="featuredPublication">
                <div className="coverArea">
                    <div className="cover">
                        <img
                            src={publications[0].image}
                            alt={publications[0].title}
                        />

                        <div className="coverOverlay" />

                        <div className="coverTop">
                            <span>DRISHTI</span>
                            <span>01</span>
                        </div>

                        <div className="coverBottom">
                            <span>PUBLICATION</span>
                            <strong>{publications[0].title}</strong>
                        </div>
                    </div>
                </div>

                <div className="featuredContent">
                    <span className="eyebrow">FEATURED PUBLICATION</span>

                    <h2>{publications[0].title}</h2>

                    <span className="publicationSubtitle">
                        {publications[0].subtitle}
                    </span>

                    <p>{publications[0].description}</p>

                    <div className="publicationMeta">
                        <span>
                            <FiCalendar />
                            {publications[0].date}
                        </span>

                        <span>
                            <FiBookOpen />
                            Issue 01
                        </span>
                    </div>

                    <div className="featuredActions">
                        <Link to={`/publications/${publications[0].slug}`}>
                            View publication
                            <FiArrowRight />
                        </Link>

                        <button type="button">
                            <FiDownload />
                            Download
                        </button>
                    </div>
                </div>
            </section>

            <section className="publicationsSection">
                <div className="sectionHeader">
                    <span>ALL PUBLICATIONS</span>
                    <strong>{publications.length} Editions</strong>
                </div>

                <div className="publicationsGrid">
                    {publications.map((publication) => (
                        <article
                            className="publicationCard"
                            key={publication.id}
                        >
                            <Link
                                to={`/publications/${publication.slug}`}
                                className="publicationCover"
                            >
                                <img
                                    src={publication.image}
                                    alt={publication.title}
                                />

                                <div className="cardOverlay" />

                                <span className="publicationNumber">
                                    {publication.id}
                                </span>

                                <span className="coverAction">
                                    <FiArrowUpRight />
                                </span>
                            </Link>

                            <div className="publicationContent">
                                <div className="publicationTop">
                                    <span>{publication.date}</span>
                                    <span>{publication.subtitle}</span>
                                </div>

                                <h3>
                                    <Link
                                        to={`/publications/${publication.slug}`}
                                    >
                                        {publication.title}
                                    </Link>
                                </h3>

                                <p>{publication.description}</p>

                                <Link
                                    to={`/publications/${publication.slug}`}
                                    className="readLink"
                                >
                                    Open publication
                                    <FiArrowRight />
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            <section className="closingSection">
                <div>
                    <span>DRISHTI / ARCHIVE</span>

                    <h2>
                        Documenting ideas.
                        <strong>Sharing what matters.</strong>
                    </h2>
                </div>

                <Link to="/articles">
                    Explore stories
                    <FiArrowUpRight />
                </Link>
            </section>
        </Styled.Wrapper>
    );
};

export default Publications;
