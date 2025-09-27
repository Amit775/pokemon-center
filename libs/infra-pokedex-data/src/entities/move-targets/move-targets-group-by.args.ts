import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MoveTargetsWhereInput } from './move-targets-where.input';
import { Type } from 'class-transformer';
import { MoveTargetsOrderByWithAggregationInput } from './move-targets-order-by-with-aggregation.input';
import { MoveTargetsScalarFieldEnum } from './move-targets-scalar-field.enum';
import { MoveTargetsScalarWhereWithAggregatesInput } from './move-targets-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { MoveTargetsCountAggregateInput } from './move-targets-count-aggregate.input';
import { MoveTargetsAvgAggregateInput } from './move-targets-avg-aggregate.input';
import { MoveTargetsSumAggregateInput } from './move-targets-sum-aggregate.input';
import { MoveTargetsMinAggregateInput } from './move-targets-min-aggregate.input';
import { MoveTargetsMaxAggregateInput } from './move-targets-max-aggregate.input';

@ArgsType()
export class MoveTargetsGroupByArgs {

    @Field(() => MoveTargetsWhereInput, {nullable:true})
    @Type(() => MoveTargetsWhereInput)
    where?: MoveTargetsWhereInput;

    @Field(() => [MoveTargetsOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<MoveTargetsOrderByWithAggregationInput>;

    @Field(() => [MoveTargetsScalarFieldEnum], {nullable:false})
    by!: Array<`${MoveTargetsScalarFieldEnum}`>;

    @Field(() => MoveTargetsScalarWhereWithAggregatesInput, {nullable:true})
    having?: MoveTargetsScalarWhereWithAggregatesInput;

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
