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


# Own commponent
```javascript
export default class PokemonCard extends Component {
    render() {
        return (
            <Card>
                <CardHeader
                    title={this.props.pokemon.name}
                    avatar={`https://raw.githubusercontent.com/PokeAPI/pokeapi/master/data/v2/sprites/pokemon/${this.props.pokemon.id}.png`}
                />
            </Card>
        );
    }
}
```
Note: only has props: mostly display only


# 'Complex' component
```javascript
export default class PokemonSearch extends Component {
    constructor(props) {
        super();
        this.state = { pokemonId: '', name: '' };
        this.search = this.search.bind(this);
        this.changePokemonId = this.changePokemonId.bind(this);
    }
    search(evt) {
        evt.preventDefault();
        console.log(this.state.pokemonId);
    }
    changePokemonId(evt) {
        const pokemonId = evt.target.value;
        this.setState({ pokemonId });
    }
    render() {
        let pokemon;
        if (this.state.pokemon) {
            pokemon = <PokemonCard pokemon={this.state.pokemon} />;
        }
        return <div>
            <form onSubmit={this.search} autoComplete="off">
                <TextField name="pokemon-id" floatingLabelText="Pokemon #" onChange={this.changePokemonId} />
                <RaisedButton type="submit" label="Search" />
            </form>
            {pokemon}
        </div>;
    }
}
```
Note: Contains state , uses other components



# Getting data
```javascript
export const HttpGet = (url) => {
    return fetch(url).then(r => r.json());
}
// use like this
HttpGet(`http://pokeapi.co/api/v2/pokemon/${this.state.pokemonId}/`).then(
    pokemon => {
        this.setState({ pokemon });
    }
);
```
Note: calling an api using fetch, easy to use



# Setting the store
```javascript
// dispatch
store.dispatch({ type: 'pokemons', pokemon });
// subscribe
store.subscribe(() => {
    const pokemons = store.getState().pokemons;
    this.setState({ pokemons });
});
// handle
case 'pokemons':
state.pokemons.push(action.pokemon);
return state;
```
Note: manage application state



# Further leads
- [React-router](https://github.com/ReactTraining/react-router)
- [Redux](https://egghead.io/courses/getting-started-with-redux)
- [Immutablejs](https://facebook.github.io/immutable-js/docs/#/)
- [Material-ui](http://www.material-ui.com/#/)