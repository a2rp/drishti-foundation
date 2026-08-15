import{c as l,j as e,b as d,L as a,v as n,F as r,a as o}from"./index-BBIEQPxq.js";const p={Wrapper:l.div`
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
            max-width: 850px;
            font-family: Georgia, "Times New Roman", serif;
            font-size: clamp(4.8rem, 8vw, 9rem);
            font-weight: 700;
            line-height: 0.85;
            letter-spacing: -0.075em;
        }

        .heroGrid h1 span {
            display: block;
            color: #ef2b2d;
            font-weight: 400;
            font-style: italic;
        }

        .heroCopy {
            max-width: 500px;
        }

        .heroCopy > svg {
            margin-bottom: 22px;
            color: #ef2b2d;
            font-size: 1.5rem;
        }

        .heroCopy p {
            color: #625e57;
            font-size: 0.95rem;
            line-height: 1.85;
        }

        .featuredSection {
            display: grid;
            grid-template-columns: 1.15fr 0.85fr;
            min-height: 650px;
            background: #111111;
            color: #ffffff;
        }

        .featuredImage {
            position: relative;
            min-height: 650px;
            overflow: hidden;
        }

        .featuredImage img {
            width: 100%;
            height: 100%;
            min-height: 650px;
            object-fit: cover;
            transition: transform 0.6s ease;
        }

        .featuredImage:hover img {
            transform: scale(1.025);
        }

        .imageOverlay {
            position: absolute;
            inset: 0;
            background: linear-gradient(
                to top,
                rgba(17, 17, 17, 0.55),
                transparent 55%
            );
        }

        .featuredNumber {
            position: absolute;
            left: 28px;
            bottom: 24px;
            z-index: 2;
            color: #ffffff;
            font-family: "Antonio", sans-serif;
            font-size: 0.75rem;
            letter-spacing: 0.12em;
        }

        .featuredContent {
            padding: 70px 5vw;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }

        .articleMeta {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 20px;
            color: #898989;
            font-family: "Antonio", sans-serif;
            font-size: 0.62rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.11em;
        }

        .articleMeta span:last-child {
            display: flex;
            align-items: center;
            gap: 6px;
        }

        .featuredContent .articleMeta span:first-child {
            color: #ef2b2d;
        }

        .featuredContent h2 {
            margin-top: 28px;
            font-family: Georgia, "Times New Roman", serif;
            font-size: clamp(3rem, 4.8vw, 5.8rem);
            font-weight: 400;
            line-height: 0.94;
            letter-spacing: -0.055em;
        }

        .featuredContent > p {
            max-width: 580px;
            margin-top: 26px;
            color: #a6a6a6;
            font-size: 0.9rem;
            line-height: 1.8;
        }

        .readLink {
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

        .articlesSection {
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
            color: #969189;
            font-weight: 600;
        }

        .articlesGrid {
            margin-top: 50px;
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 70px 24px;
        }

        .articleCard {
            min-width: 0;
        }

        .articleImage {
            position: relative;
            height: 440px;
            display: block;
            overflow: hidden;
            background: #ded9cf;
        }

        .articleImage img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.55s ease;
        }

        .articleImage:hover img {
            transform: scale(1.035);
        }

        .articleNumber {
            position: absolute;
            top: 20px;
            left: 20px;
            z-index: 2;
            min-width: 42px;
            height: 42px;
            padding: 0 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid rgba(255, 255, 255, 0.4);
            border-radius: 999px;
            background: rgba(17, 17, 17, 0.2);
            backdrop-filter: blur(10px);
            color: #ffffff;
            font-family: "Antonio", sans-serif;
            font-size: 0.62rem;
        }

        .imageAction {
            position: absolute;
            right: 20px;
            bottom: 20px;
            z-index: 2;
            width: 48px;
            height: 48px;
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

        .articleImage:hover .imageAction {
            background: #111111;
            transform: rotate(45deg);
        }

        .articleContent {
            padding-top: 22px;
        }

        .articleContent .articleMeta span:first-child {
            color: #ef2b2d;
        }

        .articleContent h3 {
            margin-top: 18px;
            font-family: Georgia, "Times New Roman", serif;
            font-size: clamp(2rem, 2.8vw, 3.3rem);
            font-weight: 400;
            line-height: 1;
            letter-spacing: -0.045em;
        }

        .articleContent h3 a {
            transition: color 0.2s ease;
        }

        .articleContent h3 a:hover {
            color: #ef2b2d;
        }

        .articleContent > p {
            max-width: 620px;
            margin-top: 16px;
            color: #6c675f;
            font-size: 0.82rem;
            line-height: 1.75;
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
            max-width: 950px;
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

        @media (max-width: 950px) {
            .heroGrid,
            .featuredSection {
                grid-template-columns: 1fr;
            }

            .featuredImage,
            .featuredImage img {
                min-height: 560px;
            }
        }

        @media (max-width: 700px) {
            .heroSection,
            .articlesSection,
            .closingSection {
                padding: 80px 20px;
            }

            .heroMeta {
                align-items: flex-start;
                flex-direction: column;
                gap: 10px;
            }

            .heroGrid h1 {
                font-size: clamp(4rem, 19vw, 6.4rem);
            }

            .featuredImage,
            .featuredImage img {
                min-height: 480px;
            }

            .featuredContent {
                padding: 60px 20px;
            }

            .articlesGrid {
                grid-template-columns: 1fr;
                gap: 55px;
            }

            .articleImage {
                height: 380px;
            }

            .closingSection {
                align-items: flex-start;
                flex-direction: column;
            }
        }
    `},s=[{id:"01",category:"Education",title:"Why access to knowledge can change a life",excerpt:"Education becomes more powerful when useful information reaches people at the right time and in the right form.",image:"https://picsum.photos/seed/drishti-article-education/1000/760",slug:"access-to-knowledge",readTime:"5 min read"},{id:"02",category:"Community",title:"Progress becomes stronger when people move together",excerpt:"Communities create lasting progress when participation, trust and shared responsibility become part of the process.",image:"https://picsum.photos/seed/drishti-article-community/1000/760",slug:"stronger-communities",readTime:"6 min read"},{id:"03",category:"Awareness",title:"Small actions can create meaningful change",excerpt:"Positive social change is often built through simple actions repeated consistently over time.",image:"https://picsum.photos/seed/drishti-article-action/1000/760",slug:"small-actions",readTime:"4 min read"},{id:"04",category:"Digital",title:"Digital awareness is becoming a basic life skill",excerpt:"Knowing how to use digital tools safely and confidently can open access to education, work and essential services.",image:"https://picsum.photos/seed/drishti-article-digital/1000/760",slug:"digital-awareness",readTime:"7 min read"},{id:"05",category:"Opportunity",title:"Opportunity begins when barriers become visible",excerpt:"Understanding the barriers people face is the first step toward building solutions that can actually help.",image:"https://picsum.photos/seed/drishti-article-opportunity/1000/760",slug:"opportunity-and-barriers",readTime:"5 min read"},{id:"06",category:"Perspective",title:"Why meaningful impact takes time",excerpt:"Sustainable impact is not built overnight. It grows through patience, consistency and long-term participation.",image:"https://picsum.photos/seed/drishti-article-impact/1000/760",slug:"meaningful-impact",readTime:"6 min read"}],g=()=>{const t=s[0],c=s.slice(1);return e.jsxs(p.Wrapper,{children:[e.jsxs("section",{className:"heroSection",children:[e.jsxs("div",{className:"heroMeta",children:[e.jsx("span",{children:"STORIES & PERSPECTIVES"}),e.jsx("span",{children:"05 / FOUNDATION"})]}),e.jsxs("div",{className:"heroGrid",children:[e.jsxs("h1",{children:["Ideas worth",e.jsx("span",{children:"sharing."})]}),e.jsxs("div",{className:"heroCopy",children:[e.jsx(d,{}),e.jsx("p",{children:"Stories, observations and practical perspectives on education, awareness, community and positive social change."})]})]})]}),e.jsxs("section",{className:"featuredSection",children:[e.jsxs(a,{to:`/articles/${t.slug}`,className:"featuredImage",children:[e.jsx("img",{src:t.image,alt:t.title}),e.jsx("div",{className:"imageOverlay"}),e.jsx("div",{className:"featuredNumber",children:t.id})]}),e.jsxs("div",{className:"featuredContent",children:[e.jsxs("div",{className:"articleMeta",children:[e.jsx("span",{children:t.category}),e.jsxs("span",{children:[e.jsx(n,{}),t.readTime]})]}),e.jsx("h2",{children:t.title}),e.jsx("p",{children:t.excerpt}),e.jsxs(a,{to:`/articles/${t.slug}`,className:"readLink",children:["Read story",e.jsx(r,{})]})]})]}),e.jsxs("section",{className:"articlesSection",children:[e.jsxs("div",{className:"sectionHeader",children:[e.jsx("span",{children:"ALL STORIES"}),e.jsxs("strong",{children:[String(s.length).padStart(2,"0")," Articles"]})]}),e.jsx("div",{className:"articlesGrid",children:c.map(i=>e.jsxs("article",{className:"articleCard",children:[e.jsxs(a,{to:`/articles/${i.slug}`,className:"articleImage",children:[e.jsx("img",{src:i.image,alt:i.title}),e.jsx("span",{className:"articleNumber",children:i.id}),e.jsx("span",{className:"imageAction",children:e.jsx(o,{})})]}),e.jsxs("div",{className:"articleContent",children:[e.jsxs("div",{className:"articleMeta",children:[e.jsx("span",{children:i.category}),e.jsxs("span",{children:[e.jsx(n,{}),i.readTime]})]}),e.jsx("h3",{children:e.jsx(a,{to:`/articles/${i.slug}`,children:i.title})}),e.jsx("p",{children:i.excerpt}),e.jsxs(a,{to:`/articles/${i.slug}`,className:"readLink",children:["Read story",e.jsx(r,{})]})]})]},i.id))})]}),e.jsxs("section",{className:"closingSection",children:[e.jsxs("div",{children:[e.jsx("span",{children:"DRISHTI / JOURNAL"}),e.jsxs("h2",{children:["Stories can inform.",e.jsx("strong",{children:"Ideas can inspire action."})]})]}),e.jsxs(a,{to:"/contact",children:["Start a conversation",e.jsx(o,{})]})]})]})};export{g as default};
