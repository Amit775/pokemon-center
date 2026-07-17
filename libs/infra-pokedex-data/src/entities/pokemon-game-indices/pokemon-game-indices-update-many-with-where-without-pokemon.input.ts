import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonGameIndicesScalarWhereInput } from './pokemon-game-indices-scalar-where.input';
import { Type } from 'class-transformer';
import { PokemonGameIndicesUpdateManyMutationInput } from './pokemon-game-indices-update-many-mutation.input';

@InputType()
export class PokemonGameIndicesUpdateManyWithWhereWithoutPokemonInput {

    @Field(() => PokemonGameIndicesScalarWhereInput, {nullable:false})
    @Type(() => PokemonGameIndicesScalarWhereInput)
    where!: Identity<PokemonGameIndicesScalarWhereInput>;

    @Field(() => PokemonGameIndicesUpdateManyMutationInput, {nullable:false})
    @Type(() => PokemonGameIndicesUpdateManyMutationInput)
    data!: Identity<PokemonGameIndicesUpdateManyMutationInput>;
}
