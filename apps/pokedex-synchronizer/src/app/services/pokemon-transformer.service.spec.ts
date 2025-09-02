import { Test, TestingModule } from '@nestjs/testing';
import { PokemonTransformerService } from './pokemon-transformer.service';

describe('PokemonTransformerService', () => {
  let service: PokemonTransformerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PokemonTransformerService],
    }).compile();

    service = module.get<PokemonTransformerService>(PokemonTransformerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should transform Pokemon data correctly', () => {
    const mockPokemon = {
      id: 25,
      name: 'Pikachu',
      slug: 'pikachu',
      types: [
        {
          type: {
            id: 13,
            name: 'Electric',
            slug: 'electric',
          },
        },
      ],
      moves: [
        {
          move: {
            id: 85,
            name: 'Thunderbolt',
            slug: 'thunderbolt',
            power: 90,
            type: {
              id: 13,
              name: 'Electric',
              slug: 'electric',
            },
            damageClass: {
              id: 3,
              name: 'Special',
              slug: 'special',
            },
          },
        },
      ],
      abilities: [
        {
          ability: {
            id: 9,
            name: 'Static',
            slug: 'static',
          },
          isHidden: false,
        },
      ],
      stats: [
        {
          stat: { slug: 'hp' },
          baseStat: 35,
        },
        {
          stat: { slug: 'attack' },
          baseStat: 55,
        },
        {
          stat: { slug: 'defense' },
          baseStat: 40,
        },
        {
          stat: { slug: 'special_attack' },
          baseStat: 50,
        },
        {
          stat: { slug: 'special_defense' },
          baseStat: 50,
        },
        {
          stat: { slug: 'speed' },
          baseStat: 90,
        },
      ],
    };

    const result = service.transformPokemon(mockPokemon);

    expect(result.id).toBe('pokemon:25');
    expect(result.pokedex_number).toBe(25);
    expect(result.name).toBe('Pikachu');
    expect(result.slug).toBe('pikachu');
    
    expect(result.stats.hp).toBe(35);
    expect(result.stats.attack).toBe(55);
    expect(result.stats.defense).toBe(40);
    expect(result.stats.special_attack).toBe(50);
    expect(result.stats.special_defense).toBe(50);
    expect(result.stats.speed).toBe(90);

    expect(result.types).toHaveLength(1);
    expect(result.types[0].id).toBe('type:electric');
    expect(result.types[0].name).toBe('Electric');
    expect(result.types[0].slug).toBe('electric');

    expect(result.abilities).toHaveLength(1);
    expect(result.abilities[0].id).toBe('ability:9');
    expect(result.abilities[0].name).toBe('Static');
    expect(result.abilities[0].slug).toBe('static');
    expect(result.abilities[0].is_hidden).toBe(false);

    expect(result.moves).toHaveLength(1);
    expect(result.moves[0].id).toBe('move:85');
    expect(result.moves[0].name).toBe('Thunderbolt');
    expect(result.moves[0].slug).toBe('thunderbolt');
    expect(result.moves[0].power).toBe(90);
    expect(result.moves[0].type.id).toBe('type:electric');
    expect(result.moves[0].type.name).toBe('Electric');
    expect(result.moves[0].damage_class.id).toBe('damage_class:special');
    expect(result.moves[0].damage_class.name).toBe('Special');
  });
});
