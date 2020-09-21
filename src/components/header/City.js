import React, { Component } from "react";
import "./City.css";
import Room from "@material-ui/icons/Room";

export default class City extends Component {
    render() {
        console.log(this.props.children);
        return (
            <div
                className={
                    "city py-3 px-4 cursor-pointer size-2" +
                    (this.props.children ? " text-gray-3" : " text-red-500")
                }
                onClick={() => this.props.onClick(this.props.children)}
            >
                <Room className="mr-2" />
                {this.props.children || "Remove"}
            </div>
        );
    }
}
