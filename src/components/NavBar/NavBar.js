import { Container, Navbar } from "react-bootstrap"

function NavBar() {
    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand>LAB - WikiCountries</Navbar.Brand>
            </Container>
        </Navbar>
    )
}

export default NavBar