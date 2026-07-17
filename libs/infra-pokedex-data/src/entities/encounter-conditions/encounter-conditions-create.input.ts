import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { EncounterConditionValuesCreateNestedManyWithoutConditionInput } from '../encounter-condition-values/encounter-condition-values-create-nested-many-without-condition.input';

@InputType()
export class EncounterConditionsCreateInput {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => EncounterConditionValuesCreateNestedManyWithoutConditionInput, {nullable:true})
    values?: EncounterConditionValuesCreateNestedManyWithoutConditionInput;
}
