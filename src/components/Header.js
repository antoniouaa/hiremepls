import headshot from "../assets/headshot.png"
import discord from "../assets/discord.svg"
import github from "../assets/github.svg"
import linkedin from "../assets/linkedin.svg"


import styled from "styled-components"

const Headshot = styled.img`
    width: 5em;
    height: 5em;
`

const TopBar = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 3em 10em 1em 10em;
`

const Headings = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`
const Links = Headings

const Head = styled.h3`
    margin: 0em 1em 0em 1em;
`
const Icon = styled.img`
    width: 2em;
    height: 2em;
    margin: 0.5em;
`

const Header = () => {
    const headings = ["Home", "About", "Projects"]
    const icons = [linkedin, github, discord]
    return (
        <TopBar>
            <Headings>
                <Headshot src={headshot} alt="" />
                {headings.map(e => <Head>{e}</Head>)}
            </Headings>
            <Links>
                {icons.map(e => <Icon src={e} />)}
            </Links>
        </TopBar >
    )
}

export default Header;