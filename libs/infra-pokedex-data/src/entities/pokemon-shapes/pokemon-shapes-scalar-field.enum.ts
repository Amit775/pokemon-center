import { registerEnumType } from '@nestjs/graphql';

export enum PokemonShapesScalarFieldEnum {
    id = "id",
    identifier = "identifier"
}


registerEnumType(PokemonShapesScalarFieldEnum, { name: 'PokemonShapesScalarFieldEnum', description: undefined })
