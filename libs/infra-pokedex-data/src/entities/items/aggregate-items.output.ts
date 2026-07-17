import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { ItemsCountAggregate } from './items-count-aggregate.output';
import { ItemsAvgAggregate } from './items-avg-aggregate.output';
import { ItemsSumAggregate } from './items-sum-aggregate.output';
import { ItemsMinAggregate } from './items-min-aggregate.output';
import { ItemsMaxAggregate } from './items-max-aggregate.output';

@ObjectType()
export class AggregateItems {

    @Field(() => ItemsCountAggregate, {nullable:true})
    _count?: Identity<ItemsCountAggregate>;

    @Field(() => ItemsAvgAggregate, {nullable:true})
    _avg?: Identity<ItemsAvgAggregate>;

    @Field(() => ItemsSumAggregate, {nullable:true})
    _sum?: Identity<ItemsSumAggregate>;

    @Field(() => ItemsMinAggregate, {nullable:true})
    _min?: Identity<ItemsMinAggregate>;

    @Field(() => ItemsMaxAggregate, {nullable:true})
    _max?: Identity<ItemsMaxAggregate>;
}
