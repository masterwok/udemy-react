import React from 'react';
import styles from './OrderSummary.module.css';

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
    </>
);
