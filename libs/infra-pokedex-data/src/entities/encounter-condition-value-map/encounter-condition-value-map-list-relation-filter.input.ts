import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { EncounterConditionValueMapWhereInput } from './encounter-condition-value-map-where.input';

@InputType()
export class EncounterConditionValueMapListRelationFilter {

    @Field(() => EncounterConditionValueMapWhereInput, {nullable:true})
    every?: Identity<EncounterConditionValueMapWhereInput>;

    @Field(() => EncounterConditionValueMapWhereInput, {nullable:true})
    some?: Identity<EncounterConditionValueMapWhereInput>;

    @Field(() => EncounterConditionValueMapWhereInput, {nullable:true})
    none?: Identity<EncounterConditionValueMapWhereInput>;
}
