import styled, { css } from "styled-components";

export const Styled = {
    Header: styled.header`
        position: relative;
        top: 0;
        z-index: 1200;
        width: 100%;
        background: #ece9e1;
        border-bottom: 1px solid rgba(17, 17, 17, 0.08);
    `,

    Inner: styled.div`
        min-height: 116px;
        margin: 0 auto;
        padding: 0 32px;
        display: grid;
        grid-template-columns: auto 1fr auto;
        align-items: center;
        gap: 24px;

        @media (max-width: 900px) {
            min-height: 92px;
            padding: 0 18px;
            grid-template-columns: auto auto;
            justify-content: space-between;
        }
    `,

    Brand: styled.a`
        display: inline-flex;
        align-items: center;
        gap: 14px;
        color: #111111;
        text-decoration: none;
        min-width: fit-content;
    `,

    BrandMark: styled.div`
        width: 42px;
        height: 46px;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 5px;
        flex-shrink: 0;

        span {
            display: block;
            width: 20px;
            height: 7px;
            background: #ef2b2d;
            position: absolute;
            right: -3px;

            &.span1 {
                top: 0;
            }

            &.span2 {
                top: 15px;
            }

            &.span3 {
                top: 0;
                left: 23px;
                width: 7px;
                height: 45px;
            }
        }

        i {
            position: absolute;
            left: 0;
            top: 0;
            width: 22px;
            height: 46px;
            background: #ef2b2d;
            border-radius: 24px 0 0 24px;
        }
    `,

    BrandText: styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        line-height: 0.92;

        strong {
            font-family: Georgia, "Times New Roman", serif;
            font-size: 1.6rem;
            font-weight: 700;
            letter-spacing: -0.05em;
            color: #111111;
        }

        @media (max-width: 900px) {
            strong {
                font-size: 1.55rem;
            }
        }

        @media (max-width: 520px) {
            strong {
                font-size: 1.2rem;
            }
        }

        @media (width < 300px) {
            display: none;
        }
    `,

    Nav: styled.nav`
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 48px;

        @media (max-width: 980px) {
            gap: 28px;
        }

        @media (max-width: 900px) {
            display: none;
        }
    `,

    NavLinkItem: styled.a`
        position: relative;
        padding: 10px 0;
        font-family: "Antonio", sans-serif;
        font-size: 1.5rem;
        font-weight: 700;
        line-height: 1;
        text-transform: uppercase;
        color: #111111;
        text-decoration: none;
        transition:
            color 0.2s ease,
            transform 0.2s ease;

        &::after {
            content: "";
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            height: 3px;
            background: #ef2b2d;
            transform: scaleX(0);
            transform-origin: center;
            transition: transform 0.22s ease;
        }

        &:hover {
            color: #ef2b2d;
            text-decoration: none;
            transform: translateY(-1px);
        }

        &.active {
            color: #ef2b2d;
        }

        &.active::after {
            transform: scaleX(1);
        }
    `,

    MenuButton: styled.button`
        width: 50px;
        height: 50px;
        border-radius: 999px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        border: 1px solid rgba(17, 17, 17, 0.14);
        background: rgba(255, 255, 255, 0.55);
        color: #111111;
        transition:
            transform 0.2s ease,
            background 0.2s ease,
            border-color 0.2s ease;

        svg {
            font-size: 1.4rem;
        }

        &:hover {
            transform: translateY(-1px);
            background: #ffffff;
            border-color: rgba(17, 17, 17, 0.24);
        }
    `,

    Overlay: styled.button`
        position: fixed;
        inset: 0;
        z-index: 1250;
        background: rgba(17, 17, 17, 0.34);
        opacity: 0;
        visibility: hidden;
        pointer-events: none;
        border: none;
        transition:
            opacity 0.3s ease,
            visibility 0.3s ease;

        ${({ $isMenuOpen }) =>
            $isMenuOpen &&
            css`
                opacity: 1;
                visibility: visible;
                pointer-events: auto;
            `}
    `,

    Drawer: styled.aside`
        position: fixed;
        top: 0;
        right: 0;
        z-index: 1300;
        width: min(300px, 100%);
        height: 100vh;
        background: #f8f5ef;
        border-left: 1px solid rgba(17, 17, 17, 0.08);
        box-shadow: -14px 0 44px rgba(17, 17, 17, 0.1);
        padding: 24px 22px 28px;
        display: flex;
        flex-direction: column;
        transform: translateX(100%);
        transition: transform 0.34s ease;

        ${({ $isMenuOpen }) =>
            $isMenuOpen &&
            css`
                transform: translateX(0);
            `}
    `,

    DrawerTop: styled.div`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 16px;
        padding-bottom: 18px;
        border-bottom: 1px solid rgba(17, 17, 17, 0.08);
    `,

    DrawerTitle: styled.h2`
        font-family: "Antonio", sans-serif;
        font-size: 2rem;
        line-height: 1;
        font-weight: 700;
        text-transform: uppercase;
        color: #111111;
    `,

    CloseButton: styled.button`
        width: 48px;
        height: 48px;
        border-radius: 999px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        border: 1px solid rgba(17, 17, 17, 0.14);
        background: #ffffff;
        color: #111111;
        transition:
            transform 0.2s ease,
            border-color 0.2s ease;

        svg {
            font-size: 1.3rem;
        }

        &:hover {
            transform: rotate(90deg);
            border-color: rgba(17, 17, 17, 0.24);
        }
    `,

    DrawerNav: styled.nav`
        display: flex;
        flex-direction: column;
        gap: 8px;
        padding: 24px 0;
        flex: 1;
        overflow-y: auto;
    `,

    DrawerNavLink: styled.a`
        position: relative;
        padding: 14px 42px 14px 0;
        border-bottom: 1px solid rgba(17, 17, 17, 0.08);
        font-family: "Antonio", sans-serif;
        font-size: clamp(1.5rem, 4vw, 2.2rem);
        line-height: 1;
        font-weight: 700;
        text-transform: uppercase;
        color: #111111;
        text-decoration: none;
        transition:
            padding-left 0.2s ease,
            color 0.2s ease;

        &::after {
            content: "";
            position: absolute;
            top: 50%;
            right: 2px;
            width: 9px;
            height: 9px;
            border-radius: 50%;
            background: #ef2b2d;
            opacity: 0;
            transform: translateY(-50%) scale(0);
            transition:
                opacity 0.2s ease,
                transform 0.2s ease;
        }

        &:hover {
            padding-left: 8px;
            color: #ef2b2d;
            text-decoration: none;
        }

        &.active {
            padding-left: 8px;
            color: #ef2b2d;
        }

        &.active::after {
            opacity: 1;
            transform: translateY(-50%) scale(1);
        }
    `,

    DrawerBottom: styled.div`
        display: flex;
        flex-direction: column;
        gap: 18px;
        padding-top: 20px;
        border-top: 1px solid rgba(17, 17, 17, 0.08);
    `,

    ContactLink: styled.a`
        display: inline-flex;
        align-items: center;
        gap: 10px;
        color: #111111;
        font-size: 0.98rem;
        text-decoration: none;
        word-break: break-word;

        svg {
            font-size: 1.05rem;
            flex-shrink: 0;
        }

        &:hover {
            color: #ef2b2d;
            text-decoration: none;
        }
    `,

    Socials: styled.div`
        display: flex;
        align-items: center;
        gap: 12px;
    `,

    SocialLink: styled.a`
        width: 44px;
        height: 44px;
        border-radius: 999px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        border: 1px solid rgba(17, 17, 17, 0.12);
        background: #ffffff;
        color: #111111;
        text-decoration: none;
        transition:
            transform 0.2s ease,
            color 0.2s ease,
            border-color 0.2s ease;

        svg {
            font-size: 1.1rem;
        }

        &:hover {
            transform: translateY(-2px);
            color: #ef2b2d;
            border-color: rgba(239, 43, 45, 0.34);
            text-decoration: none;
        }
    `,
};
