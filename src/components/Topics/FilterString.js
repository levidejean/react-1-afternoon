import React, { Component } from "react";

export default class FilterString extends Component {

    constructor(){
        super();
        this.state = {
            cars: ["Ford", "Chevy", "Mazda", "Tesla", "Lambo"],
            userInput: "",
            filteredCars: []
        };
    }

    handleChange(val){
        this.setState({ userInput: val });
    }

    filteredCars(userInput) {
        var cars = this.state.cars;
        var filteredCars = [];

        for( var i = 0; i < cars.length; i++ ){
            if ( cars[i].includes(userInput) ){
                filteredCars.push(cars[i]);
            }
        }
        this.setState({ filteredCars: filteredCars });
    }


    render () {
        return (
            <div className="puzzleBox filterStringPB">
            <h4> Filter String </h4>
            <span> className="</span>
            </div>
        )
    }
}