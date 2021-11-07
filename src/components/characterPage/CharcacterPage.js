import React, {Component} from 'react';
import {Col, Row} from "reactstrap";
import ItemList from "../itemList";
import CharDetails from "../charDetails";
import ErrorMessage from "../errorMessage";
import gotService from '../../services/gotService'

export default class CharcacterPage extends Component {

    gotService = new gotService();

    state ={
        selectedChar: 140,
        error: false
    }

    onCharSelected = (id) => {
        this.setState({
            selectedChar: id
        })
    }

    componentDidCatch(error, errorInfo) {
        this.setState({
            error: true
        })
    }

    render() {

        if(this.state.error){
            return <ErrorMessage />
        }

        return (
            <Row>
                <Col md='6'>
                    <ItemList
                        onCharSelected={this.onCharSelected}
                        getData={this.gotService.getAllCharacters}
                        renderItem={(item)=> `${item.name} (${item.gender})`}
                    />
                </Col>
                <Col md='6'>
                    <CharDetails charId={this.state.selectedChar}/>
                </Col>
            </Row>
        );
    }
}
