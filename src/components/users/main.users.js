import React from "react"
import { Container } from "react-bootstrap"
import MovieCollections from "./collection.users"


const Movie = () => {
    return (
        <React.Fragment>
            <Container className="mt-3 mb-3">
                <MovieCollections />
            </Container>
        </React.Fragment>
    )
}

export default Movie