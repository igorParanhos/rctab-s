import React, { Component } from 'react';

import NavigationTabs from '../components/navigationTabs/NavigationTabs';
import TabForm from '../containers/tabForm/TabForm.container';

class Dashboard extends Component {
  render() {
    return (
      <div className="Dashboard">
        <NavigationTabs />
        <TabForm />
      </div>
    );
  }
}

export default Dashboard;
