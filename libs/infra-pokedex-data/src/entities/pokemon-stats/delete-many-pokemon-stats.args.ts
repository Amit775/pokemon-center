import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PokemonStatsWhereInput } from './pokemon-stats-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManyPokemonStatsArgs {

    @Field(() => PokemonStatsWhereInput, {nullable:true})
    @Type(() => PokemonStatsWhereInput)
    where?: PokemonStatsWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
