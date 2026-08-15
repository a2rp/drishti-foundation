import {
    FiArrowRight,
    FiArrowUpRight,
    FiBookOpen,
    FiClock,
} from "react-icons/fi";
import { Link } from "react-router-dom";

import { Styled } from "./styled";

const articles = [
    {
        id: "01",
        category: "Education",
        title: "Why access to knowledge can change a life",
        excerpt:
            "Education becomes more powerful when useful information reaches people at the right time and in the right form.",
        image: "https://picsum.photos/seed/drishti-article-education/1000/760",
        slug: "access-to-knowledge",
        readTime: "5 min read",
    },
    {
        id: "02",
        category: "Community",
        title: "Progress becomes stronger when people move together",
        excerpt:
            "Communities create lasting progress when participation, trust and shared responsibility become part of the process.",
        image: "https://picsum.photos/seed/drishti-article-community/1000/760",
        slug: "stronger-communities",
        readTime: "6 min read",
    },
    {
        id: "03",
        category: "Awareness",
        title: "Small actions can create meaningful change",
        excerpt:
            "Positive social change is often built through simple actions repeated consistently over time.",
        image: "https://picsum.photos/seed/drishti-article-action/1000/760",
        slug: "small-actions",
        readTime: "4 min read",
    },
    {
        id: "04",
        category: "Digital",
        title: "Digital awareness is becoming a basic life skill",
        excerpt:
            "Knowing how to use digital tools safely and confidently can open access to education, work and essential services.",
        image: "https://picsum.photos/seed/drishti-article-digital/1000/760",
        slug: "digital-awareness",
        readTime: "7 min read",
    },
    {
        id: "05",
        category: "Opportunity",
        title: "Opportunity begins when barriers become visible",
        excerpt:
            "Understanding the barriers people face is the first step toward building solutions that can actually help.",
        image: "https://picsum.photos/seed/drishti-article-opportunity/1000/760",
        slug: "opportunity-and-barriers",
        readTime: "5 min read",
    },
    {
        id: "06",
        category: "Perspective",
        title: "Why meaningful impact takes time",
        excerpt:
            "Sustainable impact is not built overnight. It grows through patience, consistency and long-term participation.",
        image: "https://picsum.photos/seed/drishti-article-impact/1000/760",
        slug: "meaningful-impact",
        readTime: "6 min read",
    },
];

const Articles = () => {
    const featuredArticle = articles[0];
    const remainingArticles = articles.slice(1);

    return (
        <Styled.Wrapper>
            <section className="heroSection">
                <div className="heroMeta">
                    <span>STORIES & PERSPECTIVES</span>
                    <span>05 / FOUNDATION</span>
                </div>

                <div className="heroGrid">
                    <h1>
                        Ideas worth
                        <span>sharing.</span>
                    </h1>

                    <div className="heroCopy">
                        <FiBookOpen />

                        <p>
                            Stories, observations and practical perspectives on
                            education, awareness, community and positive social
                            change.
                        </p>
                    </div>
                </div>
            </section>

            <section className="featuredSection">
                <Link
                    to={`/articles/${featuredArticle.slug}`}
                    className="featuredImage"
                >
                    <img
                        src={featuredArticle.image}
                        alt={featuredArticle.title}
                    />

                    <div className="imageOverlay" />

                    <div className="featuredNumber">{featuredArticle.id}</div>
                </Link>

                <div className="featuredContent">
                    <div className="articleMeta">
                        <span>{featuredArticle.category}</span>

                        <span>
                            <FiClock />
                            {featuredArticle.readTime}
                        </span>
                    </div>

                    <h2>{featuredArticle.title}</h2>

                    <p>{featuredArticle.excerpt}</p>

                    <Link
                        to={`/articles/${featuredArticle.slug}`}
                        className="readLink"
                    >
                        Read story
                        <FiArrowRight />
                    </Link>
                </div>
            </section>

            <section className="articlesSection">
                <div className="sectionHeader">
                    <span>ALL STORIES</span>

                    <strong>
                        {String(articles.length).padStart(2, "0")} Articles
                    </strong>
                </div>

                <div className="articlesGrid">
                    {remainingArticles.map((article) => (
                        <article className="articleCard" key={article.id}>
                            <Link
                                to={`/articles/${article.slug}`}
                                className="articleImage"
                            >
                                <img src={article.image} alt={article.title} />

                                <span className="articleNumber">
                                    {article.id}
                                </span>

                                <span className="imageAction">
                                    <FiArrowUpRight />
                                </span>
                            </Link>

                            <div className="articleContent">
                                <div className="articleMeta">
                                    <span>{article.category}</span>

                                    <span>
                                        <FiClock />
                                        {article.readTime}
                                    </span>
                                </div>

                                <h3>
                                    <Link to={`/articles/${article.slug}`}>
                                        {article.title}
                                    </Link>
                                </h3>

                                <p>{article.excerpt}</p>

                                <Link
                                    to={`/articles/${article.slug}`}
                                    className="readLink"
                                >
                                    Read story
                                    <FiArrowRight />
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            <section className="closingSection">
                <div>
                    <span>DRISHTI / JOURNAL</span>

                    <h2>
                        Stories can inform.
                        <strong>Ideas can inspire action.</strong>
                    </h2>
                </div>

                <Link to="/contact">
                    Start a conversation
                    <FiArrowUpRight />
                </Link>
            </section>
        </Styled.Wrapper>
    );
};

export default Articles;
