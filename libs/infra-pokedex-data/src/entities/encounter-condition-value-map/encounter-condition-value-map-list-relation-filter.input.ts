import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EncounterConditionValueMapWhereInput } from './encounter-condition-value-map-where.input';

@InputType()
export class EncounterConditionValueMapListRelationFilter {

    @Field(() => EncounterConditionValueMapWhereInput, {nullable:true})
    every?: EncounterConditionValueMapWhereInput;

    @Field(() => EncounterConditionValueMapWhereInput, {nullable:true})
    some?: EncounterConditionValueMapWhereInput;

    @Field(() => EncounterConditionValueMapWhereInput, {nullable:true})
    none?: EncounterConditionValueMapWhereInput;
}
