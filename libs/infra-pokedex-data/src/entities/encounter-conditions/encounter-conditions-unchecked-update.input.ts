import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { EncounterConditionValuesUncheckedUpdateManyWithoutConditionNestedInput } from '../encounter-condition-values/encounter-condition-values-unchecked-update-many-without-condition-nested.input';

@InputType()
export class EncounterConditionsUncheckedUpdateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    identifier?: string;

    @Field(() => EncounterConditionValuesUncheckedUpdateManyWithoutConditionNestedInput, {nullable:true})
    values?: Identity<EncounterConditionValuesUncheckedUpdateManyWithoutConditionNestedInput>;
}
