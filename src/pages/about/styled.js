import styled from "styled-components";

export const Styled = {
    Wrapper: styled.div`
        width: 100%;
        background: #f5f2eb;
        color: #111111;

        .eyebrow {
            color: #ef2b2d;
            font-family: "Antonio", sans-serif;
            font-size: 0.72rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.15em;
        }

        .heroSection {
            padding: 70px 6vw 120px;
        }

        .heroTop {
            padding-bottom: 22px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            border-bottom: 1px solid rgba(17, 17, 17, 0.12);
        }

        .pageNumber {
            color: #8d8982;
            font-family: "Antonio", sans-serif;
            font-size: 0.65rem;
            letter-spacing: 0.12em;
        }

        .heroGrid {
            margin-top: 55px;
            display: grid;
            grid-template-columns: 0.9fr 1.1fr;
            gap: 5vw;
            align-items: center;
        }

        .heroCopy h1 {
            max-width: 720px;
            font-family: Georgia, "Times New Roman", serif;
            font-size: clamp(4.5rem, 7vw, 8.6rem);
            font-weight: 700;
            line-height: 0.86;
            letter-spacing: -0.075em;
        }

        .heroCopy h1 span {
            display: block;
            color: #ef2b2d;
            font-weight: 400;
            font-style: italic;
        }

        .heroCopy p {
            max-width: 560px;
            margin-top: 32px;
            color: #5d5952;
            font-size: 0.96rem;
            line-height: 1.85;
        }

        .heroImage {
            position: relative;
            min-height: 650px;
            overflow: hidden;
        }

        .heroImage img {
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
                rgba(17, 17, 17, 0.7),
                transparent 58%
            );
        }

        .imageLabel {
            position: absolute;
            left: 34px;
            bottom: 34px;
            z-index: 2;
            color: #ffffff;
        }

        .imageLabel span {
            display: block;
            margin-bottom: 10px;
            font-family: "Antonio", sans-serif;
            font-size: 0.65rem;
            text-transform: uppercase;
            letter-spacing: 0.14em;
        }

        .imageLabel strong {
            font-family: Georgia, "Times New Roman", serif;
            font-size: clamp(2rem, 3vw, 3.8rem);
            font-weight: 400;
            line-height: 1;
        }

        .storySection {
            padding: 120px 6vw;
            background: #111111;
            color: #ffffff;
        }

        .storyMeta {
            padding-bottom: 22px;
            display: flex;
            justify-content: space-between;
            border-bottom: 1px solid rgba(255, 255, 255, 0.12);
            color: #777777;
            font-family: "Antonio", sans-serif;
            font-size: 0.68rem;
            letter-spacing: 0.14em;
        }

        .storyGrid {
            margin-top: 60px;
            display: grid;
            grid-template-columns: 1.1fr 0.9fr;
            gap: 7vw;
        }

        .storyGrid h2 {
            max-width: 850px;
            font-family: Georgia, "Times New Roman", serif;
            font-size: clamp(3.8rem, 6vw, 7rem);
            font-weight: 400;
            line-height: 0.92;
            letter-spacing: -0.06em;
        }

        .storyCopy {
            align-self: end;
            display: grid;
            gap: 22px;
        }

        .storyCopy p {
            color: #aaaaaa;
            font-size: 0.92rem;
            line-height: 1.85;
        }

        .visionSection {
            padding: 120px 6vw;
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 18px;
            background: #e6e1d8;
        }

        .visionCard {
            min-height: 520px;
            padding: 28px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            background: #f8f5ef;
        }

        .visionCard.dark {
            background: #ef2b2d;
            color: #ffffff;
        }

        .visionCard.imageCard {
            position: relative;
            overflow: hidden;
            color: #ffffff;
        }

        .visionCard.imageCard img {
            position: absolute;
            inset: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .cardTop,
        .visionCard > div:last-child {
            position: relative;
            z-index: 2;
        }

        .cardTop {
            display: flex;
            justify-content: space-between;
            font-size: 1.1rem;
        }

        .cardTop span {
            font-family: "Antonio", sans-serif;
            font-size: 0.68rem;
            letter-spacing: 0.12em;
        }

        .cardLabel {
            display: block;
            margin-bottom: 14px;
            font-family: "Antonio", sans-serif;
            font-size: 0.7rem;
            text-transform: uppercase;
            letter-spacing: 0.14em;
        }

        .visionCard h3 {
            font-family: Georgia, "Times New Roman", serif;
            font-size: clamp(2rem, 2.6vw, 3.4rem);
            font-weight: 400;
            line-height: 1;
            letter-spacing: -0.04em;
        }

        .valuesSection {
            padding: 130px 6vw;
            background: #f8f5ef;
        }

        .valuesIntro {
            display: grid;
            grid-template-columns: 0.5fr 1.5fr;
            gap: 5vw;
        }

        .valuesIntro h2 {
            max-width: 950px;
            font-family: Georgia, "Times New Roman", serif;
            font-size: clamp(3.8rem, 6vw, 7rem);
            font-weight: 700;
            line-height: 0.92;
            letter-spacing: -0.06em;
        }

        .valuesIntro h2 span {
            display: block;
            color: #ef2b2d;
            font-weight: 400;
            font-style: italic;
        }

        .valuesList {
            margin-top: 80px;
            border-top: 1px solid rgba(17, 17, 17, 0.12);
        }

        .valueRow {
            min-height: 150px;
            display: grid;
            grid-template-columns: 90px 1fr auto;
            gap: 30px;
            align-items: center;
            border-bottom: 1px solid rgba(17, 17, 17, 0.12);
        }

        .valueNumber {
            color: #969089;
            font-family: "Antonio", sans-serif;
            font-size: 0.68rem;
            letter-spacing: 0.12em;
        }

        .valueRow strong {
            font-family: Georgia, "Times New Roman", serif;
            font-size: 1.8rem;
            font-weight: 400;
        }

        .valueRow p {
            max-width: 650px;
            margin-top: 8px;
            color: #67625b;
            font-size: 0.82rem;
            line-height: 1.7;
        }

        .valueRow > svg {
            color: #ef2b2d;
            font-size: 1.4rem;
        }

        .closingSection {
            padding: 110px 6vw;
            display: grid;
            grid-template-columns: 1.2fr 0.8fr;
            gap: 7vw;
            align-items: end;
            background: #ef2b2d;
            color: #ffffff;
        }

        .closingSection > div:first-child > span {
            font-family: "Antonio", sans-serif;
            font-size: 0.7rem;
            letter-spacing: 0.14em;
        }

        .closingSection h2 {
            max-width: 900px;
            margin-top: 24px;
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

        .closingAction p {
            max-width: 500px;
            line-height: 1.8;
        }

        .closingAction a {
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

        @media (max-width: 950px) {
            .heroGrid,
            .storyGrid,
            .closingSection {
                grid-template-columns: 1fr;
            }

            .visionSection {
                grid-template-columns: 1fr 1fr;
            }

            .imageCard {
                grid-column: 1 / -1;
            }

            .valuesIntro {
                grid-template-columns: 1fr;
            }
        }

        @media (max-width: 700px) {
            .heroSection {
                padding: 60px 20px 90px;
            }

            .heroTop {
                align-items: flex-start;
                flex-direction: column;
                gap: 10px;
            }

            .heroCopy h1 {
                font-size: clamp(4rem, 18vw, 6.4rem);
            }

            .heroImage,
            .heroImage img {
                min-height: 500px;
            }

            .storySection,
            .valuesSection,
            .closingSection {
                padding: 90px 20px;
            }

            .visionSection {
                padding: 90px 20px;
                grid-template-columns: 1fr;
            }

            .imageCard {
                grid-column: auto;
            }

            .visionCard {
                min-height: 430px;
            }

            .valueRow {
                min-height: 170px;
                grid-template-columns: 50px 1fr auto;
                gap: 15px;
            }
        }
    `,
};
