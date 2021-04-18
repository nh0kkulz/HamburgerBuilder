import React from 'react';
import classes from './Burger.module.css'
import BurgerIngredient from './BurgerIngredients/BurgerIngredient'
const Burger = (props) => {
    let transformedIngredient = Object.keys(props.ingredient)
        .map(igKey => {
            return [...Array(props.ingredient[igKey])].map((value, i) => <BurgerIngredient key={igKey + i} type={igKey} />)
        }
        )
        .reduce((arr, el) => {
            return arr.concat(el)
        }, [])
        
    if (transformedIngredient.length === 0)
        transformedIngredient = <p>Please start adding ingredients!</p>

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type='bread-top' />
            {transformedIngredient}
            <BurgerIngredient type='bread-bottom' />
        </div>
    )
}

export default Burger;