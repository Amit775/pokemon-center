import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonEvolutionScalarWhereInput } from './pokemon-evolution-scalar-where.input';
import { Type } from 'class-transformer';
import { PokemonEvolutionUpdateManyMutationInput } from './pokemon-evolution-update-many-mutation.input';

@InputType()
export class PokemonEvolutionUpdateManyWithWhereWithoutPartySpeciesInput {

    @Field(() => PokemonEvolutionScalarWhereInput, {nullable:false})
    @Type(() => PokemonEvolutionScalarWhereInput)
    where!: Identity<PokemonEvolutionScalarWhereInput>;

    @Field(() => PokemonEvolutionUpdateManyMutationInput, {nullable:false})
    @Type(() => PokemonEvolutionUpdateManyMutationInput)
    data!: Identity<PokemonEvolutionUpdateManyMutationInput>;
}
