import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { EncounterMethodsCountAggregate } from './encounter-methods-count-aggregate.output';
import { EncounterMethodsAvgAggregate } from './encounter-methods-avg-aggregate.output';
import { EncounterMethodsSumAggregate } from './encounter-methods-sum-aggregate.output';
import { EncounterMethodsMinAggregate } from './encounter-methods-min-aggregate.output';
import { EncounterMethodsMaxAggregate } from './encounter-methods-max-aggregate.output';

@ObjectType()
export class EncounterMethodsGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => Int, {nullable:false})
    order!: number;

    @Field(() => EncounterMethodsCountAggregate, {nullable:true})
    _count?: Identity<EncounterMethodsCountAggregate>;

    @Field(() => EncounterMethodsAvgAggregate, {nullable:true})
    _avg?: Identity<EncounterMethodsAvgAggregate>;

    @Field(() => EncounterMethodsSumAggregate, {nullable:true})
    _sum?: Identity<EncounterMethodsSumAggregate>;

    @Field(() => EncounterMethodsMinAggregate, {nullable:true})
    _min?: Identity<EncounterMethodsMinAggregate>;

    @Field(() => EncounterMethodsMaxAggregate, {nullable:true})
    _max?: Identity<EncounterMethodsMaxAggregate>;
}
