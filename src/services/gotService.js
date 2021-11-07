class GotService {

    constructor() {
        this._apiBase = 'https://www.anapioficeandfire.com/api';
    }

    getResource = async url => {
        const res = await fetch(`${this._apiBase}${url}`);

        if(!res.ok){
            throw new Error(`Could not fetch ${url}, status: ${res.status}`)
        }

        return await res.json();
    };

    getAllCharacters = async () => {
        const res = await this.getResource(`/characters?page=5&pageSize=10`)
        return res.map(this._transformCharacter)
    };

    getCharacter = async id => {
        const character = await this.getResource(`/characters/${id}`)
        return this._transformCharacter(character)
    };


    getAllBooks = async () => {
        const res = await this.getResource(`/books/`)
        return res.map(this._transfornBook)
    };

    getBook = async (id) => {
        const book = await this.getResource(`/books/${id}/`)
        return this._transfornBook(book)
    };


    getAllHouses = async () => {
        const res = await this.getResource(`/houses/`)
        return res.map(this._transformHouse)
    };

    getHouse = async (id) => {
        const house = await this.getResource(`/houses/${id}/`)
        return this._transformHouse(house)
    };


    _transformCharacter = char => {
        console.log(char.culture)
        return {
            name: char.name ? char.name : 'no data ;(',
            gender: char.gender ? char.gender  : 'no data ;(',
            born: char.born ? char.born  : 'no data ;(',
            died: char.died ? char.died  : 'no data ;(',
            culture: char.culture ? char.culture  : 'no data ;(',
        }
    };

    _transformHouse = house => ({
        name: house.name,
        region: house.region,
        words: house.words,
        titles: house.titles,
        overlord: house.overlord,
        ancestralWeapons: house.ancestralWeapons,
    });

    _transfornBook = book => ({
        name: book.name,
        numberOfPages: book.region,
        publisher: book.words,
        released: book.titles,
    });

}


export default GotService;