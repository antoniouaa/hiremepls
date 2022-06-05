import styled from "styled-components";

import { ReactComponent as Discord } from "../assets/discord.svg";
import { ReactComponent as GitHub } from "../assets/github.svg";
import { ReactComponent as LinkedIn } from "../assets/linkedin.svg";
import { Headings } from "./styled";

const BottomBar = styled.div`
    display: flex;
    flex-direction: row;
    align-self: center;
    width: 100%;

    position: absolute;
    bottom: 0;
`;

const Links = styled(Headings)`
    width: 100%;
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
