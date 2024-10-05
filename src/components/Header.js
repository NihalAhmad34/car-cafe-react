import React from "react";
import {Jumbotron, Button, Card, CardBody} from 'reactstrap';

const Header = (props)=>{
    
    return(
        <div>
          
                <Card className="bg-info">
                    <CardBody>
                <h1 className="text-center my-2">Car Cafe</h1>
                <p className="text-center">Welcome to your car cafe</p>
                {/* <hr className="my-2" />
                {/* <p className="lead">
                <Button color="primary">Learn More</Button>
                </p> */} 
                </CardBody>
                </Card>
           
        </div>
    );

}

export default Header;