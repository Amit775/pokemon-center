import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonColorsWhereInput } from './pokemon-colors-where.input';
import { Type } from 'class-transformer';
import { PokemonColorsOrderByWithRelationInput } from './pokemon-colors-order-by-with-relation.input';
import { Prisma } from '@pokemon-center/prisma';
import { PokemonColorsWhereUniqueInput } from './pokemon-colors-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PokemonColorsCountAggregateInput } from './pokemon-colors-count-aggregate.input';
import { PokemonColorsAvgAggregateInput } from './pokemon-colors-avg-aggregate.input';
import { PokemonColorsSumAggregateInput } from './pokemon-colors-sum-aggregate.input';
import { PokemonColorsMinAggregateInput } from './pokemon-colors-min-aggregate.input';
import { PokemonColorsMaxAggregateInput } from './pokemon-colors-max-aggregate.input';

@ArgsType()
export class PokemonColorsAggregateArgs {

    @Field(() => PokemonColorsWhereInput, {nullable:true})
    @Type(() => PokemonColorsWhereInput)
    where?: Identity<PokemonColorsWhereInput>;

    @Field(() => [PokemonColorsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PokemonColorsOrderByWithRelationInput>;

    @Field(() => PokemonColorsWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<PokemonColorsWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => PokemonColorsCountAggregateInput, {nullable:true})
    _count?: Identity<PokemonColorsCountAggregateInput>;

    @Field(() => PokemonColorsAvgAggregateInput, {nullable:true})
    _avg?: Identity<PokemonColorsAvgAggregateInput>;

    @Field(() => PokemonColorsSumAggregateInput, {nullable:true})
    _sum?: Identity<PokemonColorsSumAggregateInput>;

    @Field(() => PokemonColorsMinAggregateInput, {nullable:true})
    _min?: Identity<PokemonColorsMinAggregateInput>;

    @Field(() => PokemonColorsMaxAggregateInput, {nullable:true})
    _max?: Identity<PokemonColorsMaxAggregateInput>;
}
