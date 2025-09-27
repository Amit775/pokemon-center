import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';

@InputType()
export class EncountersScalarWhereWithAggregatesInput {

    @Field(() => [EncountersScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<EncountersScalarWhereWithAggregatesInput>;

    @Field(() => [EncountersScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<EncountersScalarWhereWithAggregatesInput>;

    @Field(() => [EncountersScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<EncountersScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    version_id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    location_area_id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    encounter_slot_id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    pokemon_id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    min_level?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    max_level?: IntWithAggregatesFilter;
}
