import React from 'react';
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
import styles from './Burger.module.css';


export default (props) => {
    return (
        <div className={styles.burger}>
            <BurgerIngredient type={'bread-top'}/>
            <BurgerIngredient type={'salad'}/>
            <BurgerIngredient type={'bacon'}/>
            <BurgerIngredient type={'cheese'}/>
            <BurgerIngredient type={'meat'}/>
            <BurgerIngredient type={'bread-bottom'}/>
        </div>
    );
}
