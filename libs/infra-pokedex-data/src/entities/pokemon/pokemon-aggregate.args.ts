import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonWhereInput } from './pokemon-where.input';
import { Type } from 'class-transformer';
import { PokemonOrderByWithRelationInput } from './pokemon-order-by-with-relation.input';
import { Prisma } from '@pokemon-center/prisma';
import { PokemonWhereUniqueInput } from './pokemon-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PokemonCountAggregateInput } from './pokemon-count-aggregate.input';
import { PokemonAvgAggregateInput } from './pokemon-avg-aggregate.input';
import { PokemonSumAggregateInput } from './pokemon-sum-aggregate.input';
import { PokemonMinAggregateInput } from './pokemon-min-aggregate.input';
import { PokemonMaxAggregateInput } from './pokemon-max-aggregate.input';

@ArgsType()
export class PokemonAggregateArgs {

    @Field(() => PokemonWhereInput, {nullable:true})
    @Type(() => PokemonWhereInput)
    where?: Identity<PokemonWhereInput>;

    @Field(() => [PokemonOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PokemonOrderByWithRelationInput>;

    @Field(() => PokemonWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<PokemonWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => PokemonCountAggregateInput, {nullable:true})
    _count?: Identity<PokemonCountAggregateInput>;

    @Field(() => PokemonAvgAggregateInput, {nullable:true})
    _avg?: Identity<PokemonAvgAggregateInput>;

    @Field(() => PokemonSumAggregateInput, {nullable:true})
    _sum?: Identity<PokemonSumAggregateInput>;

    @Field(() => PokemonMinAggregateInput, {nullable:true})
    _min?: Identity<PokemonMinAggregateInput>;

    @Field(() => PokemonMaxAggregateInput, {nullable:true})
    _max?: Identity<PokemonMaxAggregateInput>;
}
