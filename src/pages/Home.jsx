import { Container, Box, BoxTitle, BoxText } from "../styles/HomeStyled";

export default function Home({ boxData }) {
    return (
        <Container>
            {boxData.map((box) => (
                <Box key={box.id} bgColor={box.bgColor}>
                    <BoxTitle>{box.title}</BoxTitle>
                    <BoxText>{box.text}</BoxText>
                </Box>
            ))}
        </Container>
    );
}
