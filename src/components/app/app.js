import React, {useState} from 'react';
import {Col, Row, Container, Button} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ItemList from '../itemList';
import CharDetails from '../charDetails';



const App = () => {

    const [toggle, setToggle] = useState(true)
    const toggleHandler = () => {
        setToggle(toggle !== true)
    }
    const showToggle = toggle ? <RandomChar/> : null;

    return (
        <> 
            <Container>
                <Header />
            </Container>
            <Container>
                <Button  onClick={toggleHandler}> toggle </Button>
            </Container>
            <Container>
                <Row>
                    <Col lg={{size: 5, offset: 0}}>
                        {showToggle}
                    </Col>
                </Row>
                <Row>
                    <Col md='6'>
                        <ItemList />
                    </Col>
                    <Col md='6'>
                        <CharDetails />
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default App;