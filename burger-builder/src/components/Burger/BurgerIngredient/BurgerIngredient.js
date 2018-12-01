import React from 'react';
import PropTypes from 'prop-types';
import styles from '../BurgerIngredient.module.css';


const getIngredientElement = (ingredientType) => {
    switch (ingredientType) {
        case 'bread-top':
            return <div className={styles.BreadTop}>
                <div className={styles.Seeds1}/>
                <div className={styles.Seeds2}/>
            </div>;
        case 'bread-bottom':
            return <div className={styles.BreadBottom}/>;
        case 'meat':
            return <div className={styles.Meat}/>;
        case 'cheese':
            return <div className={styles.Cheese}/>;
        case 'salad':
            return <div className={styles.Salad}/>;
        case 'bacon':
            return <div className={styles.Bacon}/>;
        default:
            return null;
    }
};


const burgerIngredient = (props) => (
    <>
        {getIngredientElement(props.type)}
    </>
);

burgerIngredient.propTypes = {
    type: PropTypes.string.isRequired
};


export default burgerIngredient;
