import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { CharacteristicsCountAggregate } from './characteristics-count-aggregate.output';
import { CharacteristicsAvgAggregate } from './characteristics-avg-aggregate.output';
import { CharacteristicsSumAggregate } from './characteristics-sum-aggregate.output';
import { CharacteristicsMinAggregate } from './characteristics-min-aggregate.output';
import { CharacteristicsMaxAggregate } from './characteristics-max-aggregate.output';

@ObjectType()
export class AggregateCharacteristics {

    @Field(() => CharacteristicsCountAggregate, {nullable:true})
    _count?: Identity<CharacteristicsCountAggregate>;

    @Field(() => CharacteristicsAvgAggregate, {nullable:true})
    _avg?: Identity<CharacteristicsAvgAggregate>;

    @Field(() => CharacteristicsSumAggregate, {nullable:true})
    _sum?: Identity<CharacteristicsSumAggregate>;

    @Field(() => CharacteristicsMinAggregate, {nullable:true})
    _min?: Identity<CharacteristicsMinAggregate>;

    @Field(() => CharacteristicsMaxAggregate, {nullable:true})
    _max?: Identity<CharacteristicsMaxAggregate>;
}
