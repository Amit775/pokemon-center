import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { EncounterConditionsCreateNestedOneWithoutValuesInput } from '../encounter-conditions/encounter-conditions-create-nested-one-without-values.input';

@InputType()
export class EncounterConditionValuesCreateWithoutConditionValueMapInput {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => Int, {nullable:false})
    is_default!: number;

    @Field(() => EncounterConditionsCreateNestedOneWithoutValuesInput, {nullable:false})
    condition!: Identity<EncounterConditionsCreateNestedOneWithoutValuesInput>;
}
