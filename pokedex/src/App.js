import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = { menuOpen: false };
    this.toggleMenu = this.toggleMenu.bind(this);
  }
  toggleMenu() {
    this.setState({ menuOpen: !this.state.menuOpen })
  }
  render() {
    return (
      <div>
        <AppBar title="Pokedex" onLeftIconButtonTouchTap={this.toggleMenu} />
        <Drawer docked={false} open={this.state.menuOpen} onRequestChange={(menuOpen) => this.setState({ menuOpen })} >
          <MenuItem>Search</MenuItem>
          <MenuItem>Overview</MenuItem>
        </Drawer>
      </div>
    );
  }
}

export default App;
