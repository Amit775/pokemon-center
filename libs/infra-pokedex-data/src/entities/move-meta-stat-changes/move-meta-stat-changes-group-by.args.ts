import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MoveMetaStatChangesWhereInput } from './move-meta-stat-changes-where.input';
import { Type } from 'class-transformer';
import { MoveMetaStatChangesOrderByWithAggregationInput } from './move-meta-stat-changes-order-by-with-aggregation.input';
import { MoveMetaStatChangesScalarFieldEnum } from './move-meta-stat-changes-scalar-field.enum';
import { MoveMetaStatChangesScalarWhereWithAggregatesInput } from './move-meta-stat-changes-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { MoveMetaStatChangesCountAggregateInput } from './move-meta-stat-changes-count-aggregate.input';
import { MoveMetaStatChangesAvgAggregateInput } from './move-meta-stat-changes-avg-aggregate.input';
import { MoveMetaStatChangesSumAggregateInput } from './move-meta-stat-changes-sum-aggregate.input';
import { MoveMetaStatChangesMinAggregateInput } from './move-meta-stat-changes-min-aggregate.input';
import { MoveMetaStatChangesMaxAggregateInput } from './move-meta-stat-changes-max-aggregate.input';

@ArgsType()
export class MoveMetaStatChangesGroupByArgs {

    @Field(() => MoveMetaStatChangesWhereInput, {nullable:true})
    @Type(() => MoveMetaStatChangesWhereInput)
    where?: MoveMetaStatChangesWhereInput;

    @Field(() => [MoveMetaStatChangesOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<MoveMetaStatChangesOrderByWithAggregationInput>;

    @Field(() => [MoveMetaStatChangesScalarFieldEnum], {nullable:false})
    by!: Array<`${MoveMetaStatChangesScalarFieldEnum}`>;

    @Field(() => MoveMetaStatChangesScalarWhereWithAggregatesInput, {nullable:true})
    having?: MoveMetaStatChangesScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => MoveMetaStatChangesCountAggregateInput, {nullable:true})
    _count?: MoveMetaStatChangesCountAggregateInput;

    @Field(() => MoveMetaStatChangesAvgAggregateInput, {nullable:true})
    _avg?: MoveMetaStatChangesAvgAggregateInput;

    @Field(() => MoveMetaStatChangesSumAggregateInput, {nullable:true})
    _sum?: MoveMetaStatChangesSumAggregateInput;

    @Field(() => MoveMetaStatChangesMinAggregateInput, {nullable:true})
    _min?: MoveMetaStatChangesMinAggregateInput;

    @Field(() => MoveMetaStatChangesMaxAggregateInput, {nullable:true})
    _max?: MoveMetaStatChangesMaxAggregateInput;
}
