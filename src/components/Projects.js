import { Row, Col, Container} from "react-bootstrap"

export const Projects = () =>{
    const projects = [
        {
            title: "Test",
            description: "Test1",
            imgUrl: ''
        }
    ]
    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                        <h2>
                            Projects
                        </h2>
                        <p>Test</p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}