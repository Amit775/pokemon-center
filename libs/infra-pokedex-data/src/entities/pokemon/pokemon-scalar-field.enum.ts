import { registerEnumType } from '@nestjs/graphql';

export enum PokemonScalarFieldEnum {
    id = "id",
    identifier = "identifier",
    species_id = "species_id",
    height = "height",
    weight = "weight",
    base_experience = "base_experience",
    order = "order",
    is_default = "is_default"
}


registerEnumType(PokemonScalarFieldEnum, { name: 'PokemonScalarFieldEnum', description: undefined })
