import React from 'react';
import PropTypes from 'prop-types';
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
import styles from './Burger.module.css';


/**
 * Converts an ingredients object to a list of BurgerIngredient components.
 * @param ingredients The ingredients object.
 * @returns {any[][]} An array of BurgerIngredient components.
 */
const transformIngredients = (ingredients) => Object
    .keys(ingredients)
    .map(k => [...Array(ingredients[k])].map((_, i) =>
        <BurgerIngredient
            key={`${k}_${i}`}
            type={k}/>)
    );

const burger = (props) => {

    return (
        <div className={styles.burger}>
            <BurgerIngredient type={'bread-top'}/>
            {transformIngredients(props.ingredients)}
            <BurgerIngredient type={'bread-bottom'}/>
        </div>
    );
};

burger.propTypes = {
    ingredients: PropTypes.object.isRequired
};

export default burger;
