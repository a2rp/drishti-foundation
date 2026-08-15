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
        }

        .heroContent {
            max-width: 1050px;
            margin: 70px auto 0;
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
            margin-top: 22px;
            font-family: Georgia, "Times New Roman", serif;
            font-size: clamp(4.5rem, 8vw, 8.5rem);
            font-weight: 700;
            line-height: 0.88;
            letter-spacing: -0.07em;
        }

        .heroContent > p {
            max-width: 720px;
            margin-top: 28px;
            color: #625e57;
            font-size: 0.98rem;
            line-height: 1.85;
        }

        .updated {
            width: fit-content;
            margin-top: 28px;
            display: flex;
            align-items: center;
            gap: 10px;
            color: #878179;
            font-size: 0.7rem;
        }

        .updated svg {
            color: #ef2b2d;
        }

        .documentSection {
            max-width: 1200px;
            margin: 0 auto;
            padding: 120px 24px;
            display: grid;
            grid-template-columns: 200px minmax(0, 800px);
            gap: 80px;
            justify-content: center;
        }

        .documentSection aside {
            position: sticky;
            top: 160px;
            align-self: start;
        }

        .documentSection aside > span {
            color: #918c84;
            font-family: "Antonio", sans-serif;
            font-size: 0.58rem;
            font-weight: 700;
            letter-spacing: 0.13em;
        }

        .documentSection aside nav {
            margin-top: 20px;
            display: grid;
            border-top: 1px solid rgba(17, 17, 17, 0.12);
        }

        .documentSection aside a {
            padding: 13px 0;
            border-bottom: 1px solid rgba(17, 17, 17, 0.12);
            color: #777168;
            font-size: 0.7rem;
        }

        .documentSection article > section + section {
            margin-top: 80px;
        }

        .documentSection article p {
            margin-top: 26px;
            color: #57534c;
            font-size: 1rem;
            line-height: 1.95;
        }

        .documentSection .lead {
            color: #22201d;
            font-family: Georgia, "Times New Roman", serif;
            font-size: clamp(1.7rem, 2.5vw, 2.6rem);
            line-height: 1.3;
        }

        .documentSection h2 {
            margin-top: 24px;
            font-family: Georgia, "Times New Roman", serif;
            font-size: clamp(2.4rem, 3.6vw, 4rem);
            font-weight: 400;
            line-height: 1;
            letter-spacing: -0.045em;
        }

        .legalNote {
            margin-top: 55px;
            padding: 38px;
            background: #111111;
            color: #ffffff;
        }

        .legalNote > span {
            display: block;
            margin-bottom: 16px;
            color: #ef2b2d;
            font-family: "Antonio", sans-serif;
            font-size: 0.62rem;
            font-weight: 700;
            letter-spacing: 0.13em;
        }

        .legalNote strong {
            display: block;
            font-family: Georgia, "Times New Roman", serif;
            font-size: clamp(1.8rem, 2.7vw, 3rem);
            font-weight: 400;
            line-height: 1.12;
        }

        .legalNote a {
            width: fit-content;
            margin-top: 24px;
            display: flex;
            align-items: center;
            gap: 9px;
            color: #ef2b2d;
            font-family: "Antonio", sans-serif;
            font-size: 0.72rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.08em;
        }

        @media (max-width: 900px) {
            .documentSection {
                grid-template-columns: 1fr;
                max-width: 850px;
            }

            .documentSection aside {
                position: static;
            }
        }

        @media (max-width: 700px) {
            .heroSection {
                padding: 60px 20px 80px;
            }

            .topBar {
                flex-direction: column;
                align-items: flex-start;
                gap: 12px;
            }

            .heroContent h1 {
                font-size: clamp(4rem, 18vw, 6.2rem);
            }

            .documentSection {
                padding: 80px 20px;
            }

            .legalNote {
                padding: 30px 24px;
            }
        }
    `,
};
