import React, { Component } from "react";
import $ from "jquery";
import "./FilterContain.css";
import { Search, Close } from "@material-ui/icons";
import City from "./City";
import Guest from "./Guest";

export default class FilterContain extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentFilter: "city",
            currentCity: "",
            currentGuest: 0,
        };
    }
    changeState = (id, val) => {
        let state = this.state;
        state[id] = val;
        this.setState(state);
    };
    hideFilter = () => {
        $("#filter-contain").removeClass("show");
        $("#filter-bg").removeClass("show");
        $("html").removeAttr("style");
    };
    focusFilter = (str) => {
        this.changeState("currentFilter", str);
    };
    checkCity = (city) => {
        this.changeState("currentCity", city);
    };
    addGuest = () => {
        this.changeState("currentGuest", this.state.currentGuest + 1);
    };
    minusGuest = () => {
        if (this.state.currentGuest === 0) return;
        this.changeState("currentGuest", this.state.currentGuest - 1);
    };
    getFilterValue = () => {
        if (!this.state.currentCity)
            return {
                city: "",
                country: "",
                guest: this.state.currentGuest,
            };
        let temp = this.state.currentCity.split(", ");
        return {
            city: temp[0] || "",
            country: temp[1] || "",
            guest: this.state.currentGuest,
        };
    };
    render() {
        return (
            <>
                <div id="filter-contain">
                    <div className="container">
                        <div className="filter-title mt-10 flex sm:hidden justify-between">
                            <p className="size-1 text-black-1 font-bold">
                                Edit your search
                            </p>
                            <button
                                className="rounded-xl"
                                onClick={this.hideFilter}
                            >
                                <Close />
                            </button>
                        </div>
                        <div className="filter-view rounded-xl flex sm:flex-row flex-col sm:mt-10 mt-2">
                            <div
                                className={
                                    "city-filter cursor-pointer text-black flex flex-col px-4 justify-center sm:py-0 py-2 " +
                                    (this.state.currentFilter === "city"
                                        ? "focus"
                                        : "")
                                }
                                onClick={() => this.focusFilter("city")}
                            >
                                <p className="location text-black-1 size-0 font-extrabold">
                                    LOCATION
                                </p>
                                <p
                                    className={
                                        "current-location text-gray-1 size-2 " +
                                        (this.state.currentCity
                                            ? "checked"
                                            : "")
                                    }
                                >
                                    {this.state.currentCity
                                        ? this.state.currentCity
                                        : "Add Location"}
                                </p>
                            </div>
                            <div
                                className={
                                    "guest-filter cursor-pointer border-l border-r text-gray-1 flex flex-col px-4 justify-center sm:py-0 py-2 " +
                                    (this.state.currentFilter === "guest"
                                        ? "focus"
                                        : "")
                                }
                                onClick={() => this.focusFilter("guest")}
                            >
                                <p className="guest text-black-1 size-0 font-extrabold">
                                    GUEST
                                </p>
                                <p
                                    className={
                                        "current-guest text-gray-1 size-2" +
                                        (this.state.currentGuest
                                            ? " checked"
                                            : "")
                                    }
                                >
                                    {(this.state.currentGuest
                                        ? this.state.currentGuest
                                        : "Add") + " Guests"}
                                </p>
                            </div>
                            <div className="search-icon py-1 sm:flex hidden justify-center items-center text-white ">
                                <button
                                    className="rounded-xl"
                                    onClick={() => {
                                        this.props.onFilter(
                                            this.getFilterValue()
                                        );
                                        this.hideFilter();
                                    }}
                                >
                                    <Search style={{ color: "white" }} />
                                    Search
                                </button>
                            </div>
                        </div>
                        <div className="filter-detail flex sm:flex-row flex-col">
                            <div className="py-3">
                                {this.state.currentFilter === "city"
                                    ? [...this.props.data].map((x, i) => (
                                          <City
                                              key={i}
                                              onClick={this.checkCity}
                                          >
                                              {x}
                                          </City>
                                      ))
                                    : ""}{" "}
                                {this.state.currentFilter === "city" ? (
                                    <City
                                        key="-1"
                                        onClick={this.checkCity}
                                    ></City>
                                ) : (
                                    ""
                                )}
                            </div>
                            <div className="py-3">
                                {this.state.currentFilter === "guest" ? (
                                    <>
                                        <Guest
                                            title="Adults"
                                            detail="Ages 13 or above"
                                            onMinus={this.minusGuest}
                                            onAdd={this.addGuest}
                                        />
                                        <Guest
                                            title="Children"
                                            detail="Ages 2-12"
                                            onMinus={this.minusGuest}
                                            onAdd={this.addGuest}
                                        />
                                    </>
                                ) : (
                                    ""
                                )}
                            </div>
                        </div>
                        <div className="search-icon py-1 sm:hidden flex justify-center items-center text-white ">
                            <button
                                className="rounded-xl"
                                onClick={() => {
                                    this.props.onFilter(this.getFilterValue());
                                    this.hideFilter();
                                }}
                            >
                                <Search style={{ color: "white" }} />
                                Search
                            </button>
                        </div>
                    </div>
                </div>
                <div id="filter-bg" onClick={this.hideFilter}></div>
            </>
        );
    }
}
