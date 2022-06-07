import React from "react";
import styled from "styled-components";

import { ReactComponent as Discord } from "../../assets/discord.svg";
import { ReactComponent as GitHub } from "../../assets/github.svg";
import { ReactComponent as LinkedIn } from "../../assets/linkedin.svg";
import { Headings } from "./styled";

const BottomBar = styled.footer`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    align-self:center;
    bottom: 0;

    @media (max-width: 720px) {
        position: fixed;
        background-color: #E5E4E2;
        height: 3rem;
        margin-top: 1em;
    }
`;

const Links = styled(Headings)`
    width: 100vw;
    justify-content: center;
    height: 5rem;
`;

const LinkedInLogo = styled(LinkedIn)`
    width: 2em;
    height: 2em;
    &:hover {
        fill: #0966c2;
    }
`;

const GitHubLogo = styled(GitHub)`
    width: 2em;
    height: 2em;
    &:hover {
        fill: lightslategray;
    }
`;

const DiscordLogo = styled(Discord)`
    width: 2.2em;
    height: 2.2em;
    &:hover {
        fill: #5865F2
    }
`;

const Link = styled.a`
    margin: 0.5em;
`;

const Footer = () => {
    const prevScrollY = React.useRef<number>(0);
    const [scrollUp, setScrollUp] = React.useState<boolean>(false);

    React.useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (prevScrollY.current < currentScrollY && scrollUp)
                setScrollUp(false);
            if (prevScrollY.current > currentScrollY && !scrollUp)
                setScrollUp(true);

            prevScrollY.current = currentScrollY;
        }
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [scrollUp])

    return (
        <BottomBar>
            <Links>
                <Link href="https://www.linkedin.com/in/antoniouaa/"><LinkedInLogo /></Link>
                <Link href="https://github.com/antoniouaa"><GitHubLogo /></Link>
                <Link href="https://discord.com/"><DiscordLogo /></Link>
            </Links>
        </BottomBar>
    )
}

export default Footer;
