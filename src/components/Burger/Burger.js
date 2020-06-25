import React from "react";
import classes from "./Burger.css";
import BurgerIngridents from "./BurgerIngedrients/BurgerIngridents";

const burger = (props) =>{

    let transformedIngridents = Object.keys(props.ingridents)
        .map(igkey=>{
            return [...Array(props.ingridents[igkey])].map((_,i)=>{
                return <BurgerIngridents key = {igkey + i} type={igkey} />;
            });
        })
        .reduce((arr, el) =>{
            return arr.concat(el)
        },[]);
    if(transformedIngridents.length===0)
    {
        transformedIngridents = <p>Please Staring adding Ingridents</p>;
    }

  return(
      <div className={classes.Burger}>
          <BurgerIngridents type="bread-top" />
          {transformedIngridents}
          <BurgerIngridents type="bread-bottom" />
      </div>
  );
};

export default burger;
