import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { EncountersCountAggregate } from './encounters-count-aggregate.output';
import { EncountersAvgAggregate } from './encounters-avg-aggregate.output';
import { EncountersSumAggregate } from './encounters-sum-aggregate.output';
import { EncountersMinAggregate } from './encounters-min-aggregate.output';
import { EncountersMaxAggregate } from './encounters-max-aggregate.output';

@ObjectType()
export class AggregateEncounters {

    @Field(() => EncountersCountAggregate, {nullable:true})
    _count?: Identity<EncountersCountAggregate>;

    @Field(() => EncountersAvgAggregate, {nullable:true})
    _avg?: Identity<EncountersAvgAggregate>;

    @Field(() => EncountersSumAggregate, {nullable:true})
    _sum?: Identity<EncountersSumAggregate>;

    @Field(() => EncountersMinAggregate, {nullable:true})
    _min?: Identity<EncountersMinAggregate>;

    @Field(() => EncountersMaxAggregate, {nullable:true})
    _max?: Identity<EncountersMaxAggregate>;
}
