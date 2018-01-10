import React, { Component } from 'react';
import Entry from './Entry';
import data from './data.js';


class EntriesContainer extends Component {
    
   

    handleShow(i) {
        this.refs[i].scrollIntoView({block: 'end', behavior: 'smooth'});
    }
    
    render() {
        
         // entriesArray is going to receive every entry to be displayed as an Entry component:
        
        var entriesArray = [];
        
        
        // create and sort an array containing all the names of the entries:

        var entriesNames = Object.keys(data);

        entriesNames.sort();
        
                        
        // if no tags-bar__button has been clicked, display all entries:
      
        if (this.props.displayAll) {
            
            // for each entry, pass its data to an Entry component that's stored in entriesArray:
            
            for (var key in entriesNames) {
    
                var title = entriesNames[key];

                var text = data[title]['text'];
                
                
                // links contains (jsx expressions) anchor elements with the link(s) for the given entry:

                var links = [];

                for (var link in data[title]['links']) {

                    var linkAddress = data[title]['links'][link]['link'];

                    var linkName = data[title]['links'][link]['name'];

                    links.push(
                        <div>
                            <a target="_blank" href={linkAddress}>{linkName}</a>
                            <br/>
                        </div>
                    );
                }
                
                
                // tags contains the tag(s) for the given entry:

                var tags = [];
                    
                for (var tag in data[title]['tags']) {
                        
                    var tagName = data[title]['tags'][tag];
                      
                    tags.push(tagName);
                }


                // finally pass the data of given entry to an Entry instance (along with the Main component's state changing searchByTag function passed as props under the name of onClick), and store the latter in entriesArray:
                
                var entryComponent = (

                    <Entry title={title} text={text} links={links} tags={tags} onClick={this.props.onClick}/>

                );

                entriesArray.push(entryComponent);
    
            }
            
            
            return (
                
                <div className="entries">
                    {entriesArray}
                </div>
            );
            
        
        // if a tags-bar__button has been clicked, display every entry corresponding to said tag (pretty much the same thing, some refactoring to be done here):    
        
        }  else {
        
            for (var key in entriesNames) {
                
                if (data[entriesNames[key]]['tags'].indexOf(this.props.tagToDisplay) > -1) {
                    
                    var title = entriesNames[key];

                    var text = data[title]['text'];

                    var links = [];

                    for (var link in data[title]['links']) {

                        var linkAddress = data[title]['links'][link]['link'];

                        var linkName = data[title]['links'][link]['name'];

                        links.push(
                            <div>
                                <a target="_blank" href={linkAddress}>{linkName}</a>
                                <br/>
                            </div>
                        );
                    }
                    
                    var tags = [];
            
                    for (var tag in data[title]['tags']) {
                        
                        var tagName = data[title]['tags'][tag];
                        
                        tags.push(tagName);  
                    }

                    var entryCompo = (

                        <Entry ref={key} title={title} text={text} links={links} tags={tags} onClick={this.props.onClick}/>

                    );

                    entriesArray.push(entryCompo);
                }
            }
            
          
            return (
                
                <div className="entries">
                    {entriesArray}
                </div>
            );
        }
    }
     
}


export default EntriesContainer;