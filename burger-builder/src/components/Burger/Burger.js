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
    )
    .reduce((previous, current) => {
        const ret = [...previous];

        if(current.length > 0) {
            ret.push(current);
        }

        return ret;
    });

const burger = (props) => {
    let ingredients = transformIngredients(props.ingredients);

    return (
        <div className={styles.burger}>
            <BurgerIngredient type={'bread-top'}/>
            {ingredients.length > 0
                ? transformIngredients(props.ingredients)
                : <p>Please start adding ingredients.</p>}
            <BurgerIngredient type={'bread-bottom'}/>
        </div>
    );
};

burger.propTypes = {
    ingredients: PropTypes.object.isRequired
};

export default burger;
