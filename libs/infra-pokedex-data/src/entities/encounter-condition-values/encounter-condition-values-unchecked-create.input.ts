import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { EncounterConditionValueMapUncheckedCreateNestedManyWithoutConditionValueInput } from '../encounter-condition-value-map/encounter-condition-value-map-unchecked-create-nested-many-without-condition-value.input';

@InputType()
export class EncounterConditionValuesUncheckedCreateInput {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    encounter_condition_id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => Int, {nullable:false})
    is_default!: number;

    @Field(() => EncounterConditionValueMapUncheckedCreateNestedManyWithoutConditionValueInput, {nullable:true})
    conditionValueMap?: EncounterConditionValueMapUncheckedCreateNestedManyWithoutConditionValueInput;
}
