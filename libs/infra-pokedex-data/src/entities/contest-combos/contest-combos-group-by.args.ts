import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ContestCombosWhereInput } from './contest-combos-where.input';
import { Type } from 'class-transformer';
import { ContestCombosOrderByWithAggregationInput } from './contest-combos-order-by-with-aggregation.input';
import { ContestCombosScalarFieldEnum } from './contest-combos-scalar-field.enum';
import { ContestCombosScalarWhereWithAggregatesInput } from './contest-combos-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ContestCombosCountAggregateInput } from './contest-combos-count-aggregate.input';
import { ContestCombosAvgAggregateInput } from './contest-combos-avg-aggregate.input';
import { ContestCombosSumAggregateInput } from './contest-combos-sum-aggregate.input';
import { ContestCombosMinAggregateInput } from './contest-combos-min-aggregate.input';
import { ContestCombosMaxAggregateInput } from './contest-combos-max-aggregate.input';

@ArgsType()
export class ContestCombosGroupByArgs {

    @Field(() => ContestCombosWhereInput, {nullable:true})
    @Type(() => ContestCombosWhereInput)
    where?: ContestCombosWhereInput;

    @Field(() => [ContestCombosOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ContestCombosOrderByWithAggregationInput>;

    @Field(() => [ContestCombosScalarFieldEnum], {nullable:false})
    by!: Array<`${ContestCombosScalarFieldEnum}`>;

    @Field(() => ContestCombosScalarWhereWithAggregatesInput, {nullable:true})
    having?: ContestCombosScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ContestCombosCountAggregateInput, {nullable:true})
    _count?: ContestCombosCountAggregateInput;

    @Field(() => ContestCombosAvgAggregateInput, {nullable:true})
    _avg?: ContestCombosAvgAggregateInput;

    @Field(() => ContestCombosSumAggregateInput, {nullable:true})
    _sum?: ContestCombosSumAggregateInput;

    @Field(() => ContestCombosMinAggregateInput, {nullable:true})
    _min?: ContestCombosMinAggregateInput;

    @Field(() => ContestCombosMaxAggregateInput, {nullable:true})
    _max?: ContestCombosMaxAggregateInput;
}
