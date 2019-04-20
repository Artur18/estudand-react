import React, {Component} from "react";

import SquareEstudo from "../SquareEstudo";

import "./styles.css";

class BoardEstudo extends Component {
    createSquares = () => {
        const squares = Array(9).fill();


        return squares.map (
            (squares, index) => (
                <SquareEstudo
                player ={this.props.squares[index]}
                key={index}
                onClick={this.props.onClick}
                onClick={() =>this.props.onClick(index)}
                />
            )
        );
    };
    render () {
        return (
            <article className="board-estudo">
                {this.createSquares}
            </article>
        )
    };

};

export default BoardEstudo;