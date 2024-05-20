import {useState, useEffect} from "react";
import { Row, Container, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate =["Software Engineer", "Computer Scientist", "Game Developer"];
    const [text, setText] = useState('');
    const period = 2000;
    const [delta, setDelta] = useState(500 - Math.random() * 100);


    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if(isDeleting){

            // determines the delete speed
            setDelta(prevDelta  => prevDelta / 1.7);
        }

        if(!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(period);
        } else if(isDeleting && updatedText === ''){
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }

    useEffect(() => {
        let ticker = setInterval(()=> {
            tick();
        }, delta)

        return () => {clearInterval(ticker)};
    }, [text])

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my Portfolio</span>
                        <h1>{`Hi, I'm Jonathan Ruiz\n`}</h1>
                        <h2><span className="wrap">{text}</span></h2>
                        <p>Enthusiastic hardworker looking for any job opportunities in the Computer Science and programming world.</p>
                    </Col>
                    <Col  xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header Img"/>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}