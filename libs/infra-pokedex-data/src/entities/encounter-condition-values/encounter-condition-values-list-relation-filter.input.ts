import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { EncounterConditionValuesWhereInput } from './encounter-condition-values-where.input';

@InputType()
export class EncounterConditionValuesListRelationFilter {

    @Field(() => EncounterConditionValuesWhereInput, {nullable:true})
    every?: Identity<EncounterConditionValuesWhereInput>;

    @Field(() => EncounterConditionValuesWhereInput, {nullable:true})
    some?: Identity<EncounterConditionValuesWhereInput>;

    @Field(() => EncounterConditionValuesWhereInput, {nullable:true})
    none?: Identity<EncounterConditionValuesWhereInput>;
}
