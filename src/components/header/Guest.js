import React, { Component } from "react";
import "./Guest.css";
import { Remove, Add } from "@material-ui/icons";

export default class Guest extends Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
    }
    render() {
        return (
            <div className="guest py-3 px-4">
                <p className="title font-bold size-2 text-black">
                    {this.props.title}
                </p>
                <p className="detail size-2 text-gray-1">{this.props.detail}</p>
                <div className="compute flex items-center mt-3 mb-5">
                    <button
                        className="rounded-md"
                        onClick={() => {
                            let count = this.state.count;
                            if (count === 0) return;
                            this.setState({ count: count - 1 });
                            this.props.onMinus();
                        }}
                    >
                        <Remove />
                    </button>

                    <div className="count px-3">{this.state.count}</div>
                    <button
                        className="rounded-md"
                        onClick={() => {
                            let count = this.state.count;

                            this.setState({ count: count + 1 });
                            this.props.onAdd();
                        }}
                    >
                        <Add />
                    </button>
                </div>
            </div>
        );
    }
}
