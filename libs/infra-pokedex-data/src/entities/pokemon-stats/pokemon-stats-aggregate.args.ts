import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PokemonStatsWhereInput } from './pokemon-stats-where.input';
import { Type } from 'class-transformer';
import { PokemonStatsOrderByWithRelationInput } from './pokemon-stats-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { PokemonStatsWhereUniqueInput } from './pokemon-stats-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PokemonStatsCountAggregateInput } from './pokemon-stats-count-aggregate.input';
import { PokemonStatsAvgAggregateInput } from './pokemon-stats-avg-aggregate.input';
import { PokemonStatsSumAggregateInput } from './pokemon-stats-sum-aggregate.input';
import { PokemonStatsMinAggregateInput } from './pokemon-stats-min-aggregate.input';
import { PokemonStatsMaxAggregateInput } from './pokemon-stats-max-aggregate.input';

@ArgsType()
export class PokemonStatsAggregateArgs {

    @Field(() => PokemonStatsWhereInput, {nullable:true})
    @Type(() => PokemonStatsWhereInput)
    where?: PokemonStatsWhereInput;

    @Field(() => [PokemonStatsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PokemonStatsOrderByWithRelationInput>;

    @Field(() => PokemonStatsWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<PokemonStatsWhereUniqueInput, 'pokemon_id_stat_id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => PokemonStatsCountAggregateInput, {nullable:true})
    _count?: PokemonStatsCountAggregateInput;

    @Field(() => PokemonStatsAvgAggregateInput, {nullable:true})
    _avg?: PokemonStatsAvgAggregateInput;

    @Field(() => PokemonStatsSumAggregateInput, {nullable:true})
    _sum?: PokemonStatsSumAggregateInput;

    @Field(() => PokemonStatsMinAggregateInput, {nullable:true})
    _min?: PokemonStatsMinAggregateInput;

    @Field(() => PokemonStatsMaxAggregateInput, {nullable:true})
    _max?: PokemonStatsMaxAggregateInput;
}
