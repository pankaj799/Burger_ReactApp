import React, {Component} from "react";
import PropTypes from "prop-types";
import classes from "./BurgerIngridents.css";

class BurgerIngridents extends Component
{
    render() {
        let ingridents = null;

        switch (this.props.type) {
            case ('bread-bottom'):
                ingridents = <div className={classes.BreadBottom}></div>;
                break;
            case ('bread-top'):
                ingridents = (
                    <div className={classes.BreadTop}>
                        <div className={classes.Seeds1}></div>
                        <div className={classes.Seeds2}></div>
                    </div>
                );
                break;
            case ('meat'):
                ingridents = <div className={classes.Meat}></div>;
                break;
            case ('cheese'):
                ingridents = <div className={classes.Cheese}></div>;
                break;
            case ('bacon'):
                ingridents = <div className={classes.Bacon}></div>;
                break;
            case ('salad'):
                ingridents = <div className={classes.Salad}></div>;
                break;
            default:
                ingridents = null;
        }
        return ingridents;
    }
}

BurgerIngridents.propTypes = {
    type: PropTypes.string.isRequired
};

export default BurgerIngridents;
