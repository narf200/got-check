import React, {Component} from 'react';
import './randomChar.css';
import gotService from '../../services/gotService';
import Spiner from "../spiner";

export default class RandomChar extends Component {

    constructor() {
        super();
        this.updateChar();
    }

    gotService = new gotService();

    state = {
        char: {},
        loading: true,
    }

    onCharLoaded = (char) => {
        this.setState({char})
    }

    updateChar() {
        const id = Math.floor(Math.random()*600 + 25) // ot 25 do 140
        this.gotService.getCharacter(id)
            .then(this.onCharLoaded)
    }

    render() {

        const {char: {name, gender, born, died, culture}, loading} = this.state;

        if(loading){
            return <Spiner/>
        }

        return (
            <div className="random-block rounded">
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Gender </span>
                        <span>{gender}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Born </span>
                        <span>{born}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Died </span>
                        <span>{died}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Culture </span>
                        <span>{culture}</span>
                    </li>
                </ul>
            </div>
        );
    }
}


// 20 min