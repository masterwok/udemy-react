import React, {Component} from 'react';
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";

const INGREDIENT_PRICES = {
    salad: 0.25
    , bacon: 2
    , cheese: 0.50
    , meat: 2
};

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 0
            , bacon: 0
            , cheese: 0
            , meat: 0
        }
        , totalPrice: 4
    };

    onAdd = (key) => {
        this.setState((prevState, _) => {
            const ingredients = {...prevState.ingredients};

            ingredients[key]++;

            return {
                ingredients: ingredients
                , totalPrice: prevState.totalPrice + INGREDIENT_PRICES[key]
            };
        });
    };

    onRemove = (key) => {
        this.setState((prevState, _) => {
            const ingredients = {...prevState.ingredients};

            if (ingredients[key] <= 0) {
                return;
            }

            ingredients[key]--;

            return {
                ingredients: ingredients
                , totalPrice: prevState.totalPrice + INGREDIENT_PRICES[key]
            };
        });
    };

    getDisabledInfo = () => {
        const disabledInfo = {...this.state.ingredients};

        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }

        return disabledInfo;
    };

    render() {

        return (
            <>
                <Burger ingredients={this.state.ingredients}/>

                <BuildControls
                    onAdd={this.onAdd}
                    onRemove={this.onRemove}
                    disabledInfo={this.getDisabledInfo()}
                    totalPrice={this.state.totalPrice}/>
            </>
        );
    }
}

export default BurgerBuilder;