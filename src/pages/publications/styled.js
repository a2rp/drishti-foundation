import styled from "styled-components";

export const Styled = {
    Wrapper: styled.div`
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
            max-width: 950px;
            font-family: Georgia, "Times New Roman", serif;
            font-size: clamp(4.5rem, 7vw, 8.6rem);
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

        .featuredPublication {
            padding: 100px 6vw;
            display: grid;
            grid-template-columns: 0.85fr 1.15fr;
            gap: 7vw;
            align-items: center;
            background: #111111;
            color: #ffffff;
        }

        .coverArea {
            display: flex;
            justify-content: center;
        }

        .cover {
            position: relative;
            width: min(100%, 430px);
            aspect-ratio: 0.72;
            overflow: hidden;
            box-shadow: 0 30px 70px rgba(0, 0, 0, 0.32);
        }

        .cover img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .coverOverlay,
        .cardOverlay {
            position: absolute;
            inset: 0;
            background:
                linear-gradient(
                    to top,
                    rgba(17, 17, 17, 0.72),
                    transparent 55%
                ),
                linear-gradient(
                    to bottom,
                    rgba(17, 17, 17, 0.35),
                    transparent 35%
                );
        }

        .coverTop,
        .coverBottom {
            position: absolute;
            left: 24px;
            right: 24px;
            z-index: 2;
            color: #ffffff;
        }

        .coverTop {
            top: 22px;
            display: flex;
            justify-content: space-between;
            font-family: "Antonio", sans-serif;
            font-size: 0.7rem;
            font-weight: 700;
            letter-spacing: 0.14em;
        }

        .coverBottom {
            bottom: 26px;
        }

        .coverBottom span {
            display: block;
            margin-bottom: 10px;
            font-family: "Antonio", sans-serif;
            font-size: 0.6rem;
            font-weight: 700;
            letter-spacing: 0.13em;
        }

        .coverBottom strong {
            font-family: Georgia, "Times New Roman", serif;
            font-size: clamp(2.2rem, 3vw, 3.8rem);
            font-weight: 400;
            line-height: 1;
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
            font-size: clamp(3.5rem, 5vw, 6.2rem);
            font-weight: 400;
            line-height: 0.92;
            letter-spacing: -0.055em;
        }

        .publicationSubtitle {
            display: block;
            margin-top: 18px;
            color: #ef2b2d;
            font-family: "Antonio", sans-serif;
            font-size: 0.72rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.11em;
        }

        .featuredContent > p {
            max-width: 620px;
            margin-top: 26px;
            color: #a6a6a6;
            font-size: 0.9rem;
            line-height: 1.8;
        }

        .publicationMeta {
            margin-top: 28px;
            display: flex;
            flex-wrap: wrap;
            gap: 18px 26px;
        }

        .publicationMeta span {
            display: flex;
            align-items: center;
            gap: 8px;
            color: #969696;
            font-size: 0.72rem;
        }

        .publicationMeta svg {
            color: #ef2b2d;
        }

        .featuredActions {
            margin-top: 30px;
            display: flex;
            flex-wrap: wrap;
            gap: 12px;
        }

        .featuredActions a,
        .featuredActions button {
            min-height: 50px;
            padding: 0 18px;
            display: flex;
            align-items: center;
            gap: 12px;
            border-radius: 999px;
            font-family: "Antonio", sans-serif;
            font-size: 0.75rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.08em;
        }

        .featuredActions a {
            background: #ef2b2d;
            color: #ffffff;
        }

        .featuredActions button {
            border: 1px solid rgba(255, 255, 255, 0.16);
            color: #ffffff;
        }

        .publicationsSection {
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

        .publicationsGrid {
            margin-top: 50px;
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 60px 24px;
        }

        .publicationCover {
            position: relative;
            display: block;
            aspect-ratio: 0.72;
            overflow: hidden;
            background: #d9d4ca;
        }

        .publicationCover img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.55s ease;
        }

        .publicationCover:hover img {
            transform: scale(1.035);
        }

        .publicationNumber {
            position: absolute;
            top: 18px;
            left: 18px;
            z-index: 2;
            width: 44px;
            height: 44px;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid rgba(255, 255, 255, 0.45);
            border-radius: 50%;
            background: rgba(17, 17, 17, 0.18);
            backdrop-filter: blur(10px);
            color: #ffffff;
            font-family: "Antonio", sans-serif;
            font-size: 0.62rem;
        }

        .coverAction {
            position: absolute;
            right: 18px;
            bottom: 18px;
            z-index: 2;
            width: 46px;
            height: 46px;
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

        .publicationCover:hover .coverAction {
            background: #111111;
            transform: rotate(45deg);
        }

        .publicationContent {
            padding-top: 22px;
        }

        .publicationTop {
            display: flex;
            justify-content: space-between;
            gap: 16px;
            color: #8a857d;
            font-family: "Antonio", sans-serif;
            font-size: 0.58rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.1em;
        }

        .publicationTop span:last-child {
            color: #ef2b2d;
            text-align: right;
        }

        .publicationContent h3 {
            margin-top: 16px;
            font-family: Georgia, "Times New Roman", serif;
            font-size: clamp(2rem, 2.7vw, 3.1rem);
            font-weight: 400;
            line-height: 1;
            letter-spacing: -0.045em;
        }

        .publicationContent h3 a:hover {
            color: #ef2b2d;
        }

        .publicationContent > p {
            margin-top: 15px;
            color: #6a655e;
            font-size: 0.8rem;
            line-height: 1.7;
        }

        .readLink {
            width: fit-content;
            margin-top: 20px;
            display: flex;
            align-items: center;
            gap: 9px;
            font-family: "Antonio", sans-serif;
            font-size: 0.7rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.08em;
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

        @media (max-width: 1000px) {
            .heroGrid,
            .featuredPublication {
                grid-template-columns: 1fr;
            }

            .publicationsGrid {
                grid-template-columns: 1fr 1fr;
            }
        }

        @media (max-width: 700px) {
            .heroSection,
            .featuredPublication,
            .publicationsSection,
            .closingSection {
                padding: 80px 20px;
            }

            .heroMeta {
                align-items: flex-start;
                flex-direction: column;
                gap: 10px;
            }

            .heroGrid h1 {
                font-size: clamp(4rem, 18vw, 6.4rem);
            }

            .cover {
                width: min(100%, 360px);
            }

            .publicationsGrid {
                grid-template-columns: 1fr;
                gap: 55px;
            }

            .closingSection {
                align-items: flex-start;
                flex-direction: column;
            }
        }
    `,
};
