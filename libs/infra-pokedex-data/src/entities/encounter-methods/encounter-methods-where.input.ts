import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { EncounterSlotsListRelationFilter } from '../encounter-slots/encounter-slots-list-relation-filter.input';
import { LocationAreaEncounterRatesListRelationFilter } from '../location-area-encounter-rates/location-area-encounter-rates-list-relation-filter.input';

@InputType()
export class EncounterMethodsWhereInput {

    @Field(() => [EncounterMethodsWhereInput], {nullable:true})
    AND?: Array<EncounterMethodsWhereInput>;

    @Field(() => [EncounterMethodsWhereInput], {nullable:true})
    OR?: Array<EncounterMethodsWhereInput>;

    @Field(() => [EncounterMethodsWhereInput], {nullable:true})
    NOT?: Array<EncounterMethodsWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    identifier?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    order?: IntFilter;

    @Field(() => EncounterSlotsListRelationFilter, {nullable:true})
    slots?: EncounterSlotsListRelationFilter;

    @Field(() => LocationAreaEncounterRatesListRelationFilter, {nullable:true})
    encounterRates?: LocationAreaEncounterRatesListRelationFilter;
}
