import styled from "styled-components";
import { Link } from "react-router-dom";

import headshot from "../../assets/headshot.png";
import { Container, Headings } from "./styled";

const headings = ["Alex Antoniou", "Blog"];
const links = ["/", "/blog"];

const TopBar = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 3em;
    margin-bottom: 3em;

    @media (max-width: 430px) {
        margin: 1em;
    }
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
        <Container>
            <TopBar>
                <Headings>
                    <Headshot src={headshot} alt="" />
                    {headings.map((e, i) => <Head key={i}><Link to={links[i]}>{e}</Link></Head>)}
                </Headings>
            </TopBar>
        </Container>
    );
};

export default Header;