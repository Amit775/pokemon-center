import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EggGroupsWhereInput } from './egg-groups-where.input';
import { Type } from 'class-transformer';
import { EggGroupsOrderByWithRelationInput } from './egg-groups-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { EggGroupsWhereUniqueInput } from './egg-groups-where-unique.input';
import { Int } from '@nestjs/graphql';
import { EggGroupsCountAggregateInput } from './egg-groups-count-aggregate.input';
import { EggGroupsAvgAggregateInput } from './egg-groups-avg-aggregate.input';
import { EggGroupsSumAggregateInput } from './egg-groups-sum-aggregate.input';
import { EggGroupsMinAggregateInput } from './egg-groups-min-aggregate.input';
import { EggGroupsMaxAggregateInput } from './egg-groups-max-aggregate.input';

@ArgsType()
export class EggGroupsAggregateArgs {

    @Field(() => EggGroupsWhereInput, {nullable:true})
    @Type(() => EggGroupsWhereInput)
    where?: EggGroupsWhereInput;

    @Field(() => [EggGroupsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<EggGroupsOrderByWithRelationInput>;

    @Field(() => EggGroupsWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<EggGroupsWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => EggGroupsCountAggregateInput, {nullable:true})
    _count?: EggGroupsCountAggregateInput;

    @Field(() => EggGroupsAvgAggregateInput, {nullable:true})
    _avg?: EggGroupsAvgAggregateInput;

    @Field(() => EggGroupsSumAggregateInput, {nullable:true})
    _sum?: EggGroupsSumAggregateInput;

    @Field(() => EggGroupsMinAggregateInput, {nullable:true})
    _min?: EggGroupsMinAggregateInput;

    @Field(() => EggGroupsMaxAggregateInput, {nullable:true})
    _max?: EggGroupsMaxAggregateInput;
}
