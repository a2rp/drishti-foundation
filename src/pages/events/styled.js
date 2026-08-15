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
    `,
};
