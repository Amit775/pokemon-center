import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Versions } from '../versions/versions.model';
import { LocationAreas } from '../location-areas/location-areas.model';
import { EncounterSlots } from '../encounter-slots/encounter-slots.model';
import { Pokemon } from '../pokemon/pokemon.model';
import { EncounterConditionValueMap } from '../encounter-condition-value-map/encounter-condition-value-map.model';
import { EncountersCount } from './encounters-count.output';

/**
 * @@TypeGraphQL.type(name: "Encounter")
 */
@ObjectType({description:'@@TypeGraphQL.type(name: "Encounter")'})
export class Encounters {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    version_id!: number;

    @Field(() => Int, {nullable:false})
    location_area_id!: number;

    @Field(() => Int, {nullable:false})
    encounter_slot_id!: number;

    @Field(() => Int, {nullable:false})
    pokemon_id!: number;

    @Field(() => Int, {nullable:false})
    min_level!: number;

    @Field(() => Int, {nullable:false})
    max_level!: number;

    @Field(() => Versions, {nullable:false})
    version?: Versions;

    @Field(() => LocationAreas, {nullable:false})
    locationArea?: LocationAreas;

    @Field(() => EncounterSlots, {nullable:false})
    encounterSlot?: EncounterSlots;

    @Field(() => Pokemon, {nullable:false})
    pokemon?: Pokemon;

    @Field(() => [EncounterConditionValueMap], {nullable:true})
    conditionValueMap?: Array<EncounterConditionValueMap>;

    @Field(() => EncountersCount, {nullable:false})
    _count?: EncountersCount;
}
