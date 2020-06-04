import React from 'react';
import Aux1 from '../../../hoc/Aux1';
import Button from '../../UI/Button/Button';

const orderSummary=(props)=>{
const ingredientSummary=Object.keys(props.ingredients)
.map(igKey=>{

    return (<li key={igKey}>
        <span style={{textTransform:'capitalize'}}>{igKey}</span>:{props.ingredients[igKey]}
        </li>);
})
    return(

<Aux1>
<h3>Your Order</h3>
<p>A delicoius burger with the following ingredients:</p>
<ul>{ingredientSummary}</ul>
<p><strong>Total Price: {props.price.toFixed(2)}</strong></p>
<p>Continue to checkout?</p>
<Button btnType="Danger" clicked={props.purchaseCancelled}>CANCEL</Button>
<Button btnType="Success" clicked={props.purchaseContinued}>CONTINUE</Button>
</Aux1>
    );
};

export default orderSummary;