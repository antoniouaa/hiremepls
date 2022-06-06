import { RepoLink } from "./Card"
import { Container } from "./common/styled";

const colored = (color: string, text: string) => <span style={{ color }}>{text}</span>

const About = () => {
    return (<Container>
        <p>Software developer currently using {colored("blue", "Python")}, {colored("green", "VBA")} and {colored("purple", "PowerShell")} to maintain and develop internal and client-facing reporting tools for <RepoLink href="https://www.ingage.com/">{colored("teal", "ingage IR")}</RepoLink>.</p>
        <p>Learning {colored("palevioletred", "C#")} and {colored("steelblue", "TypeScript")}.</p>
    </Container>)
}

export default About;