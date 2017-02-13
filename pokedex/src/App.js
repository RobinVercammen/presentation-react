import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import PokemonSearch from './pokemon/pokemon-search';
import PokemonOverview from './pokemon/pokemon-overview';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = { menuOpen: false };
    this.toggleMenu = this.toggleMenu.bind(this);
    this.showSearch = this.showSearch.bind(this);
    this.showOverview = this.showOverview.bind(this);
  }
  toggleMenu() {
    this.setState({ menuOpen: !this.state.menuOpen })
  }
  showSearch() {
    this.setState({ menuOpen: false, search: true, overview: false })
  }
  showOverview() {
    this.setState({ menuOpen: false, search: false, overview: true })
  }
  render() {
    let search = this.state.search ? (<PokemonSearch />) : undefined;
    let overview = this.state.overview ? (<PokemonOverview />) : undefined;
    return (
      <div>
        <AppBar title="Pokedex" onLeftIconButtonTouchTap={this.toggleMenu} />
        <Drawer docked={false} open={this.state.menuOpen} onRequestChange={(menuOpen) => this.setState({ menuOpen })} >
          <MenuItem onTouchTap={this.showSearch}>Search</MenuItem>
          <MenuItem onTouchTap={this.showOverview}>Overview</MenuItem>
        </Drawer>
        {search}
        {overview}
      </div>
    );
  }
}

export default App;
