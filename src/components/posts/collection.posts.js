import React, { useEffect, useState } from "react"
import { Button, Card, Col, Form, Row } from "react-bootstrap"
import Axios from "axios"
import Loaders from "../utilities/loader.utilities"
import Modals from "./modal.posts"

const Collections = () => {

    const [posts, setPosts] = useState([])
    const [limit, setLimit] = useState(8)
    const [loading, setLoading] = useState(true)
    const [showModal, setShowModal] = useState(false);
    const [dataModal, setDataModal] = useState(null);

    const updateLimit = (option) => {
        setLimit(option.target.value)
    }

    const showSelectedToModal = (data) => {
        setDataModal(data)
        setShowModal(true)
    }

    useEffect(() => {
        let isLoaded = false
        if (!isLoaded) {
            setLoading(true)
            Axios({
                method: "GET",
                url: `${process.env.REACT_APP_BASE_URL}/posts?start=0&_limit=${limit}`,
            }).then((result) => {
                setPosts(result.data)
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

    return (
        <React.Fragment>
            <Row>
                <Col md={{ offset: 9, span: 3 }}>
                    <Form.Label>Show Entries</Form.Label>
                    <Form.Select aria-label="Show Entries" onChange={updateLimit}>
                        <option value="8">8 Entries</option>
                        <option value="16">16 Entries</option>
                        <option value="24">24 Entries</option>
                        <option value="32">32 Entries</option>
                    </Form.Select>
                </Col>
            </Row>
            <Row className="mt-4">
                {!loading && posts.map((post, i) =>
                    <Col md={4} lg={3} key={i} className="mb-2">
                        <Card>
                            <Card.Img variant="top" src="https://picsum.photos/400" />
                            <Card.Body>
                                <Card.Title>{post.title}</Card.Title>
                                <Button onClick={() => showSelectedToModal(post)} size="sm" variant="info">Show Detail</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                )}
            </Row>
            {loading &&
                <Row>
                    <Col>
                        <Loaders />
                    </Col>
                </Row>
            }

            <Modals isShow={showModal} dataModal={dataModal} parentCallback={() => setShowModal(false)} />

        </React.Fragment>
    )
}

export default Collections