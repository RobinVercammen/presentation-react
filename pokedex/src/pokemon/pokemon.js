import React, { Component } from 'react';
import { Card, CardHeader } from 'material-ui/Card'

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
