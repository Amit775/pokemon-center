import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';

@InputType()
export class LocationAreaEncounterRatesScalarWhereInput {

    @Field(() => [LocationAreaEncounterRatesScalarWhereInput], {nullable:true})
    AND?: Array<LocationAreaEncounterRatesScalarWhereInput>;

    @Field(() => [LocationAreaEncounterRatesScalarWhereInput], {nullable:true})
    OR?: Array<LocationAreaEncounterRatesScalarWhereInput>;

    @Field(() => [LocationAreaEncounterRatesScalarWhereInput], {nullable:true})
    NOT?: Array<LocationAreaEncounterRatesScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    location_area_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    encounter_method_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    version_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    rate?: IntFilter;
}
