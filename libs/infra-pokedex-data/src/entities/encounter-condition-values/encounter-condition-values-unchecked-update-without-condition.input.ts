import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { EncounterConditionValueMapUncheckedUpdateManyWithoutConditionValueNestedInput } from '../encounter-condition-value-map/encounter-condition-value-map-unchecked-update-many-without-condition-value-nested.input';

@InputType()
export class EncounterConditionValuesUncheckedUpdateWithoutConditionInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    identifier?: string;

    @Field(() => Int, {nullable:true})
    is_default?: number;

    @Field(() => EncounterConditionValueMapUncheckedUpdateManyWithoutConditionValueNestedInput, {nullable:true})
    conditionValueMap?: Identity<EncounterConditionValueMapUncheckedUpdateManyWithoutConditionValueNestedInput>;
}
