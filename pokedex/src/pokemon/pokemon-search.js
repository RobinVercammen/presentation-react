import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import { HttpGet } from '../service/fetch';
import PokemonCard from './pokemon';
import store from '../store';

export default class PokemonSearch extends Component {
    constructor(props) {
        super();
        this.state = { pokemonId: '', name: '' };
        this.search = this.search.bind(this);
        this.changePokemonId = this.changePokemonId.bind(this);
    }
    search(evt) {
        evt.preventDefault();
        HttpGet(`http://pokeapi.co/api/v2/pokemon/${this.state.pokemonId}/`).then(
            pokemon => {
                this.setState({ pokemon });
                store.dispatch({ type: 'pokemons', pokemon });
            }
        );
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
