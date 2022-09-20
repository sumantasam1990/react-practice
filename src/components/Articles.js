import React from "react";

export default class Articles extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            books: [],
        };
    }

    async componentDidMount() {
        await fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then(booksList => {
                this.setState({ books: booksList });
            }).catch(err => console.log(err));
    }

    getProductsHtml() {
        return this.state.books.map((book) => (
            <li key={book.id}>
                {book.name}
                <p className="red">{book.address.city}</p>
                <p className="green">{book.address.geo.lat}, {book.address.geo.lng}</p>
            </li>
        ));
    }

    render() {
        return (
            <div>
                <h1>
                    {this.props.name}
                </h1>
                <ul>
                    {this.getProductsHtml()}
                </ul>
            </div>
        );
    }
}