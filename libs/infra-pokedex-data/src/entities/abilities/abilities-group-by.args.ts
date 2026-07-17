import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { AbilitiesWhereInput } from './abilities-where.input';
import { Type } from 'class-transformer';
import { AbilitiesOrderByWithAggregationInput } from './abilities-order-by-with-aggregation.input';
import { AbilitiesScalarFieldEnum } from './abilities-scalar-field.enum';
import { AbilitiesScalarWhereWithAggregatesInput } from './abilities-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { AbilitiesCountAggregateInput } from './abilities-count-aggregate.input';
import { AbilitiesAvgAggregateInput } from './abilities-avg-aggregate.input';
import { AbilitiesSumAggregateInput } from './abilities-sum-aggregate.input';
import { AbilitiesMinAggregateInput } from './abilities-min-aggregate.input';
import { AbilitiesMaxAggregateInput } from './abilities-max-aggregate.input';

@ArgsType()
export class AbilitiesGroupByArgs {

    @Field(() => AbilitiesWhereInput, {nullable:true})
    @Type(() => AbilitiesWhereInput)
    where?: Identity<AbilitiesWhereInput>;

    @Field(() => [AbilitiesOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<AbilitiesOrderByWithAggregationInput>;

    @Field(() => [AbilitiesScalarFieldEnum], {nullable:false})
    by!: Array<`${AbilitiesScalarFieldEnum}`>;

    @Field(() => AbilitiesScalarWhereWithAggregatesInput, {nullable:true})
    having?: Identity<AbilitiesScalarWhereWithAggregatesInput>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => AbilitiesCountAggregateInput, {nullable:true})
    _count?: Identity<AbilitiesCountAggregateInput>;

    @Field(() => AbilitiesAvgAggregateInput, {nullable:true})
    _avg?: Identity<AbilitiesAvgAggregateInput>;

    @Field(() => AbilitiesSumAggregateInput, {nullable:true})
    _sum?: Identity<AbilitiesSumAggregateInput>;

    @Field(() => AbilitiesMinAggregateInput, {nullable:true})
    _min?: Identity<AbilitiesMinAggregateInput>;

    @Field(() => AbilitiesMaxAggregateInput, {nullable:true})
    _max?: Identity<AbilitiesMaxAggregateInput>;
}
