import { Pokemon } from '../models/pokemon.model.js';

export const PokemonRepository = {
  create: (data) => Pokemon.create(data),
  findAll: () => Pokemon.find().lean(),
  findById: (id) => Pokemon.findById(id).lean(),
  update: (id, data) => Pokemon.findByIdAndUpdate(id, data, { new: true }).lean(),
  remove: (id) => Pokemon.findByIdAndDelete(id).lean(),

  setFavorite: async (id) => {
    const pokemon = await Pokemon.findById(id);
    if (!pokemon) {
      throw new Error('Pokemon no ha sido encontrado');
    }


    pokemon.isFavorite = !pokemon.isFavorite; // Cambia el estado de favorito
    await pokemon.save(); // Guarda los cambios en la base de datos
    return pokemon; // Devuelve el Pokémon actualizado
  }
};
