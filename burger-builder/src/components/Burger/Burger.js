import React from 'react';
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";


export default (props) => {
    return (
        <>
            <BurgerIngredient type={'bread-top'}/>
            <BurgerIngredient type={'salad'}/>
            <BurgerIngredient type={'bacon'}/>
            <BurgerIngredient type={'cheese'}/>
            <BurgerIngredient type={'meat'}/>
            <BurgerIngredient type={'bread-bottom'}/>
        </>
    );
}
