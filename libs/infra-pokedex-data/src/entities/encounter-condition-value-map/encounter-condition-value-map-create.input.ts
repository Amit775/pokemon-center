import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EncountersCreateNestedOneWithoutConditionValueMapInput } from '../encounters/encounters-create-nested-one-without-condition-value-map.input';
import { EncounterConditionValuesCreateNestedOneWithoutConditionValueMapInput } from '../encounter-condition-values/encounter-condition-values-create-nested-one-without-condition-value-map.input';

@InputType()
export class EncounterConditionValueMapCreateInput {

    @Field(() => EncountersCreateNestedOneWithoutConditionValueMapInput, {nullable:false})
    encounter!: EncountersCreateNestedOneWithoutConditionValueMapInput;

    @Field(() => EncounterConditionValuesCreateNestedOneWithoutConditionValueMapInput, {nullable:false})
    conditionValue!: EncounterConditionValuesCreateNestedOneWithoutConditionValueMapInput;
}
