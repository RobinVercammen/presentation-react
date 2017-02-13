import React, { Component } from 'react';
import PokemonCard from './pokemon';

export default class PokemonOverview extends Component {
    constructor() {
        super();
        this.state = { pokemons: [{ name: 'bulba', id: 1 }] };
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
