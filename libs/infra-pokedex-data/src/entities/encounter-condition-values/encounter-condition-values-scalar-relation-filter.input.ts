import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EncounterConditionValuesWhereInput } from './encounter-condition-values-where.input';

@InputType()
export class EncounterConditionValuesScalarRelationFilter {

    @Field(() => EncounterConditionValuesWhereInput, {nullable:true})
    is?: EncounterConditionValuesWhereInput;

    @Field(() => EncounterConditionValuesWhereInput, {nullable:true})
    isNot?: EncounterConditionValuesWhereInput;
}
