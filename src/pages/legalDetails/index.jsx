import { FiArrowLeft, FiArrowRight, FiFileText } from "react-icons/fi";
import { Link, useParams } from "react-router-dom";

import { Styled } from "./styled";

const legalDocuments = {
    "privacy-policy": {
        number: "01",
        title: "Privacy Policy",
        updated: "15 Aug, 2026",
        intro: "This policy explains how information may be handled when you visit or interact with the Drishti Foundation website.",
    },

    "terms-of-use": {
        number: "02",
        title: "Terms of Use",
        updated: "15 Aug, 2026",
        intro: "These terms describe the basic conditions that apply when using the Drishti Foundation website and its published material.",
    },

    disclaimer: {
        number: "03",
        title: "Disclaimer",
        updated: "15 Aug, 2026",
        intro: "This disclaimer explains the general informational nature of website content and the limitations that may apply.",
    },
};

const LegalDetails = () => {
    const { legalSlug } = useParams();

    const document =
        legalDocuments[legalSlug] || legalDocuments["privacy-policy"];

    return (
        <Styled.Wrapper>
            <section className="heroSection">
                <div className="topBar">
                    <Link to="/legal">
                        <FiArrowLeft />
                        Back to legal
                    </Link>

                    <span>LEGAL / {document.number}</span>
                </div>

                <div className="heroContent">
                    <span className="eyebrow">DRISHTI FOUNDATION</span>

                    <h1>{document.title}</h1>

                    <p>{document.intro}</p>

                    <div className="updated">
                        <FiFileText />
                        Last updated: {document.updated}
                    </div>
                </div>
            </section>

            <section className="documentSection">
                <aside>
                    <span>DOCUMENT</span>

                    <nav>
                        <a href="#overview">Overview</a>
                        <a href="#information">Information</a>
                        <a href="#usage">Use of content</a>
                        <a href="#external">External links</a>
                        <a href="#changes">Changes</a>
                    </nav>
                </aside>

                <article>
                    <section id="overview">
                        <span className="sectionLabel">01 / OVERVIEW</span>

                        <p className="lead">
                            Drishti Foundation aims to keep this website clear,
                            useful and respectful of the people who visit it.
                        </p>

                        <p>
                            This document provides general information about how
                            the website and its content should be understood and
                            used.
                        </p>
                    </section>

                    <section id="information">
                        <span className="sectionLabel">02 / INFORMATION</span>

                        <h2>Information you provide</h2>

                        <p>
                            If you contact Drishti Foundation through email or a
                            website form, you may voluntarily provide details
                            such as your name, email address and message.
                        </p>

                        <p>
                            Such information should only be used for the purpose
                            of responding to the communication or supporting the
                            relevant interaction.
                        </p>
                    </section>

                    <section id="usage">
                        <span className="sectionLabel">
                            03 / USE OF CONTENT
                        </span>

                        <h2>Website content is provided for information.</h2>

                        <p>
                            Articles, publications, event information and other
                            material on this website are intended primarily for
                            general awareness and informational purposes.
                        </p>

                        <p>
                            Content should not automatically be treated as
                            professional legal, medical, financial or other
                            specialist advice.
                        </p>
                    </section>

                    <section id="external">
                        <span className="sectionLabel">
                            04 / EXTERNAL LINKS
                        </span>

                        <h2>Links may lead to third-party websites.</h2>

                        <p>
                            Drishti Foundation may link to external websites or
                            services for convenience or reference. Those
                            websites operate independently and may have their
                            own policies and terms.
                        </p>
                    </section>

                    <section id="changes">
                        <span className="sectionLabel">05 / CHANGES</span>

                        <h2>This document may be updated over time.</h2>

                        <p>
                            Policies and legal information may be revised as the
                            website evolves. The updated date shown on this page
                            indicates the latest published version.
                        </p>

                        <div className="legalNote">
                            <span>QUESTIONS?</span>

                            <strong>
                                Contact Drishti Foundation if you need
                                clarification about this document.
                            </strong>

                            <Link to="/contact">
                                Contact us
                                <FiArrowRight />
                            </Link>
                        </div>
                    </section>
                </article>
            </section>
        </Styled.Wrapper>
    );
};

export default LegalDetails;
