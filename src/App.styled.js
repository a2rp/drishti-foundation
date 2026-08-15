import styled from "styled-components";

export const Styled = {
    Wrapper: styled.div`
        width: 100%;
        min-height: 100vh;

        .appHeader {
            position: fixed;
            top: 0;
            left: 0;
            z-index: 1200;
            width: 100%;
            backdrop-filter: blur(10px);
        }

        .routesWrapper {
            width: 100%;
            min-height: calc(100vh - 116px);
            padding-top: 116px;
        }

        @media (max-width: 900px) {
            .routesWrapper {
                min-height: calc(100vh - 92px);
                padding-top: 92px;
            }
        }
    `,
};
