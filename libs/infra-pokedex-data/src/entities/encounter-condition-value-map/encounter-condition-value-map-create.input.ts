import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { EncountersCreateNestedOneWithoutConditionValueMapInput } from '../encounters/encounters-create-nested-one-without-condition-value-map.input';
import { EncounterConditionValuesCreateNestedOneWithoutConditionValueMapInput } from '../encounter-condition-values/encounter-condition-values-create-nested-one-without-condition-value-map.input';

@InputType()
export class EncounterConditionValueMapCreateInput {

    @Field(() => EncountersCreateNestedOneWithoutConditionValueMapInput, {nullable:false})
    encounter!: Identity<EncountersCreateNestedOneWithoutConditionValueMapInput>;

    @Field(() => EncounterConditionValuesCreateNestedOneWithoutConditionValueMapInput, {nullable:false})
    conditionValue!: Identity<EncounterConditionValuesCreateNestedOneWithoutConditionValueMapInput>;
}
