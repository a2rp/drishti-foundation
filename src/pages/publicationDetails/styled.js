import styled from "styled-components";

export const Styled = {
    Wrapper: styled.div`
        width: 100%;
        background: #f7f4ee;
        color: #111111;

        .heroSection {
            padding: 60px 6vw 110px;
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
            margin-top: 65px;
            display: grid;
            grid-template-columns: 0.8fr 1.2fr;
            gap: 7vw;
            align-items: center;
        }

        .coverWrapper {
            display: flex;
            justify-content: center;
        }

        .cover {
            position: relative;
            width: min(100%, 430px);
            aspect-ratio: 0.72;
            overflow: hidden;
            box-shadow: 0 30px 70px rgba(17, 17, 17, 0.18);
        }

        .cover img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .coverOverlay {
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
                    rgba(17, 17, 17, 0.3),
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

        .coverBottom > span {
            display: block;
            margin-bottom: 10px;
            font-family: "Antonio", sans-serif;
            font-size: 0.58rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.12em;
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
            font-size: 0.68rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.14em;
        }

        .heroContent h1 {
            max-width: 800px;
            margin-top: 24px;
            font-family: Georgia, "Times New Roman", serif;
            font-size: clamp(4rem, 6.5vw, 7.8rem);
            font-weight: 700;
            line-height: 0.88;
            letter-spacing: -0.07em;
        }

        .subtitle {
            display: block;
            margin-top: 20px;
            color: #ef2b2d;
            font-family: "Antonio", sans-serif;
            font-size: 0.72rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.11em;
        }

        .heroContent > p {
            max-width: 660px;
            margin-top: 26px;
            color: #625e57;
            font-size: 0.95rem;
            line-height: 1.85;
        }

        .publicationMeta {
            max-width: 550px;
            margin-top: 38px;
            border-top: 1px solid rgba(17, 17, 17, 0.12);
        }

        .publicationMeta > div {
            min-height: 78px;
            display: grid;
            grid-template-columns: 30px 100px 1fr;
            gap: 15px;
            align-items: center;
            border-bottom: 1px solid rgba(17, 17, 17, 0.12);
        }

        .publicationMeta svg {
            color: #ef2b2d;
        }

        .publicationMeta span {
            color: #928d85;
            font-family: "Antonio", sans-serif;
            font-size: 0.6rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.1em;
        }

        .publicationMeta strong {
            font-size: 0.82rem;
        }

        .downloadButton {
            min-height: 50px;
            margin-top: 28px;
            padding: 0 18px;
            display: flex;
            align-items: center;
            gap: 12px;
            border-radius: 999px;
            background: #111111;
            color: #ffffff;
            font-family: "Antonio", sans-serif;
            font-size: 0.75rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.08em;
        }

        .introSection {
            padding: 120px 6vw;
            background: #111111;
            color: #ffffff;
        }

        .introMeta {
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

        .introGrid {
            margin-top: 60px;
            display: grid;
            grid-template-columns: 1.1fr 0.9fr;
            gap: 7vw;
            align-items: end;
        }

        .introGrid h2 {
            max-width: 850px;
            font-family: Georgia, "Times New Roman", serif;
            font-size: clamp(3.7rem, 6vw, 6.8rem);
            font-weight: 400;
            line-height: 0.92;
            letter-spacing: -0.06em;
        }

        .introGrid h2 span {
            display: block;
            color: #ef2b2d;
            font-style: italic;
        }

        .introGrid > div {
            display: grid;
            gap: 20px;
        }

        .introGrid p {
            color: #aaaaaa;
            font-size: 0.9rem;
            line-height: 1.8;
        }

        .issuesSection {
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

        .issuesList {
            border-top: 1px solid rgba(17, 17, 17, 0.12);
        }

        .issueRow {
            min-height: 130px;
            display: grid;
            grid-template-columns: 60px 55px 1fr 100px auto;
            gap: 24px;
            align-items: center;
            border-bottom: 1px solid rgba(17, 17, 17, 0.12);
            transition:
                background 0.2s ease,
                padding 0.2s ease;
        }

        .issueRow:hover {
            padding: 0 18px;
            background: #ece7de;
        }

        .issueNumber {
            color: #ef2b2d;
            font-family: "Antonio", sans-serif;
            font-size: 0.68rem;
            font-weight: 700;
        }

        .issueIcon {
            width: 46px;
            height: 46px;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid rgba(17, 17, 17, 0.12);
            border-radius: 50%;
        }

        .issueContent {
            display: flex;
            flex-direction: column;
            gap: 7px;
        }

        .issueContent span {
            color: #928d85;
            font-family: "Antonio", sans-serif;
            font-size: 0.56rem;
            font-weight: 700;
            letter-spacing: 0.11em;
        }

        .issueContent strong {
            font-family: Georgia, "Times New Roman", serif;
            font-size: clamp(1.5rem, 2.4vw, 2.7rem);
            font-weight: 400;
        }

        .issuePages {
            color: #8d887f;
            font-size: 0.7rem;
        }

        .issueAction {
            width: 44px;
            height: 44px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            background: #ef2b2d;
            color: #ffffff;
        }

        .featureSection {
            display: grid;
            grid-template-columns: 1.1fr 0.9fr;
            min-height: 700px;
            background: #e8e3da;
        }

        .featureImage {
            position: relative;
        }

        .featureImage img {
            width: 100%;
            height: 100%;
            min-height: 700px;
            object-fit: cover;
        }

        .featureOverlay {
            position: absolute;
            inset: 0;
            background: linear-gradient(
                to top,
                rgba(17, 17, 17, 0.32),
                transparent 55%
            );
        }

        .featureContent {
            padding: 70px 5vw;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }

        .featureContent > span {
            color: #ef2b2d;
            font-family: "Antonio", sans-serif;
            font-size: 0.68rem;
            font-weight: 700;
            letter-spacing: 0.14em;
        }

        .featureContent h2 {
            margin-top: 24px;
            font-family: Georgia, "Times New Roman", serif;
            font-size: clamp(3.4rem, 5vw, 5.8rem);
            font-weight: 700;
            line-height: 0.92;
            letter-spacing: -0.055em;
        }

        .featureContent h2 strong {
            display: block;
            color: #ef2b2d;
            font-weight: 400;
            font-style: italic;
        }

        .featureContent p {
            max-width: 550px;
            margin-top: 26px;
            color: #68635c;
            font-size: 0.9rem;
            line-height: 1.8;
        }

        .featureContent a {
            width: fit-content;
            margin-top: 26px;
            display: flex;
            align-items: center;
            gap: 10px;
            font-family: "Antonio", sans-serif;
            font-size: 0.72rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.09em;
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

        @media (max-width: 950px) {
            .heroGrid,
            .introGrid,
            .featureSection {
                grid-template-columns: 1fr;
            }
        }

        @media (max-width: 700px) {
            .heroSection,
            .introSection,
            .issuesSection,
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

            .cover {
                width: min(100%, 360px);
            }

            .issueRow {
                min-height: 150px;
                grid-template-columns: 40px 46px 1fr auto;
                gap: 14px;
            }

            .issuePages {
                display: none;
            }

            .featureImage img {
                min-height: 520px;
            }

            .featureContent {
                padding: 70px 20px;
            }

            .closingSection > div {
                align-items: flex-start;
                flex-direction: column;
            }
        }
    `,
};
