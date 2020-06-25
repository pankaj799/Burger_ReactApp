import React, {Component} from "react";
import Aux from "../../hoc/Auxiliary/Auxiliary";
import Burger from "../../components/Burger/Burger";
import BuiltControls from "../../components/Burger/BuildControls/BuiltControls";
import Model from "../../components/UI/Modal/Modal";
import OrderSunnery from "../../components/Burger/OrderSummery/OrderSunnery";

const INGRIDENTS_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7,

}

class BurgerBulider extends Component{

    state={
        ingridents: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice : 4,
        purchaseable : false,
        purchaseing : false,
    }

    updatePurchaseState(ingrident){
        const sum = Object.keys(ingrident).map(igkey =>{
          return ingrident[igkey];
        })
            .reduce((sum,el)=>{
                return sum+el;
        },0);
        this.setState({purchaseable : sum>0});
    }

    addIngridentHandler = (type) =>{
        const oldCount = this.state.ingridents[type];
        const updateCount = oldCount+1;
        const updatedIngridents = {...this.state.ingridents};
        updatedIngridents[type] = updateCount;
        const priveAddition = INGRIDENTS_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice+priveAddition;
        this.setState({totalPrice : newPrice, ingridents : updatedIngridents});
        this.updatePurchaseState(updatedIngridents);
    }

    removeIngridentHandler = (type) =>{
        const oldCount = this.state.ingridents[type];
        if(oldCount<=0)
        {
            return;
        }
        const updateCount = oldCount-1;
        const updatedIngridents = {...this.state.ingridents};
        updatedIngridents[type] = updateCount;
        const priveAddition = INGRIDENTS_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice-priveAddition;
        this.setState({totalPrice : newPrice, ingridents : updatedIngridents});
        this.updatePurchaseState(updatedIngridents);
    }

    purchaseHandler = ()=>
    {
        this.setState({purchaseing : true});
    }

    purchaseContinueHandler = ()=>
    {
        alert('Your Continue');
    }

    purchaseCancelHandler = () =>{
        this.setState({purchaseing : false});
    }

    render() {
        return (
            <Aux>
                <Model show={this.state.purchaseing} modelClosed={ this.purchaseCancelHandler }>
                    <OrderSunnery ingridents={this.state.ingridents}
                                purchaseCanceled = {this.purchaseCancelHandler}
                                  price={this.state.totalPrice}
                                purachseContinued = {this.purchaseContinueHandler}/>
                </Model>
                <Burger ingridents={ this.state.ingridents } />
                <BuiltControls
                ingredientAdded={ this.addIngridentHandler }
                ingredientRemove={ this.removeIngridentHandler }
                purchaseabled={ this.state.purchaseable }
                ordred={ this.purchaseHandler}
                price={ this.state.totalPrice }/>
            </Aux>
        );
    }
}

export default BurgerBulider;
