import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';

@InputType()
export class LocationAreaEncounterRatesScalarWhereWithAggregatesInput {

    @Field(() => [LocationAreaEncounterRatesScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<LocationAreaEncounterRatesScalarWhereWithAggregatesInput>;

    @Field(() => [LocationAreaEncounterRatesScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<LocationAreaEncounterRatesScalarWhereWithAggregatesInput>;

    @Field(() => [LocationAreaEncounterRatesScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<LocationAreaEncounterRatesScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    location_area_id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    encounter_method_id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    version_id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    rate?: IntWithAggregatesFilter;
}
