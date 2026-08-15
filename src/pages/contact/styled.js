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
            color: #827e77;
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
            max-width: 900px;
            font-family: Georgia, "Times New Roman", serif;
            font-size: clamp(4.8rem, 8vw, 9rem);
            font-weight: 700;
            line-height: 0.85;
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

        .contactSection {
            padding: 120px 6vw;
            display: grid;
            grid-template-columns: 0.85fr 1.15fr;
            gap: 7vw;
            background: #111111;
            color: #ffffff;
        }

        .eyebrow {
            color: #ef2b2d;
            font-family: "Antonio", sans-serif;
            font-size: 0.7rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.14em;
        }

        .contactDetails h2 {
            max-width: 650px;
            margin-top: 24px;
            font-family: Georgia, "Times New Roman", serif;
            font-size: clamp(3.5rem, 5vw, 6rem);
            font-weight: 700;
            line-height: 0.92;
            letter-spacing: -0.06em;
        }

        .contactDetails h2 span {
            display: block;
            color: #ef2b2d;
            font-weight: 400;
            font-style: italic;
        }

        .contactList {
            margin-top: 60px;
            border-top: 1px solid rgba(255, 255, 255, 0.12);
        }

        .contactList > a,
        .contactItem {
            min-height: 92px;
            display: grid;
            grid-template-columns: auto 1fr auto;
            gap: 18px;
            align-items: center;
            border-bottom: 1px solid rgba(255, 255, 255, 0.12);
        }

        .contactIcon {
            width: 42px;
            height: 42px;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid rgba(255, 255, 255, 0.16);
            border-radius: 50%;
            color: #ef2b2d;
        }

        .contactList div > small,
        .contactList a div > small {
            display: block;
            margin-bottom: 5px;
            color: #666666;
            font-family: "Antonio", sans-serif;
            font-size: 0.58rem;
            text-transform: uppercase;
            letter-spacing: 0.12em;
        }

        .contactList strong {
            color: #dddddd;
            font-size: 0.82rem;
            font-weight: 500;
        }

        .socialLinks {
            margin-top: 45px;
        }

        .socialLinks > span {
            color: #777777;
            font-family: "Antonio", sans-serif;
            font-size: 0.6rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.12em;
        }

        .socialLinks > div {
            margin-top: 15px;
            display: flex;
            gap: 10px;
        }

        .socialLinks a {
            width: 44px;
            height: 44px;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid rgba(255, 255, 255, 0.14);
            border-radius: 50%;
            color: #bbbbbb;
            transition:
                background 0.2s ease,
                color 0.2s ease,
                transform 0.2s ease;
        }

        .socialLinks a:hover {
            background: #ef2b2d;
            color: #ffffff;
            transform: translateY(-3px);
        }

        .contactFormWrapper {
            padding: 36px;
            background: #f1ede5;
            color: #111111;
        }

        .formHeader {
            padding-bottom: 22px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            border-bottom: 1px solid rgba(17, 17, 17, 0.12);
            color: #77736c;
            font-family: "Antonio", sans-serif;
            font-size: 0.65rem;
            letter-spacing: 0.12em;
        }

        .formHeader svg {
            color: #ef2b2d;
            font-size: 1.1rem;
        }

        .contactForm {
            margin-top: 30px;
            display: grid;
            gap: 28px;
        }

        .contactForm label {
            display: grid;
            gap: 10px;
        }

        .contactForm label > span {
            color: #716d66;
            font-family: "Antonio", sans-serif;
            font-size: 0.65rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.1em;
        }

        .contactForm input,
        .contactForm textarea {
            width: 100%;
            padding: 15px 0;
            border-bottom: 1px solid rgba(17, 17, 17, 0.18);
            background: transparent;
            color: #111111;
            font-size: 0.92rem;
            transition: border-color 0.2s ease;
        }

        .contactForm input:focus,
        .contactForm textarea:focus {
            border-color: #ef2b2d;
        }

        .contactForm input::placeholder,
        .contactForm textarea::placeholder {
            color: #99958e;
        }

        .contactForm textarea {
            min-height: 150px;
            resize: vertical;
        }

        .contactForm button {
            width: fit-content;
            min-height: 52px;
            padding: 0 20px;
            display: flex;
            align-items: center;
            gap: 14px;
            border-radius: 999px;
            background: #ef2b2d;
            color: #ffffff;
            font-family: "Antonio", sans-serif;
            font-size: 0.78rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.08em;
            transition:
                background 0.2s ease,
                transform 0.2s ease;
        }

        .contactForm button:hover {
            background: #111111;
            transform: translateY(-2px);
        }

        .visualSection {
            position: relative;
            min-height: 680px;
            overflow: hidden;
        }

        .visualSection img {
            width: 100%;
            height: 680px;
            object-fit: cover;
        }

        .visualOverlay {
            position: absolute;
            inset: 0;
            background: linear-gradient(
                to top,
                rgba(17, 17, 17, 0.78),
                transparent 60%
            );
        }

        .visualContent {
            position: absolute;
            left: 6vw;
            right: 6vw;
            bottom: 55px;
            z-index: 2;
            color: #ffffff;
        }

        .visualContent > span {
            font-family: "Antonio", sans-serif;
            font-size: 0.7rem;
            font-weight: 700;
            letter-spacing: 0.14em;
        }

        .visualContent h2 {
            max-width: 1000px;
            margin-top: 16px;
            font-family: Georgia, "Times New Roman", serif;
            font-size: clamp(3.6rem, 6vw, 7rem);
            font-weight: 700;
            line-height: 0.92;
            letter-spacing: -0.06em;
        }

        .visualContent h2 strong {
            display: block;
            color: #ef2b2d;
            font-weight: 400;
            font-style: italic;
        }

        .closingSection {
            padding: 100px 6vw;
            display: flex;
            align-items: end;
            justify-content: space-between;
            gap: 60px;
            background: #ef2b2d;
            color: #ffffff;
        }

        .closingSection > div > span {
            font-family: "Antonio", sans-serif;
            font-size: 0.7rem;
            font-weight: 700;
            letter-spacing: 0.14em;
        }

        .closingSection h2 {
            margin-top: 20px;
            font-family: Georgia, "Times New Roman", serif;
            font-size: clamp(3rem, 5vw, 5.8rem);
            font-weight: 700;
            line-height: 0.9;
            letter-spacing: -0.055em;
        }

        .closingSection h2 span {
            display: block;
            color: #111111;
            font-weight: 400;
            font-style: italic;
        }

        .closingSection a {
            flex-shrink: 0;
            min-height: 50px;
            padding: 0 18px;
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
            .contactSection {
                grid-template-columns: 1fr;
            }

            .contactDetails {
                max-width: 700px;
            }
        }

        @media (max-width: 700px) {
            .heroSection {
                padding: 70px 20px 90px;
            }

            .heroMeta {
                align-items: flex-start;
                flex-direction: column;
                gap: 10px;
            }

            .heroGrid h1 {
                font-size: clamp(4rem, 19vw, 6.4rem);
            }

            .contactSection {
                padding: 90px 20px;
            }

            .contactFormWrapper {
                padding: 26px 20px;
            }

            .visualSection,
            .visualSection img {
                min-height: 560px;
                height: 560px;
            }

            .visualContent {
                left: 20px;
                right: 20px;
                bottom: 30px;
            }

            .closingSection {
                padding: 90px 20px;
                align-items: flex-start;
                flex-direction: column;
            }
        }
    `,
};
