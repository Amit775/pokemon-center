import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EncounterConditionValuesWhereInput } from './encounter-condition-values-where.input';

@InputType()
export class EncounterConditionValuesListRelationFilter {

    @Field(() => EncounterConditionValuesWhereInput, {nullable:true})
    every?: EncounterConditionValuesWhereInput;

    @Field(() => EncounterConditionValuesWhereInput, {nullable:true})
    some?: EncounterConditionValuesWhereInput;

    @Field(() => EncounterConditionValuesWhereInput, {nullable:true})
    none?: EncounterConditionValuesWhereInput;
}
