import React from "react"
import { Container } from "react-bootstrap"
import Collections from "./collection.albums"

const Albums = () => {
    return (
        <React.Fragment>
            <Container className="mt-3">
                <Collections />
            </Container>
        </React.Fragment>
    )
}

export default Albums