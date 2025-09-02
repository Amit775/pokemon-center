# Pokedex Synchronizer Service

This service synchronizes Pokemon data from PostgreSQL to Elasticsearch, enabling powerful search functionality for the Pokedex domain.

## Overview

The Pokedex Synchronizer Service is responsible for:
- Fetching all Pokemon data from PostgreSQL using Prisma
- Transforming relational data into denormalized Elasticsearch documents
- Indexing documents into Elasticsearch with proper mappings
- Providing CLI commands for easy synchronization

## Features

- **Comprehensive Data Fetching**: Eager-loads all Pokemon relations (types, moves, abilities, stats)
- **Data Transformation**: Converts relational data to the specified Elasticsearch document schema
- **Bulk Indexing**: Efficiently indexes all documents using Elasticsearch bulk operations
- **Index Management**: Automatically creates and manages the Elasticsearch index
- **CLI Interface**: Simple command-line interface for running synchronization

## Prerequisites

- PostgreSQL database with Pokemon data (via Prisma)
- Elasticsearch cluster running
- Node.js and Yarn

## Environment Variables

Set these environment variables for Elasticsearch connection:

```bash
ELASTICSEARCH_NODE=http://localhost:9200
ELASTICSEARCH_USERNAME=elastic
ELASTICSEARCH_PASSWORD=changeme
```

## Usage

### Running Synchronization

To synchronize all Pokemon data from PostgreSQL to Elasticsearch:

```bash
yarn sync:pokedex
```

This command will:
1. Fetch all Pokemon data with relations from the database
2. Transform the data to Elasticsearch format
3. Create/refresh the Elasticsearch index
4. Bulk index all documents
5. Display synchronization status

### Manual Execution

You can also run the service directly:

```bash
nx run pokedex-synchronizer:serve
```

## Data Schema

The service transforms Pokemon data into the following Elasticsearch document structure:

```json
{
  "id": "pokemon:25",
  "pokedex_number": 25,
  "name": "Pikachu",
  "slug": "pikachu",
  "stats": {
    "hp": 35,
    "attack": 55,
    "defense": 40,
    "special_attack": 50,
    "special_defense": 50,
    "speed": 90
  },
  "types": [
    {
      "id": "type:electric",
      "name": "Electric",
      "slug": "electric"
    }
  ],
  "abilities": [
    {
      "id": "ability:9",
      "name": "Static",
      "slug": "static",
      "is_hidden": false
    }
  ],
  "moves": [
    {
      "id": "move:85",
      "name": "Thunderbolt",
      "slug": "thunderbolt",
      "power": 90,
      "type": {
        "id": "type:electric",
        "name": "Electric"
      },
      "damage_class": {
        "id": "damage_class:special",
        "name": "Special"
      }
    }
  ]
}
```

## Architecture

- **PokedexSynchronizerService**: Main orchestrator service
- **PokemonTransformerService**: Handles data transformation
- **PokedexElasticsearchService**: Manages Elasticsearch operations
- **SyncPokedexCommand**: CLI command interface

## Error Handling

The service includes comprehensive error handling:
- Database connection errors
- Elasticsearch connection issues
- Data transformation errors
- Bulk indexing failures

All errors are logged with appropriate context and the process exits with a non-zero code on failure.

## Monitoring

The service provides:
- Detailed logging throughout the synchronization process
- Index statistics after successful synchronization
- Status checking capabilities
- Performance metrics for bulk operations
