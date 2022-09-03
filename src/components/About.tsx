import React from "react";
import { RepoLink as Link } from "./Card"
import { Container } from "./common/styled";

import { ThemeContext } from "../Theme";


const About = () => {
    const { themeSelector } = React.useContext(ThemeContext);
    const colored = (color: string, text: string) => <span style={{ color }}>{text}</span>

    return (
        <Container width="100%">
            <p>Software engineer currenly using {colored("blue", "Python")}, {colored("darkorange", "JavaScript")} and
                related technologies to maintain and develop client-facing and administrative UI
                for <Link href="https://www.playtech.com/">{colored(themeSelector === "light" ? "darkblue" : "lightblue", "Playtech")}</Link>.</p>
            <p>Learning {colored("steelblue", "TypeScript")} and {colored("brown", "Rust")}.</p><br />
        </Container>)
}

export default About;