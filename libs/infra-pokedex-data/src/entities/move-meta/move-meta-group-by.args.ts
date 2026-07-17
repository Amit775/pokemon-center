import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { MoveMetaWhereInput } from './move-meta-where.input';
import { Type } from 'class-transformer';
import { MoveMetaOrderByWithAggregationInput } from './move-meta-order-by-with-aggregation.input';
import { MoveMetaScalarFieldEnum } from './move-meta-scalar-field.enum';
import { MoveMetaScalarWhereWithAggregatesInput } from './move-meta-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { MoveMetaCountAggregateInput } from './move-meta-count-aggregate.input';
import { MoveMetaAvgAggregateInput } from './move-meta-avg-aggregate.input';
import { MoveMetaSumAggregateInput } from './move-meta-sum-aggregate.input';
import { MoveMetaMinAggregateInput } from './move-meta-min-aggregate.input';
import { MoveMetaMaxAggregateInput } from './move-meta-max-aggregate.input';

@ArgsType()
export class MoveMetaGroupByArgs {

    @Field(() => MoveMetaWhereInput, {nullable:true})
    @Type(() => MoveMetaWhereInput)
    where?: Identity<MoveMetaWhereInput>;

    @Field(() => [MoveMetaOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<MoveMetaOrderByWithAggregationInput>;

    @Field(() => [MoveMetaScalarFieldEnum], {nullable:false})
    by!: Array<`${MoveMetaScalarFieldEnum}`>;

    @Field(() => MoveMetaScalarWhereWithAggregatesInput, {nullable:true})
    having?: Identity<MoveMetaScalarWhereWithAggregatesInput>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => MoveMetaCountAggregateInput, {nullable:true})
    _count?: Identity<MoveMetaCountAggregateInput>;

    @Field(() => MoveMetaAvgAggregateInput, {nullable:true})
    _avg?: Identity<MoveMetaAvgAggregateInput>;

    @Field(() => MoveMetaSumAggregateInput, {nullable:true})
    _sum?: Identity<MoveMetaSumAggregateInput>;

    @Field(() => MoveMetaMinAggregateInput, {nullable:true})
    _min?: Identity<MoveMetaMinAggregateInput>;

    @Field(() => MoveMetaMaxAggregateInput, {nullable:true})
    _max?: Identity<MoveMetaMaxAggregateInput>;
}
