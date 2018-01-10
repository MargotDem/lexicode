import React, { Component } from 'react';


class AlphabetBar extends Component {
    
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick(e) {
        const letter = e.target.value;
        this.props.onClick(letter);
    }
    
    render() {
        
        return (
            
            <div className="alphabet-bar">
            
                <button value="a" onClick={this.handleClick}>A</button>
                <button value="b" onClick={this.handleClick}>B</button>
                <button value="c" onClick={this.handleClick}>C</button>
                <button value="d" onClick={this.handleClick}>D</button>
                <button value="e" onClick={this.handleClick}>E</button>
                <button value="f" onClick={this.handleClick}>F</button>
                <button value="g" onClick={this.handleClick}>G</button>
                <button value="h" onClick={this.handleClick}>H</button>
                <button value="i" onClick={this.handleClick}>I</button>
                <button value="j" onClick={this.handleClick}>J</button>
                <button value="k" onClick={this.handleClick}>K</button>
                <button value="l" onClick={this.handleClick}>L</button>
                <button value="m" onClick={this.handleClick}>M</button>
                <button value="n" onClick={this.handleClick}>N</button>
                <button value="o" onClick={this.handleClick}>O</button>
                <button value="p" onClick={this.handleClick}>P</button>
                <button value="q" onClick={this.handleClick}>Q</button>
                <button value="r" onClick={this.handleClick}>R</button>
                <button value="s" onClick={this.handleClick}>S</button>
                <button value="t" onClick={this.handleClick}>T</button>
                <button value="u" onClick={this.handleClick}>U</button>
                <button value="v" onClick={this.handleClick}>V</button>
                <button value="w" onClick={this.handleClick}>W</button>
                <button value="x" onClick={this.handleClick}>X</button>
                <button value="y" onClick={this.handleClick}>Y</button>
                <button value="z" onClick={this.handleClick}>Z</button>
            
            
            
            </div>
        ); 
    }
}


export default AlphabetBar;