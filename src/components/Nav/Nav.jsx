import { Hader, StyleLink } from "./Nav.styled";

export default function Nav() {
    return (
        <Hader>
            <StyleLink to="/">🏠 Home</StyleLink>
            <StyleLink to="/animals">🐾 Animals</StyleLink>
            <StyleLink to="/colors">🎨 Colors</StyleLink>
        </Hader>
    );
}
