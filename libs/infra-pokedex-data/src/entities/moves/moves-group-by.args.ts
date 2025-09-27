import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MovesWhereInput } from './moves-where.input';
import { Type } from 'class-transformer';
import { MovesOrderByWithAggregationInput } from './moves-order-by-with-aggregation.input';
import { MovesScalarFieldEnum } from './moves-scalar-field.enum';
import { MovesScalarWhereWithAggregatesInput } from './moves-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { MovesCountAggregateInput } from './moves-count-aggregate.input';
import { MovesAvgAggregateInput } from './moves-avg-aggregate.input';
import { MovesSumAggregateInput } from './moves-sum-aggregate.input';
import { MovesMinAggregateInput } from './moves-min-aggregate.input';
import { MovesMaxAggregateInput } from './moves-max-aggregate.input';

@ArgsType()
export class MovesGroupByArgs {

    @Field(() => MovesWhereInput, {nullable:true})
    @Type(() => MovesWhereInput)
    where?: MovesWhereInput;

    @Field(() => [MovesOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<MovesOrderByWithAggregationInput>;

    @Field(() => [MovesScalarFieldEnum], {nullable:false})
    by!: Array<`${MovesScalarFieldEnum}`>;

    @Field(() => MovesScalarWhereWithAggregatesInput, {nullable:true})
    having?: MovesScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => MovesCountAggregateInput, {nullable:true})
    _count?: MovesCountAggregateInput;

    @Field(() => MovesAvgAggregateInput, {nullable:true})
    _avg?: MovesAvgAggregateInput;

    @Field(() => MovesSumAggregateInput, {nullable:true})
    _sum?: MovesSumAggregateInput;

    @Field(() => MovesMinAggregateInput, {nullable:true})
    _min?: MovesMinAggregateInput;

    @Field(() => MovesMaxAggregateInput, {nullable:true})
    _max?: MovesMaxAggregateInput;
}
