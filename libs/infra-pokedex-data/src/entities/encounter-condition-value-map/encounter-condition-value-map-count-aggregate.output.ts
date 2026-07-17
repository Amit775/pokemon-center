import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class EncounterConditionValueMapCountAggregate {

    @Field(() => Int, {nullable:false})
    encounter_id!: number;

    @Field(() => Int, {nullable:false})
    encounter_condition_value_id!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
