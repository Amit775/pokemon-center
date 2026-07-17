import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { EncounterConditionValuesUncheckedCreateNestedManyWithoutConditionInput } from '../encounter-condition-values/encounter-condition-values-unchecked-create-nested-many-without-condition.input';

@InputType()
export class EncounterConditionsUncheckedCreateInput {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => EncounterConditionValuesUncheckedCreateNestedManyWithoutConditionInput, {nullable:true})
    values?: EncounterConditionValuesUncheckedCreateNestedManyWithoutConditionInput;
}
