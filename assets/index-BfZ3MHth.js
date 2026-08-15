import{c as r,u as l,j as e,L as s,r as c,x as p,b as d,y as m,z as f,F as n}from"./index-BBIEQPxq.js";const g={Wrapper:r.div`
        width: 100%;
        background: #f7f4ee;
        color: #111111;

        .heroSection {
            padding: 60px 6vw 110px;
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
            transition: color 0.2s ease;
        }

        .topBar a:hover {
            color: #ef2b2d;
        }

        .heroGrid {
            margin-top: 65px;
            display: grid;
            grid-template-columns: 0.8fr 1.2fr;
            gap: 7vw;
            align-items: center;
        }

        .coverWrapper {
            display: flex;
            justify-content: center;
        }

        .cover {
            position: relative;
            width: min(100%, 430px);
            aspect-ratio: 0.72;
            overflow: hidden;
            box-shadow: 0 30px 70px rgba(17, 17, 17, 0.18);
        }

        .cover img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .coverOverlay {
            position: absolute;
            inset: 0;
            background:
                linear-gradient(
                    to top,
                    rgba(17, 17, 17, 0.72),
                    transparent 55%
                ),
                linear-gradient(
                    to bottom,
                    rgba(17, 17, 17, 0.3),
                    transparent 35%
                );
        }

        .coverTop,
        .coverBottom {
            position: absolute;
            left: 24px;
            right: 24px;
            z-index: 2;
            color: #ffffff;
        }

        .coverTop {
            top: 22px;
            display: flex;
            justify-content: space-between;
            font-family: "Antonio", sans-serif;
            font-size: 0.7rem;
            font-weight: 700;
            letter-spacing: 0.14em;
        }

        .coverBottom {
            bottom: 26px;
        }

        .coverBottom > span {
            display: block;
            margin-bottom: 10px;
            font-family: "Antonio", sans-serif;
            font-size: 0.58rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.12em;
        }

        .coverBottom strong {
            font-family: Georgia, "Times New Roman", serif;
            font-size: clamp(2.2rem, 3vw, 3.8rem);
            font-weight: 400;
            line-height: 1;
        }

        .eyebrow {
            color: #ef2b2d;
            font-family: "Antonio", sans-serif;
            font-size: 0.68rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.14em;
        }

        .heroContent h1 {
            max-width: 800px;
            margin-top: 24px;
            font-family: Georgia, "Times New Roman", serif;
            font-size: clamp(4rem, 6.5vw, 7.8rem);
            font-weight: 700;
            line-height: 0.88;
            letter-spacing: -0.07em;
        }

        .subtitle {
            display: block;
            margin-top: 20px;
            color: #ef2b2d;
            font-family: "Antonio", sans-serif;
            font-size: 0.72rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.11em;
        }

        .heroContent > p {
            max-width: 660px;
            margin-top: 26px;
            color: #625e57;
            font-size: 0.95rem;
            line-height: 1.85;
        }

        .publicationMeta {
            max-width: 550px;
            margin-top: 38px;
            border-top: 1px solid rgba(17, 17, 17, 0.12);
        }

        .publicationMeta > div {
            min-height: 78px;
            display: grid;
            grid-template-columns: 30px 100px 1fr;
            gap: 15px;
            align-items: center;
            border-bottom: 1px solid rgba(17, 17, 17, 0.12);
        }

        .publicationMeta svg {
            color: #ef2b2d;
        }

        .publicationMeta span {
            color: #928d85;
            font-family: "Antonio", sans-serif;
            font-size: 0.6rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.1em;
        }

        .publicationMeta strong {
            font-size: 0.82rem;
        }

        .downloadButton {
            min-height: 50px;
            margin-top: 28px;
            padding: 0 18px;
            display: flex;
            align-items: center;
            gap: 12px;
            border-radius: 999px;
            background: #111111;
            color: #ffffff;
            font-family: "Antonio", sans-serif;
            font-size: 0.75rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.08em;
        }

        .introSection {
            padding: 120px 6vw;
            background: #111111;
            color: #ffffff;
        }

        .introMeta {
            padding-bottom: 22px;
            display: flex;
            justify-content: space-between;
            border-bottom: 1px solid rgba(255, 255, 255, 0.12);
            color: #777777;
            font-family: "Antonio", sans-serif;
            font-size: 0.65rem;
            font-weight: 700;
            letter-spacing: 0.13em;
        }

        .introGrid {
            margin-top: 60px;
            display: grid;
            grid-template-columns: 1.1fr 0.9fr;
            gap: 7vw;
            align-items: end;
        }

        .introGrid h2 {
            max-width: 850px;
            font-family: Georgia, "Times New Roman", serif;
            font-size: clamp(3.7rem, 6vw, 6.8rem);
            font-weight: 400;
            line-height: 0.92;
            letter-spacing: -0.06em;
        }

        .introGrid h2 span {
            display: block;
            color: #ef2b2d;
            font-style: italic;
        }

        .introGrid > div {
            display: grid;
            gap: 20px;
        }

        .introGrid p {
            color: #aaaaaa;
            font-size: 0.9rem;
            line-height: 1.8;
        }

        .issuesSection {
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

        .issuesList {
            border-top: 1px solid rgba(17, 17, 17, 0.12);
        }

        .issueRow {
            min-height: 130px;
            display: grid;
            grid-template-columns: 60px 55px 1fr 100px auto;
            gap: 24px;
            align-items: center;
            border-bottom: 1px solid rgba(17, 17, 17, 0.12);
            transition:
                background 0.2s ease,
                padding 0.2s ease;
        }

        .issueRow:hover {
            padding: 0 18px;
            background: #ece7de;
        }

        .issueNumber {
            color: #ef2b2d;
            font-family: "Antonio", sans-serif;
            font-size: 0.68rem;
            font-weight: 700;
        }

        .issueIcon {
            width: 46px;
            height: 46px;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid rgba(17, 17, 17, 0.12);
            border-radius: 50%;
        }

        .issueContent {
            display: flex;
            flex-direction: column;
            gap: 7px;
        }

        .issueContent span {
            color: #928d85;
            font-family: "Antonio", sans-serif;
            font-size: 0.56rem;
            font-weight: 700;
            letter-spacing: 0.11em;
        }

        .issueContent strong {
            font-family: Georgia, "Times New Roman", serif;
            font-size: clamp(1.5rem, 2.4vw, 2.7rem);
            font-weight: 400;
        }

        .issuePages {
            color: #8d887f;
            font-size: 0.7rem;
        }

        .issueAction {
            width: 44px;
            height: 44px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            background: #ef2b2d;
            color: #ffffff;
        }

        .featureSection {
            display: grid;
            grid-template-columns: 1.1fr 0.9fr;
            min-height: 700px;
            background: #e8e3da;
        }

        .featureImage {
            position: relative;
        }

        .featureImage img {
            width: 100%;
            height: 100%;
            min-height: 700px;
            object-fit: cover;
        }

        .featureOverlay {
            position: absolute;
            inset: 0;
            background: linear-gradient(
                to top,
                rgba(17, 17, 17, 0.32),
                transparent 55%
            );
        }

        .featureContent {
            padding: 70px 5vw;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }

        .featureContent > span {
            color: #ef2b2d;
            font-family: "Antonio", sans-serif;
            font-size: 0.68rem;
            font-weight: 700;
            letter-spacing: 0.14em;
        }

        .featureContent h2 {
            margin-top: 24px;
            font-family: Georgia, "Times New Roman", serif;
            font-size: clamp(3.4rem, 5vw, 5.8rem);
            font-weight: 700;
            line-height: 0.92;
            letter-spacing: -0.055em;
        }

        .featureContent h2 strong {
            display: block;
            color: #ef2b2d;
            font-weight: 400;
            font-style: italic;
        }

        .featureContent p {
            max-width: 550px;
            margin-top: 26px;
            color: #68635c;
            font-size: 0.9rem;
            line-height: 1.8;
        }

        .featureContent a {
            width: fit-content;
            margin-top: 26px;
            display: flex;
            align-items: center;
            gap: 10px;
            font-family: "Antonio", sans-serif;
            font-size: 0.72rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.09em;
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

        @media (max-width: 950px) {
            .heroGrid,
            .introGrid,
            .featureSection {
                grid-template-columns: 1fr;
            }
        }

        @media (max-width: 700px) {
            .heroSection,
            .introSection,
            .issuesSection,
            .closingSection {
                padding: 80px 20px;
            }

            .topBar {
                align-items: flex-start;
                flex-direction: column;
                gap: 12px;
            }

            .heroContent h1 {
                font-size: clamp(4rem, 17vw, 6.2rem);
            }

            .cover {
                width: min(100%, 360px);
            }

            .issueRow {
                min-height: 150px;
                grid-template-columns: 40px 46px 1fr auto;
                gap: 14px;
            }

            .issuePages {
                display: none;
            }

            .featureImage img {
                min-height: 520px;
            }

            .featureContent {
                padding: 70px 20px;
            }

            .closingSection > div {
                align-items: flex-start;
                flex-direction: column;
            }
        }
    `},a={"community-perspectives":{number:"01",title:"Community Perspectives",subtitle:"Education & Awareness",date:"Aug 2026",image:"https://picsum.photos/seed/drishti-publication-01/1200/1600",description:"A collection of observations and ideas around access to knowledge, participation and social awareness.",issues:[{id:"01",title:"Access to Knowledge",slug:"access-to-knowledge",pages:"24 Pages"},{id:"02",title:"Community Participation",slug:"community-participation",pages:"20 Pages"},{id:"03",title:"Awareness and Opportunity",slug:"awareness-and-opportunity",pages:"28 Pages"}]},"digital-access":{number:"02",title:"Digital Access",subtitle:"Digital Awareness",date:"Jul 2026",image:"https://picsum.photos/seed/drishti-publication-02/1200/1600",description:"Practical perspectives on digital confidence, access and the growing role of technology in everyday life.",issues:[{id:"01",title:"Digital Confidence",slug:"digital-confidence",pages:"22 Pages"},{id:"02",title:"Safer Digital Use",slug:"safer-digital-use",pages:"18 Pages"}]},"opportunity-notes":{number:"03",title:"Opportunity Notes",subtitle:"Community & Progress",date:"Jun 2026",image:"https://picsum.photos/seed/drishti-publication-03/1200/1600",description:"Stories and reflections on opportunity, barriers and the importance of community-led progress.",issues:[{id:"01",title:"Understanding Barriers",slug:"understanding-barriers",pages:"26 Pages"},{id:"02",title:"Creating Opportunity",slug:"creating-opportunity",pages:"24 Pages"}]}},h=()=>{const{publicationSlug:o}=l(),i=a[o]||a["community-perspectives"];return e.jsxs(g.Wrapper,{children:[e.jsxs("section",{className:"heroSection",children:[e.jsxs("div",{className:"topBar",children:[e.jsxs(s,{to:"/publications",children:[e.jsx(c,{}),"Back to publications"]}),e.jsxs("span",{children:["PUBLICATION / ",i.number]})]}),e.jsxs("div",{className:"heroGrid",children:[e.jsx("div",{className:"coverWrapper",children:e.jsxs("div",{className:"cover",children:[e.jsx("img",{src:i.image,alt:i.title}),e.jsx("div",{className:"coverOverlay"}),e.jsxs("div",{className:"coverTop",children:[e.jsx("span",{children:"DRISHTI"}),e.jsx("span",{children:i.number})]}),e.jsxs("div",{className:"coverBottom",children:[e.jsx("span",{children:i.subtitle}),e.jsx("strong",{children:i.title})]})]})}),e.jsxs("div",{className:"heroContent",children:[e.jsx("span",{className:"eyebrow",children:"DRISHTI PUBLICATION"}),e.jsx("h1",{children:i.title}),e.jsx("span",{className:"subtitle",children:i.subtitle}),e.jsx("p",{children:i.description}),e.jsxs("div",{className:"publicationMeta",children:[e.jsxs("div",{children:[e.jsx(p,{}),e.jsx("span",{children:"Published"}),e.jsx("strong",{children:i.date})]}),e.jsxs("div",{children:[e.jsx(d,{}),e.jsx("span",{children:"Issues"}),e.jsx("strong",{children:i.issues.length})]})]}),e.jsxs("button",{type:"button",className:"downloadButton",children:[e.jsx(m,{}),"Download publication"]})]})]})]}),e.jsxs("section",{className:"introSection",children:[e.jsxs("div",{className:"introMeta",children:[e.jsx("span",{children:"ABOUT THIS PUBLICATION"}),e.jsx("span",{children:"01"})]}),e.jsxs("div",{className:"introGrid",children:[e.jsxs("h2",{children:["Ideas documented",e.jsx("span",{children:"for wider understanding."})]}),e.jsxs("div",{children:[e.jsx("p",{children:"This publication brings together perspectives on awareness, access, opportunity and community participation."}),e.jsx("p",{children:"The purpose is to make useful ideas easier to understand, share and revisit over time."})]})]})]}),e.jsxs("section",{className:"issuesSection",children:[e.jsxs("div",{className:"sectionHeader",children:[e.jsx("span",{children:"ISSUES"}),e.jsxs("strong",{children:[String(i.issues.length).padStart(2,"0")," ","Editions"]})]}),e.jsx("div",{className:"issuesList",children:i.issues.map(t=>e.jsxs(s,{to:`/publications/${o}/${t.slug}`,className:"issueRow",children:[e.jsx("span",{className:"issueNumber",children:t.id}),e.jsx("span",{className:"issueIcon",children:e.jsx(f,{})}),e.jsxs("div",{className:"issueContent",children:[e.jsxs("span",{children:["ISSUE ",t.id]}),e.jsx("strong",{children:t.title})]}),e.jsx("span",{className:"issuePages",children:t.pages}),e.jsx("span",{className:"issueAction",children:e.jsx(n,{})})]},t.id))})]}),e.jsxs("section",{className:"featureSection",children:[e.jsxs("div",{className:"featureImage",children:[e.jsx("img",{src:"https://picsum.photos/seed/drishti-publication-feature/1500/950",alt:"Drishti publication perspective"}),e.jsx("div",{className:"featureOverlay"})]}),e.jsxs("div",{className:"featureContent",children:[e.jsx("span",{children:"WHY WE PUBLISH"}),e.jsxs("h2",{children:["Useful knowledge should",e.jsx("strong",{children:"remain accessible."})]}),e.jsx("p",{children:"Publications create a lasting record of perspectives, ideas and lessons that can continue to inform future conversations."}),e.jsxs(s,{to:"/articles",children:["Explore stories",e.jsx(n,{})]})]})]}),e.jsxs("section",{className:"closingSection",children:[e.jsx("span",{children:"DRISHTI / PUBLICATIONS"}),e.jsxs("div",{children:[e.jsxs("h2",{children:["Read deeper.",e.jsx("strong",{children:"Understand better."})]}),e.jsxs(s,{to:"/publications",children:["View all publications",e.jsx(n,{})]})]})]})]})};export{h as default};
