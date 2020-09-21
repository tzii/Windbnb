import React, { Component } from "react";
import logo from "../../images/logo.svg";
import Search from "@material-ui/icons/Search";
import "./Header.css";
import $ from "jquery";
import FilterContain from "./FilterContain";

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = { currentFilter: { city: "", country: "", guest: 0 } };
    }
    changeState = (id, val) => {
        let state = this.state;
        state[id] = val;
        this.setState(state);
    };
    showFilter = () => {
        $("#filter-contain").addClass("show");
        $("#filter-bg").addClass("show");
        $("html").attr("style", "overflow:hidden");
    };
    filter = (val) => {
        this.props.onFilter(val);
        this.changeState("currentFilter", val);
    };
    render() {
        return (
            <>
                <header className="container md:mt-4 mt-2">
                    <div className="row items-center justify-between">
                        <div
                            className="md:w-1/2 w-full cursor-pointer"
                            onClick={() => {
                                this.changeState({
                                    city: "",
                                    country: "",
                                    guest: 0,
                                });
                                this.props.onFilter({
                                    city: "",
                                    country: "",
                                    guest: 0,
                                });
                            }}
                        >
                            <img src={logo} alt="" />
                        </div>
                        <div className="md:w-1/2 w-full md:mt-0 mt-3 flex md:justify-end justify-center">
                            <div
                                className="filter-view rounded-xl flex items-center"
                                onClick={this.showFilter}
                            >
                                <div
                                    className={
                                        "city-filter cursor-pointer text-gray-1 px-4 py-4 " +
                                        (this.state.currentFilter.city
                                            ? " checked"
                                            : "")
                                    }
                                >
                                    {this.state.currentFilter.city
                                        ? this.state.currentFilter.city +
                                          ", " +
                                          this.state.currentFilter.country
                                        : "Add Location"}
                                </div>
                                <div
                                    className={
                                        "guest-filter cursor-pointer border-l border-r text-gray-1 px-4 py-4" +
                                        (this.state.currentFilter.guest
                                            ? " checked"
                                            : "")
                                    }
                                >
                                    {(this.state.currentFilter.guest || "Add") +
                                        " Guest"}
                                </div>
                                <div className="search-icon cursor-pointer px-4 py-4">
                                    <Search style={{ color: "#eb5757" }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                <FilterContain
                    data={
                        new Set(
                            this.props.data.map(
                                (x) => x.city + ", " + x.country
                            )
                        )
                    }
                    onFilter={this.filter}
                />
            </>
        );
    }
}
