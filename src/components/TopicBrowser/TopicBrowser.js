import React, { Component } from "react";

//Topics

import EvenAndOdd from "../Topics/EvenAndOdd"
import FilterObject from "../Topics/FilterObject"
import FilterString from "../Topics/FilterString"
import Sum from "../Topics/Sum"

export default class TopicBrowser extends Component {
    render (){
        return (
            <div>
            <p>Hello World</p>
            <EvenAndOdd/>
            <FilterObject/>
            <FilterString/>
            <Sum/>
            </div>
            
            
        );
    }
}

