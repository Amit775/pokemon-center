import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class EncounterMethodsScalarWhereWithAggregatesInput {

    @Field(() => [EncounterMethodsScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<EncounterMethodsScalarWhereWithAggregatesInput>;

    @Field(() => [EncounterMethodsScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<EncounterMethodsScalarWhereWithAggregatesInput>;

    @Field(() => [EncounterMethodsScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<EncounterMethodsScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: Identity<IntWithAggregatesFilter>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    identifier?: Identity<StringWithAggregatesFilter>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    order?: Identity<IntWithAggregatesFilter>;
}
