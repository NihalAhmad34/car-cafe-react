import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, CardDeck
} from 'reactstrap';

const Parts = (props) => {
    return(
        <div>
            
            <Card style={{width : "15rem" }} className="my-2">
                <CardImg top width="100%" src="/public/brake-pad.jpeg" alt="Card image cap"/>
                <CardBody>
                    <CardTitle tag="h5">
                        Name of the part
                    </CardTitle>
                    <CardText>
                        Info of the Parts
                    </CardText>
                    <Button>
                        Buy
                    </Button>
            
                </CardBody>
            </Card>
            
        </div>

    );
};

export default Parts;