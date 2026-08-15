import{c,u as p,j as e,L as t,r as d,x as n,v as s,i as o,d as m,F as a}from"./index-BBIEQPxq.js";const g={Wrapper:c.div`
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

        .eventInfo {
            border-top: 1px solid rgba(17, 17, 17, 0.12);
        }

        .eventInfo > div {
            min-height: 90px;
            display: grid;
            grid-template-columns: 30px 90px 1fr;
            gap: 16px;
            align-items: center;
            border-bottom: 1px solid rgba(17, 17, 17, 0.12);
        }

        .eventInfo svg {
            color: #ef2b2d;
            font-size: 1rem;
        }

        .eventInfo span {
            color: #918c84;
            font-family: "Antonio", sans-serif;
            font-size: 0.62rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.1em;
        }

        .eventInfo strong {
            font-size: 0.85rem;
            font-weight: 600;
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
                transparent 55%
            );
        }

        .imageLabel {
            position: absolute;
            left: 32px;
            bottom: 32px;
            z-index: 2;
            color: #ffffff;
        }

        .imageLabel span {
            display: block;
            margin-bottom: 12px;
            font-family: "Antonio", sans-serif;
            font-size: 0.66rem;
            text-transform: uppercase;
            letter-spacing: 0.13em;
        }

        .imageLabel strong {
            font-family: Georgia, "Times New Roman", serif;
            font-size: clamp(2.5rem, 4vw, 4.8rem);
            font-weight: 400;
            line-height: 0.95;
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
            text-transform: uppercase;
            letter-spacing: 0.13em;
        }

        .asideMeta {
            margin-top: 20px;
            border-top: 1px solid rgba(17, 17, 17, 0.12);
        }

        .asideMeta div {
            padding: 14px 0;
            display: flex;
            align-items: center;
            gap: 10px;
            border-bottom: 1px solid rgba(17, 17, 17, 0.12);
            color: #666159;
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

        .expectations {
            margin: 55px 0;
            border-top: 1px solid rgba(17, 17, 17, 0.12);
        }

        .expectations > div {
            padding: 24px 0;
            display: grid;
            grid-template-columns: 50px 180px 1fr;
            gap: 20px;
            border-bottom: 1px solid rgba(17, 17, 17, 0.12);
        }

        .expectations span {
            color: #ef2b2d;
            font-family: "Antonio", sans-serif;
            font-size: 0.65rem;
        }

        .expectations strong {
            font-family: Georgia, "Times New Roman", serif;
            font-size: 1.2rem;
            font-weight: 400;
        }

        .expectations p {
            margin: 0;
            color: #777168;
            font-size: 0.8rem;
            line-height: 1.65;
        }

        .participantBlock {
            margin: 55px 0;
            padding: 34px;
            display: grid;
            grid-template-columns: auto 1fr;
            gap: 24px;
            align-items: center;
            background: #111111;
            color: #ffffff;
        }

        .participantBlock > svg {
            color: #ef2b2d;
            font-size: 2rem;
        }

        .participantBlock span {
            display: block;
            margin-bottom: 8px;
            color: #ef2b2d;
            font-family: "Antonio", sans-serif;
            font-size: 0.62rem;
            font-weight: 700;
            letter-spacing: 0.12em;
        }

        .participantBlock strong {
            font-family: Georgia, "Times New Roman", serif;
            font-size: clamp(1.7rem, 2.5vw, 2.8rem);
            font-weight: 400;
            line-height: 1.1;
        }

        .contactButton {
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
            .heroSection {
                padding: 60px 20px 80px;
            }

            .topBar {
                align-items: flex-start;
                flex-direction: column;
                gap: 12px;
            }

            .heroImage {
                width: calc(100% - 40px);
                height: 500px;
            }

            .detailsSection {
                padding: 80px 20px;
            }

            .expectations > div {
                grid-template-columns: 40px 1fr;
            }

            .expectations p {
                grid-column: 2;
            }

            .participantBlock {
                padding: 28px 22px;
            }

            .closingSection {
                padding: 90px 20px;
            }

            .closingSection > div {
                align-items: flex-start;
                flex-direction: column;
            }
        }
    `},r={"community-learning-session":{number:"01",title:"Community Learning Session",date:"24 Aug, 2026",time:"10:00 AM",location:"Bengaluru",type:"Learning Session",image:"https://picsum.photos/seed/drishti-event-learning/1600/1000",intro:"A focused community learning session designed to bring people together around practical knowledge, awareness and shared participation."},"digital-awareness-workshop":{number:"02",title:"Digital Awareness Workshop",date:"31 Aug, 2026",time:"11:30 AM",location:"Bengaluru",type:"Workshop",image:"https://picsum.photos/seed/drishti-event-digital/1600/1000",intro:"A practical workshop focused on digital confidence, awareness and safer everyday use of modern technology."},"volunteer-orientation":{number:"03",title:"Volunteer Orientation",date:"07 Sep, 2026",time:"05:00 PM",location:"Online",type:"Orientation",image:"https://picsum.photos/seed/drishti-event-volunteer/1600/1000",intro:"An introduction for people interested in participating, contributing and understanding how community-focused initiatives can work."},"community-support-meet":{number:"04",title:"Community Support Meet",date:"14 Sep, 2026",time:"04:00 PM",location:"Bengaluru",type:"Community Meet",image:"https://picsum.photos/seed/drishti-event-community/1600/1000",intro:"A community-focused gathering for conversations around awareness, support, participation and practical opportunities."}},x=()=>{const{eventSlug:l}=p(),i=r[l]||r["community-learning-session"];return e.jsxs(g.Wrapper,{children:[e.jsxs("section",{className:"heroSection",children:[e.jsxs("div",{className:"topBar",children:[e.jsxs(t,{to:"/events",children:[e.jsx(d,{}),"Back to events"]}),e.jsxs("span",{children:["EVENT / ",i.number]})]}),e.jsxs("div",{className:"heroGrid",children:[e.jsxs("div",{className:"heroContent",children:[e.jsx("span",{className:"eyebrow",children:i.type}),e.jsx("h1",{children:i.title}),e.jsx("p",{children:i.intro})]}),e.jsxs("div",{className:"eventInfo",children:[e.jsxs("div",{children:[e.jsx(n,{}),e.jsx("span",{children:"Date"}),e.jsx("strong",{children:i.date})]}),e.jsxs("div",{children:[e.jsx(s,{}),e.jsx("span",{children:"Time"}),e.jsx("strong",{children:i.time})]}),e.jsxs("div",{children:[e.jsx(o,{}),e.jsx("span",{children:"Location"}),e.jsx("strong",{children:i.location})]})]})]})]}),e.jsxs("section",{className:"heroImage",children:[e.jsx("img",{src:i.image,alt:i.title}),e.jsx("div",{className:"imageOverlay"}),e.jsxs("div",{className:"imageLabel",children:[e.jsx("span",{children:"Drishti Foundation"}),e.jsxs("strong",{children:["Learn.",e.jsx("br",{}),"Connect.",e.jsx("br",{}),"Participate."]})]})]}),e.jsxs("section",{className:"detailsSection",children:[e.jsxs("aside",{className:"detailsAside",children:[e.jsx("span",{children:"EVENT DETAILS"}),e.jsxs("div",{className:"asideMeta",children:[e.jsxs("div",{children:[e.jsx(n,{}),e.jsx("span",{children:i.date})]}),e.jsxs("div",{children:[e.jsx(s,{}),e.jsx("span",{children:i.time})]}),e.jsxs("div",{children:[e.jsx(o,{}),e.jsx("span",{children:i.location})]})]})]}),e.jsxs("article",{className:"detailsContent",children:[e.jsx("p",{className:"lead",children:"This event is designed to create a simple space for useful learning, participation and open conversation."}),e.jsx("p",{children:"Drishti Foundation believes that meaningful progress becomes easier when people have access to information, supportive networks and opportunities to participate."}),e.jsx("h2",{children:"What to expect"}),e.jsx("p",{children:"The session will focus on practical discussion, accessible information and opportunities for attendees to exchange ideas and experiences."}),e.jsxs("div",{className:"expectations",children:[e.jsxs("div",{children:[e.jsx("span",{children:"01"}),e.jsx("strong",{children:"Practical learning"}),e.jsx("p",{children:"Useful information presented in a simple and understandable way."})]}),e.jsxs("div",{children:[e.jsx("span",{children:"02"}),e.jsx("strong",{children:"Open discussion"}),e.jsx("p",{children:"Space for questions, observations and shared experiences."})]}),e.jsxs("div",{children:[e.jsx("span",{children:"03"}),e.jsx("strong",{children:"Community connection"}),e.jsx("p",{children:"Meet people interested in learning, participation and positive action."})]})]}),e.jsx("h2",{children:"Who can participate"}),e.jsx("p",{children:"The event is open to people who are interested in learning, community participation, digital awareness, education or contributing to useful social initiatives."}),e.jsxs("div",{className:"participantBlock",children:[e.jsx(m,{}),e.jsxs("div",{children:[e.jsx("span",{children:"OPEN PARTICIPATION"}),e.jsx("strong",{children:"Curiosity and willingness to participate are enough."})]})]}),e.jsx("h2",{children:"How to join"}),e.jsx("p",{children:"If you would like to participate or want more information about this event, contact Drishti Foundation and mention the event name in your message."}),e.jsxs(t,{to:"/contact",className:"contactButton",children:["Contact us",e.jsx(a,{})]})]})]}),e.jsxs("section",{className:"closingSection",children:[e.jsx("span",{children:"MORE OPPORTUNITIES TO CONNECT"}),e.jsxs("div",{children:[e.jsxs("h2",{children:["Participation turns",e.jsx("strong",{children:"ideas into progress."})]}),e.jsxs(t,{to:"/events",children:["View all events",e.jsx(a,{})]})]})]})]})};export{x as default};
