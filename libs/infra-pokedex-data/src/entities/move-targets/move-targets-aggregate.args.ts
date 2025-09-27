import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MoveTargetsWhereInput } from './move-targets-where.input';
import { Type } from 'class-transformer';
import { MoveTargetsOrderByWithRelationInput } from './move-targets-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
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
    where?: MoveTargetsWhereInput;

    @Field(() => [MoveTargetsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<MoveTargetsOrderByWithRelationInput>;

    @Field(() => MoveTargetsWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<MoveTargetsWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => MoveTargetsCountAggregateInput, {nullable:true})
    _count?: MoveTargetsCountAggregateInput;

    @Field(() => MoveTargetsAvgAggregateInput, {nullable:true})
    _avg?: MoveTargetsAvgAggregateInput;

    @Field(() => MoveTargetsSumAggregateInput, {nullable:true})
    _sum?: MoveTargetsSumAggregateInput;

    @Field(() => MoveTargetsMinAggregateInput, {nullable:true})
    _min?: MoveTargetsMinAggregateInput;

    @Field(() => MoveTargetsMaxAggregateInput, {nullable:true})
    _max?: MoveTargetsMaxAggregateInput;
}
