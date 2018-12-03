import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styles from './OrderSummary.module.css';
import Button from "../../Common/Button/Button";

const orderSummary = (props) => (
    <>
        <h3>Your Order</h3>
        <p>A delicious burger with the following ingredients:</p>
        <ul>
            {Object.keys(props.ingredients).map(k => (
                <li key={k}>
                        <span
                            className={styles.ingredientLabel}>{k}</span>: {props.ingredients[k]}
                </li>
            ))}
        </ul>
        <p>
            Total Price: <strong>${props.totalPrice.toFixed(2)}</strong>
        </p>
        <p>Continue to checkout?</p>

        <Button
            buttonType={'Danger'}
            onClick={props.onCancel}>CANCEL</Button>
        <Button
            buttonType={'Success'}
            onClick={props.onContinue}>CONTINUE</Button>
    </>
);


orderSummary.propTypes = {
    onContinue: PropTypes.func.isRequired
    , onCancel: PropTypes.func.isRequired
    , totalPrice: PropTypes.number.isRequired
    , ingredients: PropTypes.object.isRequired
};

export default orderSummary;
