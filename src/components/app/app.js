import React from 'react';
import {Col, Row, Container, Button} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ErrorMessage from "../errorMessage";
import CharcacterPage from "../characterPage/CharcacterPage";
import ItemList from "../itemList";
import CharDetails from "../charDetails";
import gotService from '../../services/gotService'


class App extends React.Component {

    gotService = new gotService();

    state = {
        showRandomChar: true,
        error: false
    }

    componentDidCatch(error, errorInfo) {
        console.log('error')
        this.setState({
            error: true
        })
    }

    toggleRandomChar = () => {
        this.setState((state) => {
            return {
                showRandomChar: !state.showRandomChar
            }
        });
    }



    render() {

        const char = this.state.showRandomChar ? <RandomChar/> : null;

        if(this.state.error){
            return <ErrorMessage />
        }

        return (
            <>
                <Container>
                    <Header/>
                </Container>
                <Container>
                    <Row>
                        <Col lg={{size: 5, offset: 0}}>
                            {char}
                            <Button style={{backgroundColor: "#213D4B", marginBottom: "10px"}}
                                    onClick={this.toggleRandomChar}> Toggle random character </Button>
                        </Col>
                    </Row>
                    <CharcacterPage />
                    {/*<Row>*/}
                    {/*    <Col md='6'>*/}
                    {/*        <ItemList onCharSelected={this.onCharSelected} getData={this.gotService.getAllBooks}/>*/}
                    {/*    </Col>*/}
                    {/*    <Col md='6'>*/}
                    {/*        <CharDetails charId={this.state.selectedChar}/>*/}
                    {/*    </Col>*/}
                    {/*</Row>*/}
                    {/*<Row>*/}
                    {/*    <Col md='6'>*/}
                    {/*        <ItemList onCharSelected={this.onCharSelected}  getData={this.gotService.getAllHouses}/>*/}
                    {/*    </Col>*/}
                    {/*    <Col md='6'>*/}
                    {/*        <CharDetails charId={this.state.selectedChar}/>*/}
                    {/*    </Col>*/}
                    {/*</Row>*/}
                </Container>
            </>
        );
    }
}

export default App;