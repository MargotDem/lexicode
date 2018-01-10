import React, { Component } from 'react';


class Entry extends Component {
    
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    
    
    // when a tags-bar__button is clicked, this function gets the specific tag name and calls the props-passed grand-parent's-state-changing onClick function, passing it the name as argument, so as to display every entry corresponding to said tag:
    
    handleClick(e) {
        
        const tag = e.target.value;
        this.props.onClick(tag);
        
    }
    
    
    render() {
        
        const tagButtons = [];
      
        const tagNames = this.props.tags;
      
        for (var tag in tagNames) {
          
            const tagButtonClass = "tags-bar__button tags-bar__button_" + tagNames[tag];
          
            tagButtons.push(
          
                <button value={tagNames[tag]} className={tagButtonClass} type="button" onClick={this.handleClick}>{tagNames[tag]}</button>
          
            );
        }
        
        
        return (
            
            <div className="entry">

                <div className="entry__header">
            
                    <div className="entry__title">
            
                        {this.props.title}
            
                    </div>

                    <div className="entry__tags">

                        {tagButtons}

                    </div>

                </div>

                <div className="entry__text">
                    
                    {this.props.text}
            
                </div>

                <div className="entry__links">

                    {this.props.links}

                </div>

            </div>
        );
    }
}


export default Entry;