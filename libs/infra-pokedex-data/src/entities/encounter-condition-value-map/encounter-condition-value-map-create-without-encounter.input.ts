import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { EncounterConditionValuesCreateNestedOneWithoutConditionValueMapInput } from '../encounter-condition-values/encounter-condition-values-create-nested-one-without-condition-value-map.input';

@InputType()
export class EncounterConditionValueMapCreateWithoutEncounterInput {

    @Field(() => EncounterConditionValuesCreateNestedOneWithoutConditionValueMapInput, {nullable:false})
    conditionValue!: Identity<EncounterConditionValuesCreateNestedOneWithoutConditionValueMapInput>;
}
