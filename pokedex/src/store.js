import { createStore } from 'redux';

const pokemonReducer = (state = { pokemons: [] }, action) => {
    switch (action.type) {
        case 'pokemons':
            state.pokemons.push(action.pokemon);
            return state;
        default:
            return state;

    }
};

const store = createStore(pokemonReducer);
export default store;
