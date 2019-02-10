import React, { Component } from 'react'
import SavedItems from '../containers/savedItems/SavedItems.container';
import NavigationTabs from '../components/navigationTabs/NavigationTabs';

export class SavedItemsPage extends Component {
  render() {
    return (
      <div style={{ flexGrow: 1 }}>
        <NavigationTabs value={1} />
        <SavedItems />
      </div>
    )
  }
}

export default SavedItemsPage
