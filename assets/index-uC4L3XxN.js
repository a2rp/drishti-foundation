import{c as l,j as e,x as n,v as s,i as a,L as i,F as d,a as o}from"./index-BBIEQPxq.js";const c={Wrapper:l.div`
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

        .featuredEvent {
            display: grid;
            grid-template-columns: 1.1fr 0.9fr;
            min-height: 650px;
            background: #111111;
            color: #ffffff;
        }

        .featuredImage {
            position: relative;
            overflow: hidden;
        }

        .featuredImage img {
            width: 100%;
            height: 100%;
            min-height: 650px;
            object-fit: cover;
        }

        .imageOverlay {
            position: absolute;
            inset: 0;
            background: linear-gradient(
                to top,
                rgba(17, 17, 17, 0.48),
                transparent 55%
            );
        }

        .featuredContent {
            padding: 70px 5vw;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }

        .eyebrow {
            color: #ef2b2d;
            font-family: "Antonio", sans-serif;
            font-size: 0.7rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.14em;
        }

        .featuredContent h2 {
            margin-top: 24px;
            font-family: Georgia, "Times New Roman", serif;
            font-size: clamp(3rem, 4.8vw, 5.6rem);
            font-weight: 400;
            line-height: 0.94;
            letter-spacing: -0.055em;
        }

        .featuredContent h2 span {
            display: block;
            color: #ef2b2d;
            font-style: italic;
        }

        .featuredMeta {
            margin-top: 30px;
            display: flex;
            flex-wrap: wrap;
            gap: 18px 28px;
        }

        .featuredMeta div {
            display: flex;
            align-items: center;
            gap: 8px;
            color: #a4a4a4;
            font-size: 0.72rem;
        }

        .featuredMeta svg {
            color: #ef2b2d;
        }

        .featuredContent > p {
            max-width: 520px;
            margin-top: 26px;
            color: #a6a6a6;
            font-size: 0.9rem;
            line-height: 1.8;
        }

        .featuredContent > a {
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
            font-size: 0.75rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.08em;
        }

        .eventsSection {
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

        .eventsGrid {
            margin-top: 50px;
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 70px 24px;
        }

        .eventImage {
            position: relative;
            height: 420px;
            display: block;
            overflow: hidden;
            background: #ded9cf;
        }

        .eventImage img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.5s ease;
        }

        .eventImage:hover img {
            transform: scale(1.035);
        }

        .eventNumber {
            position: absolute;
            top: 20px;
            left: 20px;
            width: 44px;
            height: 44px;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid rgba(255, 255, 255, 0.45);
            border-radius: 50%;
            background: rgba(17, 17, 17, 0.2);
            backdrop-filter: blur(10px);
            color: #ffffff;
            font-family: "Antonio", sans-serif;
            font-size: 0.62rem;
        }

        .eventAction {
            position: absolute;
            right: 20px;
            bottom: 20px;
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

        .eventImage:hover .eventAction {
            background: #111111;
            transform: rotate(45deg);
        }

        .eventContent {
            padding-top: 22px;
        }

        .eventDate {
            color: #ef2b2d;
            font-family: "Antonio", sans-serif;
            font-size: 0.68rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.12em;
        }

        .eventContent h3 {
            margin-top: 14px;
            font-family: Georgia, "Times New Roman", serif;
            font-size: clamp(2rem, 2.8vw, 3.2rem);
            font-weight: 400;
            line-height: 1;
            letter-spacing: -0.045em;
        }

        .eventContent h3 a:hover {
            color: #ef2b2d;
        }

        .eventMeta {
            margin-top: 18px;
            display: flex;
            flex-wrap: wrap;
            gap: 12px 22px;
            color: #777168;
            font-size: 0.7rem;
        }

        .eventMeta span {
            display: flex;
            align-items: center;
            gap: 6px;
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
            .featuredEvent {
                grid-template-columns: 1fr;
            }

            .featuredImage img {
                min-height: 560px;
            }
        }

        @media (max-width: 700px) {
            .heroSection,
            .eventsSection,
            .closingSection {
                padding: 80px 20px;
            }

            .heroMeta {
                align-items: flex-start;
                flex-direction: column;
                gap: 10px;
            }

            .eventsGrid {
                grid-template-columns: 1fr;
                gap: 55px;
            }

            .eventImage {
                height: 380px;
            }

            .featuredContent {
                padding: 60px 20px;
            }

            .closingSection {
                align-items: flex-start;
                flex-direction: column;
            }
        }
    `},r=[{id:"01",date:"24 Aug, 2026",title:"Community Learning Session",location:"Bengaluru",time:"10:00 AM",image:"https://picsum.photos/seed/drishti-event-learning/1000/760",slug:"community-learning-session"},{id:"02",date:"31 Aug, 2026",title:"Digital Awareness Workshop",location:"Bengaluru",time:"11:30 AM",image:"https://picsum.photos/seed/drishti-event-digital/1000/760",slug:"digital-awareness-workshop"},{id:"03",date:"07 Sep, 2026",title:"Volunteer Orientation",location:"Online",time:"05:00 PM",image:"https://picsum.photos/seed/drishti-event-volunteer/1000/760",slug:"volunteer-orientation"},{id:"04",date:"14 Sep, 2026",title:"Community Support Meet",location:"Bengaluru",time:"04:00 PM",image:"https://picsum.photos/seed/drishti-event-community/1000/760",slug:"community-support-meet"}],m=()=>e.jsxs(c.Wrapper,{children:[e.jsxs("section",{className:"heroSection",children:[e.jsxs("div",{className:"heroMeta",children:[e.jsx("span",{children:"EVENTS"}),e.jsx("span",{children:"06 / FOUNDATION"})]}),e.jsxs("div",{className:"heroGrid",children:[e.jsxs("h1",{children:["Meet.",e.jsx("span",{children:"Learn."}),"Participate."]}),e.jsxs("div",{className:"heroCopy",children:[e.jsx(n,{}),e.jsx("p",{children:"Events and community sessions designed to create awareness, participation and meaningful connection."})]})]})]}),e.jsxs("section",{className:"featuredEvent",children:[e.jsxs("div",{className:"featuredImage",children:[e.jsx("img",{src:"https://picsum.photos/seed/drishti-event-featured/1500/950",alt:"Featured community event"}),e.jsx("div",{className:"imageOverlay"})]}),e.jsxs("div",{className:"featuredContent",children:[e.jsx("span",{className:"eyebrow",children:"FEATURED EVENT"}),e.jsxs("h2",{children:["Community Learning",e.jsx("span",{children:"Session"})]}),e.jsxs("div",{className:"featuredMeta",children:[e.jsxs("div",{children:[e.jsx(n,{}),e.jsx("span",{children:"24 Aug, 2026"})]}),e.jsxs("div",{children:[e.jsx(s,{}),e.jsx("span",{children:"10:00 AM"})]}),e.jsxs("div",{children:[e.jsx(a,{}),e.jsx("span",{children:"Bengaluru"})]})]}),e.jsx("p",{children:"A focused learning session designed to bring people together around practical knowledge, awareness and shared participation."}),e.jsxs(i,{to:"/events/community-learning-session",children:["View event",e.jsx(d,{})]})]})]}),e.jsxs("section",{className:"eventsSection",children:[e.jsxs("div",{className:"sectionHeader",children:[e.jsx("span",{children:"UPCOMING EVENTS"}),e.jsxs("strong",{children:[r.length," Events"]})]}),e.jsx("div",{className:"eventsGrid",children:r.map(t=>e.jsxs("article",{className:"eventCard",children:[e.jsxs(i,{to:`/events/${t.slug}`,className:"eventImage",children:[e.jsx("img",{src:t.image,alt:t.title}),e.jsx("span",{className:"eventNumber",children:t.id}),e.jsx("span",{className:"eventAction",children:e.jsx(o,{})})]}),e.jsxs("div",{className:"eventContent",children:[e.jsx("span",{className:"eventDate",children:t.date}),e.jsx("h3",{children:e.jsx(i,{to:`/events/${t.slug}`,children:t.title})}),e.jsxs("div",{className:"eventMeta",children:[e.jsxs("span",{children:[e.jsx(a,{}),t.location]}),e.jsxs("span",{children:[e.jsx(s,{}),t.time]})]})]})]},t.id))})]}),e.jsxs("section",{className:"closingSection",children:[e.jsxs("div",{children:[e.jsx("span",{children:"PARTICIPATE"}),e.jsxs("h2",{children:["Progress grows",e.jsx("strong",{children:"through participation."})]})]}),e.jsxs(i,{to:"/contact",children:["Get involved",e.jsx(o,{})]})]})]});export{m as default};
