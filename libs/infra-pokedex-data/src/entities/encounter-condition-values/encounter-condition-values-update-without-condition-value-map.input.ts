import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { EncounterConditionsUpdateOneRequiredWithoutValuesNestedInput } from '../encounter-conditions/encounter-conditions-update-one-required-without-values-nested.input';

@InputType()
export class EncounterConditionValuesUpdateWithoutConditionValueMapInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    identifier?: string;

    @Field(() => Int, {nullable:true})
    is_default?: number;

    @Field(() => EncounterConditionsUpdateOneRequiredWithoutValuesNestedInput, {nullable:true})
    condition?: Identity<EncounterConditionsUpdateOneRequiredWithoutValuesNestedInput>;
}
