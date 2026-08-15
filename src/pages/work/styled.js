import styled from "styled-components";

export const Styled = {
    Wrapper: styled.div`
        width: 100%;
        background: #f6f2eb;
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
            max-width: 950px;
            font-family: Georgia, "Times New Roman", serif;
            font-size: clamp(4.5rem, 7vw, 8.7rem);
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

        .heroCopy p {
            color: #605c55;
            font-size: 0.96rem;
            line-height: 1.85;
        }

        .heroCopy a {
            width: fit-content;
            min-height: 50px;
            margin-top: 26px;
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

        .featureImage {
            position: relative;
            min-height: 720px;
            overflow: hidden;
        }

        .featureImage img {
            width: 100%;
            height: 720px;
            object-fit: cover;
        }

        .imageOverlay {
            position: absolute;
            inset: 0;
            background: linear-gradient(
                to top,
                rgba(17, 17, 17, 0.76),
                transparent 60%
            );
        }

        .imageContent {
            position: absolute;
            left: 6vw;
            bottom: 60px;
            z-index: 2;
            color: #ffffff;
        }

        .imageContent span {
            font-family: "Antonio", sans-serif;
            font-size: 0.7rem;
            text-transform: uppercase;
            letter-spacing: 0.14em;
        }

        .imageContent h2 {
            margin-top: 14px;
            font-family: Georgia, "Times New Roman", serif;
            font-size: clamp(3.5rem, 6vw, 7rem);
            font-weight: 400;
            line-height: 0.92;
            letter-spacing: -0.06em;
        }

        .initiativesSection {
            padding: 130px 6vw;
            background: #efebe3;
        }

        .sectionHeading {
            display: grid;
            grid-template-columns: 0.45fr 1.55fr;
            gap: 5vw;
        }

        .sectionHeading > span,
        .eyebrow {
            color: #ef2b2d;
            font-family: "Antonio", sans-serif;
            font-size: 0.7rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.14em;
        }

        .sectionHeading h2 {
            max-width: 900px;
            font-family: Georgia, "Times New Roman", serif;
            font-size: clamp(3.8rem, 6vw, 7rem);
            font-weight: 700;
            line-height: 0.92;
            letter-spacing: -0.06em;
        }

        .sectionHeading h2 span {
            display: block;
            color: #ef2b2d;
            font-weight: 400;
            font-style: italic;
        }

        .initiativesList {
            margin-top: 80px;
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            border-top: 1px solid rgba(17, 17, 17, 0.12);
            border-left: 1px solid rgba(17, 17, 17, 0.12);
        }

        .initiative {
            min-height: 390px;
            padding: 26px;
            display: flex;
            flex-direction: column;
            border-right: 1px solid rgba(17, 17, 17, 0.12);
            border-bottom: 1px solid rgba(17, 17, 17, 0.12);
            transition:
                background 0.2s ease,
                color 0.2s ease;
        }

        .initiative:hover {
            background: #111111;
            color: #ffffff;
        }

        .initiativeNumber {
            align-self: flex-end;
            color: #969189;
            font-family: "Antonio", sans-serif;
            font-size: 0.65rem;
        }

        .initiativeIcon {
            width: 50px;
            height: 50px;
            margin-top: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid currentColor;
            border-radius: 50%;
            font-size: 1.15rem;
        }

        .initiative h3 {
            margin-top: auto;
            font-family: Georgia, "Times New Roman", serif;
            font-size: 2rem;
            font-weight: 400;
        }

        .initiative p {
            margin-top: 14px;
            color: #6a655e;
            font-size: 0.8rem;
            line-height: 1.7;
        }

        .initiative:hover p {
            color: #aaaaaa;
        }

        .approachSection {
            display: grid;
            grid-template-columns: 0.9fr 1.1fr;
            min-height: 800px;
            background: #111111;
            color: #ffffff;
        }

        .approachImage img {
            width: 100%;
            height: 100%;
            min-height: 800px;
            object-fit: cover;
        }

        .approachContent {
            padding: 90px 6vw;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }

        .approachContent h2 {
            margin-top: 28px;
            font-family: Georgia, "Times New Roman", serif;
            font-size: clamp(4rem, 6vw, 7rem);
            font-weight: 700;
            line-height: 0.88;
            letter-spacing: -0.065em;
        }

        .approachContent h2 span {
            display: block;
            color: #ef2b2d;
            font-weight: 400;
            font-style: italic;
        }

        .approachContent > p {
            max-width: 580px;
            margin-top: 30px;
            color: #a3a3a3;
            font-size: 0.92rem;
            line-height: 1.85;
        }

        .approachSteps {
            margin-top: 50px;
            border-top: 1px solid rgba(255, 255, 255, 0.12);
        }

        .approachSteps > div {
            padding: 24px 0;
            display: grid;
            grid-template-columns: 50px 130px 1fr;
            gap: 20px;
            border-bottom: 1px solid rgba(255, 255, 255, 0.12);
        }

        .approachSteps span {
            color: #666666;
            font-family: "Antonio", sans-serif;
            font-size: 0.65rem;
        }

        .approachSteps strong {
            font-family: Georgia, "Times New Roman", serif;
            font-size: 1.2rem;
            font-weight: 400;
        }

        .approachSteps p {
            color: #888888;
            font-size: 0.76rem;
            line-height: 1.6;
        }

        .closingSection {
            padding: 110px 6vw;
            background: #ef2b2d;
            color: #ffffff;
        }

        .closingSection > span {
            font-family: "Antonio", sans-serif;
            font-size: 0.7rem;
            font-weight: 700;
            letter-spacing: 0.14em;
        }

        .closingSection > div {
            margin-top: 26px;
            display: flex;
            align-items: end;
            justify-content: space-between;
            gap: 60px;
        }

        .closingSection h2 {
            max-width: 900px;
            font-family: Georgia, "Times New Roman", serif;
            font-size: clamp(3.8rem, 6vw, 7rem);
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
            font-size: 0.8rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.08em;
        }

        @media (max-width: 1000px) {
            .heroGrid,
            .approachSection {
                grid-template-columns: 1fr;
            }

            .initiativesList {
                grid-template-columns: 1fr 1fr;
            }

            .approachImage img {
                min-height: 600px;
            }
        }

        @media (max-width: 700px) {
            .heroSection,
            .initiativesSection,
            .closingSection {
                padding: 80px 20px;
            }

            .heroMeta {
                align-items: flex-start;
                flex-direction: column;
                gap: 10px;
            }

            .heroGrid h1 {
                font-size: clamp(4rem, 18vw, 6.5rem);
            }

            .featureImage,
            .featureImage img {
                min-height: 560px;
                height: 560px;
            }

            .imageContent {
                left: 20px;
                right: 20px;
                bottom: 30px;
            }

            .sectionHeading {
                grid-template-columns: 1fr;
            }

            .initiativesList {
                grid-template-columns: 1fr;
                margin-top: 55px;
            }

            .initiative {
                min-height: 330px;
            }

            .approachContent {
                padding: 80px 20px;
            }

            .approachSteps > div {
                grid-template-columns: 40px 1fr;
            }

            .approachSteps p {
                grid-column: 2;
            }

            .closingSection > div {
                align-items: flex-start;
                flex-direction: column;
            }
        }
    `,
};
