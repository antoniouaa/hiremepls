import headshot from "../assets/headshot.png";
import discord from "../assets/discord.svg";
import github from "../assets/github.svg";
import linkedin from "../assets/linkedin.svg";

import styled from "styled-components";

const headings = ["antoniouaa"];
const icons = [linkedin, github, discord];
const links = [
    "https://www.linkedin.com/in/antoniouaa/",
    "https://github.com/antoniouaa/",
    "https://discordapp.com/channels/@me/226101538165227522/",
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
const Icon = styled.img`
    width: 2em;
    height: 2em;
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
                {icons.map((e, i) => (
                    <Link key={i} href={links[i]}>
                        <Icon src={e} />
                    </Link>
                ))}
            </Links>
        </TopBar>
    );
};

export default Header;
