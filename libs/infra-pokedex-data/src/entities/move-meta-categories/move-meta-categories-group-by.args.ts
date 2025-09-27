import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MoveMetaCategoriesWhereInput } from './move-meta-categories-where.input';
import { Type } from 'class-transformer';
import { MoveMetaCategoriesOrderByWithAggregationInput } from './move-meta-categories-order-by-with-aggregation.input';
import { MoveMetaCategoriesScalarFieldEnum } from './move-meta-categories-scalar-field.enum';
import { MoveMetaCategoriesScalarWhereWithAggregatesInput } from './move-meta-categories-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { MoveMetaCategoriesCountAggregateInput } from './move-meta-categories-count-aggregate.input';
import { MoveMetaCategoriesAvgAggregateInput } from './move-meta-categories-avg-aggregate.input';
import { MoveMetaCategoriesSumAggregateInput } from './move-meta-categories-sum-aggregate.input';
import { MoveMetaCategoriesMinAggregateInput } from './move-meta-categories-min-aggregate.input';
import { MoveMetaCategoriesMaxAggregateInput } from './move-meta-categories-max-aggregate.input';

@ArgsType()
export class MoveMetaCategoriesGroupByArgs {

    @Field(() => MoveMetaCategoriesWhereInput, {nullable:true})
    @Type(() => MoveMetaCategoriesWhereInput)
    where?: MoveMetaCategoriesWhereInput;

    @Field(() => [MoveMetaCategoriesOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<MoveMetaCategoriesOrderByWithAggregationInput>;

    @Field(() => [MoveMetaCategoriesScalarFieldEnum], {nullable:false})
    by!: Array<`${MoveMetaCategoriesScalarFieldEnum}`>;

    @Field(() => MoveMetaCategoriesScalarWhereWithAggregatesInput, {nullable:true})
    having?: MoveMetaCategoriesScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => MoveMetaCategoriesCountAggregateInput, {nullable:true})
    _count?: MoveMetaCategoriesCountAggregateInput;

    @Field(() => MoveMetaCategoriesAvgAggregateInput, {nullable:true})
    _avg?: MoveMetaCategoriesAvgAggregateInput;

    @Field(() => MoveMetaCategoriesSumAggregateInput, {nullable:true})
    _sum?: MoveMetaCategoriesSumAggregateInput;

    @Field(() => MoveMetaCategoriesMinAggregateInput, {nullable:true})
    _min?: MoveMetaCategoriesMinAggregateInput;

    @Field(() => MoveMetaCategoriesMaxAggregateInput, {nullable:true})
    _max?: MoveMetaCategoriesMaxAggregateInput;
}
