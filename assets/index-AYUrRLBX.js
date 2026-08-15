import{c as s,j as e,L as t,F as n,B as r,z as a,C as c}from"./index-BBIEQPxq.js";const l={Wrapper:s.div`
        width: 100%;
        background: #f7f4ee;
        color: #111111;

        .heroSection {
            padding: 70px 6vw 110px;
        }

        .heroMeta {
            padding-bottom: 22px;
            display: flex;
            justify-content: space-between;
            border-bottom: 1px solid rgba(17, 17, 17, 0.12);
            color: #817d76;
            font-family: "Antonio", sans-serif;
            font-size: 0.68rem;
            font-weight: 700;
            letter-spacing: 0.14em;
        }

        .heroGrid {
            margin-top: 55px;
            display: grid;
            grid-template-columns: 1.2fr 0.8fr;
            gap: 7vw;
            align-items: end;
        }

        .heroGrid h1 {
            max-width: 900px;
            font-family: Georgia, "Times New Roman", serif;
            font-size: clamp(4.5rem, 7vw, 8.5rem);
            font-weight: 700;
            line-height: 0.86;
            letter-spacing: -0.075em;
        }

        .heroGrid h1 span {
            display: block;
            color: #ef2b2d;
            font-weight: 400;
            font-style: italic;
        }

        .heroGrid p {
            max-width: 500px;
            color: #625e57;
            font-size: 0.95rem;
            line-height: 1.85;
        }

        .documentsSection {
            padding: 120px 6vw;
            background: #111111;
            color: #ffffff;
        }

        .sectionHeader {
            padding-bottom: 22px;
            display: flex;
            justify-content: space-between;
            border-bottom: 1px solid rgba(255, 255, 255, 0.12);
            color: #777777;
            font-family: "Antonio", sans-serif;
            font-size: 0.68rem;
            text-transform: uppercase;
            letter-spacing: 0.13em;
        }

        .documentsList {
            border-top: 1px solid rgba(255, 255, 255, 0.12);
        }

        .documentRow {
            min-height: 150px;
            display: grid;
            grid-template-columns: 60px 55px 1fr auto;
            gap: 24px;
            align-items: center;
            border-bottom: 1px solid rgba(255, 255, 255, 0.12);
            transition:
                padding 0.2s ease,
                background 0.2s ease;
        }

        .documentRow:hover {
            padding: 0 18px;
            background: rgba(255, 255, 255, 0.04);
        }

        .documentNumber {
            color: #ef2b2d;
            font-family: "Antonio", sans-serif;
            font-size: 0.66rem;
        }

        .documentIcon {
            width: 46px;
            height: 46px;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid rgba(255, 255, 255, 0.16);
            border-radius: 50%;
            color: #ef2b2d;
        }

        .documentContent strong {
            font-family: Georgia, "Times New Roman", serif;
            font-size: clamp(1.8rem, 2.8vw, 3rem);
            font-weight: 400;
        }

        .documentContent p {
            max-width: 650px;
            margin-top: 10px;
            color: #8e8e8e;
            font-size: 0.78rem;
            line-height: 1.7;
        }

        .documentAction {
            width: 46px;
            height: 46px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            background: #ef2b2d;
            color: #ffffff;
        }

        .closingSection {
            padding: 110px 6vw;
            background: #ef2b2d;
            color: #ffffff;
        }

        .closingSection > span {
            font-family: "Antonio", sans-serif;
            font-size: 0.68rem;
            font-weight: 700;
            letter-spacing: 0.14em;
        }

        .closingSection > div {
            margin-top: 24px;
            display: flex;
            align-items: end;
            justify-content: space-between;
            gap: 60px;
        }

        .closingSection h2 {
            max-width: 900px;
            font-family: Georgia, "Times New Roman", serif;
            font-size: clamp(3.5rem, 6vw, 6.8rem);
            font-weight: 700;
            line-height: 0.92;
            letter-spacing: -0.06em;
        }

        .closingSection h2 strong {
            display: block;
            color: #111111;
            font-weight: 400;
            font-style: italic;
        }

        .closingSection a {
            flex-shrink: 0;
            min-height: 52px;
            padding: 0 20px;
            display: flex;
            align-items: center;
            gap: 12px;
            border-radius: 999px;
            background: #111111;
            color: #ffffff;
            font-family: "Antonio", sans-serif;
            font-size: 0.78rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.08em;
        }

        @media (max-width: 800px) {
            .heroGrid {
                grid-template-columns: 1fr;
            }
        }

        @media (max-width: 700px) {
            .heroSection,
            .documentsSection,
            .closingSection {
                padding: 80px 20px;
            }

            .heroMeta {
                flex-direction: column;
                gap: 10px;
            }

            .documentRow {
                grid-template-columns: 40px 46px 1fr auto;
                gap: 14px;
            }

            .closingSection > div {
                align-items: flex-start;
                flex-direction: column;
            }
        }
    `},o=[{id:"01",title:"Privacy Policy",slug:"privacy-policy",icon:e.jsx(r,{}),description:"How information is handled when you visit or interact with the Drishti Foundation website."},{id:"02",title:"Terms of Use",slug:"terms-of-use",icon:e.jsx(a,{}),description:"The basic terms that apply when using the website and its published content."},{id:"03",title:"Disclaimer",slug:"disclaimer",icon:e.jsx(c,{}),description:"Important information about website content, external links and general informational material."}],p=()=>e.jsxs(l.Wrapper,{children:[e.jsxs("section",{className:"heroSection",children:[e.jsxs("div",{className:"heroMeta",children:[e.jsx("span",{children:"LEGAL"}),e.jsx("span",{children:"09 / FOUNDATION"})]}),e.jsxs("div",{className:"heroGrid",children:[e.jsxs("h1",{children:["Clear terms.",e.jsx("span",{children:"Transparent intent."})]}),e.jsx("p",{children:"Legal and policy information for the Drishti Foundation website, written to keep expectations clear and accessible."})]})]}),e.jsxs("section",{className:"documentsSection",children:[e.jsxs("div",{className:"sectionHeader",children:[e.jsx("span",{children:"DOCUMENTS"}),e.jsxs("strong",{children:[o.length," Policies"]})]}),e.jsx("div",{className:"documentsList",children:o.map(i=>e.jsxs(t,{to:`/legal/${i.slug}`,className:"documentRow",children:[e.jsx("span",{className:"documentNumber",children:i.id}),e.jsx("span",{className:"documentIcon",children:i.icon}),e.jsxs("div",{className:"documentContent",children:[e.jsx("strong",{children:i.title}),e.jsx("p",{children:i.description})]}),e.jsx("span",{className:"documentAction",children:e.jsx(n,{})})]},i.id))})]}),e.jsxs("section",{className:"closingSection",children:[e.jsx("span",{children:"DRISHTI FOUNDATION"}),e.jsxs("div",{children:[e.jsxs("h2",{children:["Transparency builds",e.jsx("strong",{children:"better trust."})]}),e.jsxs(t,{to:"/contact",children:["Contact us",e.jsx(n,{})]})]})]})]});export{p as default};
