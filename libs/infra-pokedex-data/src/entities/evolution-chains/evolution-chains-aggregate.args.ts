import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { EvolutionChainsWhereInput } from './evolution-chains-where.input';
import { Type } from 'class-transformer';
import { EvolutionChainsOrderByWithRelationInput } from './evolution-chains-order-by-with-relation.input';
import { Prisma } from '@pokemon-center/prisma';
import { EvolutionChainsWhereUniqueInput } from './evolution-chains-where-unique.input';
import { Int } from '@nestjs/graphql';
import { EvolutionChainsCountAggregateInput } from './evolution-chains-count-aggregate.input';
import { EvolutionChainsAvgAggregateInput } from './evolution-chains-avg-aggregate.input';
import { EvolutionChainsSumAggregateInput } from './evolution-chains-sum-aggregate.input';
import { EvolutionChainsMinAggregateInput } from './evolution-chains-min-aggregate.input';
import { EvolutionChainsMaxAggregateInput } from './evolution-chains-max-aggregate.input';

@ArgsType()
export class EvolutionChainsAggregateArgs {

    @Field(() => EvolutionChainsWhereInput, {nullable:true})
    @Type(() => EvolutionChainsWhereInput)
    where?: Identity<EvolutionChainsWhereInput>;

    @Field(() => [EvolutionChainsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<EvolutionChainsOrderByWithRelationInput>;

    @Field(() => EvolutionChainsWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<EvolutionChainsWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => EvolutionChainsCountAggregateInput, {nullable:true})
    _count?: Identity<EvolutionChainsCountAggregateInput>;

    @Field(() => EvolutionChainsAvgAggregateInput, {nullable:true})
    _avg?: Identity<EvolutionChainsAvgAggregateInput>;

    @Field(() => EvolutionChainsSumAggregateInput, {nullable:true})
    _sum?: Identity<EvolutionChainsSumAggregateInput>;

    @Field(() => EvolutionChainsMinAggregateInput, {nullable:true})
    _min?: Identity<EvolutionChainsMinAggregateInput>;

    @Field(() => EvolutionChainsMaxAggregateInput, {nullable:true})
    _max?: Identity<EvolutionChainsMaxAggregateInput>;
}
