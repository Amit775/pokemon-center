import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EvolutionChainsWhereInput } from './evolution-chains-where.input';
import { Type } from 'class-transformer';
import { EvolutionChainsOrderByWithRelationInput } from './evolution-chains-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
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
    where?: EvolutionChainsWhereInput;

    @Field(() => [EvolutionChainsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<EvolutionChainsOrderByWithRelationInput>;

    @Field(() => EvolutionChainsWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<EvolutionChainsWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => EvolutionChainsCountAggregateInput, {nullable:true})
    _count?: EvolutionChainsCountAggregateInput;

    @Field(() => EvolutionChainsAvgAggregateInput, {nullable:true})
    _avg?: EvolutionChainsAvgAggregateInput;

    @Field(() => EvolutionChainsSumAggregateInput, {nullable:true})
    _sum?: EvolutionChainsSumAggregateInput;

    @Field(() => EvolutionChainsMinAggregateInput, {nullable:true})
    _min?: EvolutionChainsMinAggregateInput;

    @Field(() => EvolutionChainsMaxAggregateInput, {nullable:true})
    _max?: EvolutionChainsMaxAggregateInput;
}
