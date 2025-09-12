# Generated GraphQL Types and Resolvers

This directory contains auto-generated GraphQL types and resolvers from the Prisma schema using `typegraphql-prisma`.

## Generated Files

### Models (`/models/`)
- **Core Pokemon Models**: `Pokemon.ts`, `PokemonSpecies.ts`, `Moves.ts`, `Types.ts`, `Abilities.ts`, `Items.ts`, `Stats.ts`, `Generations.ts`, `Regions.ts`
- **Supporting Models**: All other Prisma models with their GraphQL ObjectType definitions

### Resolvers (`/resolvers/`)
- **CRUD Resolvers** (`/crud/`): Complete CRUD operations for each model
- **Relation Resolvers** (`/relations/`): Resolvers for handling relationships between models
- **Input Types** (`/inputs/`): GraphQL input types for mutations and queries
- **Output Types** (`/outputs/`): GraphQL output types for responses

### Read-Only Configuration
The generation was configured with `readOnly = true`, which means:
- ✅ **Queries**: `findMany`, `findUnique`, `findFirst`, `aggregate`, `groupBy`
- ❌ **Mutations**: `create`, `update`, `delete`, `upsert` (excluded)

## Usage

### 1. Import Read-Only Resolvers
```typescript
import {
  FindManyPokemonResolver,
  FindUniquePokemonResolver,
  FindFirstPokemonResolver,
  // ... other read-only resolvers
} from './read-only-resolvers';
```

### 2. Use in NestJS GraphQL Module
```typescript
@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
      buildSchemaOptions: {
        resolvers: [
          FindManyPokemonResolver,
          FindUniquePokemonResolver,
          // ... other resolvers
        ],
      },
    }),
  ],
})
export class PokedexGraphQLModule {}
```

### 3. Example GraphQL Queries
```graphql
# Find all Pokemon
query {
  pokemonMany {
    id
    identifier
    height
    weight
    base_experience
    species {
      identifier
      generation_id
    }
    types {
      type {
        identifier
      }
    }
  }
}

# Find Pokemon by ID
query {
  pokemonUnique(where: { id: 25 }) {
    id
    identifier
    species {
      identifier
    }
  }
}

# Find Pokemon with filtering
query {
  pokemonMany(where: { species: { generation_id: 1 } }) {
    id
    identifier
  }
}
```

## Core Models Available

| Model | Description | Key Fields |
|-------|-------------|------------|
| `Pokemon` | Individual Pokemon instances | `id`, `identifier`, `species_id`, `height`, `weight` |
| `PokemonSpecies` | Pokemon species data | `id`, `identifier`, `generation_id`, `evolution_chain_id` |
| `Moves` | Pokemon moves | `id`, `identifier`, `type_id`, `power`, `pp`, `accuracy` |
| `Types` | Pokemon types | `id`, `identifier`, `generation_id` |
| `Abilities` | Pokemon abilities | `id`, `identifier`, `generation_id` |
| `Items` | Items | `id`, `identifier`, `category_id`, `cost` |
| `Stats` | Base stats | `id`, `identifier`, `damage_class_id` |
| `Generations` | Game generations | `id`, `identifier`, `main_region_id` |
| `Regions` | Game regions | `id`, `identifier` |

## Next Steps

1. **Elasticsearch Integration**: These resolvers will eventually query Elasticsearch instead of direct SQL
2. **Custom Resolvers**: Add custom resolvers for complex queries and business logic
3. **Authentication**: Add authentication and authorization to the GraphQL API
4. **Caching**: Implement caching strategies for better performance

## Regeneration

To regenerate the types after schema changes:
```bash
npx prisma generate
```

## Notes

- All resolvers are read-only (no mutations)
- Relations are automatically handled
- Type safety is maintained throughout
- Compatible with Prisma 5.18.0 and TypeGraphQL
