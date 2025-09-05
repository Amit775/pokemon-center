const fs = require('fs');
const path = require('path');

// Read the schema file
const schemaPath = path.join(__dirname, 'prisma', 'schema.prisma');
const schemaContent = fs.readFileSync(schemaPath, 'utf8');

// Extract model definitions
const modelRegex = /model\s+(\w+)\s*\{([^}]+)\}/g;
const models = [];
let match;

while ((match = modelRegex.exec(schemaContent)) !== null) {
  const modelName = match[1];
  const modelBody = match[2];
  
  // Include all models
  models.push({ name: modelName, body: modelBody });
}

// Function to convert Prisma type to GraphQL type
function getGraphQLType(prismaType) {
  if (prismaType.includes('Int')) {
    return 'Int';
  } else if (prismaType.includes('String')) {
    return 'String';
  } else if (prismaType.includes('Boolean')) {
    return 'Boolean';
  } else if (prismaType.includes('Float')) {
    return 'Float';
  }
  return 'String'; // default
}

// Function to check if field is nullable
function isNullable(field) {
  return field.includes('?');
}

// Function to extract field name and type from field definition
function parseField(fieldLine) {
  const trimmed = fieldLine.trim();
  if (!trimmed || trimmed.startsWith('//') || trimmed.startsWith('@@') || trimmed.startsWith('model')) {
    return null;
  }
  
  // Handle field definitions like "id Int @id" or "name String?" or "field_name Int?"
  const fieldMatch = trimmed.match(/^(\w+)\s+(\w+\??)/);
  if (!fieldMatch) return null;
  
  const fieldName = fieldMatch[1];
  const fieldType = fieldMatch[2];
  
  return {
    name: fieldName,
    type: fieldType,
    nullable: isNullable(fieldType)
  };
}

// Function to get the table name from @@map
function getTableName(modelBody) {
  const mapMatch = modelBody.match(/@@map\("([^"]+)"\)/);
  return mapMatch ? mapMatch[1] : null;
}

// Function to convert camelCase to kebab-case
function camelToKebab(str) {
  return str.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
}

// Function to generate entity file content
function generateEntityContent(modelName, modelBody) {
  const tableName = getTableName(modelBody);
  const lines = modelBody.split('\n');
  const fields = [];
  
  for (const line of lines) {
    const field = parseField(line);
    if (field) {
      fields.push(field);
    }
  }
  
  
  let content = `import { Field, Int, ObjectType } from '@nestjs/graphql';\n`;
  content += `import { ${modelName} as Prisma${modelName} } from '@prisma/client';\n\n`;
  content += `@ObjectType()\n`;
  content += `export class ${modelName} implements Prisma${modelName} {\n`;
  
  for (const field of fields) {
    const graphqlType = getGraphQLType(field.type);
    const nullable = field.nullable ? ', { nullable: true }' : '';
    
    if (graphqlType === 'Int') {
      content += `  @Field(() => Int${nullable})\n`;
      content += `  ${field.name}: number;\n\n`;
    } else {
      content += `  @Field(() => String${nullable})\n`;
      content += `  ${field.name}: string;\n\n`;
    }
  }
  
  content += `}\n`;
  
  return content;
}

// Generate entity files for models that don't exist yet
const entitiesDir = path.join(__dirname, 'apps', 'pokedex-service', 'src', 'app', 'entities');

// List of models we've already created manually
const existingEntities = [
  'Pokemon', 'PokemonSpecies', 'PokemonForms', 'Moves', 'MoveEffects', 'MoveTargets',
  'MoveDamageClasses', 'Types', 'Abilities', 'Items', 'ItemCategories', 'ItemPockets',
  'Stats', 'Generations', 'VersionGroups', 'Versions', 'Regions', 'Locations',
  'LocationAreas', 'Languages', 'Pokedexes', 'PokemonAbilities', 'PokemonAbilitiesPast',
  'PokemonMoves', 'PokemonStats', 'PokemonTypes', 'PokemonTypesPast',
  'PokemonSpeciesNames', 'MoveNames', 'TypeNames', 'AbilityNames', 'ItemNames',
  'StatNames', 'Translations'
];

// Generate all entity files (regenerate existing ones)
for (const model of models) {
  const entityContent = generateEntityContent(model.name, model.body);
  const fileName = `${camelToKebab(model.name)}.entity.ts`;
  const filePath = path.join(entitiesDir, fileName);
  
  fs.writeFileSync(filePath, entityContent);
  console.log(`Generated: ${fileName}`);
}

console.log('Entity generation complete!');
