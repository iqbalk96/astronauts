import React, { useState } from 'react'
import InfiniteScroll from 'react-infinite-scroller'
import { Button, Card } from 'react-bootstrap';
import Axios from "axios"

const InfiniteScrollerWithReactInfiniteScroller = () => {

    const [userList, setUserList] = useState([]);
    const [limit] = useState(4);
    const [hasMoreItems, setHasMoreItems] = useState(true);

    const loadUserList = (page) => {
        Axios({
            method: "GET",
            url: `${process.env.REACT_APP_BASE_URL}/posts?_limit=${limit}&_?page=${page}`,
        }).then((res) => {
            const newList = userList.concat(res.data);
            setUserList(newList);

            if (res.data.length === 0) {
                setHasMoreItems(false);
            } else {
                setHasMoreItems(true);
            }
        }).catch((err) => {
            console.log(err);
        })
    }

    return (
        <div>
            <div className="section">
                <InfiniteScroll
                    threshold={0}
                    pageStart={0}
                    loadMore={loadUserList}
                    hasMore={hasMoreItems}
                    loader={<div className="text-center">loading data ...</div>}>

                    {userList.map((user, i) =>
                    (
                        <Card key={i}>
                            <Card.Body>
                                <Card.Title>{user.title}</Card.Title>
                                <Card.Text>
                                    {user.title}
                                </Card.Text>
                                <Button size="sm" variant="info">Show Detail</Button>
                            </Card.Body>
                        </Card>
                    )
                    )}
                </InfiniteScroll>
                {hasMoreItems ? "" : <div className="text-center">no data anymore ...</div>}
            </div>
        </div>
    )
}

export default InfiniteScrollerWithReactInfiniteScroller
