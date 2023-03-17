import React, { useEffect, useState } from "react"
import { ButtonGroup, Button, Card, Carousel, Col, Row } from "react-bootstrap"
import Axios from "axios"
import Loaders from "../utilities/loader.utilities"

const Collections = () => {

    const [photos, setPhotos] = useState([])
    const [limit, setLimit] = useState(4)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        let isLoaded = false
        if (!isLoaded) {
            setLoading(true)
            Axios({
                method: "GET",
                url: `${process.env.REACT_APP_BASE_URL}/photos?_limit=${limit}`,
            }).then((result) => {
                setPhotos(result.data)
            }).catch((err) => {
                console.log(err);
            }).finally(() => {
                setLoading(false)
            })
        }
        return () => {
            isLoaded = true
        }
    }, [limit])

    const handleLimit = (option) => {
        if (option === '+') {
            setLimit((prev) => prev + 1)
        }
        if (option === '-') {
            setLimit((prev) => prev - 1)
        }
    }

    if (loading) {
        return (
            <Loaders />
        )
    }
    return (
        <React.Fragment>
            <Carousel>
                {photos.map((photo, i) =>
                    <Carousel.Item key={i}>
                        <img
                            className="d-block w-100 albums-hero"
                            src={photo.url}
                            alt={photo.title}
                        />
                        <Carousel.Caption>
                            <h3>{photo.title}</h3>
                            <p>{photo.thumbnailUrl}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                )}
            </Carousel>

            <Row className="mt-3">
                <Col md={{ offset: 5, span: 2 }}>
                    <ButtonGroup className="w-100">
                        <Button disabled={limit <= 1} onClick={() => handleLimit('-')} variant="danger">-</Button>
                        <Button onClick={() => handleLimit('+')} variant="primary">+</Button>
                    </ButtonGroup>
                </Col>
            </Row>

            <Row className="mt-4">
                <Col xs={12}>
                    <h3>Latest Photos</h3>
                </Col>
                {photos.map((photo, i) =>
                    <Col md={3} key={i} className="mb-2">
                        <Card>
                            <Card.Img variant="top" src={photo.url} />
                            <Card.Body>
                                <Card.Title>{photo.title}</Card.Title>
                                <Card.Text>
                                    {photo.title}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                )}
            </Row>
        </React.Fragment>
    )
}

export default Collections