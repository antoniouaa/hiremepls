import styled from "styled-components";

import headshot from "../assets/headshot.png";
import { Headings } from "./styled";

const headings = ["Alex Antoniou", "Blog"];
const links = ["/", "/blog"];

const TopBar = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 3em;
    margin-bottom: 3em;
`;

const Headshot = styled.img`
    width: 5em;
    height: 5em;
`;

const Head = styled.h3`
    margin: 0em 1em 0em 1em;
`;

const Header = () => {
    return (
        <TopBar>
            <Headings>
                <Headshot src={headshot} alt="" />
                {headings.map((e, i) => <Head key={i}><a href={links[i]}>{e}</a></Head>)}
            </Headings>
        </TopBar>
    );
};

export default Header;