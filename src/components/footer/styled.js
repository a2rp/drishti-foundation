import styled from "styled-components";

export const Styled = {
    Wrapper: styled.footer`
        width: 100%;
        padding: 90px 24px 24px;
        background: #111111;
        color: #ffffff;

        .footerInner {
            width: min(100%, 1400px);
            margin: 0 auto;
        }

        .footerTop {
            display: grid;
            grid-template-columns: minmax(0, 1.2fr) minmax(500px, 0.8fr);
            gap: 7vw;
            padding-bottom: 70px;
        }

        .eyebrow {
            display: block;
            margin-bottom: 20px;
            color: #ef2b2d;
            font-size: 0.68rem;
            font-weight: 800;
            text-transform: uppercase;
            letter-spacing: 0.16em;
        }

        .brandBlock h2 {
            max-width: 760px;
            font-size: clamp(2.8rem, 5vw, 5.8rem);
            font-weight: 500;
            line-height: 0.95;
            letter-spacing: -0.055em;
        }

        .brandBlock h2 span {
            display: block;
            color: #777777;
        }

        .brandBlock p {
            max-width: 560px;
            margin-top: 24px;
            color: #999999;
            font-size: 0.92rem;
            line-height: 1.8;
        }

        .primaryLink {
            width: fit-content;
            min-height: 48px;
            margin-top: 28px;
            padding: 0 18px;
            display: flex;
            align-items: center;
            gap: 14px;
            border-radius: 999px;
            background: #ef2b2d;
            color: #ffffff;
            font-size: 0.68rem;
            font-weight: 800;
            text-transform: uppercase;
            letter-spacing: 0.1em;
            transition:
                background 0.25s ease,
                transform 0.25s ease;
        }

        .primaryLink:hover {
            background: #ffffff;
            color: #111111;
            transform: translateY(-2px);
        }

        .footerLinks {
            display: grid;
            grid-template-columns: repeat(2, minmax(150px, 1fr));
            gap: 40px 50px;
            align-self: end;
        }

        .linkGroup {
            display: flex;
            flex-direction: column;
            gap: 12px;
        }

        .linkGroup > span {
            margin-bottom: 4px;
            color: #666666;
            font-size: 0.58rem;
            font-weight: 800;
            text-transform: uppercase;
            letter-spacing: 0.14em;
        }

        .linkGroup a {
            width: fit-content;
            display: flex;
            align-items: center;
            gap: 7px;
            color: #b7b7b7;
            font-size: 0.75rem;
            transition:
                color 0.2s ease,
                transform 0.2s ease;
        }

        .linkGroup a:hover {
            color: #ffffff;
            transform: translateX(3px);
        }

        .linkGroup svg {
            font-size: 0.8rem;
        }

        .footerBottom {
            min-height: 70px;
            padding-top: 22px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 24px;
            border-top: 1px solid rgba(255, 255, 255, 0.09);
            color: #666666;
            font-size: 0.62rem;
            text-transform: uppercase;
            letter-spacing: 0.08em;
        }

        .footerBottom a {
            color: #aaaaaa;
            font-weight: 700;
        }

        .footerBottom a:hover {
            color: #ffffff;
        }

        @media (max-width: 950px) {
            .footerTop {
                grid-template-columns: 1fr;
            }

            .footerLinks {
                max-width: 700px;
            }
        }

        @media (max-width: 600px) {
            padding: 70px 18px 20px;

            .footerLinks {
                grid-template-columns: 1fr 1fr;
                gap: 34px 24px;
            }

            .footerBottom {
                align-items: flex-start;
                flex-direction: column;
                padding: 22px 0;
            }
        }

        @media (max-width: 420px) {
            .footerLinks {
                grid-template-columns: 1fr;
            }
        }
    `,
};
