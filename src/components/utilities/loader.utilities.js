import { Spinner } from "react-bootstrap"

const Loaders = () => {
    return (
        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
            <Spinner animation="grow" variant="primary" />
            <Spinner animation="grow" variant="secondary" />
            <Spinner animation="grow" variant="success" />
        </div>
    )
}

export default Loaders