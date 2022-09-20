import React from "react";

export default class Articles extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            users: [],
        };
    }

    async componentDidMount() {
        await fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then(usersList => {
                this.setState({ users: usersList });
            }).catch(err => console.log(err));
    }

    getProductsHtml() {
        return this.state.users.map((user) => (
            <li key={user.id}>
                {user.name}
                <p className="red">{user.address.city}</p>
                <p className="green">{user.address.geo.lat}, {user.address.geo.lng}</p>
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