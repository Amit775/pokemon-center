import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonFormGenerationsScalarWhereInput } from './pokemon-form-generations-scalar-where.input';
import { Type } from 'class-transformer';
import { PokemonFormGenerationsUpdateManyMutationInput } from './pokemon-form-generations-update-many-mutation.input';

@InputType()
export class PokemonFormGenerationsUpdateManyWithWhereWithoutPokemonFormInput {

    @Field(() => PokemonFormGenerationsScalarWhereInput, {nullable:false})
    @Type(() => PokemonFormGenerationsScalarWhereInput)
    where!: Identity<PokemonFormGenerationsScalarWhereInput>;

    @Field(() => PokemonFormGenerationsUpdateManyMutationInput, {nullable:false})
    @Type(() => PokemonFormGenerationsUpdateManyMutationInput)
    data!: Identity<PokemonFormGenerationsUpdateManyMutationInput>;
}
