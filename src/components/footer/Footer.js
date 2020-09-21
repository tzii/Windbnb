import React, { Component } from "react";
import "./Footer.css";

export default class Footer extends Component {
    render() {
        return (
            <footer className="container">
                <hr className="mb-6" />
                <p className="license">
                    <a href="https://github.com/Shoji5">Tuấn Vũ</a> @
                    <a href="https://devchallenges.io/">DevChallenges.io</a>
                </p>
            </footer>
        );
    }
}
