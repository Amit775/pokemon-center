import { registerEnumType } from '@nestjs/graphql';

export enum PokemonHabitatsScalarFieldEnum {
    id = "id",
    identifier = "identifier"
}


registerEnumType(PokemonHabitatsScalarFieldEnum, { name: 'PokemonHabitatsScalarFieldEnum', description: undefined })
