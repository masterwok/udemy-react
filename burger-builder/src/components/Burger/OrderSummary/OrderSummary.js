import React from 'react';
import styles from './OrderSummary.module.css';
import Button from "../../Common/Button/Button";

export default (props) => (
    <>
        <h3>Your Order</h3>
        <p>A delicious burger with the following ingredients:</p>
        <ul>
            {Object.keys(props.ingredients).map(k => (
                <li key={k}>
                    <span className={styles.ingredientLabel}>{k}</span>: {props.ingredients[k]}
                </li>
            ))}
        </ul>
        <p>Continue to checkout?</p>

        <Button
            buttonType={'Danger'}
            onClick={props.onCancel}>CANCEL</Button>
        <Button
            buttonType={'Success'}
            onClick={props.onContinue}>CONTINUE</Button>
    </>
);
