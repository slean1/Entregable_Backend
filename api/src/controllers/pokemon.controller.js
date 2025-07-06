import { PokemonService } from '../services/pokemon.service.js';

export const PokemonController = {
  async create(req, res) {
    const created = await PokemonService.create(req.body);
    res.status(201).json(created);
  },

  async list(_req, res) {
    res.json(await PokemonService.findAll());
  },

  async get(req, res) {
    const pokemon = await PokemonService.findById(req.params.id);
    if (!pokemon) return res.status(404).json({ message: 'Not found' });
    res.json(pokemon);
  },

  async getFavorites(_req, res) {
    const favorites = await PokemonService.findAll();
    const favoritePokemons = favorites.filter(pokemon => pokemon.isFavorite);
    res.json(favoritePokemons);
  },

  async update(req, res) {
    const updated = await PokemonService.update(req.params.id, req.body);
    if (!updated) return res.status(404).json({ message: 'Not found' });
    res.json(updated);
  },

  async remove(req, res) {
    const removed = await PokemonService.remove(req.params.id);
    if (!removed) return res.status(404).json({ message: 'Not found' });
    res.json({ message: 'Deleted' });
  },

  //método para marcar/desmarcar favorito
  async setFavorite(req, res) {
    try
    {
      const updatedPokemon = await PokemonService.setFavorite(req.params.id);
      if (!updatedPokemon) {
        return res.status(404).json({ message: 'El Pokemon no ha sido encontrado' });
      }

      return res.status(200).json({
        message: 'Estado de favorito actualizado',
        pokemon: updatedPokemon
      });

    }
    catch (error) {
      console.log("Error");
      res.status(500).json({ message: "Id de Pokémon no encontrado" });
    }
  }
};
