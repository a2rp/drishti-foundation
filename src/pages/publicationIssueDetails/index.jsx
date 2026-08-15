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

const publicationIssues = {
    "community-perspectives": {
        publicationTitle: "Community Perspectives",
        publicationNumber: "01",
        issues: {
            "access-to-knowledge": {
                number: "01",
                title: "Access to Knowledge",
                subtitle: "Education & Awareness",
                date: "Aug 2026",
                pages: "24 Pages",
                image: "https://picsum.photos/seed/drishti-issue-knowledge/1400/1800",
                intro: "A focused issue exploring how access to useful information, learning and awareness can create meaningful opportunities.",
            },

            "community-participation": {
                number: "02",
                title: "Community Participation",
                subtitle: "Participation & Progress",
                date: "Aug 2026",
                pages: "20 Pages",
                image: "https://picsum.photos/seed/drishti-issue-community/1400/1800",
                intro: "A perspective on the role of participation, collaboration and shared responsibility in building stronger communities.",
            },

            "awareness-and-opportunity": {
                number: "03",
                title: "Awareness and Opportunity",
                subtitle: "Opportunity & Access",
                date: "Aug 2026",
                pages: "28 Pages",
                image: "https://picsum.photos/seed/drishti-issue-awareness/1400/1800",
                intro: "Exploring how awareness can help people recognize possibilities, understand barriers and take meaningful action.",
            },
        },
    },

    "digital-access": {
        publicationTitle: "Digital Access",
        publicationNumber: "02",
        issues: {
            "digital-confidence": {
                number: "01",
                title: "Digital Confidence",
                subtitle: "Digital Awareness",
                date: "Jul 2026",
                pages: "22 Pages",
                image: "https://picsum.photos/seed/drishti-issue-digital/1400/1800",
                intro: "An accessible look at digital confidence and why understanding everyday technology is becoming increasingly important.",
            },

            "safer-digital-use": {
                number: "02",
                title: "Safer Digital Use",
                subtitle: "Digital Safety",
                date: "Jul 2026",
                pages: "18 Pages",
                image: "https://picsum.photos/seed/drishti-issue-safety/1400/1800",
                intro: "A practical issue focused on safer, more informed and more confident use of digital tools.",
            },
        },
    },

    "opportunity-notes": {
        publicationTitle: "Opportunity Notes",
        publicationNumber: "03",
        issues: {
            "understanding-barriers": {
                number: "01",
                title: "Understanding Barriers",
                subtitle: "Access & Opportunity",
                date: "Jun 2026",
                pages: "26 Pages",
                image: "https://picsum.photos/seed/drishti-issue-barriers/1400/1800",
                intro: "A closer look at the barriers that can prevent people from reaching useful opportunities and resources.",
            },

            "creating-opportunity": {
                number: "02",
                title: "Creating Opportunity",
                subtitle: "Community & Progress",
                date: "Jun 2026",
                pages: "24 Pages",
                image: "https://picsum.photos/seed/drishti-issue-opportunity/1400/1800",
                intro: "Exploring practical ways communities, information and support can help create new possibilities.",
            },
        },
    },
};

