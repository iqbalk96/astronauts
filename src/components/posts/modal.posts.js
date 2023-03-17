import React from "react"
import { Button, Modal } from "react-bootstrap"
const Modals = ({ isShow, dataModal, parentCallback }) => {
    const title = dataModal && dataModal.title
    const body = dataModal && dataModal.body
    return (
        <React.Fragment>
            <Modal centered show={isShow} onHide={parentCallback}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal {title}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>{body}</p>
                </Modal.Body>

                <Modal.Footer>
                    <Button onClick={() => {
                        parentCallback();
                    }} variant="secondary">Close</Button>
                </Modal.Footer>
            </Modal>
        </React.Fragment>
    )
}

export default Modals
