import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { EncounterConditionValuesWhereInput } from './encounter-condition-values-where.input';

@InputType()
export class EncounterConditionValuesScalarRelationFilter {

    @Field(() => EncounterConditionValuesWhereInput, {nullable:true})
    is?: Identity<EncounterConditionValuesWhereInput>;

    @Field(() => EncounterConditionValuesWhereInput, {nullable:true})
    isNot?: Identity<EncounterConditionValuesWhereInput>;
}
