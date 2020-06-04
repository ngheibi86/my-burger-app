import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
   // console.log(props.ingredients);
    let transformedIngredients= Object.keys(props.ingredients)
    .map(igKey=>{
        return[...Array(props.ingredients[igKey])].map((_,i)=>{ 
            return <BurgerIngredient Key={igKey+i} type={igKey}></BurgerIngredient>
        });
    })
    .reduce((arr,el) =>
    {
        return arr.concat(el);
    },[]);
if(transformedIngredients.length===0)
 {
     transformedIngredients=<p>Please start adding ingredients!</p>
 }
    //console.log(transformedIngredients);
    return(
<div className={classes.Burger}>
    <BurgerIngredient type="bread-top"></BurgerIngredient>
   {transformedIngredients}
    <BurgerIngredient type="bread-bottom"></BurgerIngredient>
</div>

    );
};
export default burger;