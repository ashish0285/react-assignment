import React from 'react';
import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Home = () => {
    const [active, setActive] = useState(0)
    let commentArr = [
        {
            id: 1,
            name: "comment-1",
            title: "Title of comment-1",
            des: "Description of comment-1"
        },
        {
            id: 2,
            name: "comment-2",
            title: "Title of comment-2",
            des: "Description of comment-2"
        },
        {
            id: 3,
            name: "comment-3",
            title: "Title of comment-3",
            des: "Description of comment-3"
        },
        {
            id: 4,
            name: "comment-4",
            title: "Title of comment-4",
            des: "Description of comment-4"
        }
    ];

    const showDescription = (index) => {
        setActive(index)
    }

    return (
        <Container className='containerMain'>
            <h1 className='textCenter'>Comment Box</h1>
            <hr></hr>
            <Row style={{marginTop: -15}}>
                <Col>
                    {commentArr.map((item, index) => (
                        <Row key={index} className='border' onClick={() => showDescription(index)}>
                            <h2 >{item.name}</h2>
                        </Row>
                    ))}
                </Col>
                <Col>
                    <Row className='right'>
                        <h4>{commentArr[active].title}</h4>
                        <hr></hr>
                    </Row>
                    <Row className='rightDes'>
                        <h4>{commentArr[active].des}</h4>
                    </Row>
                </Col>


            </Row>

        </Container>
    )
};

export default Home;