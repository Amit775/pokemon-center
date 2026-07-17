import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { ItemFlingEffectsCountAggregate } from './item-fling-effects-count-aggregate.output';
import { ItemFlingEffectsAvgAggregate } from './item-fling-effects-avg-aggregate.output';
import { ItemFlingEffectsSumAggregate } from './item-fling-effects-sum-aggregate.output';
import { ItemFlingEffectsMinAggregate } from './item-fling-effects-min-aggregate.output';
import { ItemFlingEffectsMaxAggregate } from './item-fling-effects-max-aggregate.output';

@ObjectType()
export class AggregateItemFlingEffects {

    @Field(() => ItemFlingEffectsCountAggregate, {nullable:true})
    _count?: Identity<ItemFlingEffectsCountAggregate>;

    @Field(() => ItemFlingEffectsAvgAggregate, {nullable:true})
    _avg?: Identity<ItemFlingEffectsAvgAggregate>;

    @Field(() => ItemFlingEffectsSumAggregate, {nullable:true})
    _sum?: Identity<ItemFlingEffectsSumAggregate>;

    @Field(() => ItemFlingEffectsMinAggregate, {nullable:true})
    _min?: Identity<ItemFlingEffectsMinAggregate>;

    @Field(() => ItemFlingEffectsMaxAggregate, {nullable:true})
    _max?: Identity<ItemFlingEffectsMaxAggregate>;
}