const PublicationIssueDetails = () => {
    const { publicationSlug, issueSlug } = useParams();

    const publication =
        publicationIssues[publicationSlug] ||
        publicationIssues["community-perspectives"];

    const issue =
        publication.issues[issueSlug] || Object.values(publication.issues)[0];

    return (
        <Styled.Wrapper>
            <section className="heroSection">
                <div className="topBar">
                    <Link to={`/publications/${publicationSlug}`}>
                        <FiArrowLeft />
                        Back to publication
                    </Link>

                    <span>
                        {publication.publicationNumber} / ISSUE {issue.number}
                    </span>
                </div>

                <div className="heroGrid">
                    <div className="coverWrapper">
                        <div className="cover">
                            <img src={issue.image} alt={issue.title} />

                            <div className="coverOverlay" />

                            <div className="coverTop">
                                <span>DRISHTI</span>

                                <span>
                                    {publication.publicationNumber}.
                                    {issue.number}
                                </span>
                            </div>

                            <div className="coverBottom">
                                <span>{publication.publicationTitle}</span>

                                <strong>{issue.title}</strong>
                            </div>
                        </div>
                    </div>

                    <div className="heroContent">
                        <span className="eyebrow">PUBLICATION ISSUE</span>

                        <h1>{issue.title}</h1>

                        <span className="subtitle">{issue.subtitle}</span>

                        <p>{issue.intro}</p>

                        <div className="issueMeta">
                            <div>
                                <FiCalendar />

                                <span>Published</span>

                                <strong>{issue.date}</strong>
                            </div>

                            <div>
                                <FiFileText />

                                <span>Length</span>

                                <strong>{issue.pages}</strong>
                            </div>

                            <div>
                                <FiBookOpen />

                                <span>Publication</span>

                                <strong>{publication.publicationTitle}</strong>
                            </div>
                        </div>

                        <button type="button" className="downloadButton">
                            <FiDownload />
                            Download issue
                        </button>
                    </div>
                </div>
            </section>

            <section className="articleSection">
                <aside className="articleAside">
                    <span>IN THIS ISSUE</span>

                    <nav>
                        <a href="#introduction">Introduction</a>
                        <a href="#perspective">Perspective</a>
                        <a href="#action">From idea to action</a>
                        <a href="#closing">Closing note</a>
                    </nav>
                </aside>

                <article className="articleContent">
                    <section id="introduction">
                        <span className="sectionLabel">01 / INTRODUCTION</span>

                        <p className="lead">
                            Access to useful information can influence how
                            people understand their choices, identify
                            opportunities and make everyday decisions.
                        </p>

                        <p>
                            Information itself is not always enough. It also
                            needs to be understandable, relevant and available
                            in a form that people can actually use.
                        </p>
                    </section>

                    <section id="perspective">
                        <span className="sectionLabel">02 / PERSPECTIVE</span>

                        <h2>
                            Knowledge becomes more valuable when it becomes
                            accessible.
                        </h2>

                        <p>
                            Access can be limited by many things: language,
                            technology, geography, confidence or simply not
                            knowing where to look.
                        </p>

                        <p>
                            Removing even one of those barriers can help a
                            person take a step that previously felt difficult or
                            unavailable.
                        </p>

                        <blockquote>
                            Clarity creates confidence, and confidence can
                            create movement.
                        </blockquote>
                    </section>

                    <section id="action">
                        <span className="sectionLabel">
                            03 / FROM IDEA TO ACTION
                        </span>

                        <h2>Practical impact can begin with simple actions.</h2>

                        <div className="actionGrid">
                            <div>
                                <span>01</span>

                                <strong>Share clearly</strong>

                                <p>
                                    Make useful information understandable and
                                    easy to access.
                                </p>
                            </div>

                            <div>
                                <span>02</span>

                                <strong>Build confidence</strong>

                                <p>
                                    Help people feel comfortable asking
                                    questions and learning.
                                </p>
                            </div>

                            <div>
                                <span>03</span>

                                <strong>Create connection</strong>

                                <p>
                                    Connect people with resources, communities
                                    and opportunities.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section id="closing">
                        <span className="sectionLabel">04 / CLOSING NOTE</span>

                        <h2>
                            Awareness is most powerful when people can act on
                            it.
                        </h2>

                        <p>
                            That is the larger purpose behind Drishti
                            Foundation's publications: to make useful
                            perspectives easier to understand, revisit and
                            share.
                        </p>

                        <div className="closingNote">
                            <span>DRISHTI FOUNDATION</span>

                            <strong>
                                See clearly. Understand deeply. Act
                                meaningfully.
                            </strong>
                        </div>
                    </section>
                </article>
            </section>

            <section className="nextSection">
                <span>CONTINUE READING</span>

                <div>
                    <h2>
                        Explore more
                        <strong>from the collection.</strong>
                    </h2>

                    <Link to={`/publications/${publicationSlug}`}>
                        View publication
                        <FiArrowRight />
                    </Link>
                </div>
            </section>
        </Styled.Wrapper>
    );
};

export default PublicationIssueDetails;
