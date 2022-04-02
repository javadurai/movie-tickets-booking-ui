import seatmap from './seatmap-screen.svg';
import './SeatSelector.css';
import React, { Component } from 'react';
import { Button, Card, Col, Container, ListGroup, Row, Stack, Table } from 'react-bootstrap';
import Seat from './Seat';
import PropTypes from 'prop-types';

export default class SeatSelector extends Component {

    constructor() {
        super();
        this.state = {
            rowNumbers: Object.assign([], ["A", "B", "C", "D", "E", "F"]),
            selectedSeats: [],
            seatAlignment:{
                "rows": 5,
                "cols": 5
            },
            seats: [
                {
                    "row" : 1,
                    "seatInfo" : {
                        "seatNo": "A01",
                        "rowNum": 1,
                        "colNum": 1,
                        "seatType": "NORMAL",
                        "availability": true,
                        "seatKey": "row1col1"
                    }
                },

                {
                    "seatNo": "A01",
                    "rowNum": 1,
                    "colNum": 1,
                    "seatType": "NORMAL",
                    "availability": true,
                    "seatKey": "row1col1"
                },
                {
                    "seatNo": "A02",
                    "rowNum": 1,
                    "colNum": 2,
                    "seatType": "NORMAL",
                    "availability": true,
                    "seatKey": "row1col2"
                },
                {
                    "seatNo": "A03",
                    "rowNum": 1,
                    "colNum": 3,
                    "seatType": "NORMAL",
                    "availability": true,
                    "seatKey": "row1col3"
                },
                {
                    "seatNo": "A04",
                    "rowNum": 1,
                    "colNum": 4,
                    "seatType": "NORMAL",
                    "availability": true,
                    "seatKey": "row1col4"
                },
                {
                    "seatNo": "A05",
                    "rowNum": 1,
                    "colNum": 5,
                    "seatType": "NORMAL",
                    "availability": true,
                    "seatKey": "row1col5"
                },
                {
                    "seatNo": "B01",
                    "rowNum": 2,
                    "colNum": 1,
                    "seatType": "NORMAL",
                    "availability": true,
                    "seatKey": "row2col1"
                },
                {
                    "seatNo": "B02",
                    "rowNum": 2,
                    "colNum": 2,
                    "seatType": "NORMAL",
                    "availability": true,
                    "seatKey": "row2col2"
                },
                {
                    "seatNo": "B03",
                    "rowNum": 2,
                    "colNum": 3,
                    "seatType": "NORMAL",
                    "availability": true,
                    "seatKey": "row2col3"
                },
                {
                    "seatNo": "B04",
                    "rowNum": 2,
                    "colNum": 4,
                    "seatType": "NORMAL",
                    "availability": true,
                    "seatKey": "row2col4"
                },
                {
                    "seatNo": "B05",
                    "rowNum": 2,
                    "colNum": 5,
                    "seatType": "NORMAL",
                    "availability": true,
                    "seatKey": "row2col5"
                },
                {
                    "seatNo": "C01",
                    "rowNum": 3,
                    "colNum": 1,
                    "seatType": "NORMAL",
                    "availability": true,
                    "seatKey": "row3col1"
                },
                {
                    "seatNo": "C02",
                    "rowNum": 3,
                    "colNum": 2,
                    "seatType": "NORMAL",
                    "availability": true,
                    "seatKey": "row3col2"
                },
                {
                    "seatNo": "C03",
                    "rowNum": 3,
                    "colNum": 3,
                    "seatType": "NORMAL",
                    "availability": true,
                    "seatKey": "row3col3"
                },
                {
                    "seatNo": "C04",
                    "rowNum": 3,
                    "colNum": 4,
                    "seatType": "NORMAL",
                    "availability": true,
                    "seatKey": "row3col4"
                },
                {
                    "seatNo": "C05",
                    "rowNum": 3,
                    "colNum": 5,
                    "seatType": "NORMAL",
                    "availability": true,
                    "seatKey": "row3col5"
                },
                {
                    "seatNo": "E01",
                    "rowNum": 4,
                    "colNum": 1,
                    "seatType": "NORMAL",
                    "availability": true,
                    "seatKey": "row4col1"
                },
                {
                    "seatNo": "E02",
                    "rowNum": 4,
                    "colNum": 2,
                    "seatType": "NORMAL",
                    "availability": true,
                    "seatKey": "row4col2"
                },
                {
                    "seatNo": "E03",
                    "rowNum": 4,
                    "colNum": 3,
                    "seatType": "NORMAL",
                    "availability": true,
                    "seatKey": "row4col3"
                },
                {
                    "seatNo": "E04",
                    "rowNum": 4,
                    "colNum": 4,
                    "seatType": "NORMAL",
                    "availability": true,
                    "seatKey": "row4col4"
                },
                {
                    "seatNo": "E05",
                    "rowNum": 4,
                    "colNum": 5,
                    "seatType": "NORMAL",
                    "availability": true,
                    "seatKey": "row4col5"
                },
                {
                    "seatNo": "F01",
                    "rowNum": 5,
                    "colNum": 1,
                    "seatType": "NORMAL",
                    "availability": true,
                    "seatKey": "row5col1"
                },
                {
                    "seatNo": "F02",
                    "rowNum": 5,
                    "colNum": 2,
                    "seatType": "NORMAL",
                    "availability": true,
                    "seatKey": "row5col2"
                },
                {
                    "seatNo": "F03",
                    "rowNum": 5,
                    "colNum": 3,
                    "seatType": "NORMAL",
                    "availability": true,
                    "seatKey": "row5col3"
                },
                {
                    "seatNo": "F04",
                    "rowNum": 5,
                    "colNum": 4,
                    "seatType": "NORMAL",
                    "availability": true,
                    "seatKey": "row5col4"
                },
                {
                    "seatNo": "F05",
                    "rowNum": 5,
                    "colNum": 5,
                    "seatType": "NORMAL",
                    "availability": true,
                    "seatKey": "row5col5"
                },
            ]
        }
    }
    render() {
        return (
            <Stack direction="horizontal" gap={3}>
                <div class="col-9">
                    <img src={seatmap} className="seat-map" alt="screen" />
                    {
                        Array.from(Array(this.state.seatAlignment.rows), (e, rowNum) => {
                            return (
                                <Row key={rowNum} className="seatRow">
                                    {
                                        seat = this.state.seats.filter(seat => seat.seatKey == `row${rowNum + 1}col${colNum + 1}`)[0];
                                        Array.from(Array(this.state.seatAlignment.cols), (e, colNum) => {
                                            return (
                                                <Col>
                                                    <Seat key={colNum} seatNo={`${seat.seatNo}`}>
                                                    {seat}
                                                    </Seat>
                                                </Col>
                                            )
                                        })
                                    }
                                </Row>
                            )
                        })
                    }
                </div>
                <div className="align-middle col-3">
                    <Stack gap={5}>
                        <Card className="text-center">
                            <Card.Header>Tickets</Card.Header>
                            <Card.Body>
                                <Card.Title>Select Your Tickets</Card.Title>
                                <Card.Text>
                                    Adult: Special Event $15:00
                                </Card.Text>
                                {this.state.selectedSeats.length}
                            </Card.Body>
                            <Card.Footer className="text-muted">
                                <Button variant="outline-secondary">Add to Cart</Button>
                            </Card.Footer>
                        </Card>

                        <Card>
                            <Card.Header>Seat Types</Card.Header>
                            <ListGroup variant="flush">
                                <ListGroup.Item><Seat availability={true} seatNo=" " /> Available Seat</ListGroup.Item>
                                <ListGroup.Item><Seat availability={false} seatNo=" " /> Selected Seat</ListGroup.Item>
                                <ListGroup.Item><Seat seatNo=" " /> Unavailable Seat</ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </Stack>
                </div>
            </Stack>
        );
    }
}

SeatSelector.propTypes = {
    rows: PropTypes.number,
    cols: PropTypes.number
};
