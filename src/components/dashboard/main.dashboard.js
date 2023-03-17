import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import LeftDashboard from "./left.dashboard"
import RightDashboard from "./right.dashboard"

const MainDashboard = () => {
    return (
        <div className="bg-theme bg-space">
            <Container className="pt-5 pb-5" style={{ zIndex: 1000 }}>
                <Row>
                    <Col lg={6} md={12} sm={12}>
                        <LeftDashboard />
                    </Col>
                    <Col lg={6} md={12} sm={12}>
                        <RightDashboard />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default MainDashboard