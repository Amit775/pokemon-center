# CSV Processor Service

This NestJS service is responsible for reading CSV files from the `data/csv` directory and inserting the data into the SQL database.

## Features

- Reads CSV files from `data/csv` directory
- Transforms each row into the relevant table schema
- Inserts data into the SQL database using Prisma
- Supports all Pokemon-related entities:
  - Pokemon
  - Types
  - Moves
  - Abilities
  - Stats
  - Items
  - Damage Classes
  - Pokemon-to-Type relationships
  - Pokemon-to-Move relationships
  - Pokemon-to-Ability relationships
  - Pokemon-to-Stat relationships

## Usage

### Start the service
```bash
npx nx serve csv-processor
```

### Process CSV files
Send a POST request to the `/process-csv` endpoint:
```bash
curl -X POST http://localhost:3000/process-csv
```

## Architecture

The service uses:
- **NestJS** for the application framework
- **Prisma** for database operations
- **csv-parser** for reading CSV files

## CSV File Mapping

The service automatically maps CSV files to database tables based on filename:

- `pokemon.csv` → `Pokemon` table
- `types.csv` → `Type` table
- `moves.csv` → `Move` table
- `abilities.csv` → `Ability` table
- `stats.csv` → `Stat` table
- `items.csv` → `Item` table
- `damage_classes.csv` → `DamageClass` table
- `pokemon_types.csv` → `PokemonToType` table
- `pokemon_moves.csv` → `PokemonToMove` table
- `pokemon_abilities.csv` → `PokemonToAbility` table
- `pokemon_stats.csv` → `PokemonToStat` table

## Database Schema

The service expects the database to be set up with the Prisma schema defined in `prisma/schema.prisma`. Make sure to run `npx prisma migrate dev` before processing CSV files.
