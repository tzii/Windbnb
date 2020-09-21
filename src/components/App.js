import React, { Component } from "react";
import Header from "./header/Header";
import Main from "./main/Main";
import Footer from "./footer/Footer";
var data = require("../data/stays.json");

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: data,
            currentFilter: { city: "", country: "", guest: 0 },
        };
    }
    changeState = (id, val) => {
        let state = this.state;
        state[id] = val;
        this.setState(state);
    };
    filter = (val) => {
        let state = this.state;
        state.data = data.filter(
            (x) =>
                x.city === (val.city || x.city) &&
                x.country === (val.country || x.country) &&
                x.maxGuests >= val.guest
        );
        state.currentFilter = val;
        this.setState(state);
        console.log(state.data);
    };
    render() {
        return (
            <>
                <Header data={data} onFilter={this.filter} />
                <Main data={this.state.data} />
                <Footer />
            </>
        );
    }
}
