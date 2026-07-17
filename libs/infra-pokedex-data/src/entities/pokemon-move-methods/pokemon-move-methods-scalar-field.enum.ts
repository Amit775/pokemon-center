import { registerEnumType } from '@nestjs/graphql';

export enum PokemonMoveMethodsScalarFieldEnum {
    id = "id",
    identifier = "identifier"
}


registerEnumType(PokemonMoveMethodsScalarFieldEnum, { name: 'PokemonMoveMethodsScalarFieldEnum', description: undefined })
