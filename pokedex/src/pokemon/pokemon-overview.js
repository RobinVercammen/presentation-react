import React, { Component } from 'react';
import PokemonCard from './pokemon';
import store from '../store';

export default class PokemonOverview extends Component {
    constructor() {
        super();
        this.state = { pokemons: store.getState().pokemons || [] };
        store.subscribe(() => {
            const pokemons = store.getState().pokemons;
            this.setState({ pokemons });
        });
    }
    render() {
        const overview = this.state.pokemons.sort(p => p.id, (a, b) => +a - (+b)).map(p => <PokemonCard key={p.id} pokemon={p} />);
        return (
            <div>
                {overview}
            </div>
        );
    }
}
