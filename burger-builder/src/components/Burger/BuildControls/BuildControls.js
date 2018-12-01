import React from 'react';
import PropTypes from 'prop-types';
import styles from './BuildControls.module.css';
import BuildControl from "./BuildControl/BuildControl";


const buildControls = (props) => (
    <div className={styles.buildControls}>
        <BuildControl label={'Lettuce'}/>
        <BuildControl label={'Bacon'}/>
        <BuildControl label={'Cheese'}/>
        <BuildControl label={'Meat'}/>
    </div>
);

export default buildControls;
