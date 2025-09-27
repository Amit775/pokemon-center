import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GendersWhereInput } from './genders-where.input';
import { Type } from 'class-transformer';
import { GendersOrderByWithAggregationInput } from './genders-order-by-with-aggregation.input';
import { GendersScalarFieldEnum } from './genders-scalar-field.enum';
import { GendersScalarWhereWithAggregatesInput } from './genders-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { GendersCountAggregateInput } from './genders-count-aggregate.input';
import { GendersAvgAggregateInput } from './genders-avg-aggregate.input';
import { GendersSumAggregateInput } from './genders-sum-aggregate.input';
import { GendersMinAggregateInput } from './genders-min-aggregate.input';
import { GendersMaxAggregateInput } from './genders-max-aggregate.input';

@ArgsType()
export class GendersGroupByArgs {

    @Field(() => GendersWhereInput, {nullable:true})
    @Type(() => GendersWhereInput)
    where?: GendersWhereInput;

    @Field(() => [GendersOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<GendersOrderByWithAggregationInput>;

    @Field(() => [GendersScalarFieldEnum], {nullable:false})
    by!: Array<`${GendersScalarFieldEnum}`>;

    @Field(() => GendersScalarWhereWithAggregatesInput, {nullable:true})
    having?: GendersScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => GendersCountAggregateInput, {nullable:true})
    _count?: GendersCountAggregateInput;

    @Field(() => GendersAvgAggregateInput, {nullable:true})
    _avg?: GendersAvgAggregateInput;

    @Field(() => GendersSumAggregateInput, {nullable:true})
    _sum?: GendersSumAggregateInput;

    @Field(() => GendersMinAggregateInput, {nullable:true})
    _min?: GendersMinAggregateInput;

    @Field(() => GendersMaxAggregateInput, {nullable:true})
    _max?: GendersMaxAggregateInput;
}
