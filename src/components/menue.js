import React from "react";
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem } from "reactstrap";



const Menus = () => {

    return(
     <div>
         <ListGroup>
             <Link className="list-group-item list-group-item-action" active tag="a" to="/" action>Home</Link>
             <Link className="list-group-item list-group-item-action" tag="a" to="/about" action>About</Link>
             <Link className="list-group-item list-group-item-action" tag="a" to="/all-parts" action>Parts</Link>
             <Link className="list-group-item list-group-item-action" tag="a" to="/contact" action>Contact</Link>
         </ListGroup>
     </div>
    )
};

export default Menus;