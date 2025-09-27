import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ItemFlingEffectsWhereInput } from './item-fling-effects-where.input';
import { Type } from 'class-transformer';
import { ItemFlingEffectsOrderByWithRelationInput } from './item-fling-effects-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { ItemFlingEffectsWhereUniqueInput } from './item-fling-effects-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ItemFlingEffectsCountAggregateInput } from './item-fling-effects-count-aggregate.input';
import { ItemFlingEffectsAvgAggregateInput } from './item-fling-effects-avg-aggregate.input';
import { ItemFlingEffectsSumAggregateInput } from './item-fling-effects-sum-aggregate.input';
import { ItemFlingEffectsMinAggregateInput } from './item-fling-effects-min-aggregate.input';
import { ItemFlingEffectsMaxAggregateInput } from './item-fling-effects-max-aggregate.input';

@ArgsType()
export class ItemFlingEffectsAggregateArgs {

    @Field(() => ItemFlingEffectsWhereInput, {nullable:true})
    @Type(() => ItemFlingEffectsWhereInput)
    where?: ItemFlingEffectsWhereInput;

    @Field(() => [ItemFlingEffectsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ItemFlingEffectsOrderByWithRelationInput>;

    @Field(() => ItemFlingEffectsWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ItemFlingEffectsWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ItemFlingEffectsCountAggregateInput, {nullable:true})
    _count?: ItemFlingEffectsCountAggregateInput;

    @Field(() => ItemFlingEffectsAvgAggregateInput, {nullable:true})
    _avg?: ItemFlingEffectsAvgAggregateInput;

    @Field(() => ItemFlingEffectsSumAggregateInput, {nullable:true})
    _sum?: ItemFlingEffectsSumAggregateInput;

    @Field(() => ItemFlingEffectsMinAggregateInput, {nullable:true})
    _min?: ItemFlingEffectsMinAggregateInput;

    @Field(() => ItemFlingEffectsMaxAggregateInput, {nullable:true})
    _max?: ItemFlingEffectsMaxAggregateInput;
}
