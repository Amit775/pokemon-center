import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';

@InputType()
export class EncounterSlotsScalarWhereWithAggregatesInput {

    @Field(() => [EncounterSlotsScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<EncounterSlotsScalarWhereWithAggregatesInput>;

    @Field(() => [EncounterSlotsScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<EncounterSlotsScalarWhereWithAggregatesInput>;

    @Field(() => [EncounterSlotsScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<EncounterSlotsScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: Identity<IntWithAggregatesFilter>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    version_group_id?: Identity<IntWithAggregatesFilter>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    encounter_method_id?: Identity<IntWithAggregatesFilter>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    slot?: Identity<IntWithAggregatesFilter>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    rarity?: Identity<IntWithAggregatesFilter>;
}
