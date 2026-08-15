import styled from "styled-components";

export const Styled = {
    Wrapper: styled.div`
        .goToTopButton {
            position: fixed;
            right: 24px;
            bottom: 24px;
            z-index: 1100;

            width: 52px;
            height: 52px;

            display: flex;
            align-items: center;
            justify-content: center;

            border: 1px solid rgba(17, 17, 17, 0.14);
            border-radius: 999px;

            background: #ef2b2d;
            color: #ffffff;

            box-shadow: 0 12px 34px rgba(17, 17, 17, 0.16);

            opacity: 0;
            visibility: hidden;
            pointer-events: none;

            transform: translateY(16px);

            transition:
                opacity 0.25s ease,
                visibility 0.25s ease,
                transform 0.25s ease,
                background 0.2s ease,
                box-shadow 0.2s ease;

            svg {
                width: 21px;
                height: 21px;
            }

            &:hover {
                background: #111111;
                box-shadow: 0 16px 40px rgba(17, 17, 17, 0.22);
                transform: translateY(-2px);
            }

            &.visible {
                opacity: 1;
                visibility: visible;
                pointer-events: auto;
                transform: translateY(0);
            }
        }

        @media (max-width: 700px) {
            .goToTopButton {
                right: 16px;
                bottom: 16px;
                width: 46px;
                height: 46px;

                svg {
                    width: 19px;
                    height: 19px;
                }
            }
        }
    `,
};
