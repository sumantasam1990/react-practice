import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { motion } from "framer-motion"

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
        const list = {
            visible: {
                opacity: 1,
                transition: {
                    when: "beforeChildren",
                    staggerChildren: 0.3,
                },
            },
            hidden: {
                opacity: 0,
                transition: {
                    when: "afterChildren",
                },
            },
        }

        const item = {
            visible: { opacity: 1, x: 0 },
            hidden: { opacity: 0, x: -100 },
        }

        return this.state.users.map((user) => (
            <motion.ul initial="hidden"
                       animate="visible" variants={list} whileHover={{ scale: 1.02 }}
                       whileTap={{ scale: 1.1 }}>
                <motion.li variants={item} key={user.id}>
                    <div>
                        <h4>{user.name}</h4>
                        <p className="red">{user.address.city}</p>
                        <p className="green">{user.address.geo.lat}, {user.address.geo.lng}</p>
                    </div>
                    <button> <FontAwesomeIcon icon={faArrowRight} /> </button>

                </motion.li>
            </motion.ul>
        ));
    }

    render() {

        return (
            <div className="col">
                <h1>
                    {this.props.name}
                </h1>

                    {this.getProductsHtml()}


            </div>
        );
    }
}