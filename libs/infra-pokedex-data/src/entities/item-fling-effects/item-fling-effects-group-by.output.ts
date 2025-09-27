import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ItemFlingEffectsCountAggregate } from './item-fling-effects-count-aggregate.output';
import { ItemFlingEffectsAvgAggregate } from './item-fling-effects-avg-aggregate.output';
import { ItemFlingEffectsSumAggregate } from './item-fling-effects-sum-aggregate.output';
import { ItemFlingEffectsMinAggregate } from './item-fling-effects-min-aggregate.output';
import { ItemFlingEffectsMaxAggregate } from './item-fling-effects-max-aggregate.output';

@ObjectType()
export class ItemFlingEffectsGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => ItemFlingEffectsCountAggregate, {nullable:true})
    _count?: ItemFlingEffectsCountAggregate;

    @Field(() => ItemFlingEffectsAvgAggregate, {nullable:true})
    _avg?: ItemFlingEffectsAvgAggregate;

    @Field(() => ItemFlingEffectsSumAggregate, {nullable:true})
    _sum?: ItemFlingEffectsSumAggregate;

    @Field(() => ItemFlingEffectsMinAggregate, {nullable:true})
    _min?: ItemFlingEffectsMinAggregate;

    @Field(() => ItemFlingEffectsMaxAggregate, {nullable:true})
    _max?: ItemFlingEffectsMaxAggregate;
}
