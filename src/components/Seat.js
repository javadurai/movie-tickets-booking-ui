import React, { Component } from "react";
import { Button } from "react-bootstrap";

export default class Seat extends Component {

    render() {
        return (
            <Button className={`seatBlock ${this.props.availability ? "seatAvailable": "seatUnavailable"}`} type="button" variant='outline-light'>
                <span class="sr-only">Row A Seat 12 Available</span>
                <div class="seatArmLeft"></div>
                <div class="seat">
                    <span aria-hidden="true" class="seatDesignation">{this.props.seatNo}</span>
                </div>
                <div class="seatArmRight"></div>
            </Button>
        )
    }
}