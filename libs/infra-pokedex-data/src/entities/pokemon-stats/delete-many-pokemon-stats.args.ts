import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonStatsWhereInput } from './pokemon-stats-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManyPokemonStatsArgs {

    @Field(() => PokemonStatsWhereInput, {nullable:true})
    @Type(() => PokemonStatsWhereInput)
    where?: Identity<PokemonStatsWhereInput>;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
