import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { EncounterConditionValuesListRelationFilter } from '../encounter-condition-values/encounter-condition-values-list-relation-filter.input';

@InputType()
export class EncounterConditionsWhereInput {

    @Field(() => [EncounterConditionsWhereInput], {nullable:true})
    AND?: Array<EncounterConditionsWhereInput>;

    @Field(() => [EncounterConditionsWhereInput], {nullable:true})
    OR?: Array<EncounterConditionsWhereInput>;

    @Field(() => [EncounterConditionsWhereInput], {nullable:true})
    NOT?: Array<EncounterConditionsWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: Identity<IntFilter>;

    @Field(() => StringFilter, {nullable:true})
    identifier?: Identity<StringFilter>;

    @Field(() => EncounterConditionValuesListRelationFilter, {nullable:true})
    values?: Identity<EncounterConditionValuesListRelationFilter>;
}
