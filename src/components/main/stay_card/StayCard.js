import React, { Component } from "react";
import "./StayCard.css";
import StarRate from "@material-ui/icons/StarRate";

export default class StayCard extends Component {
    render() {
        return (
            <div className={"card flex flex-col pb-10 " + this.props.className}>
                <img
                    className="card-img flex-1 rounded-xl object-cover cursor-pointer"
                    src={this.props.data.photo}
                    alt=""
                />
                <div className="stay-infor flex justify-between items-start mt-4">
                    <div
                        className={
                            this.props.data.superHost
                                ? "super-host rounded-full size-1 text-gray-3 font-bold uppercase p-2 mr-2"
                                : "hidden"
                        }
                    >
                        Super host
                    </div>
                    <div className="stay-type flex-1 pr-2 size-2 font-medium text-gray-2">
                        {this.props.data.type +
                            ". " +
                            (this.props.data.beds
                                ? this.props.data.beds + " beds"
                                : "")}
                    </div>
                    <div className="rating size-2 font-medium text-gray-3">
                        <StarRate style={{ color: "#eb5757" }} />
                        {this.props.data.rating}
                    </div>
                </div>
                <div className="description size-2 font-medium mt-3">
                    Stylist apartment in center of the city
                </div>
            </div>
        );
    }
}
