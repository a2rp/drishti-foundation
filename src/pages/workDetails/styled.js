import styled from "styled-components";

export const Styled = {
    Wrapper: styled.div`
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
    `,
};
