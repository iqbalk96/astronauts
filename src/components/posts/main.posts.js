import React from "react"
import { Container } from "react-bootstrap"
import Collections from "./collection.posts"
// import UserPosts from "./user.posts"

const Posts = () => {
    return (
        <React.Fragment>
            <Container className="mt-3">
                <Collections />
            </Container>
        </React.Fragment>
    )
}

export default Posts