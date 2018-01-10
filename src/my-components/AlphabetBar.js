import React, { Component } from 'react';


class AlphabetBar extends Component {
    
    render() {
        
        /* this doesn't work for some weird reason é_è:
        
        const alphabet = 'abcdefghijklmnopqrstuvwxyz';
        const array = [];

        for (var letter in alphabet) {
            const button = (
                <button value={alphabet[letter]} onClick={(function() { document.getElementById(alphabet[letter]).scrollIntoView(true); }).bind(this)}>{alphabet[letter].toUpperCase()}</button>
            );
            array.push(button);
        }
    
        */
        
        return (
            
            <div className='alphabet-bar'>
             
                <button onClick={(function() { document.getElementById('a') ? document.getElementById('a').scrollIntoView(true) : alert('There is no entry for this letter') }).bind(this)}>A</button>
            
                <button onClick={(function() { document.getElementById('b') ? document.getElementById('b').scrollIntoView(true) : alert('There is no entry for this letter') }).bind(this)}>B</button>
                
                <button onClick={(function() { document.getElementById('c') ? document.getElementById('c').scrollIntoView(true) : alert('There is no entry for this letter') }).bind(this)}>C</button>
                
                <button onClick={(function() { document.getElementById('d') ? document.getElementById('d').scrollIntoView(true) : alert('There is no entry for this letter') }).bind(this)}>D</button>
                
                <button onClick={(function() { document.getElementById('e') ? document.getElementById('e').scrollIntoView(true) : alert('There is no entry for this letter') }).bind(this)}>E</button>
                
                <button onClick={(function() { document.getElementById('f') ? document.getElementById('f').scrollIntoView(true) : alert('There is no entry for this letter') }).bind(this)}>F</button>
                
                <button onClick={(function() { document.getElementById('g') ? document.getElementById('g').scrollIntoView(true) : alert('There is no entry for this letter') }).bind(this)}>G</button>
                
                <button onClick={(function() { document.getElementById('h') ? document.getElementById('h').scrollIntoView(true) : alert('There is no entry for this letter') }).bind(this)}>H</button>
                
                <button onClick={(function() { document.getElementById('i') ? document.getElementById('I').scrollIntoView(true) : alert('There is no entry for this letter') }).bind(this)}>I</button>
                
                <button onClick={(function() { document.getElementById('j') ? document.getElementById('j').scrollIntoView(true) : alert('There is no entry for this letter') }).bind(this)}>J</button>
                
                <button onClick={(function() { document.getElementById('k') ? document.getElementById('k').scrollIntoView(true) : alert('There is no entry for this letter') }).bind(this)}>K</button>
                
                <button onClick={(function() { document.getElementById('l') ? document.getElementById('l').scrollIntoView(true) : alert('There is no entry for this letter') }).bind(this)}>L</button>
                
                <button onClick={(function() { document.getElementById('m') ? document.getElementById('m').scrollIntoView(true) : alert('There is no entry for this letter') }).bind(this)}>M</button>
                
                <button onClick={(function() { document.getElementById('n') ? document.getElementById('n').scrollIntoView(true) : alert('There is no entry for this letter') }).bind(this)}>N</button>
                
                <button onClick={(function() { document.getElementById('o') ? document.getElementById('o').scrollIntoView(true) : alert('There is no entry for this letter') }).bind(this)}>O</button>
                
                <button onClick={(function() { document.getElementById('p') ? document.getElementById('p').scrollIntoView(true) : alert('There is no entry for this letter') }).bind(this)}>P</button>
                
                <button onClick={(function() { document.getElementById('r') ? document.getElementById('r').scrollIntoView(true) : alert('There is no entry for this letter') }).bind(this)}>R</button>
                
                <button onClick={(function() { document.getElementById('s') ? document.getElementById('s').scrollIntoView(true) : alert('There is no entry for this letter') }).bind(this)}>S</button>
                
                <button onClick={(function() { document.getElementById('t') ? document.getElementById('t').scrollIntoView(true) : alert('There is no entry for this letter') }).bind(this)}>T</button>
                
                <button onClick={(function() { document.getElementById('u') ? document.getElementById('u').scrollIntoView(true) : alert('There is no entry for this letter') }).bind(this)}>U</button>
                
                <button onClick={(function() { document.getElementById('v') ? document.getElementById('v').scrollIntoView(true) : alert('There is no entry for this letter') }).bind(this)}>V</button>
                
                <button onClick={(function() { document.getElementById('w') ? document.getElementById('w').scrollIntoView(true) : alert('There is no entry for this letter') }).bind(this)}>W</button>
                
                <button onClick={(function() { document.getElementById('x') ? document.getElementById('x').scrollIntoView(true) : alert('There is no entry for this letter') }).bind(this)}>X</button>
                
                <button onClick={(function() { document.getElementById('y') ? document.getElementById('y').scrollIntoView(true) : alert('There is no entry for this letter') }).bind(this)}>Y</button>
                
                <button onClick={(function() { document.getElementById('z') ? document.getElementById('z').scrollIntoView(true) : alert('There is no entry for this letter') }).bind(this)}>Z</button>
                
            </div>
        ); 
    }
}


export default AlphabetBar;