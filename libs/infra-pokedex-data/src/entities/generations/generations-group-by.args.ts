import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GenerationsWhereInput } from './generations-where.input';
import { Type } from 'class-transformer';
import { GenerationsOrderByWithAggregationInput } from './generations-order-by-with-aggregation.input';
import { GenerationsScalarFieldEnum } from './generations-scalar-field.enum';
import { GenerationsScalarWhereWithAggregatesInput } from './generations-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { GenerationsCountAggregateInput } from './generations-count-aggregate.input';
import { GenerationsAvgAggregateInput } from './generations-avg-aggregate.input';
import { GenerationsSumAggregateInput } from './generations-sum-aggregate.input';
import { GenerationsMinAggregateInput } from './generations-min-aggregate.input';
import { GenerationsMaxAggregateInput } from './generations-max-aggregate.input';

@ArgsType()
export class GenerationsGroupByArgs {

    @Field(() => GenerationsWhereInput, {nullable:true})
    @Type(() => GenerationsWhereInput)
    where?: GenerationsWhereInput;

    @Field(() => [GenerationsOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<GenerationsOrderByWithAggregationInput>;

    @Field(() => [GenerationsScalarFieldEnum], {nullable:false})
    by!: Array<`${GenerationsScalarFieldEnum}`>;

    @Field(() => GenerationsScalarWhereWithAggregatesInput, {nullable:true})
    having?: GenerationsScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => GenerationsCountAggregateInput, {nullable:true})
    _count?: GenerationsCountAggregateInput;

    @Field(() => GenerationsAvgAggregateInput, {nullable:true})
    _avg?: GenerationsAvgAggregateInput;

    @Field(() => GenerationsSumAggregateInput, {nullable:true})
    _sum?: GenerationsSumAggregateInput;

    @Field(() => GenerationsMinAggregateInput, {nullable:true})
    _min?: GenerationsMinAggregateInput;

    @Field(() => GenerationsMaxAggregateInput, {nullable:true})
    _max?: GenerationsMaxAggregateInput;
}
