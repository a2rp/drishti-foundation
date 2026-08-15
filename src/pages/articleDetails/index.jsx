import {
    FiArrowLeft,
    FiArrowRight,
    FiClock,
    FiFacebook,
    FiLinkedin,
    FiShare2,
} from "react-icons/fi";
import { Link, useParams } from "react-router-dom";

import { Styled } from "./styled";

const articles = {
    "access-to-knowledge": {
        category: "Education",
        title: "Why access to knowledge can change a life",
        intro: "Education becomes more powerful when useful information reaches people at the right time and in the right form.",
        image: "https://picsum.photos/seed/drishti-article-education/1600/1000",
        readTime: "5 min read",
        number: "01",
    },

    "stronger-communities": {
        category: "Community",
        title: "Progress becomes stronger when people move together",
        intro: "Communities create lasting progress when participation, trust and shared responsibility become part of the process.",
        image: "https://picsum.photos/seed/drishti-article-community/1600/1000",
        readTime: "6 min read",
        number: "02",
    },

    "small-actions": {
        category: "Awareness",
        title: "Small actions can create meaningful change",
        intro: "Positive social change is often built through simple actions repeated consistently over time.",
        image: "https://picsum.photos/seed/drishti-article-action/1600/1000",
        readTime: "4 min read",
        number: "03",
    },

    "digital-awareness": {
        category: "Digital",
        title: "Digital awareness is becoming a basic life skill",
        intro: "Knowing how to use digital tools safely and confidently can open access to education, work and essential services.",
        image: "https://picsum.photos/seed/drishti-article-digital/1600/1000",
        readTime: "7 min read",
        number: "04",
    },

    "opportunity-and-barriers": {
        category: "Opportunity",
        title: "Opportunity begins when barriers become visible",
        intro: "Understanding the barriers people face is the first step toward building solutions that can actually help.",
        image: "https://picsum.photos/seed/drishti-article-opportunity/1600/1000",
        readTime: "5 min read",
        number: "05",
    },

    "meaningful-impact": {
        category: "Perspective",
        title: "Why meaningful impact takes time",
        intro: "Sustainable impact is not built overnight. It grows through patience, consistency and long-term participation.",
        image: "https://picsum.photos/seed/drishti-article-impact/1600/1000",
        readTime: "6 min read",
        number: "06",
    },
};

const ArticleDetails = () => {
    const { articleSlug } = useParams();

    const article = articles[articleSlug] || articles["access-to-knowledge"];

    return (
        <Styled.Wrapper>
            <section className="heroSection">
                <div className="topBar">
                    <Link to="/articles">
                        <FiArrowLeft />
                        Back to stories
                    </Link>

                    <span>ARTICLE / {article.number}</span>
                </div>

                <div className="heroContent">
                    <div className="articleMeta">
                        <span>{article.category}</span>

                        <span>
                            <FiClock />
                            {article.readTime}
                        </span>
                    </div>

                    <h1>{article.title}</h1>

                    <p>{article.intro}</p>
                </div>
            </section>

            <section className="heroImage">
                <img src={article.image} alt={article.title} />

                <div className="imageNumber">{article.number}</div>
            </section>

            <section className="articleSection">
                <aside className="articleAside">
                    <span>SHARE STORY</span>

                    <div className="shareButtons">
                        <button type="button" aria-label="Share article">
                            <FiShare2 />
                        </button>

                        <a
                            href="https://www.linkedin.com"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="LinkedIn"
                        >
                            <FiLinkedin />
                        </a>

                        <a
                            href="https://www.facebook.com"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Facebook"
                        >
                            <FiFacebook />
                        </a>
                    </div>
                </aside>

                <article className="articleContent">
                    <p className="lead">
                        Meaningful progress often begins with something simple:
                        access to the right information, the right support or
                        the right opportunity at the right time.
                    </p>

                    <p>
                        For many people, barriers are not always caused by a
                        lack of ability. They can come from limited access,
                        missing information, lack of confidence or simply not
                        knowing what opportunities are available.
                    </p>

                    <h2>
                        Awareness can become the first step toward progress.
                    </h2>

                    <p>
                        When information is understandable and easy to access,
                        people can make better decisions. They can identify new
                        possibilities, learn useful skills and become more
                        confident in navigating everyday challenges.
                    </p>

                    <blockquote>
                        Progress becomes possible when knowledge is not only
                        available, but accessible and useful.
                    </blockquote>

                    <p>
                        This is why awareness matters. It creates a bridge
                        between what exists and the people who may benefit from
                        it.
                    </p>

                    <h2>Small improvements can create larger outcomes.</h2>

                    <p>
                        Social impact does not always require large-scale
                        intervention. A useful resource, a clear explanation, an
                        introduction or a supportive conversation can sometimes
                        create an important turning point.
                    </p>

                    <p>
                        The goal is not simply to provide information. It is to
                        make information useful enough that people can act on
                        it.
                    </p>

                    <div className="articleHighlight">
                        <span>DRISHTI PERSPECTIVE</span>

                        <strong>
                            Give people clarity, access and opportunity, and
                            they can create their own momentum.
                        </strong>
                    </div>

                    <h2>Long-term change requires consistency.</h2>

                    <p>
                        Sustainable improvement is rarely immediate. It grows
                        through repeated effort, participation and trust. That
                        is why community involvement and long-term thinking are
                        important parts of meaningful social work.
                    </p>

                    <p>
                        Every initiative can begin small, but with the right
                        intent and consistency, small actions can become part of
                        something much larger.
                    </p>
                </article>
            </section>

            <section className="nextStorySection">
                <span>NEXT STEP</span>

                <div>
                    <h2>
                        Continue exploring
                        <strong>ideas that matter.</strong>
                    </h2>

                    <Link to="/articles">
                        View all stories
                        <FiArrowRight />
                    </Link>
                </div>
            </section>
        </Styled.Wrapper>
    );
};

export default ArticleDetails;
