# Pokedex Cleanup Executor

## Overview

**NOTE: This executor is no longer needed as the project no longer uses `typegraphql-prisma`.**

The Pokedex Cleanup Executor was designed to remove generated mutation resolvers from the `typegraphql-prisma` generator output to create a read-only GraphQL API. This executor was designed to work with the generated entities in the `libs/infra-pokedex-data/src/entities` directory.

## What It Does

The cleanup executor removes:

### 1. Individual Mutation Resolver Files
- `CreateMany{Model}Resolver.ts`
- `CreateOne{Model}Resolver.ts`
- `UpdateMany{Model}Resolver.ts`
- `UpdateOne{Model}Resolver.ts`
- `DeleteMany{Model}Resolver.ts`
- `DeleteOne{Model}Resolver.ts`
- `UpsertOne{Model}Resolver.ts`

### 2. Mutation Argument Files
- `CreateMany{Model}Args.ts`
- `CreateOne{Model}Args.ts`
- `UpdateMany{Model}Args.ts`
- `DeleteMany{Model}Args.ts`
- `UpsertOne{Model}Args.ts`

### 3. Cleans Up Main CRUD Resolvers
- Removes mutation-related imports
- Removes mutation methods (decorated with `@TypeGraphQL.Mutation`)
- Removes unused output type imports

### 4. Updates Index Files
- Removes exports for deleted mutation resolvers
- Cleans up `resolvers-crud.index.ts`
- Cleans up `resolvers-actions.index.ts`

## Usage

### Basic Usage
```bash
# Run cleanup on the default entities path
nx run pokedex:cleanup

# Run with custom entities path
nx run pokedex:cleanup --entitiesPath=libs/infra-pokedex-data/src/entities

# Dry run to see what would be deleted
nx run pokedex:cleanup --dryRun=true
```

### Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `entitiesPath` | string | `libs/infra-pokedex-data/src/entities` | Path to the generated entities directory |
| `dryRun` | boolean | `false` | Show what would be deleted without actually deleting files |

## Workflow Integration

### Typical Workflow (DEPRECATED)
1. **Generate entities** with `typegraphql-prisma` generator (NO LONGER USED)
2. **Run cleanup** to remove mutation resolvers (NO LONGER NEEDED)
3. **Build and test** your read-only GraphQL API

### Example Script
```bash
# Generate entities
npx prisma generate

# Clean up mutation resolvers
nx run pokedex:cleanup

# Build the project
nx run pokedex-service:build
```

## Safety Features

- **Dry Run Mode**: Use `--dryRun=true` to preview changes without making modifications
- **Backup Recommendation**: Consider committing your changes before running cleanup
- **Selective Cleanup**: Only removes files matching specific mutation patterns

## Troubleshooting

### Common Issues

1. **"Entities path does not exist"**
   - Ensure the `entitiesPath` points to the correct directory
   - Run `npx prisma generate` first to create the entities

2. **Import errors after cleanup**
   - The executor automatically removes unused imports
   - If issues persist, check for manual imports of deleted files

3. **Missing files after cleanup**
   - Use `--dryRun=true` to preview changes
   - Check the console output for detailed logging

### Logging

The executor provides detailed logging:
- `🔍` Scanning operations
- `📁` Directory discovery
- `🧹` Model cleanup
- `🗑️` File deletions
- `✏️` File modifications
- `[DRY RUN]` Preview operations

## Maintenance

Since the schema should stabilize after the first development stage, this executor should only need to be run when:
- Regenerating entities after schema changes
- Setting up the project in a new environment
- After major updates to the `typegraphql-prisma` generator

## Notes

- This executor is designed for the specific output structure of `typegraphql-prisma`
- It preserves all query resolvers and read-only operations
- The cleanup is idempotent - running it multiple times is safe
