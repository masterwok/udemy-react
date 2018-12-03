import React, {Component} from 'react';
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/Common/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";

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
        , isPurchasable: false
        , hasStartedOrder: true
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

        this.updatePurchaseState();
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
                , totalPrice: prevState.totalPrice - INGREDIENT_PRICES[key]
            };
        });

        this.updatePurchaseState();
    };

    updatePurchaseState() {
        this.setState((prevState, _) => ({
            isPurchasable: Object.keys(prevState.ingredients)
                .map(k => prevState.ingredients[k])
                .reduce((p, c) => p + c, 0) > 0
        }));
    }

    getDisabledInfo = () => {
        const disabledInfo = {...this.state.ingredients};

        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }

        return disabledInfo;
    };

    startOrder = () => this.setState({
        hasStartedOrder: true
    });

    stopOrder = () => this.setState({
        hasStartedOrder: false
    });

    render = () => (
        <>
            <Modal
                show={this.state.hasStartedOrder}
                onBackdropClick={this.stopOrder}>
                <OrderSummary
                    ingredients={this.state.ingredients}
                    onCancel={this.stopOrder}
                    onContinue={this.stopOrder}/>
            </Modal>

            <Burger ingredients={this.state.ingredients}/>

            <BuildControls
                onAdd={this.onAdd}
                onRemove={this.onRemove}
                disabledInfo={this.getDisabledInfo()}
                totalPrice={this.state.totalPrice}
                isPurchasable={this.state.isPurchasable}
                startOrder={this.startOrder}/>
        </>
    );
}

export default BurgerBuilder;