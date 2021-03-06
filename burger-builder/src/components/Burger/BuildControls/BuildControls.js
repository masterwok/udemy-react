import React from 'react';
import PropTypes from 'prop-types';
import styles from './BuildControls.module.css';
import BuildControl from "./BuildControl/BuildControl";


const controls = [
    {label: 'Lettuce', type: 'salad'}
    , {label: 'Bacon', type: 'bacon'}
    , {label: 'Cheese', type: 'cheese'}
    , {label: 'Meat', type: 'meat'}
];


const buildControls = (props) => (
    <div className={styles.buildControls}>
        <p>
            Total Price: <strong>${props.totalPrice.toFixed(2)}</strong>
        </p>
        {controls.map(c => <BuildControl
            key={c.type}
            disabled={props.disabledInfo[c.type]}
            onAdd={props.onAdd}
            onRemove={props.onRemove}
            type={c.type}
            label={c.label}/>)}
        <button
            className={styles.OrderButton}
            disabled={!props.isPurchasable}
            onClick={props.startOrder}>
            ORDER NOW
        </button>
    </div>
);

buildControls.propTypes = {
    totalPrice: PropTypes.number.isRequired
    , disabledInfo: PropTypes.object.isRequired
    , onAdd: PropTypes.func.isRequired
    , onRemove: PropTypes.func.isRequired
    , isPurchasable: PropTypes.bool.isRequired
    , startOrder: PropTypes.func.isRequired
};

export default buildControls;
