import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { MoveDamageClassesCountAggregate } from './move-damage-classes-count-aggregate.output';
import { MoveDamageClassesAvgAggregate } from './move-damage-classes-avg-aggregate.output';
import { MoveDamageClassesSumAggregate } from './move-damage-classes-sum-aggregate.output';
import { MoveDamageClassesMinAggregate } from './move-damage-classes-min-aggregate.output';
import { MoveDamageClassesMaxAggregate } from './move-damage-classes-max-aggregate.output';

@ObjectType()
export class AggregateMoveDamageClasses {

    @Field(() => MoveDamageClassesCountAggregate, {nullable:true})
    _count?: MoveDamageClassesCountAggregate;

    @Field(() => MoveDamageClassesAvgAggregate, {nullable:true})
    _avg?: MoveDamageClassesAvgAggregate;

    @Field(() => MoveDamageClassesSumAggregate, {nullable:true})
    _sum?: MoveDamageClassesSumAggregate;

    @Field(() => MoveDamageClassesMinAggregate, {nullable:true})
    _min?: MoveDamageClassesMinAggregate;

    @Field(() => MoveDamageClassesMaxAggregate, {nullable:true})
    _max?: MoveDamageClassesMaxAggregate;
}
