import { registerEnumType } from '@nestjs/graphql';

export enum PokemonColorsScalarFieldEnum {
    id = "id",
    identifier = "identifier"
}


registerEnumType(PokemonColorsScalarFieldEnum, { name: 'PokemonColorsScalarFieldEnum', description: undefined })
