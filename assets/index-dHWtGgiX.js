import{c as n,j as e,D as o,L as i,E as a,F as r,r as t}from"./index-BBIEQPxq.js";const s={Wrapper:n.div`
        width: 100%;
        min-height: 100vh;
        background: #f7f4ee;
        color: #111111;

        .errorSection {
            min-height: 760px;
            padding: 60px 6vw 80px;
            display: flex;
            flex-direction: column;
            background: #111111;
            color: #ffffff;
        }

        .topBar,
        .bottomBar {
            display: flex;
            align-items: center;
            justify-content: space-between;
            font-family: "Antonio", sans-serif;
            font-size: 0.64rem;
            font-weight: 700;
            letter-spacing: 0.13em;
            text-transform: uppercase;
        }

        .topBar {
            padding-bottom: 20px;
            border-bottom: 1px solid rgba(255, 255, 255, 0.12);
            color: #777777;
        }

        .errorGrid {
            flex: 1;
            padding: 80px 0;
            display: grid;
            grid-template-columns: 1.1fr 0.9fr;
            gap: 7vw;
            align-items: center;
        }

        .errorNumber {
            display: flex;
            align-items: center;
            font-family: Georgia, "Times New Roman", serif;
            font-size: clamp(9rem, 20vw, 22rem);
            font-weight: 700;
            line-height: 0.7;
            letter-spacing: -0.12em;
            color: #ef2b2d;
        }

        .zero {
            width: 0.72em;
            height: 0.72em;
            margin: 0 -0.03em;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 0.07em solid #ef2b2d;
            border-radius: 50%;
            font-size: 0.55em;
        }

        .zero svg {
            width: 0.34em;
            height: 0.34em;
            stroke-width: 1.2;
        }

        .eyebrow {
            color: #ef2b2d;
            font-family: "Antonio", sans-serif;
            font-size: 0.68rem;
            font-weight: 700;
            letter-spacing: 0.14em;
        }

        .errorContent h1 {
            max-width: 720px;
            margin-top: 24px;
            font-family: Georgia, "Times New Roman", serif;
            font-size: clamp(3.5rem, 5.7vw, 6.5rem);
            font-weight: 400;
            line-height: 0.94;
            letter-spacing: -0.06em;
        }

        .errorContent h1 span {
            display: block;
            color: #ef2b2d;
            font-style: italic;
        }

        .errorContent p {
            max-width: 550px;
            margin-top: 28px;
            color: #999999;
            font-size: 0.9rem;
            line-height: 1.85;
        }

        .actions {
            margin-top: 32px;
            display: flex;
            flex-wrap: wrap;
            gap: 12px;
        }

        .actions a {
            min-height: 52px;
            padding: 0 20px;
            display: flex;
            align-items: center;
            gap: 10px;
            border-radius: 999px;
            font-family: "Antonio", sans-serif;
            font-size: 0.75rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.08em;
            transition:
                background 0.2s ease,
                color 0.2s ease;
        }

        .primaryAction {
            background: #ef2b2d;
            color: #ffffff;
        }

        .primaryAction:hover {
            background: #ffffff;
            color: #111111;
        }

        .secondaryAction {
            border: 1px solid rgba(255, 255, 255, 0.18);
            color: #ffffff;
        }

        .secondaryAction:hover {
            background: #ffffff;
            color: #111111;
        }

        .bottomBar {
            padding-top: 20px;
            border-top: 1px solid rgba(255, 255, 255, 0.12);
            color: #777777;
        }

        .bottomBar a {
            display: flex;
            align-items: center;
            gap: 9px;
            transition: color 0.2s ease;
        }

        .bottomBar a:hover {
            color: #ef2b2d;
        }

        .navigationSection {
            padding: 120px 6vw;
        }

        .navigationHeading {
            display: grid;
            grid-template-columns: 0.45fr 1.55fr;
            gap: 6vw;
            align-items: start;
        }

        .navigationHeading > span {
            color: #ef2b2d;
            font-family: "Antonio", sans-serif;
            font-size: 0.66rem;
            font-weight: 700;
            letter-spacing: 0.14em;
        }

        .navigationHeading h2 {
            max-width: 900px;
            font-family: Georgia, "Times New Roman", serif;
            font-size: clamp(3.5rem, 6vw, 6.8rem);
            font-weight: 700;
            line-height: 0.92;
            letter-spacing: -0.06em;
        }

        .navigationHeading h2 strong {
            display: block;
            color: #ef2b2d;
            font-weight: 400;
            font-style: italic;
        }

        .navigationGrid {
            margin-top: 70px;
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            border-top: 1px solid rgba(17, 17, 17, 0.12);
            border-left: 1px solid rgba(17, 17, 17, 0.12);
        }

        .navigationGrid > a {
            min-height: 220px;
            padding: 26px;
            display: grid;
            grid-template-columns: 45px 1fr auto;
            gap: 20px;
            align-items: end;
            border-right: 1px solid rgba(17, 17, 17, 0.12);
            border-bottom: 1px solid rgba(17, 17, 17, 0.12);
            transition:
                background 0.22s ease,
                color 0.22s ease;
        }

        .navigationGrid > a:hover {
            background: #ef2b2d;
            color: #ffffff;
        }

        .navigationGrid > a > span {
            align-self: start;
            color: #ef2b2d;
            font-family: "Antonio", sans-serif;
            font-size: 0.62rem;
            font-weight: 700;
        }

        .navigationGrid > a:hover > span {
            color: #111111;
        }

        .navigationGrid strong {
            font-family: Georgia, "Times New Roman", serif;
            font-size: clamp(1.8rem, 2.7vw, 3rem);
            font-weight: 400;
        }

        .navigationGrid p {
            max-width: 340px;
            margin-top: 10px;
            color: #777168;
            font-size: 0.76rem;
            line-height: 1.65;
        }

        .navigationGrid > a:hover p {
            color: rgba(255, 255, 255, 0.8);
        }

        .navigationGrid > a > svg {
            font-size: 1.2rem;
        }

        @media (max-width: 950px) {
            .errorGrid {
                grid-template-columns: 1fr;
            }

            .errorNumber {
                justify-content: center;
            }
        }

        @media (max-width: 700px) {
            .errorSection {
                min-height: 720px;
                padding: 50px 20px 60px;
            }

            .topBar,
            .bottomBar {
                align-items: flex-start;
                flex-direction: column;
                gap: 10px;
            }

            .errorGrid {
                padding: 60px 0;
            }

            .errorNumber {
                font-size: clamp(8rem, 38vw, 13rem);
            }

            .errorContent h1 {
                font-size: clamp(3.4rem, 15vw, 5.5rem);
            }

            .navigationSection {
                padding: 80px 20px;
            }

            .navigationHeading {
                grid-template-columns: 1fr;
            }

            .navigationGrid {
                grid-template-columns: 1fr;
                margin-top: 50px;
            }

            .navigationGrid > a {
                min-height: 190px;
            }
        }
    `},l=()=>e.jsxs(s.Wrapper,{children:[e.jsxs("section",{className:"errorSection",children:[e.jsxs("div",{className:"topBar",children:[e.jsx("span",{children:"DRISHTI FOUNDATION"}),e.jsx("span",{children:"ERROR / 404"})]}),e.jsxs("div",{className:"errorGrid",children:[e.jsxs("div",{className:"errorNumber",children:[e.jsx("span",{children:"4"}),e.jsx("div",{className:"zero",children:e.jsx(o,{})}),e.jsx("span",{children:"4"})]}),e.jsxs("div",{className:"errorContent",children:[e.jsx("span",{className:"eyebrow",children:"PAGE NOT FOUND"}),e.jsxs("h1",{children:["This path does not",e.jsx("span",{children:"lead anywhere."})]}),e.jsx("p",{children:"The page may have moved, the address may be incorrect, or the content may no longer be available."}),e.jsxs("div",{className:"actions",children:[e.jsxs(i,{to:"/",className:"primaryAction",children:[e.jsx(a,{}),"Return home"]}),e.jsxs(i,{to:"/work",className:"secondaryAction",children:["Explore our work",e.jsx(r,{})]})]})]})]}),e.jsxs("div",{className:"bottomBar",children:[e.jsxs(i,{to:"/",children:[e.jsx(t,{}),"Drishti Foundation"]}),e.jsx("span",{children:"SEE CLEARLY / MOVE FORWARD"})]})]}),e.jsxs("section",{className:"navigationSection",children:[e.jsxs("div",{className:"navigationHeading",children:[e.jsx("span",{children:"FIND YOUR WAY"}),e.jsxs("h2",{children:["Try somewhere",e.jsx("strong",{children:"more useful."})]})]}),e.jsxs("div",{className:"navigationGrid",children:[e.jsxs(i,{to:"/work",children:[e.jsx("span",{children:"01"}),e.jsxs("div",{children:[e.jsx("strong",{children:"Our Work"}),e.jsx("p",{children:"Explore the areas and ideas we focus on."})]}),e.jsx(r,{})]}),e.jsxs(i,{to:"/articles",children:[e.jsx("span",{children:"02"}),e.jsxs("div",{children:[e.jsx("strong",{children:"Stories"}),e.jsx("p",{children:"Read perspectives, stories and ideas."})]}),e.jsx(r,{})]}),e.jsxs(i,{to:"/opportunities",children:[e.jsx("span",{children:"03"}),e.jsxs("div",{children:[e.jsx("strong",{children:"Opportunities"}),e.jsx("p",{children:"Find ways to participate and contribute."})]}),e.jsx(r,{})]}),e.jsxs(i,{to:"/contact",children:[e.jsx("span",{children:"04"}),e.jsxs("div",{children:[e.jsx("strong",{children:"Contact"}),e.jsx("p",{children:"Start a conversation with the foundation."})]}),e.jsx(r,{})]})]})]})]});export{l as default};
