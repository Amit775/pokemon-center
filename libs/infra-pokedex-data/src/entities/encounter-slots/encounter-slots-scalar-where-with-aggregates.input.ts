import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { IntNullableWithAggregatesFilter } from '../prisma/int-nullable-with-aggregates-filter.input';

@InputType()
export class EncounterSlotsScalarWhereWithAggregatesInput {

    @Field(() => [EncounterSlotsScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<EncounterSlotsScalarWhereWithAggregatesInput>;

    @Field(() => [EncounterSlotsScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<EncounterSlotsScalarWhereWithAggregatesInput>;

    @Field(() => [EncounterSlotsScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<EncounterSlotsScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    version_group_id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    encounter_method_id?: IntWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    slot?: IntNullableWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    rarity?: IntWithAggregatesFilter;
}
