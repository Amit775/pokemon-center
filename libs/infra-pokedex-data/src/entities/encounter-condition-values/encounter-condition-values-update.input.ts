import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { EncounterConditionsUpdateOneRequiredWithoutValuesNestedInput } from '../encounter-conditions/encounter-conditions-update-one-required-without-values-nested.input';
import { EncounterConditionValueMapUpdateManyWithoutConditionValueNestedInput } from '../encounter-condition-value-map/encounter-condition-value-map-update-many-without-condition-value-nested.input';

@InputType()
export class EncounterConditionValuesUpdateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    identifier?: string;

    @Field(() => Int, {nullable:true})
    is_default?: number;

    @Field(() => EncounterConditionsUpdateOneRequiredWithoutValuesNestedInput, {nullable:true})
    condition?: Identity<EncounterConditionsUpdateOneRequiredWithoutValuesNestedInput>;

    @Field(() => EncounterConditionValueMapUpdateManyWithoutConditionValueNestedInput, {nullable:true})
    conditionValueMap?: Identity<EncounterConditionValueMapUpdateManyWithoutConditionValueNestedInput>;
}
