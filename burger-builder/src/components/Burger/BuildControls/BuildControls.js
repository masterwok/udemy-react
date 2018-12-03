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
        {controls.map(c => <BuildControl
            key={c.type}
            disabled={props.disabledInfo[c.type]}
            onAdd={props.onAdd}
            onRemove={props.onRemove}
            type={c.type}
            label={c.label}/>)}
    </div>
);

export default buildControls;
