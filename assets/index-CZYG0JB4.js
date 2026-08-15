import{c as s,u as a,j as e,L as o,r as c,F as p,s as l,d,t as m,b as g}from"./index-BBIEQPxq.js";const f={Wrapper:s.div`
        width: 100%;
        background: #f7f4ee;
        color: #111111;

        .heroSection {
            padding: 60px 6vw 105px;
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
            margin-top: 60px;
            display: grid;
            grid-template-columns: 1.25fr 0.75fr;
            gap: 7vw;
            align-items: end;
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
            max-width: 950px;
            margin-top: 22px;
            font-family: Georgia, "Times New Roman", serif;
            font-size: clamp(4.2rem, 7vw, 8.2rem);
            font-weight: 700;
            line-height: 0.88;
            letter-spacing: -0.07em;
        }

        .heroIntro {
            max-width: 500px;
        }

        .heroIcon {
            width: 54px;
            height: 54px;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid rgba(17, 17, 17, 0.12);
            border-radius: 50%;
            color: #ef2b2d;
            font-size: 1.25rem;
        }

        .heroIntro p {
            margin-top: 24px;
            color: #625e57;
            font-size: 0.95rem;
            line-height: 1.85;
        }

        .imageSection {
            position: relative;
            width: calc(100% - 12vw);
            height: 720px;
            margin: 0 auto;
            overflow: hidden;
        }

        .imageSection img {
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
                transparent 58%
            );
        }

        .imageContent {
            position: absolute;
            left: 30px;
            right: 30px;
            bottom: 30px;
            z-index: 2;
            display: flex;
            align-items: end;
            justify-content: space-between;
            color: #ffffff;
        }

        .imageContent span {
            font-family: "Antonio", sans-serif;
            font-size: 0.66rem;
            font-weight: 700;
            letter-spacing: 0.13em;
        }

        .imageContent strong {
            font-family: Georgia, "Times New Roman", serif;
            font-size: clamp(2.5rem, 4vw, 4.8rem);
            font-weight: 400;
        }

        .perspectiveSection {
            padding: 120px 6vw;
            background: #111111;
            color: #ffffff;
        }

        .perspectiveMeta {
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

        .perspectiveGrid {
            margin-top: 60px;
            display: grid;
            grid-template-columns: 1.1fr 0.9fr;
            gap: 7vw;
            align-items: end;
        }

        .perspectiveGrid h2 {
            max-width: 900px;
            font-family: Georgia, "Times New Roman", serif;
            font-size: clamp(3.7rem, 6vw, 6.8rem);
            font-weight: 400;
            line-height: 0.92;
            letter-spacing: -0.06em;
        }

        .perspectiveGrid h2 span {
            display: block;
            color: #ef2b2d;
            font-style: italic;
        }

        .perspectiveGrid > div {
            display: grid;
            gap: 20px;
        }

        .perspectiveGrid p {
            color: #aaaaaa;
            font-size: 0.9rem;
            line-height: 1.8;
        }

        .focusSection {
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

        .focusGrid {
            margin-top: 50px;
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            border-top: 1px solid rgba(17, 17, 17, 0.12);
            border-left: 1px solid rgba(17, 17, 17, 0.12);
        }

        .focusGrid article {
            min-height: 360px;
            padding: 26px;
            display: flex;
            flex-direction: column;
            border-right: 1px solid rgba(17, 17, 17, 0.12);
            border-bottom: 1px solid rgba(17, 17, 17, 0.12);
            transition:
                background 0.22s ease,
                color 0.22s ease;
        }

        .focusGrid article:hover {
            background: #ef2b2d;
            color: #ffffff;
        }

        .focusGrid article > span {
            color: #ef2b2d;
            font-family: "Antonio", sans-serif;
            font-size: 0.62rem;
            font-weight: 700;
        }

        .focusGrid article:hover > span {
            color: #111111;
        }

        .focusGrid article > div {
            margin-top: auto;
        }

        .focusGrid strong {
            font-family: Georgia, "Times New Roman", serif;
            font-size: clamp(2rem, 2.8vw, 3rem);
            font-weight: 400;
        }

        .focusGrid p {
            max-width: 330px;
            margin-top: 14px;
            color: #777168;
            font-size: 0.78rem;
            line-height: 1.7;
        }

        .focusGrid article:hover p {
            color: rgba(255, 255, 255, 0.8);
        }

        .approachSection {
            display: grid;
            grid-template-columns: 0.95fr 1.05fr;
            min-height: 700px;
            background: #e7e2d9;
        }

        .approachVisual img {
            width: 100%;
            height: 100%;
            min-height: 700px;
            object-fit: cover;
        }

        .approachContent {
            padding: 80px 6vw;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }

        .approachContent > span {
            color: #ef2b2d;
            font-family: "Antonio", sans-serif;
            font-size: 0.68rem;
            font-weight: 700;
            letter-spacing: 0.14em;
        }

        .approachContent h2 {
            margin-top: 24px;
            font-family: Georgia, "Times New Roman", serif;
            font-size: clamp(3.5rem, 5vw, 6rem);
            font-weight: 700;
            line-height: 0.92;
            letter-spacing: -0.055em;
        }

        .approachContent h2 strong {
            display: block;
            color: #ef2b2d;
            font-weight: 400;
            font-style: italic;
        }

        .approachContent > p {
            max-width: 560px;
            margin-top: 26px;
            color: #69635b;
            font-size: 0.9rem;
            line-height: 1.8;
        }

        .approachSteps {
            max-width: 600px;
            margin-top: 38px;
            border-top: 1px solid rgba(17, 17, 17, 0.12);
        }

        .approachSteps > div {
            min-height: 72px;
            display: grid;
            grid-template-columns: 60px 1fr;
            align-items: center;
            border-bottom: 1px solid rgba(17, 17, 17, 0.12);
        }

        .approachSteps span {
            color: #ef2b2d;
            font-family: "Antonio", sans-serif;
            font-size: 0.62rem;
        }

        .approachSteps strong {
            font-family: Georgia, "Times New Roman", serif;
            font-size: 1.3rem;
            font-weight: 400;
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

        @media (max-width: 950px) {
            .heroGrid,
            .perspectiveGrid,
            .approachSection {
                grid-template-columns: 1fr;
            }

            .focusGrid {
                grid-template-columns: 1fr;
            }
        }

        @media (max-width: 700px) {
            .heroSection,
            .perspectiveSection,
            .focusSection,
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

            .imageSection {
                width: calc(100% - 40px);
                height: 520px;
            }

            .imageContent {
                align-items: flex-start;
                flex-direction: column;
                gap: 10px;
            }

            .focusGrid article {
                min-height: 260px;
            }

            .approachVisual img {
                min-height: 520px;
            }

            .approachContent {
                padding: 70px 20px;
            }

            .closingSection {
                align-items: flex-start;
                flex-direction: column;
            }
        }
    `},r={education:{number:"01",category:"Education",title:"Learning that creates possibility.",intro:"Exploring ways to make useful knowledge, educational resources and learning opportunities easier to understand and access.",image:"https://picsum.photos/seed/drishti-work-education/1600/1050",icon:e.jsx(g,{}),focus:[{number:"01",title:"Accessible learning",description:"Present useful information in clear and understandable ways."},{number:"02",title:"Practical knowledge",description:"Focus on learning that can support everyday decisions and opportunities."},{number:"03",title:"Confidence",description:"Encourage curiosity, questions and continued learning."}]},"digital-awareness":{number:"02",category:"Digital Awareness",title:"Confidence in a connected world.",intro:"Helping people understand digital tools, online environments and practical technology with greater clarity and confidence.",image:"https://picsum.photos/seed/drishti-work-digital/1600/1050",icon:e.jsx(m,{}),focus:[{number:"01",title:"Digital confidence",description:"Make everyday technology feel easier to understand and use."},{number:"02",title:"Awareness",description:"Encourage informed and thoughtful use of digital services."},{number:"03",title:"Access",description:"Help connect people with useful digital resources and information."}]},community:{number:"03",category:"Community",title:"Progress built through participation.",intro:"Creating space for people to share perspectives, understand local needs and participate in constructive community action.",image:"https://picsum.photos/seed/drishti-work-community/1600/1050",icon:e.jsx(d,{}),focus:[{number:"01",title:"Listen",description:"Understand perspectives before trying to define solutions."},{number:"02",title:"Connect",description:"Create opportunities for useful conversations and collaboration."},{number:"03",title:"Participate",description:"Encourage people to become active contributors to progress."}]},support:{number:"04",category:"Support",title:"Small support. Meaningful momentum.",intro:"Connecting useful information, people and opportunities so that practical support can become a starting point for progress.",image:"https://picsum.photos/seed/drishti-work-support/1600/1050",icon:e.jsx(l,{}),focus:[{number:"01",title:"Understand",description:"Begin by understanding the actual need or barrier."},{number:"02",title:"Guide",description:"Help make relevant information and possible next steps clearer."},{number:"03",title:"Enable",description:"Support people in moving forward with greater confidence."}]}},x=()=>{const{workSlug:n}=a(),i=r[n]||r.education;return e.jsxs(f.Wrapper,{children:[e.jsxs("section",{className:"heroSection",children:[e.jsxs("div",{className:"topBar",children:[e.jsxs(o,{to:"/work",children:[e.jsx(c,{}),"Back to our work"]}),e.jsxs("span",{children:["FOCUS AREA / ",i.number]})]}),e.jsxs("div",{className:"heroGrid",children:[e.jsxs("div",{className:"heroContent",children:[e.jsx("span",{className:"eyebrow",children:i.category}),e.jsx("h1",{children:i.title})]}),e.jsxs("div",{className:"heroIntro",children:[e.jsx("span",{className:"heroIcon",children:i.icon}),e.jsx("p",{children:i.intro})]})]})]}),e.jsxs("section",{className:"imageSection",children:[e.jsx("img",{src:i.image,alt:i.category}),e.jsx("div",{className:"imageOverlay"}),e.jsxs("div",{className:"imageContent",children:[e.jsxs("span",{children:["DRISHTI / ",i.number]}),e.jsx("strong",{children:i.category})]})]}),e.jsxs("section",{className:"perspectiveSection",children:[e.jsxs("div",{className:"perspectiveMeta",children:[e.jsx("span",{children:"OUR PERSPECTIVE"}),e.jsx("span",{children:"01"})]}),e.jsxs("div",{className:"perspectiveGrid",children:[e.jsxs("h2",{children:["Change becomes stronger",e.jsx("span",{children:"when people can participate."})]}),e.jsxs("div",{children:[e.jsx("p",{children:"Sustainable progress is rarely created by a single action. It develops through understanding, participation and consistent effort."}),e.jsx("p",{children:"Our approach begins by making ideas, information and opportunities easier to understand and engage with."})]})]})]}),e.jsxs("section",{className:"focusSection",children:[e.jsxs("div",{className:"sectionHeader",children:[e.jsx("span",{children:"WHAT WE FOCUS ON"}),e.jsx("strong",{children:"03 PRINCIPLES"})]}),e.jsx("div",{className:"focusGrid",children:i.focus.map(t=>e.jsxs("article",{children:[e.jsx("span",{children:t.number}),e.jsxs("div",{children:[e.jsx("strong",{children:t.title}),e.jsx("p",{children:t.description})]})]},t.number))})]}),e.jsxs("section",{className:"approachSection",children:[e.jsx("div",{className:"approachVisual",children:e.jsx("img",{src:`https://picsum.photos/seed/drishti-${n}-approach/1100/1200`,alt:`${i.category} approach`})}),e.jsxs("div",{className:"approachContent",children:[e.jsx("span",{children:"HOW WE THINK"}),e.jsxs("h2",{children:["Listen first.",e.jsx("strong",{children:"Act with clarity."})]}),e.jsx("p",{children:"Good intentions become more useful when they are guided by understanding. The first step is listening carefully and identifying what can genuinely help."}),e.jsxs("div",{className:"approachSteps",children:[e.jsxs("div",{children:[e.jsx("span",{children:"01"}),e.jsx("strong",{children:"Understand"})]}),e.jsxs("div",{children:[e.jsx("span",{children:"02"}),e.jsx("strong",{children:"Explore"})]}),e.jsxs("div",{children:[e.jsx("span",{children:"03"}),e.jsx("strong",{children:"Act"})]})]})]})]}),e.jsxs("section",{className:"closingSection",children:[e.jsxs("div",{children:[e.jsx("span",{children:"BE PART OF THE PROCESS"}),e.jsxs("h2",{children:["Better outcomes begin",e.jsx("strong",{children:"with better conversations."})]})]}),e.jsxs(o,{to:"/contact",children:["Start a conversation",e.jsx(p,{})]})]})]})};export{x as default};
