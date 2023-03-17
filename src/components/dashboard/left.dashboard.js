import React from "react"
import { Button } from "react-bootstrap"
import { Fade } from "react-awesome-reveal";

const LeftDashboard = () => {
    return (
        <React.Fragment>
            <section>
                <Fade>
                    <h1 className="hero-title"><span className="title-orange">Astronauts</span> in The Course</h1>
                </Fade>
                <Fade direction="up" delay={1000} cascade>
                    <p className="paragraph-title mt-5">I think being an astronaut is fun. <br />Smart, works within limitations but produces something satisfying.</p>
                    <p className="paragraph-title">Coder with an astronaut mentality in my opinion is amazing. Hopefully by following the course can deepen my knowledge</p>
                </Fade>
            </section>
            <section className="mt-5 btn-home-responsive">
                <Fade direction="left" delay={1500}>
                    <Button variant="danger" size="lg">
                        <strong>Get Started</strong>
                    </Button>
                </Fade>
            </section>
        </React.Fragment >
    )
}

export default LeftDashboard
