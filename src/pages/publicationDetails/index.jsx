import {
    FiArrowLeft,
    FiArrowRight,
    FiBookOpen,
    FiCalendar,
    FiDownload,
    FiFileText,
} from "react-icons/fi";
import { Link, useParams } from "react-router-dom";

import { Styled } from "./styled";

const publications = {
    "community-perspectives": {
        number: "01",
        title: "Community Perspectives",
        subtitle: "Education & Awareness",
        date: "Aug 2026",
        image: "https://picsum.photos/seed/drishti-publication-01/1200/1600",
        description:
            "A collection of observations and ideas around access to knowledge, participation and social awareness.",
        issues: [
            {
                id: "01",
                title: "Access to Knowledge",
                slug: "access-to-knowledge",
                pages: "24 Pages",
            },
            {
                id: "02",
                title: "Community Participation",
                slug: "community-participation",
                pages: "20 Pages",
            },
            {
                id: "03",
                title: "Awareness and Opportunity",
                slug: "awareness-and-opportunity",
                pages: "28 Pages",
            },
        ],
    },

    "digital-access": {
        number: "02",
        title: "Digital Access",
        subtitle: "Digital Awareness",
        date: "Jul 2026",
        image: "https://picsum.photos/seed/drishti-publication-02/1200/1600",
        description:
            "Practical perspectives on digital confidence, access and the growing role of technology in everyday life.",
        issues: [
            {
                id: "01",
                title: "Digital Confidence",
                slug: "digital-confidence",
                pages: "22 Pages",
            },
            {
                id: "02",
                title: "Safer Digital Use",
                slug: "safer-digital-use",
                pages: "18 Pages",
            },
        ],
    },

    "opportunity-notes": {
        number: "03",
        title: "Opportunity Notes",
        subtitle: "Community & Progress",
        date: "Jun 2026",
        image: "https://picsum.photos/seed/drishti-publication-03/1200/1600",
        description:
            "Stories and reflections on opportunity, barriers and the importance of community-led progress.",
        issues: [
            {
                id: "01",
                title: "Understanding Barriers",
                slug: "understanding-barriers",
                pages: "26 Pages",
            },
            {
                id: "02",
                title: "Creating Opportunity",
                slug: "creating-opportunity",
                pages: "24 Pages",
            },
        ],
    },
};

const PublicationDetails = () => {
    const { publicationSlug } = useParams();

    const publication =
        publications[publicationSlug] || publications["community-perspectives"];

    return (
        <Styled.Wrapper>
            <section className="heroSection">
                <div className="topBar">
                    <Link to="/publications">
                        <FiArrowLeft />
                        Back to publications
                    </Link>

                    <span>PUBLICATION / {publication.number}</span>
                </div>

                <div className="heroGrid">
                    <div className="coverWrapper">
                        <div className="cover">
                            <img
                                src={publication.image}
                                alt={publication.title}
                            />

                            <div className="coverOverlay" />

                            <div className="coverTop">
                                <span>DRISHTI</span>
                                <span>{publication.number}</span>
                            </div>

                            <div className="coverBottom">
                                <span>{publication.subtitle}</span>

                                <strong>{publication.title}</strong>
                            </div>
                        </div>
                    </div>

                    <div className="heroContent">
                        <span className="eyebrow">DRISHTI PUBLICATION</span>

                        <h1>{publication.title}</h1>

                        <span className="subtitle">{publication.subtitle}</span>

                        <p>{publication.description}</p>

                        <div className="publicationMeta">
                            <div>
                                <FiCalendar />
                                <span>Published</span>
                                <strong>{publication.date}</strong>
                            </div>

                            <div>
                                <FiBookOpen />
                                <span>Issues</span>
                                <strong>{publication.issues.length}</strong>
                            </div>
                        </div>

                        <button type="button" className="downloadButton">
                            <FiDownload />
                            Download publication
                        </button>
                    </div>
                </div>
            </section>

            <section className="introSection">
                <div className="introMeta">
                    <span>ABOUT THIS PUBLICATION</span>
                    <span>01</span>
                </div>

                <div className="introGrid">
                    <h2>
                        Ideas documented
                        <span>for wider understanding.</span>
                    </h2>

                    <div>
                        <p>
                            This publication brings together perspectives on
                            awareness, access, opportunity and community
                            participation.
                        </p>

                        <p>
                            The purpose is to make useful ideas easier to
                            understand, share and revisit over time.
                        </p>
                    </div>
                </div>
            </section>

            <section className="issuesSection">
                <div className="sectionHeader">
                    <span>ISSUES</span>

                    <strong>
                        {String(publication.issues.length).padStart(2, "0")}{" "}
                        Editions
                    </strong>
                </div>

                <div className="issuesList">
                    {publication.issues.map((issue) => (
                        <Link
                            key={issue.id}
                            to={`/publications/${publicationSlug}/${issue.slug}`}
                            className="issueRow"
                        >
                            <span className="issueNumber">{issue.id}</span>

                            <span className="issueIcon">
                                <FiFileText />
                            </span>

                            <div className="issueContent">
                                <span>ISSUE {issue.id}</span>
                                <strong>{issue.title}</strong>
                            </div>

                            <span className="issuePages">{issue.pages}</span>

                            <span className="issueAction">
                                <FiArrowRight />
                            </span>
                        </Link>
                    ))}
                </div>
            </section>

            <section className="featureSection">
                <div className="featureImage">
                    <img
                        src="https://picsum.photos/seed/drishti-publication-feature/1500/950"
                        alt="Drishti publication perspective"
                    />

                    <div className="featureOverlay" />
                </div>

                <div className="featureContent">
                    <span>WHY WE PUBLISH</span>

                    <h2>
                        Useful knowledge should
                        <strong>remain accessible.</strong>
                    </h2>

                    <p>
                        Publications create a lasting record of perspectives,
                        ideas and lessons that can continue to inform future
                        conversations.
                    </p>

                    <Link to="/articles">
                        Explore stories
                        <FiArrowRight />
                    </Link>
                </div>
            </section>

            <section className="closingSection">
                <span>DRISHTI / PUBLICATIONS</span>

                <div>
                    <h2>
                        Read deeper.
                        <strong>Understand better.</strong>
                    </h2>

                    <Link to="/publications">
                        View all publications
                        <FiArrowRight />
                    </Link>
                </div>
            </section>
        </Styled.Wrapper>
    );
};

export default PublicationDetails;
