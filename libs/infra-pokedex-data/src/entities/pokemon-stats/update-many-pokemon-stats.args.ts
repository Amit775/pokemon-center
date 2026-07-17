import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonStatsUpdateManyMutationInput } from './pokemon-stats-update-many-mutation.input';
import { Type } from 'class-transformer';
import { PokemonStatsWhereInput } from './pokemon-stats-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyPokemonStatsArgs {

    @Field(() => PokemonStatsUpdateManyMutationInput, {nullable:false})
    @Type(() => PokemonStatsUpdateManyMutationInput)
    data!: Identity<PokemonStatsUpdateManyMutationInput>;

    @Field(() => PokemonStatsWhereInput, {nullable:true})
    @Type(() => PokemonStatsWhereInput)
    where?: Identity<PokemonStatsWhereInput>;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
