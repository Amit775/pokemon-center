import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { BerriesWhereInput } from './berries-where.input';
import { Type } from 'class-transformer';
import { BerriesOrderByWithAggregationInput } from './berries-order-by-with-aggregation.input';
import { BerriesScalarFieldEnum } from './berries-scalar-field.enum';
import { BerriesScalarWhereWithAggregatesInput } from './berries-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { BerriesCountAggregateInput } from './berries-count-aggregate.input';
import { BerriesAvgAggregateInput } from './berries-avg-aggregate.input';
import { BerriesSumAggregateInput } from './berries-sum-aggregate.input';
import { BerriesMinAggregateInput } from './berries-min-aggregate.input';
import { BerriesMaxAggregateInput } from './berries-max-aggregate.input';

@ArgsType()
export class BerriesGroupByArgs {

    @Field(() => BerriesWhereInput, {nullable:true})
    @Type(() => BerriesWhereInput)
    where?: Identity<BerriesWhereInput>;

    @Field(() => [BerriesOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<BerriesOrderByWithAggregationInput>;

    @Field(() => [BerriesScalarFieldEnum], {nullable:false})
    by!: Array<`${BerriesScalarFieldEnum}`>;

    @Field(() => BerriesScalarWhereWithAggregatesInput, {nullable:true})
    having?: Identity<BerriesScalarWhereWithAggregatesInput>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => BerriesCountAggregateInput, {nullable:true})
    _count?: Identity<BerriesCountAggregateInput>;

    @Field(() => BerriesAvgAggregateInput, {nullable:true})
    _avg?: Identity<BerriesAvgAggregateInput>;

    @Field(() => BerriesSumAggregateInput, {nullable:true})
    _sum?: Identity<BerriesSumAggregateInput>;

    @Field(() => BerriesMinAggregateInput, {nullable:true})
    _min?: Identity<BerriesMinAggregateInput>;

    @Field(() => BerriesMaxAggregateInput, {nullable:true})
    _max?: Identity<BerriesMaxAggregateInput>;
}
