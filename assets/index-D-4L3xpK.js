import{c as r,u as o,j as e,L as i,r as s,v as l,w as c,m as p,n as m,F as h}from"./index-BBIEQPxq.js";const d={Wrapper:r.div`
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
            color: #77736c;
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

        .heroContent {
            max-width: 1100px;
            margin: 70px auto 0;
        }

        .articleMeta {
            display: flex;
            align-items: center;
            gap: 24px;
            color: #8b867f;
            font-family: "Antonio", sans-serif;
            font-size: 0.68rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.12em;
        }

        .articleMeta span:first-child {
            color: #ef2b2d;
        }

        .articleMeta span:last-child {
            display: flex;
            align-items: center;
            gap: 7px;
        }

        .heroContent h1 {
            margin-top: 28px;
            font-family: Georgia, "Times New Roman", serif;
            font-size: clamp(4rem, 7vw, 8rem);
            font-weight: 700;
            line-height: 0.9;
            letter-spacing: -0.07em;
        }

        .heroContent > p {
            max-width: 750px;
            margin-top: 30px;
            color: #656059;
            font-size: 1rem;
            line-height: 1.85;
        }

        .heroImage {
            position: relative;
            width: calc(100% - 12vw);
            height: 760px;
            margin: 0 auto;
            overflow: hidden;
        }

        .heroImage img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .imageNumber {
            position: absolute;
            right: 28px;
            bottom: 28px;
            width: 58px;
            height: 58px;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid rgba(255, 255, 255, 0.5);
            border-radius: 50%;
            background: rgba(17, 17, 17, 0.28);
            backdrop-filter: blur(12px);
            color: #ffffff;
            font-family: "Antonio", sans-serif;
            font-size: 0.7rem;
        }

        .articleSection {
            max-width: 1200px;
            margin: 0 auto;
            padding: 120px 24px;
            display: grid;
            grid-template-columns: 180px minmax(0, 760px);
            gap: 70px;
            justify-content: center;
        }

        .articleAside {
            position: sticky;
            top: 160px;
            align-self: start;
        }

        .articleAside > span {
            color: #8e8981;
            font-family: "Antonio", sans-serif;
            font-size: 0.58rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.13em;
        }

        .shareButtons {
            margin-top: 18px;
            display: flex;
            gap: 8px;
        }

        .shareButtons button,
        .shareButtons a {
            width: 38px;
            height: 38px;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid rgba(17, 17, 17, 0.13);
            border-radius: 50%;
            color: #55514b;
            transition:
                background 0.2s ease,
                color 0.2s ease;
        }

        .shareButtons button:hover,
        .shareButtons a:hover {
            background: #ef2b2d;
            color: #ffffff;
        }

        .articleContent {
            min-width: 0;
        }

        .articleContent p {
            margin-bottom: 30px;
            color: #56524c;
            font-size: 1rem;
            line-height: 1.95;
        }

        .articleContent .lead {
            color: #22201d;
            font-family: Georgia, "Times New Roman", serif;
            font-size: clamp(1.7rem, 2.4vw, 2.5rem);
            line-height: 1.3;
        }

        .articleContent h2 {
            margin: 65px 0 24px;
            font-family: Georgia, "Times New Roman", serif;
            font-size: clamp(2.3rem, 3.5vw, 4rem);
            font-weight: 400;
            line-height: 1;
            letter-spacing: -0.045em;
        }

        .articleContent blockquote {
            margin: 60px 0;
            padding: 36px 0 36px 34px;
            border-left: 4px solid #ef2b2d;
            color: #111111;
            font-family: Georgia, "Times New Roman", serif;
            font-size: clamp(2rem, 3vw, 3.4rem);
            line-height: 1.15;
        }

        .articleHighlight {
            margin: 60px 0;
            padding: 42px;
            background: #111111;
            color: #ffffff;
        }

        .articleHighlight span {
            display: block;
            margin-bottom: 20px;
            color: #ef2b2d;
            font-family: "Antonio", sans-serif;
            font-size: 0.62rem;
            font-weight: 700;
            letter-spacing: 0.13em;
        }

        .articleHighlight strong {
            font-family: Georgia, "Times New Roman", serif;
            font-size: clamp(2rem, 3vw, 3.5rem);
            font-weight: 400;
            line-height: 1.1;
        }

        .nextStorySection {
            padding: 110px 6vw;
            background: #ef2b2d;
            color: #ffffff;
        }

        .nextStorySection > span {
            font-family: "Antonio", sans-serif;
            font-size: 0.68rem;
            font-weight: 700;
            letter-spacing: 0.14em;
        }

        .nextStorySection > div {
            margin-top: 24px;
            display: flex;
            align-items: end;
            justify-content: space-between;
            gap: 60px;
        }

        .nextStorySection h2 {
            max-width: 900px;
            font-family: Georgia, "Times New Roman", serif;
            font-size: clamp(3.5rem, 6vw, 6.8rem);
            font-weight: 700;
            line-height: 0.92;
            letter-spacing: -0.06em;
        }

        .nextStorySection h2 strong {
            display: block;
            color: #111111;
            font-weight: 400;
            font-style: italic;
        }

        .nextStorySection a {
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

        @media (max-width: 900px) {
            .articleSection {
                grid-template-columns: 1fr;
                max-width: 820px;
            }

            .articleAside {
                position: static;
            }
        }

        @media (max-width: 700px) {
            .heroSection {
                padding: 60px 20px 80px;
            }

            .topBar {
                align-items: flex-start;
                flex-direction: column;
                gap: 12px;
            }

            .heroContent {
                margin-top: 50px;
            }

            .heroContent h1 {
                font-size: clamp(3.8rem, 17vw, 6rem);
            }

            .heroImage {
                width: calc(100% - 40px);
                height: 500px;
            }

            .articleSection {
                padding: 80px 20px;
            }

            .articleHighlight {
                padding: 30px 24px;
            }

            .nextStorySection {
                padding: 90px 20px;
            }

            .nextStorySection > div {
                align-items: flex-start;
                flex-direction: column;
            }
        }
    `},n={"access-to-knowledge":{category:"Education",title:"Why access to knowledge can change a life",intro:"Education becomes more powerful when useful information reaches people at the right time and in the right form.",image:"https://picsum.photos/seed/drishti-article-education/1600/1000",readTime:"5 min read",number:"01"},"stronger-communities":{category:"Community",title:"Progress becomes stronger when people move together",intro:"Communities create lasting progress when participation, trust and shared responsibility become part of the process.",image:"https://picsum.photos/seed/drishti-article-community/1600/1000",readTime:"6 min read",number:"02"},"small-actions":{category:"Awareness",title:"Small actions can create meaningful change",intro:"Positive social change is often built through simple actions repeated consistently over time.",image:"https://picsum.photos/seed/drishti-article-action/1600/1000",readTime:"4 min read",number:"03"},"digital-awareness":{category:"Digital",title:"Digital awareness is becoming a basic life skill",intro:"Knowing how to use digital tools safely and confidently can open access to education, work and essential services.",image:"https://picsum.photos/seed/drishti-article-digital/1600/1000",readTime:"7 min read",number:"04"},"opportunity-and-barriers":{category:"Opportunity",title:"Opportunity begins when barriers become visible",intro:"Understanding the barriers people face is the first step toward building solutions that can actually help.",image:"https://picsum.photos/seed/drishti-article-opportunity/1600/1000",readTime:"5 min read",number:"05"},"meaningful-impact":{category:"Perspective",title:"Why meaningful impact takes time",intro:"Sustainable impact is not built overnight. It grows through patience, consistency and long-term participation.",image:"https://picsum.photos/seed/drishti-article-impact/1600/1000",readTime:"6 min read",number:"06"}},f=()=>{const{articleSlug:a}=o(),t=n[a]||n["access-to-knowledge"];return e.jsxs(d.Wrapper,{children:[e.jsxs("section",{className:"heroSection",children:[e.jsxs("div",{className:"topBar",children:[e.jsxs(i,{to:"/articles",children:[e.jsx(s,{}),"Back to stories"]}),e.jsxs("span",{children:["ARTICLE / ",t.number]})]}),e.jsxs("div",{className:"heroContent",children:[e.jsxs("div",{className:"articleMeta",children:[e.jsx("span",{children:t.category}),e.jsxs("span",{children:[e.jsx(l,{}),t.readTime]})]}),e.jsx("h1",{children:t.title}),e.jsx("p",{children:t.intro})]})]}),e.jsxs("section",{className:"heroImage",children:[e.jsx("img",{src:t.image,alt:t.title}),e.jsx("div",{className:"imageNumber",children:t.number})]}),e.jsxs("section",{className:"articleSection",children:[e.jsxs("aside",{className:"articleAside",children:[e.jsx("span",{children:"SHARE STORY"}),e.jsxs("div",{className:"shareButtons",children:[e.jsx("button",{type:"button","aria-label":"Share article",children:e.jsx(c,{})}),e.jsx("a",{href:"https://www.linkedin.com",target:"_blank",rel:"noreferrer","aria-label":"LinkedIn",children:e.jsx(p,{})}),e.jsx("a",{href:"https://www.facebook.com",target:"_blank",rel:"noreferrer","aria-label":"Facebook",children:e.jsx(m,{})})]})]}),e.jsxs("article",{className:"articleContent",children:[e.jsx("p",{className:"lead",children:"Meaningful progress often begins with something simple: access to the right information, the right support or the right opportunity at the right time."}),e.jsx("p",{children:"For many people, barriers are not always caused by a lack of ability. They can come from limited access, missing information, lack of confidence or simply not knowing what opportunities are available."}),e.jsx("h2",{children:"Awareness can become the first step toward progress."}),e.jsx("p",{children:"When information is understandable and easy to access, people can make better decisions. They can identify new possibilities, learn useful skills and become more confident in navigating everyday challenges."}),e.jsx("blockquote",{children:"Progress becomes possible when knowledge is not only available, but accessible and useful."}),e.jsx("p",{children:"This is why awareness matters. It creates a bridge between what exists and the people who may benefit from it."}),e.jsx("h2",{children:"Small improvements can create larger outcomes."}),e.jsx("p",{children:"Social impact does not always require large-scale intervention. A useful resource, a clear explanation, an introduction or a supportive conversation can sometimes create an important turning point."}),e.jsx("p",{children:"The goal is not simply to provide information. It is to make information useful enough that people can act on it."}),e.jsxs("div",{className:"articleHighlight",children:[e.jsx("span",{children:"DRISHTI PERSPECTIVE"}),e.jsx("strong",{children:"Give people clarity, access and opportunity, and they can create their own momentum."})]}),e.jsx("h2",{children:"Long-term change requires consistency."}),e.jsx("p",{children:"Sustainable improvement is rarely immediate. It grows through repeated effort, participation and trust. That is why community involvement and long-term thinking are important parts of meaningful social work."}),e.jsx("p",{children:"Every initiative can begin small, but with the right intent and consistency, small actions can become part of something much larger."})]})]}),e.jsxs("section",{className:"nextStorySection",children:[e.jsx("span",{children:"NEXT STEP"}),e.jsxs("div",{children:[e.jsxs("h2",{children:["Continue exploring",e.jsx("strong",{children:"ideas that matter."})]}),e.jsxs(i,{to:"/articles",children:["View all stories",e.jsx(h,{})]})]})]})]})};export{f as default};
