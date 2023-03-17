import React from "react"
import { Fade } from "react-awesome-reveal"
import { Col, Row } from "react-bootstrap"
import AstroHero from "../../assets/outer.svg"

const RightDashboard = () => {
    return (
        <React.Fragment>
            <Fade direction="up" delay={1200}>
                <Row>
                    <Col md={{ offset: 2, span: 10 }} sm={12}>
                        <img src={AstroHero} className="w-100" alt="Outerspace" />
                    </Col>
                </Row>
            </Fade>
        </React.Fragment>
    )
}

export default RightDashboard
