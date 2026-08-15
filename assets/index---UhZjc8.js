import{c as s,j as e,d as r,L as t,F as a,A as l,i as p,v as c,a as n}from"./index-BBIEQPxq.js";const d={Wrapper:s.div`
        width: 100%;
        background: #f7f4ee;
        color: #111111;

        .heroSection {
            padding: 70px 6vw 110px;
        }

        .heroMeta {
            padding-bottom: 22px;
            display: flex;
            align-items: center;
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
            grid-template-columns: 1.25fr 0.75fr;
            gap: 7vw;
            align-items: end;
        }

        .heroGrid h1 {
            max-width: 950px;
            font-family: Georgia, "Times New Roman", serif;
            font-size: clamp(4.5rem, 7vw, 8.7rem);
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

        .heroCopy > svg {
            margin-bottom: 22px;
            color: #ef2b2d;
            font-size: 1.5rem;
        }

        .heroCopy p {
            max-width: 500px;
            color: #625e57;
            font-size: 0.95rem;
            line-height: 1.85;
        }

        .featureSection {
            display: grid;
            grid-template-columns: 1.1fr 0.9fr;
            min-height: 680px;
            background: #111111;
            color: #ffffff;
        }

        .featureImage {
            position: relative;
            overflow: hidden;
        }

        .featureImage img {
            width: 100%;
            height: 100%;
            min-height: 680px;
            object-fit: cover;
        }

        .imageOverlay {
            position: absolute;
            inset: 0;
            background: linear-gradient(
                to top,
                rgba(17, 17, 17, 0.46),
                transparent 55%
            );
        }

        .featureContent {
            padding: 70px 5vw;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }

        .eyebrow {
            color: #ef2b2d;
            font-family: "Antonio", sans-serif;
            font-size: 0.68rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.14em;
        }

        .featureContent h2 {
            margin-top: 24px;
            font-family: Georgia, "Times New Roman", serif;
            font-size: clamp(3.5rem, 5vw, 6rem);
            font-weight: 400;
            line-height: 0.92;
            letter-spacing: -0.055em;
        }

        .featureContent h2 span {
            display: block;
            color: #ef2b2d;
            font-style: italic;
        }

        .featureContent p {
            max-width: 550px;
            margin-top: 26px;
            color: #a6a6a6;
            font-size: 0.9rem;
            line-height: 1.8;
        }

        .featureContent > a {
            width: fit-content;
            min-height: 50px;
            margin-top: 28px;
            padding: 0 18px;
            display: flex;
            align-items: center;
            gap: 12px;
            border-radius: 999px;
            background: #ef2b2d;
            color: #ffffff;
            font-family: "Antonio", sans-serif;
            font-size: 0.74rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.08em;
        }

        .opportunitiesSection {
            padding: 130px 6vw;
        }

        .sectionHeader {
            padding-bottom: 22px;
            display: flex;
            justify-content: space-between;
            border-bottom: 1px solid rgba(17, 17, 17, 0.12);
            font-family: "Antonio", sans-serif;
            font-size: 0.68rem;
            text-transform: uppercase;
            letter-spacing: 0.13em;
        }

        .sectionHeader strong {
            color: #98938b;
            font-weight: 600;
        }

        .opportunitiesList {
            border-top: 1px solid rgba(17, 17, 17, 0.12);
        }

        .opportunityRow {
            min-height: 150px;
            padding: 22px 0;
            display: grid;
            grid-template-columns: 55px 55px minmax(0, 1fr) 200px auto;
            gap: 24px;
            align-items: center;
            border-bottom: 1px solid rgba(17, 17, 17, 0.12);
            transition:
                padding 0.22s ease,
                background 0.22s ease;
        }

        .opportunityRow:hover {
            padding-left: 18px;
            padding-right: 18px;
            background: #ece7de;
        }

        .opportunityNumber {
            color: #ef2b2d;
            font-family: "Antonio", sans-serif;
            font-size: 0.65rem;
            font-weight: 700;
        }

        .opportunityIcon {
            width: 46px;
            height: 46px;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid rgba(17, 17, 17, 0.12);
            border-radius: 50%;
        }

        .opportunityMain > span {
            color: #ef2b2d;
            font-family: "Antonio", sans-serif;
            font-size: 0.58rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.11em;
        }

        .opportunityMain strong {
            display: block;
            margin-top: 7px;
            font-family: Georgia, "Times New Roman", serif;
            font-size: clamp(1.6rem, 2.4vw, 2.8rem);
            font-weight: 400;
            line-height: 1;
        }

        .opportunityMain p {
            max-width: 620px;
            margin-top: 10px;
            color: #777168;
            font-size: 0.76rem;
            line-height: 1.6;
        }

        .opportunityMeta {
            display: grid;
            gap: 12px;
            color: #7d776f;
            font-size: 0.7rem;
        }

        .opportunityMeta span {
            display: flex;
            align-items: center;
            gap: 7px;
        }

        .opportunityMeta svg {
            color: #ef2b2d;
        }

        .opportunityAction {
            width: 46px;
            height: 46px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            background: #ef2b2d;
            color: #ffffff;
            transition:
                background 0.2s ease,
                transform 0.2s ease;
        }

        .opportunityRow:hover .opportunityAction {
            background: #111111;
            transform: rotate(45deg);
        }

        .valuesSection {
            padding: 120px 6vw;
            background: #e7e2d9;
        }

        .valuesHeading {
            display: grid;
            grid-template-columns: 0.45fr 1.55fr;
            gap: 5vw;
        }

        .valuesHeading > span {
            color: #ef2b2d;
            font-family: "Antonio", sans-serif;
            font-size: 0.68rem;
            font-weight: 700;
            letter-spacing: 0.14em;
        }

        .valuesHeading h2 {
            max-width: 900px;
            font-family: Georgia, "Times New Roman", serif;
            font-size: clamp(3.7rem, 6vw, 6.8rem);
            font-weight: 700;
            line-height: 0.92;
            letter-spacing: -0.06em;
        }

        .valuesHeading h2 span {
            display: block;
            color: #ef2b2d;
            font-weight: 400;
            font-style: italic;
        }

        .valuesGrid {
            margin-top: 70px;
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            border-top: 1px solid rgba(17, 17, 17, 0.12);
            border-left: 1px solid rgba(17, 17, 17, 0.12);
        }

        .valuesGrid article {
            min-height: 320px;
            padding: 24px;
            display: flex;
            flex-direction: column;
            border-right: 1px solid rgba(17, 17, 17, 0.12);
            border-bottom: 1px solid rgba(17, 17, 17, 0.12);
        }

        .valuesGrid article > span {
            color: #ef2b2d;
            font-family: "Antonio", sans-serif;
            font-size: 0.62rem;
        }

        .valuesGrid strong {
            margin-top: auto;
            font-family: Georgia, "Times New Roman", serif;
            font-size: 1.8rem;
            font-weight: 400;
        }

        .valuesGrid p {
            margin-top: 12px;
            color: #716b63;
            font-size: 0.76rem;
            line-height: 1.65;
        }

        .closingSection {
            padding: 110px 6vw;
            display: flex;
            align-items: end;
            justify-content: space-between;
            gap: 60px;
            background: #ef2b2d;
            color: #ffffff;
        }

        .closingSection > div > span {
            font-family: "Antonio", sans-serif;
            font-size: 0.68rem;
            font-weight: 700;
            letter-spacing: 0.14em;
        }

        .closingSection h2 {
            max-width: 900px;
            margin-top: 20px;
            font-family: Georgia, "Times New Roman", serif;
            font-size: clamp(3.6rem, 6vw, 6.8rem);
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

        .closingSection > a {
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

        @media (max-width: 1000px) {
            .heroGrid,
            .featureSection {
                grid-template-columns: 1fr;
            }

            .opportunityRow {
                grid-template-columns: 50px 50px 1fr auto;
            }

            .opportunityMeta {
                grid-column: 3;
            }

            .valuesGrid {
                grid-template-columns: repeat(2, 1fr);
            }
        }

        @media (max-width: 700px) {
            .heroSection,
            .opportunitiesSection,
            .valuesSection,
            .closingSection {
                padding: 80px 20px;
            }

            .heroMeta {
                align-items: flex-start;
                flex-direction: column;
                gap: 10px;
            }

            .heroGrid h1 {
                font-size: clamp(4rem, 18vw, 6.4rem);
            }

            .featureContent {
                padding: 70px 20px;
            }

            .featureImage img {
                min-height: 520px;
            }

            .opportunityRow {
                grid-template-columns: 40px 1fr auto;
                gap: 14px;
            }

            .opportunityIcon {
                display: none;
            }

            .opportunityMeta {
                grid-column: 2;
            }

            .opportunityAction {
                grid-column: 3;
                grid-row: 1 / span 2;
            }

            .valuesHeading {
                grid-template-columns: 1fr;
            }

            .valuesGrid {
                grid-template-columns: 1fr;
            }

            .closingSection {
                align-items: flex-start;
                flex-direction: column;
            }
        }
    `},o=[{id:"01",type:"Volunteer",title:"Community Volunteer",location:"Bengaluru",commitment:"Flexible",description:"Support awareness, community participation and foundation-led activities.",slug:"community-volunteer"},{id:"02",type:"Volunteer",title:"Digital Awareness Volunteer",location:"Hybrid",commitment:"4 hrs / week",description:"Help create simple digital awareness resources and support learning sessions.",slug:"digital-awareness-volunteer"},{id:"03",type:"Contributor",title:"Content & Research Contributor",location:"Remote",commitment:"Flexible",description:"Contribute useful research, stories and educational content for foundation initiatives.",slug:"content-research-contributor"},{id:"04",type:"Community",title:"Local Community Coordinator",location:"Bengaluru",commitment:"Part-time",description:"Help coordinate community conversations, activities and participation opportunities.",slug:"community-coordinator"}],f=()=>e.jsxs(d.Wrapper,{children:[e.jsxs("section",{className:"heroSection",children:[e.jsxs("div",{className:"heroMeta",children:[e.jsx("span",{children:"OPPORTUNITIES"}),e.jsx("span",{children:"08 / FOUNDATION"})]}),e.jsxs("div",{className:"heroGrid",children:[e.jsxs("h1",{children:["Your time can",e.jsx("span",{children:"create impact."})]}),e.jsxs("div",{className:"heroCopy",children:[e.jsx(r,{}),e.jsx("p",{children:"Explore ways to volunteer, contribute and take part in initiatives focused on awareness, education and community progress."})]})]})]}),e.jsxs("section",{className:"featureSection",children:[e.jsxs("div",{className:"featureImage",children:[e.jsx("img",{src:"https://picsum.photos/seed/drishti-opportunities/1500/950",alt:"People collaborating"}),e.jsx("div",{className:"imageOverlay"})]}),e.jsxs("div",{className:"featureContent",children:[e.jsx("span",{className:"eyebrow",children:"GET INVOLVED"}),e.jsxs("h2",{children:["Meaningful work starts",e.jsx("span",{children:"with participation."})]}),e.jsx("p",{children:"You do not need to have all the answers to contribute. Time, skills, ideas and willingness to help can all become part of positive change."}),e.jsxs(t,{to:"/contact",children:["Start a conversation",e.jsx(a,{})]})]})]}),e.jsxs("section",{className:"opportunitiesSection",children:[e.jsxs("div",{className:"sectionHeader",children:[e.jsx("span",{children:"OPEN OPPORTUNITIES"}),e.jsxs("strong",{children:[String(o.length).padStart(2,"0")," Roles"]})]}),e.jsx("div",{className:"opportunitiesList",children:o.map(i=>e.jsxs(t,{to:`/opportunities/${i.slug}`,className:"opportunityRow",children:[e.jsx("span",{className:"opportunityNumber",children:i.id}),e.jsx("span",{className:"opportunityIcon",children:e.jsx(l,{})}),e.jsxs("div",{className:"opportunityMain",children:[e.jsx("span",{children:i.type}),e.jsx("strong",{children:i.title}),e.jsx("p",{children:i.description})]}),e.jsxs("div",{className:"opportunityMeta",children:[e.jsxs("span",{children:[e.jsx(p,{}),i.location]}),e.jsxs("span",{children:[e.jsx(c,{}),i.commitment]})]}),e.jsx("span",{className:"opportunityAction",children:e.jsx(n,{})})]},i.id))})]}),e.jsxs("section",{className:"valuesSection",children:[e.jsxs("div",{className:"valuesHeading",children:[e.jsx("span",{children:"WHAT MATTERS"}),e.jsxs("h2",{children:["Skills help.",e.jsx("span",{children:"Intent matters more."})]})]}),e.jsxs("div",{className:"valuesGrid",children:[e.jsxs("article",{children:[e.jsx("span",{children:"01"}),e.jsx("strong",{children:"Curiosity"}),e.jsx("p",{children:"Be willing to learn, ask questions and understand the people you are working with."})]}),e.jsxs("article",{children:[e.jsx("span",{children:"02"}),e.jsx("strong",{children:"Reliability"}),e.jsx("p",{children:"Consistency and follow-through are often more valuable than short bursts of activity."})]}),e.jsxs("article",{children:[e.jsx("span",{children:"03"}),e.jsx("strong",{children:"Respect"}),e.jsx("p",{children:"Listen carefully, communicate clearly and treat every person with dignity."})]}),e.jsxs("article",{children:[e.jsx("span",{children:"04"}),e.jsx("strong",{children:"Participation"}),e.jsx("p",{children:"Positive change becomes stronger when people contribute together."})]})]})]}),e.jsxs("section",{className:"closingSection",children:[e.jsxs("div",{children:[e.jsx("span",{children:"JOIN THE JOURNEY"}),e.jsxs("h2",{children:["Bring what you know.",e.jsx("strong",{children:"Learn what you do not."})]})]}),e.jsxs(t,{to:"/contact",children:["Get in touch",e.jsx(n,{})]})]})]});export{f as default};
