import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { EncounterConditionValueMapCreateNestedManyWithoutConditionValueInput } from '../encounter-condition-value-map/encounter-condition-value-map-create-nested-many-without-condition-value.input';

@InputType()
export class EncounterConditionValuesCreateWithoutConditionInput {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => Int, {nullable:false})
    is_default!: number;

    @Field(() => EncounterConditionValueMapCreateNestedManyWithoutConditionValueInput, {nullable:true})
    conditionValueMap?: EncounterConditionValueMapCreateNestedManyWithoutConditionValueInput;
}
