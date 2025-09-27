import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SuperContestCombosWhereInput } from './super-contest-combos-where.input';
import { Type } from 'class-transformer';
import { SuperContestCombosOrderByWithAggregationInput } from './super-contest-combos-order-by-with-aggregation.input';
import { SuperContestCombosScalarFieldEnum } from './super-contest-combos-scalar-field.enum';
import { SuperContestCombosScalarWhereWithAggregatesInput } from './super-contest-combos-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { SuperContestCombosCountAggregateInput } from './super-contest-combos-count-aggregate.input';
import { SuperContestCombosAvgAggregateInput } from './super-contest-combos-avg-aggregate.input';
import { SuperContestCombosSumAggregateInput } from './super-contest-combos-sum-aggregate.input';
import { SuperContestCombosMinAggregateInput } from './super-contest-combos-min-aggregate.input';
import { SuperContestCombosMaxAggregateInput } from './super-contest-combos-max-aggregate.input';

@ArgsType()
export class SuperContestCombosGroupByArgs {

    @Field(() => SuperContestCombosWhereInput, {nullable:true})
    @Type(() => SuperContestCombosWhereInput)
    where?: SuperContestCombosWhereInput;

    @Field(() => [SuperContestCombosOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<SuperContestCombosOrderByWithAggregationInput>;

    @Field(() => [SuperContestCombosScalarFieldEnum], {nullable:false})
    by!: Array<`${SuperContestCombosScalarFieldEnum}`>;

    @Field(() => SuperContestCombosScalarWhereWithAggregatesInput, {nullable:true})
    having?: SuperContestCombosScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => SuperContestCombosCountAggregateInput, {nullable:true})
    _count?: SuperContestCombosCountAggregateInput;

    @Field(() => SuperContestCombosAvgAggregateInput, {nullable:true})
    _avg?: SuperContestCombosAvgAggregateInput;

    @Field(() => SuperContestCombosSumAggregateInput, {nullable:true})
    _sum?: SuperContestCombosSumAggregateInput;

    @Field(() => SuperContestCombosMinAggregateInput, {nullable:true})
    _min?: SuperContestCombosMinAggregateInput;

    @Field(() => SuperContestCombosMaxAggregateInput, {nullable:true})
    _max?: SuperContestCombosMaxAggregateInput;
}
