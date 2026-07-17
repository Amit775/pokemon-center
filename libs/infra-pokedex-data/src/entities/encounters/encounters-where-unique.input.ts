import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { EncountersWhereInput } from './encounters-where.input';
import type { Identity } from 'identity-type';
import { IntFilter } from '../prisma/int-filter.input';
import { VersionsScalarRelationFilter } from '../versions/versions-scalar-relation-filter.input';
import { LocationAreasScalarRelationFilter } from '../location-areas/location-areas-scalar-relation-filter.input';
import { EncounterSlotsScalarRelationFilter } from '../encounter-slots/encounter-slots-scalar-relation-filter.input';
import { PokemonScalarRelationFilter } from '../pokemon/pokemon-scalar-relation-filter.input';
import { EncounterConditionValueMapListRelationFilter } from '../encounter-condition-value-map/encounter-condition-value-map-list-relation-filter.input';

@InputType()
export class EncountersWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => [EncountersWhereInput], {nullable:true})
    AND?: Array<EncountersWhereInput>;

    @Field(() => [EncountersWhereInput], {nullable:true})
    OR?: Array<EncountersWhereInput>;

    @Field(() => [EncountersWhereInput], {nullable:true})
    NOT?: Array<EncountersWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    version_id?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    location_area_id?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    encounter_slot_id?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    pokemon_id?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    min_level?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    max_level?: Identity<IntFilter>;

    @Field(() => VersionsScalarRelationFilter, {nullable:true})
    version?: Identity<VersionsScalarRelationFilter>;

    @Field(() => LocationAreasScalarRelationFilter, {nullable:true})
    locationArea?: Identity<LocationAreasScalarRelationFilter>;

    @Field(() => EncounterSlotsScalarRelationFilter, {nullable:true})
    encounterSlot?: Identity<EncounterSlotsScalarRelationFilter>;

    @Field(() => PokemonScalarRelationFilter, {nullable:true})
    pokemon?: Identity<PokemonScalarRelationFilter>;

    @Field(() => EncounterConditionValueMapListRelationFilter, {nullable:true})
    conditionValueMap?: Identity<EncounterConditionValueMapListRelationFilter>;
}
