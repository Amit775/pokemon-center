import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MoveFlagMapWhereInput } from './move-flag-map-where.input';
import { Type } from 'class-transformer';
import { MoveFlagMapOrderByWithRelationInput } from './move-flag-map-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { MoveFlagMapWhereUniqueInput } from './move-flag-map-where-unique.input';
import { Int } from '@nestjs/graphql';
import { MoveFlagMapCountAggregateInput } from './move-flag-map-count-aggregate.input';
import { MoveFlagMapAvgAggregateInput } from './move-flag-map-avg-aggregate.input';
import { MoveFlagMapSumAggregateInput } from './move-flag-map-sum-aggregate.input';
import { MoveFlagMapMinAggregateInput } from './move-flag-map-min-aggregate.input';
import { MoveFlagMapMaxAggregateInput } from './move-flag-map-max-aggregate.input';

@ArgsType()
export class MoveFlagMapAggregateArgs {

    @Field(() => MoveFlagMapWhereInput, {nullable:true})
    @Type(() => MoveFlagMapWhereInput)
    where?: MoveFlagMapWhereInput;

    @Field(() => [MoveFlagMapOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<MoveFlagMapOrderByWithRelationInput>;

    @Field(() => MoveFlagMapWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<MoveFlagMapWhereUniqueInput, 'move_id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => MoveFlagMapCountAggregateInput, {nullable:true})
    _count?: MoveFlagMapCountAggregateInput;

    @Field(() => MoveFlagMapAvgAggregateInput, {nullable:true})
    _avg?: MoveFlagMapAvgAggregateInput;

    @Field(() => MoveFlagMapSumAggregateInput, {nullable:true})
    _sum?: MoveFlagMapSumAggregateInput;

    @Field(() => MoveFlagMapMinAggregateInput, {nullable:true})
    _min?: MoveFlagMapMinAggregateInput;

    @Field(() => MoveFlagMapMaxAggregateInput, {nullable:true})
    _max?: MoveFlagMapMaxAggregateInput;
}
