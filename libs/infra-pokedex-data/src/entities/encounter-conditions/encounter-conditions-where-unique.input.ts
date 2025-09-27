import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { EncounterConditionsWhereInput } from './encounter-conditions-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { EncounterConditionValuesListRelationFilter } from '../encounter-condition-values/encounter-condition-values-list-relation-filter.input';

@InputType()
export class EncounterConditionsWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => [EncounterConditionsWhereInput], {nullable:true})
    AND?: Array<EncounterConditionsWhereInput>;

    @Field(() => [EncounterConditionsWhereInput], {nullable:true})
    OR?: Array<EncounterConditionsWhereInput>;

    @Field(() => [EncounterConditionsWhereInput], {nullable:true})
    NOT?: Array<EncounterConditionsWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    identifier?: StringFilter;

    @Field(() => EncounterConditionValuesListRelationFilter, {nullable:true})
    values?: EncounterConditionValuesListRelationFilter;
}
