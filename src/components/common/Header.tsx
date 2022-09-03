import React from "react";
import styled from "styled-components";

import headshot from "../../assets/headshot.png";
import { Container, Headings } from "./styled";
import { ThemeContext } from "../../Theme";
import { InternalLink } from "../Card";
import { ReactComponent as Sun } from "../../assets/sun.svg";
import { ReactComponent as Moon } from "../../assets/moon.svg";


const headings = ["Alex Antoniou", "Blog"];
const links = ["/", "/blog"];

const TopBar = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 3em;
    margin-bottom: 3em;

    @media (max-width: 1200px) {
        min-width: 75vw
    }

    @media (max-width: 720px) {
        justify-content: flex-start;
    }

    @media (max-width: 450px) {
        justify-content: flex-start;
        margin: 1rem 0rem 1rem 0rem;
    }
`;

const Headshot = styled.img`
    width: 5em;
    height: 5em;
`;

const Head = styled.h3`
    margin: 0em 1em 0em 1em;
`;

const HeaderLink = styled(InternalLink)`
    &:hover {
        text-decoration: none;
`;

const ThemeToggleIcon = styled.button`
    width: 3em;
    height: 3em;
    border: 4px dash ${({ color }) => color};
    border-radius: 50%;
    background: none;
    cursor: pointer;
`;

const Header = () => {
    const { themeSelector, toggleTheme, theme } = React.useContext(ThemeContext);
    return (
        <Container>
            <TopBar>
                <Headings>
                    <Headshot src={headshot} alt="" />
                    {headings.map((e, i) => <Head key={i}><HeaderLink color={theme.color} to={links[i]}>{e}</HeaderLink></Head>)}
                </Headings>
                <ThemeToggleIcon color={theme.color} onClick={toggleTheme}>
                    {themeSelector === "light"
                        ? <Moon />
                        : <Sun fill="white" />
                    }
                </ThemeToggleIcon>
            </TopBar>
        </Container>
    );
};

export default Header;