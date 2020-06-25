import React, {Component} from "react";
import Aux from "../../../hoc/Auxiliary/Auxiliary";
import Button from "../../UI/Button/Button";

class OrderSummery extends Component {

    // componentWillUpdate(nextProps, nextState, nextContext) {
    //
    // }

    render() {

        const ingridentSummery = Object.keys(this.props.ingridents)
            .map(igKey =>{
                return (<li key={igKey}><span style={{textTransform:'capitalize'}}>{igKey}</span>: {this.props.ingridents[igKey]}</li>);
            });

        return(
            <Aux>
                <h3>Your Order</h3>
                <p>A delicious Burger with the following Ingridents: </p>
                <ul>
                    {ingridentSummery}
                </ul>
                <p><strong>Total Price: {this.props.price.toFixed(2)}</strong> </p>
                <p>Continue to checkout?</p>
                <Button btnType="Danger" clicked={this.props.purchaseCanceled}>CANCEL</Button>
                <Button btnType="Success" clicked={this.props.purachseContinued}>CONTINUE</Button>
            </Aux>
        );
    }
}

export default OrderSummery;
