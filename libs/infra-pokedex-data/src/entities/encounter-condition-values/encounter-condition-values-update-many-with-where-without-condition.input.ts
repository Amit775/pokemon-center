import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EncounterConditionValuesScalarWhereInput } from './encounter-condition-values-scalar-where.input';
import { Type } from 'class-transformer';
import { EncounterConditionValuesUpdateManyMutationInput } from './encounter-condition-values-update-many-mutation.input';

@InputType()
export class EncounterConditionValuesUpdateManyWithWhereWithoutConditionInput {

    @Field(() => EncounterConditionValuesScalarWhereInput, {nullable:false})
    @Type(() => EncounterConditionValuesScalarWhereInput)
    where!: EncounterConditionValuesScalarWhereInput;

    @Field(() => EncounterConditionValuesUpdateManyMutationInput, {nullable:false})
    @Type(() => EncounterConditionValuesUpdateManyMutationInput)
    data!: EncounterConditionValuesUpdateManyMutationInput;
}
