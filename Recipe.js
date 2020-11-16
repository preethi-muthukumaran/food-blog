import React from 'react';
import {pizzaRecipe} from './pizza.js';

export default class Recipe extends React.Component{
    constructor(props){
        super(props)
        this.onClickHandler = this.onClickHandler.bind(this);
       
    }

    onClickHandler = () => {
       
        <div>
            {pizzaRecipe.map((data, key) => {
                return (
                    <div key={key}>
                    {data.name +
                        " , " +
                        data.instructions}
            </div>
                );
                    })}
        </div>
    }



    render(){
        return(
            <div>
                <button onClick = {this.onClickHandler}>Make me!</button>
                <div>
                    {pizzaRecipe.map((data, key) => {
                        return (
                            <div key={key}>
                            {data.name +
                                " , " +
                                data.instructions}
                    </div>
                        );
                            })}
                </div>
               
            </div>
        )
    }
}
