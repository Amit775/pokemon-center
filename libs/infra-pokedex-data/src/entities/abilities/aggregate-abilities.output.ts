import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { AbilitiesCountAggregate } from './abilities-count-aggregate.output';
import { AbilitiesAvgAggregate } from './abilities-avg-aggregate.output';
import { AbilitiesSumAggregate } from './abilities-sum-aggregate.output';
import { AbilitiesMinAggregate } from './abilities-min-aggregate.output';
import { AbilitiesMaxAggregate } from './abilities-max-aggregate.output';

@ObjectType()
export class AggregateAbilities {

    @Field(() => AbilitiesCountAggregate, {nullable:true})
    _count?: Identity<AbilitiesCountAggregate>;

    @Field(() => AbilitiesAvgAggregate, {nullable:true})
    _avg?: Identity<AbilitiesAvgAggregate>;

    @Field(() => AbilitiesSumAggregate, {nullable:true})
    _sum?: Identity<AbilitiesSumAggregate>;

    @Field(() => AbilitiesMinAggregate, {nullable:true})
    _min?: Identity<AbilitiesMinAggregate>;

    @Field(() => AbilitiesMaxAggregate, {nullable:true})
    _max?: Identity<AbilitiesMaxAggregate>;
}
