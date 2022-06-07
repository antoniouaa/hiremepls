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
        min-width: 85vw;
    }
    
    @media (max-width: 720px) {
        margin: 0em 1em 0em 1em;
        width: 100vw;
    }
`;

export const Main = styled.main`
    display: flex;
    min-height: 60vh;
    align-items: flex-start;
    justify-content: center;
    flex: 1;

    @media (max-width: 720px) {
        // margin: 0em 1em 0em 1em;
        width: 100%;
    }
`;

export const Headings = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;