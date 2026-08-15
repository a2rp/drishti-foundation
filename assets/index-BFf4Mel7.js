import{c as o,j as e,L as t,F as n,a as i,b as s,d as r,e as a}from"./index-BBIEQPxq.js";const c={Wrapper:o.div`
        width: 100%;
        background: #ece9e1;
        color: #111111;

        .heroSection {
            width: 100%;
            min-height: calc(100vh - 116px);
            display: grid;
            grid-template-columns: 0.95fr 1.05fr;
        }

        .heroContent {
            padding: 90px 7vw 80px 6vw;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }

        .eyebrow {
            color: #ef2b2d;
            font-family: "Antonio", sans-serif;
            font-size: 0.8rem;
            font-weight: 700;
            letter-spacing: 0.16em;
            text-transform: uppercase;
        }

        .heroContent h1 {
            max-width: 850px;
            margin-top: 28px;
            font-family: Georgia, "Times New Roman", serif;
            font-size: clamp(4.5rem, 7vw, 8.8rem);
            font-weight: 700;
            line-height: 0.86;
            letter-spacing: -0.075em;
        }

        .heroContent h1 span {
            display: block;
            color: #ef2b2d;
            font-weight: 400;
            font-style: italic;
        }

        .heroDescription {
            max-width: 580px;
            margin-top: 32px;
            color: #57544e;
            font-size: 1rem;
            line-height: 1.8;
        }

        .heroActions {
            margin-top: 34px;
            display: flex;
            align-items: center;
            gap: 24px;
            flex-wrap: wrap;
        }

        .primaryButton {
            min-height: 52px;
            padding: 0 20px;
            display: inline-flex;
            align-items: center;
            gap: 16px;
            border-radius: 999px;
            background: #111111;
            color: #ffffff;
            font-family: "Antonio", sans-serif;
            font-size: 0.85rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.08em;
            transition:
                background 0.2s ease,
                transform 0.2s ease;
        }

        .primaryButton:hover {
            background: #ef2b2d;
            transform: translateY(-2px);
        }

        .textButton {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            font-family: "Antonio", sans-serif;
            font-size: 0.85rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.08em;
        }

        .heroVisual {
            position: relative;
            min-height: 720px;
            overflow: hidden;
        }

        .heroVisual img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .heroVisualOverlay {
            position: absolute;
            inset: 0;
            background:
                linear-gradient(
                    to top,
                    rgba(17, 17, 17, 0.68),
                    transparent 55%
                ),
                linear-gradient(
                    to right,
                    rgba(17, 17, 17, 0.12),
                    transparent 40%
                );
        }

        .heroVisualNote {
            position: absolute;
            left: 42px;
            bottom: 42px;
            z-index: 2;
            color: #ffffff;
        }

        .heroVisualNote span {
            display: block;
            margin-bottom: 10px;
            font-family: "Antonio", sans-serif;
            font-size: 0.72rem;
            text-transform: uppercase;
            letter-spacing: 0.14em;
        }

        .heroVisualNote strong {
            font-family: Georgia, "Times New Roman", serif;
            font-size: clamp(2rem, 3.2vw, 4rem);
            font-weight: 400;
            line-height: 1;
        }

        .heroNumber {
            position: absolute;
            top: 32px;
            right: 32px;
            z-index: 2;
            width: 110px;
            height: 110px;
            padding: 18px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            border: 1px solid rgba(255, 255, 255, 0.45);
            color: #ffffff;
            background: rgba(17, 17, 17, 0.18);
            backdrop-filter: blur(10px);
        }

        .heroNumber span {
            font-family: "Antonio", sans-serif;
            font-size: 1.4rem;
        }

        .heroNumber small {
            font-size: 0.52rem;
            line-height: 1.3;
            text-transform: uppercase;
            letter-spacing: 0.08em;
        }

        .introSection {
            padding: 130px 6vw;
            background: #f7f4ee;
        }

        .sectionMeta {
            padding-bottom: 24px;
            border-bottom: 1px solid rgba(17, 17, 17, 0.12);
        }

        .sectionMeta span {
            font-family: "Antonio", sans-serif;
            font-size: 0.72rem;
            font-weight: 700;
            letter-spacing: 0.14em;
        }

        .introContent {
            margin-top: 60px;
            display: grid;
            grid-template-columns: minmax(0, 1.3fr) minmax(300px, 0.7fr);
            gap: 7vw;
            align-items: end;
        }

        .introContent h2,
        .storyContent h2,
        .ctaInner h2 {
            font-family: Georgia, "Times New Roman", serif;
            font-size: clamp(3.6rem, 6vw, 7rem);
            font-weight: 700;
            line-height: 0.92;
            letter-spacing: -0.065em;
        }

        .introContent h2 span,
        .storyContent h2 span {
            display: block;
            color: #ef2b2d;
            font-weight: 400;
            font-style: italic;
        }

        .introCopy p {
            color: #625e57;
            font-size: 0.95rem;
            line-height: 1.8;
        }

        .introCopy a,
        .storyContent a {
            width: fit-content;
            margin-top: 24px;
            display: flex;
            align-items: center;
            gap: 10px;
            font-family: "Antonio", sans-serif;
            font-size: 0.8rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.08em;
        }

        .impactSection {
            padding: 0 6vw 130px;
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 18px;
            background: #f7f4ee;
        }

        .impactCard {
            position: relative;
            min-height: 480px;
            padding: 28px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            overflow: hidden;
            background: #ded9cf;
        }

        .communityCard {
            color: #ffffff;
        }

        .communityCard img {
            position: absolute;
            inset: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .imageOverlay {
            position: absolute;
            inset: 0;
            background: linear-gradient(
                to top,
                rgba(17, 17, 17, 0.7),
                rgba(17, 17, 17, 0.08)
            );
        }

        .cardIcon,
        .cardIndex,
        .cardContent {
            position: relative;
            z-index: 2;
        }

        .cardIcon {
            width: 48px;
            height: 48px;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid rgba(17, 17, 17, 0.14);
            border-radius: 50%;
            font-size: 1.1rem;
        }

        .cardIcon.light {
            border-color: rgba(255, 255, 255, 0.4);
        }

        .cardIndex {
            position: absolute;
            top: 32px;
            right: 28px;
            font-family: "Antonio", sans-serif;
            font-size: 0.7rem;
            letter-spacing: 0.12em;
        }

        .cardIndex.light {
            color: #ffffff;
        }

        .cardContent > span {
            font-family: "Antonio", sans-serif;
            font-size: 0.72rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.14em;
        }

        .cardContent h3 {
            margin-top: 14px;
            font-family: Georgia, "Times New Roman", serif;
            font-size: clamp(2rem, 2.6vw, 3.4rem);
            font-weight: 400;
            line-height: 1;
            letter-spacing: -0.045em;
        }

        .cardContent p {
            margin-top: 18px;
            color: #625e57;
            font-size: 0.82rem;
            line-height: 1.7;
        }

        .cardContent.light p {
            color: rgba(255, 255, 255, 0.78);
        }

        .storySection {
            display: grid;
            grid-template-columns: 1.1fr 0.9fr;
            min-height: 760px;
            background: #111111;
            color: #ffffff;
        }

        .storyImage img {
            width: 100%;
            height: 100%;
            min-height: 760px;
            object-fit: cover;
        }

        .storyContent {
            padding: 80px 6vw;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }

        .storyContent h2 {
            margin-top: 28px;
        }

        .storyContent p {
            max-width: 540px;
            margin-top: 28px;
            color: #aaaaaa;
            font-size: 0.94rem;
            line-height: 1.85;
        }

        .storyContent a {
            color: #ffffff;
        }

        .ctaSection {
            padding: 120px 6vw;
            background: #ef2b2d;
            color: #ffffff;
        }

        .ctaInner > span {
            font-family: "Antonio", sans-serif;
            font-size: 0.72rem;
            font-weight: 700;
            letter-spacing: 0.15em;
        }

        .ctaInner h2 {
            max-width: 1100px;
            margin-top: 28px;
        }

        .ctaInner h2 strong {
            display: block;
            color: #111111;
            font-weight: 400;
            font-style: italic;
        }

        .ctaBottom {
            margin-top: 50px;
            padding-top: 28px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 40px;
            border-top: 1px solid rgba(255, 255, 255, 0.32);
        }

        .ctaBottom p {
            max-width: 520px;
            line-height: 1.7;
        }

        .ctaBottom a {
            min-height: 50px;
            padding: 0 18px;
            display: flex;
            align-items: center;
            gap: 12px;
            border-radius: 999px;
            background: #111111;
            color: #ffffff;
            font-family: "Antonio", sans-serif;
            font-size: 0.8rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.08em;
        }

        @media (max-width: 1000px) {
            .heroSection,
            .storySection {
                grid-template-columns: 1fr;
            }

            .heroVisual,
            .storyImage img {
                min-height: 620px;
            }

            .introContent {
                grid-template-columns: 1fr;
            }

            .impactSection {
                grid-template-columns: 1fr 1fr;
            }

            .supportCard {
                grid-column: 1 / -1;
            }
        }

        @media (max-width: 700px) {
            .heroSection {
                min-height: auto;
            }

            .heroContent {
                padding: 70px 20px 60px;
            }

            .heroContent h1 {
                font-size: clamp(4rem, 18vw, 6.5rem);
            }

            .heroVisual {
                min-height: 560px;
            }

            .heroVisualNote {
                left: 22px;
                right: 22px;
                bottom: 24px;
            }

            .heroNumber {
                top: 20px;
                right: 20px;
            }

            .introSection,
            .ctaSection {
                padding: 90px 20px;
            }

            .impactSection {
                padding: 0 20px 90px;
                grid-template-columns: 1fr;
            }

            .supportCard {
                grid-column: auto;
            }

            .impactCard {
                min-height: 420px;
            }

            .storyContent {
                padding: 70px 20px;
            }

            .storyImage img {
                min-height: 520px;
            }

            .ctaBottom {
                align-items: flex-start;
                flex-direction: column;
            }
        }
    `},p=()=>e.jsxs(c.Wrapper,{children:[e.jsxs("section",{className:"heroSection",children:[e.jsxs("div",{className:"heroContent",children:[e.jsx("span",{className:"eyebrow",children:"DRISHTI FOUNDATION / INDIA"}),e.jsxs("h1",{children:["A clearer vision",e.jsx("span",{children:"for a better tomorrow."})]}),e.jsx("p",{className:"heroDescription",children:"We work to create meaningful opportunities through education, awareness, community action and initiatives that help people move forward."}),e.jsxs("div",{className:"heroActions",children:[e.jsxs(t,{to:"/work",className:"primaryButton",children:["Explore our work",e.jsx(n,{})]}),e.jsxs(t,{to:"/about-us",className:"textButton",children:["Who we are",e.jsx(i,{})]})]})]}),e.jsxs("div",{className:"heroVisual",children:[e.jsx("img",{src:"https://picsum.photos/seed/drishti-foundation-hero/1200/1400",alt:"Community and human connection"}),e.jsx("div",{className:"heroVisualOverlay"}),e.jsxs("div",{className:"heroVisualNote",children:[e.jsx("span",{children:"Our purpose"}),e.jsxs("strong",{children:["Enabling people.",e.jsx("br",{}),"Strengthening communities."]})]}),e.jsxs("div",{className:"heroNumber",children:[e.jsx("span",{children:"01"}),e.jsx("small",{children:"Vision in action"})]})]})]}),e.jsxs("section",{className:"introSection",children:[e.jsx("div",{className:"sectionMeta",children:e.jsx("span",{children:"WHAT WE BELIEVE"})}),e.jsxs("div",{className:"introContent",children:[e.jsxs("h2",{children:["Real change begins when",e.jsx("span",{children:"people are given a chance."})]}),e.jsxs("div",{className:"introCopy",children:[e.jsx("p",{children:"Drishti Foundation is built around a simple idea: progress becomes possible when knowledge, access and opportunity reach the people who need them."}),e.jsxs(t,{to:"/about-us",children:["Learn about the foundation",e.jsx(i,{})]})]})]})]}),e.jsxs("section",{className:"impactSection",children:[e.jsxs("article",{className:"impactCard educationCard",children:[e.jsx("div",{className:"cardIcon",children:e.jsx(s,{})}),e.jsx("span",{className:"cardIndex",children:"01"}),e.jsxs("div",{className:"cardContent",children:[e.jsx("span",{children:"Education"}),e.jsx("h3",{children:"Knowledge that creates possibilities."}),e.jsx("p",{children:"Supporting learning, digital awareness and access to information that can help people build stronger futures."})]})]}),e.jsxs("article",{className:"impactCard communityCard",children:[e.jsx("img",{src:"https://picsum.photos/seed/drishti-community/1000/900",alt:"People working together"}),e.jsx("div",{className:"imageOverlay"}),e.jsx("div",{className:"cardIcon light",children:e.jsx(r,{})}),e.jsx("span",{className:"cardIndex light",children:"02"}),e.jsxs("div",{className:"cardContent light",children:[e.jsx("span",{children:"Community"}),e.jsx("h3",{children:"Progress that includes everyone."})]})]}),e.jsxs("article",{className:"impactCard supportCard",children:[e.jsx("div",{className:"cardIcon",children:e.jsx(a,{})}),e.jsx("span",{className:"cardIndex",children:"03"}),e.jsxs("div",{className:"cardContent",children:[e.jsx("span",{children:"Support"}),e.jsx("h3",{children:"Small actions can create lasting impact."}),e.jsx("p",{children:"Connecting people, ideas and resources to encourage practical and positive change."})]})]})]}),e.jsxs("section",{className:"storySection",children:[e.jsx("div",{className:"storyImage",children:e.jsx("img",{src:"https://picsum.photos/seed/drishti-story/1500/950",alt:"Social impact story"})}),e.jsxs("div",{className:"storyContent",children:[e.jsx("span",{className:"eyebrow",children:"OUR WORK / REAL PEOPLE"}),e.jsxs("h2",{children:["Impact is not a number.",e.jsx("span",{children:"It is a changed life."})]}),e.jsx("p",{children:"Our work focuses on practical initiatives that can make a visible difference in everyday lives. We believe meaningful impact is built through consistency, collaboration and trust."}),e.jsxs(t,{to:"/work",children:["See what we do",e.jsx(n,{})]})]})]}),e.jsx("section",{className:"ctaSection",children:e.jsxs("div",{className:"ctaInner",children:[e.jsx("span",{children:"JOIN THE JOURNEY"}),e.jsxs("h2",{children:["Better futures are",e.jsx("strong",{children:"built together."})]}),e.jsxs("div",{className:"ctaBottom",children:[e.jsx("p",{children:"Explore our initiatives, stories and opportunities to contribute to meaningful change."}),e.jsxs(t,{to:"/contact",children:["Get involved",e.jsx(i,{})]})]})]})})]});export{p as default};
