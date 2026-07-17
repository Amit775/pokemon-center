import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { EncounterConditionValuesScalarWhereInput } from './encounter-condition-values-scalar-where.input';
import { Type } from 'class-transformer';
import { EncounterConditionValuesUpdateManyMutationInput } from './encounter-condition-values-update-many-mutation.input';

@InputType()
export class EncounterConditionValuesUpdateManyWithWhereWithoutConditionInput {

    @Field(() => EncounterConditionValuesScalarWhereInput, {nullable:false})
    @Type(() => EncounterConditionValuesScalarWhereInput)
    where!: Identity<EncounterConditionValuesScalarWhereInput>;

    @Field(() => EncounterConditionValuesUpdateManyMutationInput, {nullable:false})
    @Type(() => EncounterConditionValuesUpdateManyMutationInput)
    data!: Identity<EncounterConditionValuesUpdateManyMutationInput>;
}
