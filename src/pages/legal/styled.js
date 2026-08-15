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
            max-width: 900px;
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

        .heroGrid p {
            max-width: 500px;
            color: #625e57;
            font-size: 0.95rem;
            line-height: 1.85;
        }

        .documentsSection {
            padding: 120px 6vw;
            background: #111111;
            color: #ffffff;
        }

        .sectionHeader {
            padding-bottom: 22px;
            display: flex;
            justify-content: space-between;
            border-bottom: 1px solid rgba(255, 255, 255, 0.12);
            color: #777777;
            font-family: "Antonio", sans-serif;
            font-size: 0.68rem;
            text-transform: uppercase;
            letter-spacing: 0.13em;
        }

        .documentsList {
            border-top: 1px solid rgba(255, 255, 255, 0.12);
        }

        .documentRow {
            min-height: 150px;
            display: grid;
            grid-template-columns: 60px 55px 1fr auto;
            gap: 24px;
            align-items: center;
            border-bottom: 1px solid rgba(255, 255, 255, 0.12);
            transition:
                padding 0.2s ease,
                background 0.2s ease;
        }

        .documentRow:hover {
            padding: 0 18px;
            background: rgba(255, 255, 255, 0.04);
        }

        .documentNumber {
            color: #ef2b2d;
            font-family: "Antonio", sans-serif;
            font-size: 0.66rem;
        }

        .documentIcon {
            width: 46px;
            height: 46px;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid rgba(255, 255, 255, 0.16);
            border-radius: 50%;
            color: #ef2b2d;
        }

        .documentContent strong {
            font-family: Georgia, "Times New Roman", serif;
            font-size: clamp(1.8rem, 2.8vw, 3rem);
            font-weight: 400;
        }

        .documentContent p {
            max-width: 650px;
            margin-top: 10px;
            color: #8e8e8e;
            font-size: 0.78rem;
            line-height: 1.7;
        }

        .documentAction {
            width: 46px;
            height: 46px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            background: #ef2b2d;
            color: #ffffff;
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

        @media (max-width: 800px) {
            .heroGrid {
                grid-template-columns: 1fr;
            }
        }

        @media (max-width: 700px) {
            .heroSection,
            .documentsSection,
            .closingSection {
                padding: 80px 20px;
            }

            .heroMeta {
                flex-direction: column;
                gap: 10px;
            }

            .documentRow {
                grid-template-columns: 40px 46px 1fr auto;
                gap: 14px;
            }

            .closingSection > div {
                align-items: flex-start;
                flex-direction: column;
            }
        }
    `,
};
