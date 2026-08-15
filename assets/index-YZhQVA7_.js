import{c as p,u as c,j as i,L as t,r as d,i as n,v as o,A as m,d as s,F as r}from"./index-BBIEQPxq.js";const h={Wrapper:p.div`
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
            transition: color 0.2s ease;
        }

        .topBar a:hover {
            color: #ef2b2d;
        }

        .heroGrid {
            margin-top: 60px;
            display: grid;
            grid-template-columns: 1.2fr 0.8fr;
            gap: 7vw;
            align-items: end;
        }

        .eyebrow {
            color: #ef2b2d;
            font-family: "Antonio", sans-serif;
            font-size: 0.7rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.14em;
        }

        .heroContent h1 {
            max-width: 900px;
            margin-top: 22px;
            font-family: Georgia, "Times New Roman", serif;
            font-size: clamp(4rem, 7vw, 8rem);
            font-weight: 700;
            line-height: 0.9;
            letter-spacing: -0.07em;
        }

        .heroContent p {
            max-width: 700px;
            margin-top: 28px;
            color: #625e57;
            font-size: 0.96rem;
            line-height: 1.85;
        }

        .opportunityInfo {
            border-top: 1px solid rgba(17, 17, 17, 0.12);
        }

        .opportunityInfo > div {
            min-height: 88px;
            display: grid;
            grid-template-columns: 30px 100px 1fr;
            gap: 16px;
            align-items: center;
            border-bottom: 1px solid rgba(17, 17, 17, 0.12);
        }

        .opportunityInfo svg {
            color: #ef2b2d;
        }

        .opportunityInfo span {
            color: #918c84;
            font-family: "Antonio", sans-serif;
            font-size: 0.6rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.1em;
        }

        .opportunityInfo strong {
            font-size: 0.85rem;
        }

        .heroImage {
            position: relative;
            width: calc(100% - 12vw);
            height: 720px;
            margin: 0 auto;
            overflow: hidden;
        }

        .heroImage img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .imageOverlay {
            position: absolute;
            inset: 0;
            background: linear-gradient(
                to top,
                rgba(17, 17, 17, 0.72),
                transparent 58%
            );
        }

        .imageContent {
            position: absolute;
            left: 32px;
            bottom: 32px;
            z-index: 2;
            color: #ffffff;
        }

        .imageContent span {
            display: block;
            margin-bottom: 12px;
            font-family: "Antonio", sans-serif;
            font-size: 0.64rem;
            font-weight: 700;
            letter-spacing: 0.13em;
        }

        .imageContent strong {
            font-family: Georgia, "Times New Roman", serif;
            font-size: clamp(2.4rem, 4vw, 4.8rem);
            font-weight: 400;
            line-height: 0.96;
        }

        .detailsSection {
            max-width: 1200px;
            margin: 0 auto;
            padding: 120px 24px;
            display: grid;
            grid-template-columns: 220px minmax(0, 760px);
            gap: 70px;
            justify-content: center;
        }

        .detailsAside {
            position: sticky;
            top: 160px;
            align-self: start;
        }

        .detailsAside > span {
            color: #918c84;
            font-family: "Antonio", sans-serif;
            font-size: 0.58rem;
            font-weight: 700;
            letter-spacing: 0.13em;
        }

        .asideMeta {
            margin-top: 20px;
            border-top: 1px solid rgba(17, 17, 17, 0.12);
        }

        .asideMeta > div {
            padding: 14px 0;
            display: flex;
            align-items: center;
            gap: 10px;
            border-bottom: 1px solid rgba(17, 17, 17, 0.12);
            color: #6e6961;
            font-size: 0.72rem;
        }

        .asideMeta svg {
            color: #ef2b2d;
        }

        .detailsContent p {
            margin-bottom: 30px;
            color: #57534c;
            font-size: 1rem;
            line-height: 1.95;
        }

        .detailsContent .lead {
            color: #22201d;
            font-family: Georgia, "Times New Roman", serif;
            font-size: clamp(1.7rem, 2.4vw, 2.5rem);
            line-height: 1.3;
        }

        .detailsContent h2 {
            margin: 65px 0 24px;
            font-family: Georgia, "Times New Roman", serif;
            font-size: clamp(2.4rem, 3.5vw, 4rem);
            font-weight: 400;
            line-height: 1;
            letter-spacing: -0.045em;
        }

        .responsibilityGrid {
            margin: 50px 0;
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            border-top: 1px solid rgba(17, 17, 17, 0.12);
            border-left: 1px solid rgba(17, 17, 17, 0.12);
        }

        .responsibilityGrid > div {
            min-height: 270px;
            padding: 24px;
            display: flex;
            flex-direction: column;
            border-right: 1px solid rgba(17, 17, 17, 0.12);
            border-bottom: 1px solid rgba(17, 17, 17, 0.12);
        }

        .responsibilityGrid span {
            color: #ef2b2d;
            font-family: "Antonio", sans-serif;
            font-size: 0.62rem;
            font-weight: 700;
        }

        .responsibilityGrid strong {
            margin-top: auto;
            font-family: Georgia, "Times New Roman", serif;
            font-size: 1.5rem;
            font-weight: 400;
        }

        .responsibilityGrid p {
            margin: 12px 0 0;
            color: #777168;
            font-size: 0.76rem;
            line-height: 1.65;
        }

        .highlightBlock {
            margin: 55px 0;
            padding: 34px;
            display: grid;
            grid-template-columns: auto 1fr;
            gap: 24px;
            align-items: center;
            background: #111111;
            color: #ffffff;
        }

        .highlightBlock > svg {
            color: #ef2b2d;
            font-size: 2rem;
        }

        .highlightBlock span {
            display: block;
            margin-bottom: 8px;
            color: #ef2b2d;
            font-family: "Antonio", sans-serif;
            font-size: 0.62rem;
            font-weight: 700;
            letter-spacing: 0.12em;
        }

        .highlightBlock strong {
            font-family: Georgia, "Times New Roman", serif;
            font-size: clamp(1.7rem, 2.5vw, 2.8rem);
            font-weight: 400;
            line-height: 1.1;
        }

        .applyButton {
            width: fit-content;
            min-height: 52px;
            padding: 0 20px;
            display: flex;
            align-items: center;
            gap: 12px;
            border-radius: 999px;
            background: #ef2b2d;
            color: #ffffff;
            font-family: "Antonio", sans-serif;
            font-size: 0.78rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.08em;
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

        @media (max-width: 900px) {
            .heroGrid {
                grid-template-columns: 1fr;
            }

            .detailsSection {
                grid-template-columns: 1fr;
                max-width: 820px;
            }

            .detailsAside {
                position: static;
            }
        }

        @media (max-width: 700px) {
            .heroSection,
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

            .heroImage {
                width: calc(100% - 40px);
                height: 500px;
            }

            .detailsSection {
                padding: 80px 20px;
            }

            .responsibilityGrid {
                grid-template-columns: 1fr;
            }

            .responsibilityGrid > div {
                min-height: 220px;
            }

            .highlightBlock {
                padding: 28px 22px;
            }

            .closingSection > div {
                align-items: flex-start;
                flex-direction: column;
            }
        }
    `},a={"community-volunteer":{number:"01",type:"Volunteer",title:"Community Volunteer",location:"Bengaluru",commitment:"Flexible",image:"https://picsum.photos/seed/drishti-opportunity-community/1600/1000",intro:"Support awareness, community participation and foundation-led activities through practical involvement and consistent contribution."},"digital-awareness-volunteer":{number:"02",type:"Volunteer",title:"Digital Awareness Volunteer",location:"Hybrid",commitment:"4 hrs / week",image:"https://picsum.photos/seed/drishti-opportunity-digital/1600/1000",intro:"Help create simple digital awareness resources and support learning sessions focused on practical digital confidence."},"content-research-contributor":{number:"03",type:"Contributor",title:"Content & Research Contributor",location:"Remote",commitment:"Flexible",image:"https://picsum.photos/seed/drishti-opportunity-content/1600/1000",intro:"Contribute research, stories and educational content that can support awareness and community-focused initiatives."},"community-coordinator":{number:"04",type:"Community",title:"Local Community Coordinator",location:"Bengaluru",commitment:"Part-time",image:"https://picsum.photos/seed/drishti-opportunity-coordinator/1600/1000",intro:"Help coordinate community conversations, activities and participation opportunities with consistency and care."}},f=()=>{const{opportunitySlug:l}=c(),e=a[l]||a["community-volunteer"];return i.jsxs(h.Wrapper,{children:[i.jsxs("section",{className:"heroSection",children:[i.jsxs("div",{className:"topBar",children:[i.jsxs(t,{to:"/opportunities",children:[i.jsx(d,{}),"Back to opportunities"]}),i.jsxs("span",{children:["OPPORTUNITY / ",e.number]})]}),i.jsxs("div",{className:"heroGrid",children:[i.jsxs("div",{className:"heroContent",children:[i.jsx("span",{className:"eyebrow",children:e.type}),i.jsx("h1",{children:e.title}),i.jsx("p",{children:e.intro})]}),i.jsxs("div",{className:"opportunityInfo",children:[i.jsxs("div",{children:[i.jsx(n,{}),i.jsx("span",{children:"Location"}),i.jsx("strong",{children:e.location})]}),i.jsxs("div",{children:[i.jsx(o,{}),i.jsx("span",{children:"Commitment"}),i.jsx("strong",{children:e.commitment})]}),i.jsxs("div",{children:[i.jsx(m,{}),i.jsx("span",{children:"Type"}),i.jsx("strong",{children:e.type})]})]})]})]}),i.jsxs("section",{className:"heroImage",children:[i.jsx("img",{src:e.image,alt:e.title}),i.jsx("div",{className:"imageOverlay"}),i.jsxs("div",{className:"imageContent",children:[i.jsx("span",{children:"DRISHTI FOUNDATION"}),i.jsxs("strong",{children:["Contribute what you can.",i.jsx("br",{}),"Learn along the way."]})]})]}),i.jsxs("section",{className:"detailsSection",children:[i.jsxs("aside",{className:"detailsAside",children:[i.jsx("span",{children:"OPPORTUNITY DETAILS"}),i.jsxs("div",{className:"asideMeta",children:[i.jsxs("div",{children:[i.jsx(n,{}),i.jsx("span",{children:e.location})]}),i.jsxs("div",{children:[i.jsx(o,{}),i.jsx("span",{children:e.commitment})]}),i.jsxs("div",{children:[i.jsx(s,{}),i.jsx("span",{children:"Open participation"})]})]})]}),i.jsxs("article",{className:"detailsContent",children:[i.jsx("p",{className:"lead",children:"This opportunity is for people who want to contribute time, ideas and effort toward practical community initiatives."}),i.jsx("p",{children:"You do not need to be an expert. What matters most is reliability, willingness to learn and respect for the people and communities involved."}),i.jsx("h2",{children:"What you may work on"}),i.jsxs("div",{className:"responsibilityGrid",children:[i.jsxs("div",{children:[i.jsx("span",{children:"01"}),i.jsx("strong",{children:"Support activities"}),i.jsx("p",{children:"Help with planning, coordination and basic execution of foundation initiatives."})]}),i.jsxs("div",{children:[i.jsx("span",{children:"02"}),i.jsx("strong",{children:"Share useful information"}),i.jsx("p",{children:"Assist in creating or distributing practical, easy-to-understand awareness material."})]}),i.jsxs("div",{children:[i.jsx("span",{children:"03"}),i.jsx("strong",{children:"Engage with people"}),i.jsx("p",{children:"Participate in conversations, sessions and community-focused activities."})]})]}),i.jsx("h2",{children:"What we value"}),i.jsx("p",{children:"We value consistency, clarity, curiosity and respect. Being dependable and willing to learn is more important than having a long list of qualifications."}),i.jsxs("div",{className:"highlightBlock",children:[i.jsx(s,{}),i.jsxs("div",{children:[i.jsx("span",{children:"WHO SHOULD APPLY"}),i.jsx("strong",{children:"People who care about learning, participation and practical social impact."})]})]}),i.jsx("h2",{children:"How to apply"}),i.jsx("p",{children:"Use the contact page and mention the opportunity title in your message. Share a short introduction, your availability and how you would like to contribute."}),i.jsxs(t,{to:"/contact",className:"applyButton",children:["Apply / Get in touch",i.jsx(r,{})]})]})]}),i.jsxs("section",{className:"closingSection",children:[i.jsx("span",{children:"MORE WAYS TO CONTRIBUTE"}),i.jsxs("div",{children:[i.jsxs("h2",{children:["Participation can become",i.jsx("strong",{children:"meaningful progress."})]}),i.jsxs(t,{to:"/opportunities",children:["View all opportunities",i.jsx(r,{})]})]})]})]})};export{f as default};
