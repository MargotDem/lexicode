import React from 'react'

import BaseContainer from './base'
import Entry from './Entry'

import './styles/entriescontainer.css'

import data from '../data.js'

class EntriesContainer extends BaseContainer {
  fetchEntries (t, key, entriesNames, entriesArray, onClick) {
    var title = entriesNames[key]

    // retrieve the text, store it in the text variable
    var text = t(title)

    // links contains (jsx expressions) anchor elements with the link(s) for the given entry:
    var links = []

    for (var link in data[title]['links']) {
      var linkAddress = data[title]['links'][link]['link']

      var linkName = data[title]['links'][link]['name']

      links.push(
        <div key={link}>
          <a target='_blank' rel='noopener noreferrer' href={linkAddress}>{linkName}</a>
          <br />
        </div>
      )
    }

    // tags contains the tag(s) for the given entry:
    var tags = []

    for (var tag in data[title]['tags']) {
      var tagName = data[title]['tags'][tag]
      tags.push(tagName)
    }

    var art = data[title]['art']

    /*
    finally pass the data of given entry to an Entry instance
    (along with the Main component's state changing searchByTag function passed
    as props under the name of onClick), and store the latter in entriesArray:
    */
    var entryComponent = (
      <Entry
        key={key}
        title={title}
        text={text}
        links={links}
        art={art}
        tags={tags}
        onClick={onClick}
      />
    )

    entriesArray.push(entryComponent)
  }

  renderMe (t) {
    let { displayAll, tagToDisplay, onClick } = this.props
    // entriesArray is going to receive every entry to be displayed as an Entry component:
    var entriesArray = []

    // create and sort an array containing all the names of the entries:
    var entriesNames = Object.keys(data)

    entriesNames.sort()

    // if no tags-bar__button has been clicked, display all entries:
    if (displayAll) {
      /* for each entry, fetchEntries is going to pass the data to an
      Entry component that's going to be stored in entriesArray:
      */
      for (let key in entriesNames) {
        this.fetchEntries(t, key, entriesNames, entriesArray, onClick)
      }

    // if a tags-bar__button has been clicked, display every entry corresponding to said tag:
    } else {
      for (let key in entriesNames) {
        if (data[entriesNames[key]]['tags'].indexOf(tagToDisplay) > -1) {
          this.fetchEntries(t, key, entriesNames, entriesArray, onClick)
        }
      }
    }

    return (
      <div className='entries'>
        {entriesArray}
      </div>
    )
  }
}

export default EntriesContainer
