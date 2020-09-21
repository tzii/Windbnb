import React, { Component } from "react";
import "./Main.css";
import StayCard from "./stay_card/StayCard";

export default class Main extends Component {
    render() {
        return (
            <main className="container ">
                <div className="filter-status flex justify-between items-center md:my-6 my-4">
                    <div className="filter-name text-black size-3 font-bold">
                        Stays in Finland
                    </div>
                    <div className="filter-number text-gray-3 font-mormal size-2">
                        {this.props.data.length + " stays"}
                    </div>
                </div>
                <div className="row stays-gallery flex">
                    {this.props.data.map((x, i) => (
                        <StayCard
                            className="w-full sm:w-1/2 lg:w-1/3"
                            key={i}
                            data={x}
                        />
                    ))}
                </div>
            </main>
        );
    }
}
