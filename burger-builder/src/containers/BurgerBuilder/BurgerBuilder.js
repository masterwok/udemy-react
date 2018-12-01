import React, {Component} from 'react';
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";


class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 1
            , bacon: 2
            , cheese: 2
            , meat: 2
        }
    };

    render() {
        return (
            <>
                <BuildControls/>
                <Burger ingredients={this.state.ingredients}/>
            </>
        );
    }
}

export default BurgerBuilder;