import styled from "styled-components";

export const Styled = {
    Wrapper: styled.div`
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
            color: #77736c;
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

        .heroContent {
            max-width: 1100px;
            margin: 70px auto 0;
        }

        .articleMeta {
            display: flex;
            align-items: center;
            gap: 24px;
            color: #8b867f;
            font-family: "Antonio", sans-serif;
            font-size: 0.68rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.12em;
        }

        .articleMeta span:first-child {
            color: #ef2b2d;
        }

        .articleMeta span:last-child {
            display: flex;
            align-items: center;
            gap: 7px;
        }

        .heroContent h1 {
            margin-top: 28px;
            font-family: Georgia, "Times New Roman", serif;
            font-size: clamp(4rem, 7vw, 8rem);
            font-weight: 700;
            line-height: 0.9;
            letter-spacing: -0.07em;
        }

        .heroContent > p {
            max-width: 750px;
            margin-top: 30px;
            color: #656059;
            font-size: 1rem;
            line-height: 1.85;
        }

        .heroImage {
            position: relative;
            width: calc(100% - 12vw);
            height: 760px;
            margin: 0 auto;
            overflow: hidden;
        }

        .heroImage img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .imageNumber {
            position: absolute;
            right: 28px;
            bottom: 28px;
            width: 58px;
            height: 58px;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid rgba(255, 255, 255, 0.5);
            border-radius: 50%;
            background: rgba(17, 17, 17, 0.28);
            backdrop-filter: blur(12px);
            color: #ffffff;
            font-family: "Antonio", sans-serif;
            font-size: 0.7rem;
        }

        .articleSection {
            max-width: 1200px;
            margin: 0 auto;
            padding: 120px 24px;
            display: grid;
            grid-template-columns: 180px minmax(0, 760px);
            gap: 70px;
            justify-content: center;
        }

        .articleAside {
            position: sticky;
            top: 160px;
            align-self: start;
        }

        .articleAside > span {
            color: #8e8981;
            font-family: "Antonio", sans-serif;
            font-size: 0.58rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.13em;
        }

        .shareButtons {
            margin-top: 18px;
            display: flex;
            gap: 8px;
        }

        .shareButtons button,
        .shareButtons a {
            width: 38px;
            height: 38px;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid rgba(17, 17, 17, 0.13);
            border-radius: 50%;
            color: #55514b;
            transition:
                background 0.2s ease,
                color 0.2s ease;
        }

        .shareButtons button:hover,
        .shareButtons a:hover {
            background: #ef2b2d;
            color: #ffffff;
        }

        .articleContent {
            min-width: 0;
        }

        .articleContent p {
            margin-bottom: 30px;
            color: #56524c;
            font-size: 1rem;
            line-height: 1.95;
        }

        .articleContent .lead {
            color: #22201d;
            font-family: Georgia, "Times New Roman", serif;
            font-size: clamp(1.7rem, 2.4vw, 2.5rem);
            line-height: 1.3;
        }

        .articleContent h2 {
            margin: 65px 0 24px;
            font-family: Georgia, "Times New Roman", serif;
            font-size: clamp(2.3rem, 3.5vw, 4rem);
            font-weight: 400;
            line-height: 1;
            letter-spacing: -0.045em;
        }

        .articleContent blockquote {
            margin: 60px 0;
            padding: 36px 0 36px 34px;
            border-left: 4px solid #ef2b2d;
            color: #111111;
            font-family: Georgia, "Times New Roman", serif;
            font-size: clamp(2rem, 3vw, 3.4rem);
            line-height: 1.15;
        }

        .articleHighlight {
            margin: 60px 0;
            padding: 42px;
            background: #111111;
            color: #ffffff;
        }

        .articleHighlight span {
            display: block;
            margin-bottom: 20px;
            color: #ef2b2d;
            font-family: "Antonio", sans-serif;
            font-size: 0.62rem;
            font-weight: 700;
            letter-spacing: 0.13em;
        }

        .articleHighlight strong {
            font-family: Georgia, "Times New Roman", serif;
            font-size: clamp(2rem, 3vw, 3.5rem);
            font-weight: 400;
            line-height: 1.1;
        }

        .nextStorySection {
            padding: 110px 6vw;
            background: #ef2b2d;
            color: #ffffff;
        }

        .nextStorySection > span {
            font-family: "Antonio", sans-serif;
            font-size: 0.68rem;
            font-weight: 700;
            letter-spacing: 0.14em;
        }

        .nextStorySection > div {
            margin-top: 24px;
            display: flex;
            align-items: end;
            justify-content: space-between;
            gap: 60px;
        }

        .nextStorySection h2 {
            max-width: 900px;
            font-family: Georgia, "Times New Roman", serif;
            font-size: clamp(3.5rem, 6vw, 6.8rem);
            font-weight: 700;
            line-height: 0.92;
            letter-spacing: -0.06em;
        }

        .nextStorySection h2 strong {
            display: block;
            color: #111111;
            font-weight: 400;
            font-style: italic;
        }

        .nextStorySection a {
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
            .articleSection {
                grid-template-columns: 1fr;
                max-width: 820px;
            }

            .articleAside {
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

            .heroContent {
                margin-top: 50px;
            }

            .heroContent h1 {
                font-size: clamp(3.8rem, 17vw, 6rem);
            }

            .heroImage {
                width: calc(100% - 40px);
                height: 500px;
            }

            .articleSection {
                padding: 80px 20px;
            }

            .articleHighlight {
                padding: 30px 24px;
            }

            .nextStorySection {
                padding: 90px 20px;
            }

            .nextStorySection > div {
                align-items: flex-start;
                flex-direction: column;
            }
        }
    `,
};
