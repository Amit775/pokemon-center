import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { CharacteristicsCountAggregate } from './characteristics-count-aggregate.output';
import { CharacteristicsAvgAggregate } from './characteristics-avg-aggregate.output';
import { CharacteristicsSumAggregate } from './characteristics-sum-aggregate.output';
import { CharacteristicsMinAggregate } from './characteristics-min-aggregate.output';
import { CharacteristicsMaxAggregate } from './characteristics-max-aggregate.output';

@ObjectType()
export class AggregateCharacteristics {

    @Field(() => CharacteristicsCountAggregate, {nullable:true})
    _count?: CharacteristicsCountAggregate;

    @Field(() => CharacteristicsAvgAggregate, {nullable:true})
    _avg?: CharacteristicsAvgAggregate;

    @Field(() => CharacteristicsSumAggregate, {nullable:true})
    _sum?: CharacteristicsSumAggregate;

    @Field(() => CharacteristicsMinAggregate, {nullable:true})
    _min?: CharacteristicsMinAggregate;

    @Field(() => CharacteristicsMaxAggregate, {nullable:true})
    _max?: CharacteristicsMaxAggregate;
}
