import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { MoveDamageClassesCountAggregate } from './move-damage-classes-count-aggregate.output';
import { MoveDamageClassesAvgAggregate } from './move-damage-classes-avg-aggregate.output';
import { MoveDamageClassesSumAggregate } from './move-damage-classes-sum-aggregate.output';
import { MoveDamageClassesMinAggregate } from './move-damage-classes-min-aggregate.output';
import { MoveDamageClassesMaxAggregate } from './move-damage-classes-max-aggregate.output';

@ObjectType()
export class AggregateMoveDamageClasses {

    @Field(() => MoveDamageClassesCountAggregate, {nullable:true})
    _count?: Identity<MoveDamageClassesCountAggregate>;

    @Field(() => MoveDamageClassesAvgAggregate, {nullable:true})
    _avg?: Identity<MoveDamageClassesAvgAggregate>;

    @Field(() => MoveDamageClassesSumAggregate, {nullable:true})
    _sum?: Identity<MoveDamageClassesSumAggregate>;

    @Field(() => MoveDamageClassesMinAggregate, {nullable:true})
    _min?: Identity<MoveDamageClassesMinAggregate>;

    @Field(() => MoveDamageClassesMaxAggregate, {nullable:true})
    _max?: Identity<MoveDamageClassesMaxAggregate>;
}
