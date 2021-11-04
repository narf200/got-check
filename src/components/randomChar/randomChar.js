import React, {Component} from 'react';
import './randomChar.css';
import gotService from '../../services/gotService';
import Spiner from "../spinner/";
import ErrorMessage from '../errorMessage/'

export default class RandomChar extends Component {

    constructor() {
        super();


        console.log('constructor')
    }

    gotService = new gotService();

    state = {
        char: {},
        loading: true,
        error: false
    }

    componentDidMount() {
        this.updateChar();
        this.timerId = setInterval(this.updateChar, 4000)
        console.log('mounting')
    }

    componentWillUnmount() {
        clearInterval(this.timerId)
        console.log('unmounting')
    }

    onCharLoaded = (char) => {
        this.setState({
            char,
            loading: false
        })
    }

    onError = () => {
        this.setState({
            error: true,
            loading: false
        })
    }

    updateChar = () => {
        const id = Math.floor(Math.random()*600 + 25) // ot 25 do 140
        this.gotService.getCharacter(id)
            .then(this.onCharLoaded)
            .catch(this.onError)
    }

    render() {

        console.log('render')
        const {char, loading, error} = this.state;

        const errorMessage = error ? <ErrorMessage /> : null;
        const spinner =  loading ? <Spiner /> : null;
        const content = !(loading || error) ? <View char={char}/> : null;

        return (
            <div className="random-block rounded">
                {errorMessage}
                {spinner}
                {content}
            </div>
        );
    }
}

const View = ({char}) => {

    const {name, gender, born, died, culture} = char;

  return (
      <>
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
      </>
  )
}

// 20 min