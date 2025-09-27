import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ItemGameIndicesWhereInput } from './item-game-indices-where.input';
import { Type } from 'class-transformer';
import { ItemGameIndicesOrderByWithAggregationInput } from './item-game-indices-order-by-with-aggregation.input';
import { ItemGameIndicesScalarFieldEnum } from './item-game-indices-scalar-field.enum';
import { ItemGameIndicesScalarWhereWithAggregatesInput } from './item-game-indices-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ItemGameIndicesCountAggregateInput } from './item-game-indices-count-aggregate.input';
import { ItemGameIndicesAvgAggregateInput } from './item-game-indices-avg-aggregate.input';
import { ItemGameIndicesSumAggregateInput } from './item-game-indices-sum-aggregate.input';
import { ItemGameIndicesMinAggregateInput } from './item-game-indices-min-aggregate.input';
import { ItemGameIndicesMaxAggregateInput } from './item-game-indices-max-aggregate.input';

@ArgsType()
export class ItemGameIndicesGroupByArgs {

    @Field(() => ItemGameIndicesWhereInput, {nullable:true})
    @Type(() => ItemGameIndicesWhereInput)
    where?: ItemGameIndicesWhereInput;

    @Field(() => [ItemGameIndicesOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ItemGameIndicesOrderByWithAggregationInput>;

    @Field(() => [ItemGameIndicesScalarFieldEnum], {nullable:false})
    by!: Array<`${ItemGameIndicesScalarFieldEnum}`>;

    @Field(() => ItemGameIndicesScalarWhereWithAggregatesInput, {nullable:true})
    having?: ItemGameIndicesScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ItemGameIndicesCountAggregateInput, {nullable:true})
    _count?: ItemGameIndicesCountAggregateInput;

    @Field(() => ItemGameIndicesAvgAggregateInput, {nullable:true})
    _avg?: ItemGameIndicesAvgAggregateInput;

    @Field(() => ItemGameIndicesSumAggregateInput, {nullable:true})
    _sum?: ItemGameIndicesSumAggregateInput;

    @Field(() => ItemGameIndicesMinAggregateInput, {nullable:true})
    _min?: ItemGameIndicesMinAggregateInput;

    @Field(() => ItemGameIndicesMaxAggregateInput, {nullable:true})
    _max?: ItemGameIndicesMaxAggregateInput;
}
