import React, {Component} from 'react';
import ItemList from "../itemList";
import CharDetails from "../charDetails";
import ErrorMessage from "../errorMessage";
import gotService from '../../services/gotService'
import RowBlock from "../RowBlock";


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

        const itemList = (
            <ItemList
                onCharSelected={this.onCharSelected}
                getData={this.gotService.getAllCharacters}
                renderItem={({name, gender})=> `${name} (${gender})`}
            />
        )

        const charDetails = (
            <CharDetails charId={this.state.selectedChar}/>
        )

        return (
            <RowBlock left={itemList} right={charDetails}/>
        );
    }
}
