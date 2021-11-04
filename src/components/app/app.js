import React, {useState} from 'react';
import {Col, Row, Container, Button} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ItemList from '../itemList';
import CharDetails from '../charDetails';



const App = () => {

    const [toggle, setToggle] = useState(true)
    const [selectedChar, setSelectedChar] = useState(null)

    const toggleHandler = () => {
        setToggle(toggle !== true)
    }
    const showToggle = toggle ? <RandomChar/> : null;

    const onCharSelected = (id) => {
        setSelectedChar(id)
    }

    return (
        <> 
            <Container>
                <Header />
            </Container>
            <Container>
                <Row>
                    <Col lg={{size: 5, offset: 0}}>
                        {showToggle}
                        <Button style={{backgroundColor: "#213D4B", marginBottom: "10px"}}  onClick={toggleHandler}> Toggle random character </Button>
                    </Col>
                </Row>
                <Row>
                    <Col md='6'>
                        <ItemList onCharSelected={onCharSelected} />
                    </Col>
                    <Col md='6'>
                        <CharDetails charId={selectedChar} />
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default App;