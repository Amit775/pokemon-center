import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonGameIndicesUpdateManyMutationInput } from './pokemon-game-indices-update-many-mutation.input';
import { Type } from 'class-transformer';
import { PokemonGameIndicesWhereInput } from './pokemon-game-indices-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyPokemonGameIndicesArgs {

    @Field(() => PokemonGameIndicesUpdateManyMutationInput, {nullable:false})
    @Type(() => PokemonGameIndicesUpdateManyMutationInput)
    data!: Identity<PokemonGameIndicesUpdateManyMutationInput>;

    @Field(() => PokemonGameIndicesWhereInput, {nullable:true})
    @Type(() => PokemonGameIndicesWhereInput)
    where?: Identity<PokemonGameIndicesWhereInput>;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
