import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { EncounterConditionValuesUpdateManyWithoutConditionNestedInput } from '../encounter-condition-values/encounter-condition-values-update-many-without-condition-nested.input';

@InputType()
export class EncounterConditionsUpdateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    identifier?: string;

    @Field(() => EncounterConditionValuesUpdateManyWithoutConditionNestedInput, {nullable:true})
    values?: Identity<EncounterConditionValuesUpdateManyWithoutConditionNestedInput>;
}
