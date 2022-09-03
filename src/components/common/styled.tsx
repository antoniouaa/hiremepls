import styled from "styled-components";

type Props = {
    width?: string
    align?: string
}

export const Container = styled.div`
    text-align: left;
    width: ${(props: Props) => props.width || "65%"};
    align-self: ${(props: Props) => props.align || "center"};

    @media (max-width: 1200px) {
        margin: 0;
        min-width: 90vw;
    }
`;

export const Main = styled.main`
    display: flex;
    min-height: 60vh;
    align-items: flex-start;
    justify-content: center;
    flex: 1;
`;

export const Headings = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const Button = styled.button<{ toggle: string, th: Record<string, string> }>`
    font-family: Fira Code;
    color: ${({ toggle, th }) => toggle === "dark" ? th.color : th.backgroundColor};
    background-color: ${({ toggle, th }) => toggle === "light" ? th["color"] : th.backgroundColor};
    border-color: lightgrey;
    padding: 0.5em;
    border-radius: 0.5em;
    &:hover {
    color: #f5ab35;
    background - color: #2b2b2b;
    cursor: pointer;
}
`;
