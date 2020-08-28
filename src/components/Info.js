import React from "react";
import arrow from "../images/arrow.png"
import arrowGray from "../images/arrowGray.png"
import Links from "./Links";

const Info = (props) => {
    const arrowType = {true: arrow, false: arrowGray};
    let top = 25;
    let id = 0;
    let productId=1;
    function removeAlert(removeId){
        let alertToRemove= document.getElementById("alert" +removeId);
        if(alertToRemove!==null){
            alertToRemove.remove();
            top-=65;
            document.getElementById("addToCart").disabled=false;
            document.getElementById("addToCart").style.backgroundColor="black"
        }
    }

    function addToCart() {
        let newCart=[...props.cart];
        newCart.push({id: productId, name: "NikeForce", price:"$80", source:"nikeShoes1", amount:1});
        props.setState({cart: newCart});
        let alert = document.createElement("div");
        alert.setAttribute("id", "alert" + id);
        alert.innerHTML="Added to cart!";
        alert.classList.add("alert");
        let button = document.createElement('BUTTON');
        button.innerHTML="✖";
        button.classList.add("alert__button");
        button.onclick= ()=> removeAlert(id-1);
        alert.appendChild(button);
        let alertDiv = document.getElementById("alertDiv");
        alertDiv.appendChild(alert);
        alert.style.top = top + "px";
        top += 65;
        document.getElementById("addToCart").disabled=true;
        document.getElementById("addToCart").style.backgroundColor="#555";
        document.getElementById("alert"+id).style.opacity="0";
        setTimeout(removeAlert, 5000, id);
        id++;
        productId++;
    }

    return (
        <div className="info">
            <h3 id="grad1" className="shoeName gradient1">Nike Airforce</h3>
            <h3 id="grad2" className="shoeName gradient2">Nike Airforce</h3>
            <h3 id="grad3" className="shoeName gradient3">Nike Airforce</h3>
            <div className="group-info-links">
                <div className="left">
                    <h4 className="price">$80</h4>
                    <h6 className="desc">From high-top to low-top. Live the legend of the Air Force 1, modernized for
                        ultimate street style.</h6>
                    <button id="addToCart" onClick={addToCart} className="addToCart">Add to cart</button>
                    <div className="group-buttons">
                        <img id="left" className="arrowLeft noSelect" draggable={false} src={arrowType[props.canGoLeft]}
                             onClick={props.goLeft} alt="left"/>
                        <img id="right" className="arrowRight noSelect" draggable={false}
                             src={arrowType[props.canGoRight]} onClick={props.goRight} alt="right"/>
                    </div>
                </div>
                <div className="right">
                    <Links/>
                </div>
            </div>
        </div>
    )
};
export default Info