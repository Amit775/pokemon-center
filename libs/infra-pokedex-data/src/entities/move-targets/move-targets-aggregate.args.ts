import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { MoveTargetsWhereInput } from './move-targets-where.input';
import { Type } from 'class-transformer';
import { MoveTargetsOrderByWithRelationInput } from './move-targets-order-by-with-relation.input';
import { Prisma } from '@pokemon-center/prisma';
import { MoveTargetsWhereUniqueInput } from './move-targets-where-unique.input';
import { Int } from '@nestjs/graphql';
import { MoveTargetsCountAggregateInput } from './move-targets-count-aggregate.input';
import { MoveTargetsAvgAggregateInput } from './move-targets-avg-aggregate.input';
import { MoveTargetsSumAggregateInput } from './move-targets-sum-aggregate.input';
import { MoveTargetsMinAggregateInput } from './move-targets-min-aggregate.input';
import { MoveTargetsMaxAggregateInput } from './move-targets-max-aggregate.input';

@ArgsType()
export class MoveTargetsAggregateArgs {

    @Field(() => MoveTargetsWhereInput, {nullable:true})
    @Type(() => MoveTargetsWhereInput)
    where?: Identity<MoveTargetsWhereInput>;

    @Field(() => [MoveTargetsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<MoveTargetsOrderByWithRelationInput>;

    @Field(() => MoveTargetsWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<MoveTargetsWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => MoveTargetsCountAggregateInput, {nullable:true})
    _count?: Identity<MoveTargetsCountAggregateInput>;

    @Field(() => MoveTargetsAvgAggregateInput, {nullable:true})
    _avg?: Identity<MoveTargetsAvgAggregateInput>;

    @Field(() => MoveTargetsSumAggregateInput, {nullable:true})
    _sum?: Identity<MoveTargetsSumAggregateInput>;

    @Field(() => MoveTargetsMinAggregateInput, {nullable:true})
    _min?: Identity<MoveTargetsMinAggregateInput>;

    @Field(() => MoveTargetsMaxAggregateInput, {nullable:true})
    _max?: Identity<MoveTargetsMaxAggregateInput>;
}
