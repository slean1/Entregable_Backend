import { Router } from 'express';
import { PokemonController } from '../controllers/pokemon.controller.js';
import { authVerify } from '../middleware/auth.middleware.js';

export const pokemonRouter = Router();

/**
 * @swagger
 * /api/pokemon:
 *   post:
 *     summary: Crear un nuevo Pokémon
 *     tags: [Pokemons]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - code
 *               - name
 *               - types
 *             properties:
 *               code:
 *                 type: integer
 *                 example: 200
 *                 description: Código identificador único del Pokémon
 *               name:
 *                 type: string
 *                 example: "lipígas"
 *                 description: Nombre del Pokémon
 *               types:
 *                 type: array
 *                 items:
 *                   type: string
 *                 example: ["water", "fire"]
 *                 description: Tipos elementales del Pokémon
 *               attacks:
 *                 type: array
 *                 items:
 *                   type: string
 *                 example: ["mordida", "ladrido"]
 *                 description: Lista de ataques del Pokémon
 *               height:
 *                 type: number
 *                 format: float
 *                 example: 0.7
 *                 description: Altura en metros
 *               weight:
 *                 type: number
 *                 format: float
 *                 example: 6.9
 *                 description: Peso en kilogramos
 *               isFavorite:
 *                 type: boolean
 *                 example: false
 *                 description: Indica si es Pokémon favorito
 *     responses:
 *       201:
 *         description: Pokémon creado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   example: "60f5b5a52e35f42f90df5fbd"
 *                 code:
 *                   type: integer
 *                   example: 200
 *                 name:
 *                   type: string
 *                   example: "lipígas"
 *                 types:
 *                   type: array
 *                   items:
 *                     type: string
 *                   example: ["water", "fire"]
 *                 attacks:
 *                   type: array
 *                   items:
 *                     type: string
 *                   example: ["mordida", "ladrido"]
 *                 height:
 *                   type: number
 *                   format: float
 *                   example: 0.7
 *                 weight:
 *                   type: number
 *                   format: float
 *                   example: 6.9
 *                 isFavorite:
 *                   type: boolean
 *                   example: false
 *       400:
 *         description: Datos inválidos enviados en la solicitud
 *       401:
 *         description: No autorizado - Token inválido o ausente
 */
pokemonRouter.post('/', authVerify, PokemonController.create)

/**
 * @swagger
 * /api/pokemon/{id}/favorite:
 *   patch:
 *     summary: Marcar o desmarcar un Pokémon como favorito
 *     tags: [Pokemons]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del Pokémon a actualizar
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               favorite:
 *                 type: boolean
 *                 example: true
 *     responses:
 *       200:
 *         description: Estado de favorito actualizado exitosamente
 *       400:
 *         description: Datos inválidos
 *       404:
 *         description: Pokémon no encontrado
 *       401:
 *         description: No autorizado - Token inválido o ausente
 */
pokemonRouter.patch('/:id/favorite', authVerify, PokemonController.setFavorite);

/**
 * @swagger
 * /api/pokemon/favorite:
 *   get:
 *     summary: Obtener los Pokémon favoritos del usuario autenticado
 *     tags: [Pokemons]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de Pokémon favoritos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     example: "60f5b5a52e35f42f90df5fbd"
 *                   nombre:
 *                     type: string
 *                     example: "Pikachu"
 *                   tipo:
 *                     type: string
 *                     example: "Eléctrico"
 *                   favorite:
 *                     type: boolean
 *                     example: true
 *       401:
 *         description: No autorizado - Token inválido o ausente
 */
pokemonRouter.get('/favorite', authVerify, PokemonController.getFavorites);

/**
 * @swagger
 * /api/pokemon/{id}:
 *   get:
 *     summary: Obtener un Pokémon por ID
 *     tags: [Pokemons]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del Pokémon a obtener
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Pokémon encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   example: "60f5b5a52e35f42f90df5fbd"
 *                 nombre:
 *                   type: string
 *                   example: "Charmander"
 *                 tipo:
 *                   type: string
 *                   example: "Fuego"
 *                 favorite:
 *                   type: boolean
 *                   example: false
 *       404:
 *         description: Pokémon no encontrado
 */
pokemonRouter.get('/:id', PokemonController.get)

/**
 * @swagger
 * /api/pokemon:
 *   get:
 *     summary: Obtener todos los Pokémon
 *     tags: [Pokemons]
 *     responses:
 *       200:
 *         description: Lista completa de Pokémon
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     example: "60f5b5a52e35f42f90df5fbd"
 *                   nombre:
 *                     type: string
 *                     example: "Bulbasaur"
 *                   tipo:
 *                     type: string
 *                     example: "Planta/Veneno"
 *                   favorite:
 *                     type: boolean
 *                     example: false
 */
pokemonRouter.get('/', PokemonController.list)

/**
 * @swagger
 * /api/pokemon/{id}:
 *   put:
 *     summary: Actualizar un Pokémon por ID
 *     tags: [Pokemons]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del Pokémon a actualizar
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: Squirtle
 *               height:
 *                 type: number
 *                 example: 0.9
 *               favorite:
 *                 type: boolean
 *                 example: false
 *     responses:
 *       200:
 *         description: Pokémon actualizado exitosamente
 *       400:
 *         description: Datos inválidos
 *       404:
 *         description: Pokémon no encontrado
 *       401:
 *         description: No autorizado - Token inválido o ausente* 
 */
pokemonRouter.put('/:id', authVerify, PokemonController.update)

/**
 * @swagger
 * /api/pokemon/{id}:
 *   delete:
 *     summary: Eliminar un Pokémon por ID
 *     tags: [Pokemons]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del Pokémon a eliminar
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Pokémon eliminado exitosamente
 *       404:
 *         description: Pokémon no encontrado
 *       401:
 *         description: No autorizado - Token inválido o ausente
 */
pokemonRouter.delete('/:id', authVerify, PokemonController.remove);