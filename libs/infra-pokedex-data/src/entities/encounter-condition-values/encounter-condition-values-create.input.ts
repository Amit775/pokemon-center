import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { EncounterConditionsCreateNestedOneWithoutValuesInput } from '../encounter-conditions/encounter-conditions-create-nested-one-without-values.input';
import { EncounterConditionValueMapCreateNestedManyWithoutConditionValueInput } from '../encounter-condition-value-map/encounter-condition-value-map-create-nested-many-without-condition-value.input';

@InputType()
export class EncounterConditionValuesCreateInput {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => Int, {nullable:false})
    is_default!: number;

    @Field(() => EncounterConditionsCreateNestedOneWithoutValuesInput, {nullable:false})
    condition!: EncounterConditionsCreateNestedOneWithoutValuesInput;

    @Field(() => EncounterConditionValueMapCreateNestedManyWithoutConditionValueInput, {nullable:true})
    conditionValueMap?: EncounterConditionValueMapCreateNestedManyWithoutConditionValueInput;
}
