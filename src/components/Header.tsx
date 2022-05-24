import headshot from "../assets/headshot.png";
import { ReactComponent as Discord } from "../assets/discord.svg";
import { ReactComponent as GitHub } from "../assets/github.svg";
import { ReactComponent as LinkedIn } from "../assets/linkedin.svg";

import styled from "styled-components";

const headings = ["Alex Antoniou"];
const icons = [LinkedIn, GitHub, Discord];
const links = [
    "",
    "#",
];

const Headshot = styled.img`
    width: 5em;
    height: 5em;
`;
const TopBar = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 3em;
    margin-bottom: 3em;
`;
const Headings = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;
const Links = Headings;

const Head = styled.h3`
    margin: 0em 1em 0em 1em;
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

const Header = () => {
    return (
        <TopBar>
            <Headings>
                <Headshot src={headshot} alt="" />
                {headings.map((e, i) => (
                    <Head key={i}>{e}</Head>
                ))}
            </Headings>
            <Links>
                <Link href="https://www.linkedin.com/in/antoniouaa/"><LinkedInLogo /></Link>
                <Link href="https://github.com/antoniouaa"><GitHubLogo /></Link>
                <Link href="https://discord.com/"><DiscordLogo /></Link>
            </Links>
        </TopBar>
    );
};

export default Header;