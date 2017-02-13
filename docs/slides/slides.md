# React
## ![Involed-IT](https://www.involved-it.be/user/themes/involved/images/involved-logo.svg)  <!-- .element width="250px" style="border:none; background:none;" -->
#### [www.involved-it.be](https://www.involved-it.be) <!-- .element target="blank" -->


# About Involved

- Passionate people
- On top of technology
- Working together with clients
- Empowering everyones potential



# Why React
- Just the view
- Manage complex state
- Build component
- Extremly fast



# What we're building
Pokedex using the free [pokemon api](https://pokeapi.co/).
- Search pokemons
- Display list of 'found' pokemons



# Setup
Make sure you have nodejs installed (v7.5.0)
```shell
mkdir pokedex
cd pokedex
npm i -g create-react-app
create-react-app pokedex
cd pokedex
npm start
```


# Add packages
```shell
npm i -S material-ui react-tap-event-plugin redux
```
- Nice ui-framework
- State management



# Setup our ui framework
```javascript
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
injectTapEventPlugin();
```

```css
@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500');
```



# Component
```javascript
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
```
Note: A component implements a render method. This method will be called whenenver a state is changed. This is the extended app component.
In here we use components provided from the material-ui framework.
