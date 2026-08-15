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
                    rgba(17, 17, 17, 0.75),
                    transparent 56%
                ),
                linear-gradient(
                    to bottom,
                    rgba(17, 17, 17, 0.32),
                    transparent 36%
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
            align-items: center;
            justify-content: space-between;
            font-family: "Antonio", sans-serif;
            font-size: 0.68rem;
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

        .eyebrow,
        .sectionLabel {
            color: #ef2b2d;
            font-family: "Antonio", sans-serif;
            font-size: 0.65rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.13em;
        }

        .heroContent h1 {
            max-width: 820px;
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

        .issueMeta {
            max-width: 600px;
            margin-top: 38px;
            border-top: 1px solid rgba(17, 17, 17, 0.12);
        }

        .issueMeta > div {
            min-height: 76px;
            display: grid;
            grid-template-columns: 28px 100px 1fr;
            gap: 15px;
            align-items: center;
            border-bottom: 1px solid rgba(17, 17, 17, 0.12);
        }

        .issueMeta svg {
            color: #ef2b2d;
        }

        .issueMeta span {
            color: #928d85;
            font-family: "Antonio", sans-serif;
            font-size: 0.58rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.1em;
        }

        .issueMeta strong {
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
            font-size: 0.74rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.08em;
        }

        .articleSection {
            max-width: 1250px;
            margin: 0 auto;
            padding: 120px 24px;
            display: grid;
            grid-template-columns: 200px minmax(0, 800px);
            gap: 80px;
            justify-content: center;
        }

        .articleAside {
            position: sticky;
            top: 160px;
            align-self: start;
        }

        .articleAside > span {
            color: #918c84;
            font-family: "Antonio", sans-serif;
            font-size: 0.58rem;
            font-weight: 700;
            letter-spacing: 0.13em;
        }

        .articleAside nav {
            margin-top: 20px;
            display: grid;
            border-top: 1px solid rgba(17, 17, 17, 0.12);
        }

        .articleAside nav a {
            padding: 13px 0;
            border-bottom: 1px solid rgba(17, 17, 17, 0.12);
            color: #777168;
            font-size: 0.7rem;
            transition: color 0.2s ease;
        }

        .articleAside nav a:hover {
            color: #ef2b2d;
        }

        .articleContent > section + section {
            margin-top: 85px;
        }

        .articleContent .lead {
            margin-top: 22px;
            color: #22201d;
            font-family: Georgia, "Times New Roman", serif;
            font-size: clamp(1.8rem, 2.6vw, 2.7rem);
            line-height: 1.3;
        }

        .articleContent p {
            margin-top: 26px;
            color: #57534c;
            font-size: 1rem;
            line-height: 1.95;
        }

        .articleContent h2 {
            margin-top: 24px;
            font-family: Georgia, "Times New Roman", serif;
            font-size: clamp(2.5rem, 3.8vw, 4.2rem);
            font-weight: 400;
            line-height: 1;
            letter-spacing: -0.045em;
        }

        .articleContent blockquote {
            margin: 55px 0;
            padding: 34px 0 34px 32px;
            border-left: 4px solid #ef2b2d;
            font-family: Georgia, "Times New Roman", serif;
            font-size: clamp(2rem, 3vw, 3.4rem);
            line-height: 1.15;
        }

        .actionGrid {
            margin-top: 45px;
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            border-top: 1px solid rgba(17, 17, 17, 0.12);
            border-left: 1px solid rgba(17, 17, 17, 0.12);
        }

        .actionGrid > div {
            min-height: 260px;
            padding: 24px;
            display: flex;
            flex-direction: column;
            border-right: 1px solid rgba(17, 17, 17, 0.12);
            border-bottom: 1px solid rgba(17, 17, 17, 0.12);
        }

        .actionGrid span {
            color: #ef2b2d;
            font-family: "Antonio", sans-serif;
            font-size: 0.62rem;
        }

        .actionGrid strong {
            margin-top: auto;
            font-family: Georgia, "Times New Roman", serif;
            font-size: 1.55rem;
            font-weight: 400;
        }

        .actionGrid p {
            margin-top: 12px;
            color: #777168;
            font-size: 0.76rem;
            line-height: 1.65;
        }

        .closingNote {
            margin-top: 50px;
            padding: 40px;
            background: #111111;
            color: #ffffff;
        }

        .closingNote span {
            display: block;
            margin-bottom: 18px;
            color: #ef2b2d;
            font-family: "Antonio", sans-serif;
            font-size: 0.62rem;
            font-weight: 700;
            letter-spacing: 0.13em;
        }

        .closingNote strong {
            font-family: Georgia, "Times New Roman", serif;
            font-size: clamp(2rem, 3vw, 3.3rem);
            font-weight: 400;
            line-height: 1.1;
        }

        .nextSection {
            padding: 110px 6vw;
            background: #ef2b2d;
            color: #ffffff;
        }

        .nextSection > span {
            font-family: "Antonio", sans-serif;
            font-size: 0.68rem;
            font-weight: 700;
            letter-spacing: 0.14em;
        }

        .nextSection > div {
            margin-top: 24px;
            display: flex;
            align-items: end;
            justify-content: space-between;
            gap: 60px;
        }

        .nextSection h2 {
            max-width: 900px;
            font-family: Georgia, "Times New Roman", serif;
            font-size: clamp(3.5rem, 6vw, 6.8rem);
            font-weight: 700;
            line-height: 0.92;
            letter-spacing: -0.06em;
        }

        .nextSection h2 strong {
            display: block;
            color: #111111;
            font-weight: 400;
            font-style: italic;
        }

        .nextSection a {
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
            .heroGrid {
                grid-template-columns: 1fr;
            }

            .articleSection {
                grid-template-columns: 1fr;
                max-width: 850px;
            }

            .articleAside {
                position: static;
            }
        }

        @media (max-width: 700px) {
            .heroSection,
            .nextSection {
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

            .articleSection {
                padding: 80px 20px;
            }

            .actionGrid {
                grid-template-columns: 1fr;
            }

            .actionGrid > div {
                min-height: 220px;
            }

            .closingNote {
                padding: 30px 24px;
            }

            .nextSection > div {
                align-items: flex-start;
                flex-direction: column;
            }
        }
    `,
};
