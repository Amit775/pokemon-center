import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { EncounterConditions } from '../encounter-conditions/encounter-conditions.model';
import { EncounterConditionValueMap } from '../encounter-condition-value-map/encounter-condition-value-map.model';
import { EncounterConditionValuesCount } from './encounter-condition-values-count.output';

/**
 * @@TypeGraphQL.type(name: "EncounterConditionValue")
 */
@ObjectType({description:'@@TypeGraphQL.type(name: "EncounterConditionValue")'})
export class EncounterConditionValues {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    encounter_condition_id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => Int, {nullable:false})
    is_default!: number;

    @Field(() => EncounterConditions, {nullable:false})
    condition?: EncounterConditions;

    @Field(() => [EncounterConditionValueMap], {nullable:true})
    conditionValueMap?: Array<EncounterConditionValueMap>;

    @Field(() => EncounterConditionValuesCount, {nullable:false})
    _count?: EncounterConditionValuesCount;
}
