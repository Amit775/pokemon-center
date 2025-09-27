import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Encounters } from '../encounters/encounters.model';
import { EncounterConditionValues } from '../encounter-condition-values/encounter-condition-values.model';

/**
 * @@TypeGraphQL.type(name: "EncounterConditionValueMap")
 */
@ObjectType({description:'@@TypeGraphQL.type(name: "EncounterConditionValueMap")'})
export class EncounterConditionValueMap {

    @Field(() => ID, {nullable:false})
    encounter_id!: number;

    @Field(() => Int, {nullable:false})
    encounter_condition_value_id!: number;

    @Field(() => Encounters, {nullable:false})
    encounter?: Encounters;

    @Field(() => EncounterConditionValues, {nullable:false})
    conditionValue?: EncounterConditionValues;
}
