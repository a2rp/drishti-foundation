import { FiArrowRight, FiFileText, FiLock, FiShield } from "react-icons/fi";
import { Link } from "react-router-dom";

import { Styled } from "./styled";

const legalDocuments = [
    {
        id: "01",
        title: "Privacy Policy",
        slug: "privacy-policy",
        icon: <FiLock />,
        description:
            "How information is handled when you visit or interact with the Drishti Foundation website.",
    },
    {
        id: "02",
        title: "Terms of Use",
        slug: "terms-of-use",
        icon: <FiFileText />,
        description:
            "The basic terms that apply when using the website and its published content.",
    },
    {
        id: "03",
        title: "Disclaimer",
        slug: "disclaimer",
        icon: <FiShield />,
        description:
            "Important information about website content, external links and general informational material.",
    },
];

const Legal = () => {
    return (
        <Styled.Wrapper>
            <section className="heroSection">
                <div className="heroMeta">
                    <span>LEGAL</span>
                    <span>09 / FOUNDATION</span>
                </div>

                <div className="heroGrid">
                    <h1>
                        Clear terms.
                        <span>Transparent intent.</span>
                    </h1>

                    <p>
                        Legal and policy information for the Drishti Foundation
                        website, written to keep expectations clear and
                        accessible.
                    </p>
                </div>
            </section>

            <section className="documentsSection">
                <div className="sectionHeader">
                    <span>DOCUMENTS</span>
                    <strong>{legalDocuments.length} Policies</strong>
                </div>

                <div className="documentsList">
                    {legalDocuments.map((document) => (
                        <Link
                            key={document.id}
                            to={`/legal/${document.slug}`}
                            className="documentRow"
                        >
                            <span className="documentNumber">
                                {document.id}
                            </span>

                            <span className="documentIcon">
                                {document.icon}
                            </span>

                            <div className="documentContent">
                                <strong>{document.title}</strong>
                                <p>{document.description}</p>
                            </div>

                            <span className="documentAction">
                                <FiArrowRight />
                            </span>
                        </Link>
                    ))}
                </div>
            </section>

            <section className="closingSection">
                <span>DRISHTI FOUNDATION</span>

                <div>
                    <h2>
                        Transparency builds
                        <strong>better trust.</strong>
                    </h2>

                    <Link to="/contact">
                        Contact us
                        <FiArrowRight />
                    </Link>
                </div>
            </section>
        </Styled.Wrapper>
    );
};

export default Legal;
