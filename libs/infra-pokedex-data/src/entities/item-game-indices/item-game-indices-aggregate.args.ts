import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ItemGameIndicesWhereInput } from './item-game-indices-where.input';
import { Type } from 'class-transformer';
import { ItemGameIndicesOrderByWithRelationInput } from './item-game-indices-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { ItemGameIndicesWhereUniqueInput } from './item-game-indices-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ItemGameIndicesCountAggregateInput } from './item-game-indices-count-aggregate.input';
import { ItemGameIndicesAvgAggregateInput } from './item-game-indices-avg-aggregate.input';
import { ItemGameIndicesSumAggregateInput } from './item-game-indices-sum-aggregate.input';
import { ItemGameIndicesMinAggregateInput } from './item-game-indices-min-aggregate.input';
import { ItemGameIndicesMaxAggregateInput } from './item-game-indices-max-aggregate.input';

@ArgsType()
export class ItemGameIndicesAggregateArgs {

    @Field(() => ItemGameIndicesWhereInput, {nullable:true})
    @Type(() => ItemGameIndicesWhereInput)
    where?: ItemGameIndicesWhereInput;

    @Field(() => [ItemGameIndicesOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ItemGameIndicesOrderByWithRelationInput>;

    @Field(() => ItemGameIndicesWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ItemGameIndicesWhereUniqueInput, 'item_id_generation_id'>;

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
