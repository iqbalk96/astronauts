import axios from 'axios';
import React, { useEffect, useState, useRef } from 'react';
import { Fade } from 'react-awesome-reveal';
import { Button, Card, Col, Form, InputGroup, Row } from 'react-bootstrap';
import DataTable from 'react-data-table-component';


const columns = [
    {
        name: 'Comment Name',
        selector: row => row.name,
        sortable: true,
        width: "20%"
    },
    {
        name: 'Email',
        selector: row => row.email,
        sortable: true,
        width: "15%"
    },
    {
        name: 'Body',
        selector: row => row.body,
        sortable: true,
        width: "65%"
    },
];

const UserCollections = () => {

    const [data, setData] = useState([])
    const [searchField, setSearchField] = useState('')
    const [limitOption, setLimitOption] = useState(10)
    const inputElement = useRef();

    const focusInput = () => {
        let searchVal = inputElement.current.value
        setSearchField(searchVal)
    };

    const fetchUser = async () => {
        let withname = searchField ? `&name=${searchField}` : ''
        let response = await axios({
            method: "GET",
            url: `${process.env.REACT_APP_BASE_URL}/comments?start=0&_limit=${limitOption}${withname}`,
        })
        if (response.status === 200) {
            setData(response.data)
        }
    }

    const filterSearch = () => {
        return (
            <>
                <Row>
                    <Col md={2}></Col>
                    <Col md={2}></Col>
                    <Col md={4}>
                        <Form.Select aria-label="Select limit" value={limitOption} onChange={(e) => setLimitOption(e.target.value)}>
                            <option value="10">10 Comments</option>
                            <option value="20">20 Comments</option>
                            <option value="30">30 Comments</option>
                        </Form.Select>
                    </Col>
                    <Col md={4}>
                        <InputGroup>
                            <Form.Control
                                placeholder="Comments name ..."
                                aria-label="Comments name"
                                ref={inputElement}
                            />
                            <Button variant="outline-primary" onClick={focusInput}>
                                Search
                            </Button>
                            <Form.Text muted>Please search with specifix comment name</Form.Text>
                        </InputGroup>
                    </Col>
                </Row>

            </>
        )
    }

    useEffect(() => {
        fetchUser()
    }, [searchField, limitOption])

    return (
        <React.Fragment>
            <Fade>
                <Card>
                    <Card.Header>Features</Card.Header>
                    <Card.Body>
                        <Card.Title>React Data Table Components</Card.Title>
                        <Card.Text>
                            Here I am trying to integrate the Data Table with the <a href="https://jsonplaceholder.typicode.com" rel="noreferrer" target="_blank">Json Placeholder API</a>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Fade>
            <br />
            <Fade delay={200}>
                <Card>
                    <Card.Body>
                        <DataTable
                            columns={columns}
                            data={data}
                            title="User Comment List"
                            pagination
                            fixedHeader
                            fixedHeaderScrollHeight="400px"
                            subHeader
                            subHeaderComponent={filterSearch()}
                        />
                    </Card.Body>
                </Card>
            </Fade>
        </React.Fragment>
    );
};

export default UserCollections