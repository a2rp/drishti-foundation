import{c as s,u as a,j as e,L as t,r,z as l,F as c}from"./index-BBIEQPxq.js";const d={Wrapper:s.div`
        width: 100%;
        background: #f7f4ee;
        color: #111111;

        .heroSection {
            padding: 60px 6vw 100px;
        }

        .topBar {
            padding-bottom: 22px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            border-bottom: 1px solid rgba(17, 17, 17, 0.12);
            color: #817d76;
            font-family: "Antonio", sans-serif;
            font-size: 0.66rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.12em;
        }

        .topBar a {
            display: flex;
            align-items: center;
            gap: 9px;
        }

        .heroContent {
            max-width: 1050px;
            margin: 70px auto 0;
        }

        .eyebrow,
        .sectionLabel {
            color: #ef2b2d;
            font-family: "Antonio", sans-serif;
            font-size: 0.65rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.13em;
        }

        .heroContent h1 {
            margin-top: 22px;
            font-family: Georgia, "Times New Roman", serif;
            font-size: clamp(4.5rem, 8vw, 8.5rem);
            font-weight: 700;
            line-height: 0.88;
            letter-spacing: -0.07em;
        }

        .heroContent > p {
            max-width: 720px;
            margin-top: 28px;
            color: #625e57;
            font-size: 0.98rem;
            line-height: 1.85;
        }

        .updated {
            width: fit-content;
            margin-top: 28px;
            display: flex;
            align-items: center;
            gap: 10px;
            color: #878179;
            font-size: 0.7rem;
        }

        .updated svg {
            color: #ef2b2d;
        }

        .documentSection {
            max-width: 1200px;
            margin: 0 auto;
            padding: 120px 24px;
            display: grid;
            grid-template-columns: 200px minmax(0, 800px);
            gap: 80px;
            justify-content: center;
        }

        .documentSection aside {
            position: sticky;
            top: 160px;
            align-self: start;
        }

        .documentSection aside > span {
            color: #918c84;
            font-family: "Antonio", sans-serif;
            font-size: 0.58rem;
            font-weight: 700;
            letter-spacing: 0.13em;
        }

        .documentSection aside nav {
            margin-top: 20px;
            display: grid;
            border-top: 1px solid rgba(17, 17, 17, 0.12);
        }

        .documentSection aside a {
            padding: 13px 0;
            border-bottom: 1px solid rgba(17, 17, 17, 0.12);
            color: #777168;
            font-size: 0.7rem;
        }

        .documentSection article > section + section {
            margin-top: 80px;
        }

        .documentSection article p {
            margin-top: 26px;
            color: #57534c;
            font-size: 1rem;
            line-height: 1.95;
        }

        .documentSection .lead {
            color: #22201d;
            font-family: Georgia, "Times New Roman", serif;
            font-size: clamp(1.7rem, 2.5vw, 2.6rem);
            line-height: 1.3;
        }

        .documentSection h2 {
            margin-top: 24px;
            font-family: Georgia, "Times New Roman", serif;
            font-size: clamp(2.4rem, 3.6vw, 4rem);
            font-weight: 400;
            line-height: 1;
            letter-spacing: -0.045em;
        }

        .legalNote {
            margin-top: 55px;
            padding: 38px;
            background: #111111;
            color: #ffffff;
        }

        .legalNote > span {
            display: block;
            margin-bottom: 16px;
            color: #ef2b2d;
            font-family: "Antonio", sans-serif;
            font-size: 0.62rem;
            font-weight: 700;
            letter-spacing: 0.13em;
        }

        .legalNote strong {
            display: block;
            font-family: Georgia, "Times New Roman", serif;
            font-size: clamp(1.8rem, 2.7vw, 3rem);
            font-weight: 400;
            line-height: 1.12;
        }

        .legalNote a {
            width: fit-content;
            margin-top: 24px;
            display: flex;
            align-items: center;
            gap: 9px;
            color: #ef2b2d;
            font-family: "Antonio", sans-serif;
            font-size: 0.72rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.08em;
        }

        @media (max-width: 900px) {
            .documentSection {
                grid-template-columns: 1fr;
                max-width: 850px;
            }

            .documentSection aside {
                position: static;
            }
        }

        @media (max-width: 700px) {
            .heroSection {
                padding: 60px 20px 80px;
            }

            .topBar {
                flex-direction: column;
                align-items: flex-start;
                gap: 12px;
            }

            .heroContent h1 {
                font-size: clamp(4rem, 18vw, 6.2rem);
            }

            .documentSection {
                padding: 80px 20px;
            }

            .legalNote {
                padding: 30px 24px;
            }
        }
    `},n={"privacy-policy":{number:"01",title:"Privacy Policy",updated:"15 Aug, 2026",intro:"This policy explains how information may be handled when you visit or interact with the Drishti Foundation website."},"terms-of-use":{number:"02",title:"Terms of Use",updated:"15 Aug, 2026",intro:"These terms describe the basic conditions that apply when using the Drishti Foundation website and its published material."},disclaimer:{number:"03",title:"Disclaimer",updated:"15 Aug, 2026",intro:"This disclaimer explains the general informational nature of website content and the limitations that may apply."}},m=()=>{const{legalSlug:o}=a(),i=n[o]||n["privacy-policy"];return e.jsxs(d.Wrapper,{children:[e.jsxs("section",{className:"heroSection",children:[e.jsxs("div",{className:"topBar",children:[e.jsxs(t,{to:"/legal",children:[e.jsx(r,{}),"Back to legal"]}),e.jsxs("span",{children:["LEGAL / ",i.number]})]}),e.jsxs("div",{className:"heroContent",children:[e.jsx("span",{className:"eyebrow",children:"DRISHTI FOUNDATION"}),e.jsx("h1",{children:i.title}),e.jsx("p",{children:i.intro}),e.jsxs("div",{className:"updated",children:[e.jsx(l,{}),"Last updated: ",i.updated]})]})]}),e.jsxs("section",{className:"documentSection",children:[e.jsxs("aside",{children:[e.jsx("span",{children:"DOCUMENT"}),e.jsxs("nav",{children:[e.jsx("a",{href:"#overview",children:"Overview"}),e.jsx("a",{href:"#information",children:"Information"}),e.jsx("a",{href:"#usage",children:"Use of content"}),e.jsx("a",{href:"#external",children:"External links"}),e.jsx("a",{href:"#changes",children:"Changes"})]})]}),e.jsxs("article",{children:[e.jsxs("section",{id:"overview",children:[e.jsx("span",{className:"sectionLabel",children:"01 / OVERVIEW"}),e.jsx("p",{className:"lead",children:"Drishti Foundation aims to keep this website clear, useful and respectful of the people who visit it."}),e.jsx("p",{children:"This document provides general information about how the website and its content should be understood and used."})]}),e.jsxs("section",{id:"information",children:[e.jsx("span",{className:"sectionLabel",children:"02 / INFORMATION"}),e.jsx("h2",{children:"Information you provide"}),e.jsx("p",{children:"If you contact Drishti Foundation through email or a website form, you may voluntarily provide details such as your name, email address and message."}),e.jsx("p",{children:"Such information should only be used for the purpose of responding to the communication or supporting the relevant interaction."})]}),e.jsxs("section",{id:"usage",children:[e.jsx("span",{className:"sectionLabel",children:"03 / USE OF CONTENT"}),e.jsx("h2",{children:"Website content is provided for information."}),e.jsx("p",{children:"Articles, publications, event information and other material on this website are intended primarily for general awareness and informational purposes."}),e.jsx("p",{children:"Content should not automatically be treated as professional legal, medical, financial or other specialist advice."})]}),e.jsxs("section",{id:"external",children:[e.jsx("span",{className:"sectionLabel",children:"04 / EXTERNAL LINKS"}),e.jsx("h2",{children:"Links may lead to third-party websites."}),e.jsx("p",{children:"Drishti Foundation may link to external websites or services for convenience or reference. Those websites operate independently and may have their own policies and terms."})]}),e.jsxs("section",{id:"changes",children:[e.jsx("span",{className:"sectionLabel",children:"05 / CHANGES"}),e.jsx("h2",{children:"This document may be updated over time."}),e.jsx("p",{children:"Policies and legal information may be revised as the website evolves. The updated date shown on this page indicates the latest published version."}),e.jsxs("div",{className:"legalNote",children:[e.jsx("span",{children:"QUESTIONS?"}),e.jsx("strong",{children:"Contact Drishti Foundation if you need clarification about this document."}),e.jsxs(t,{to:"/contact",children:["Contact us",e.jsx(c,{})]})]})]})]})]})]})};export{m as default};
