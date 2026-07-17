import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { LocationsUncheckedUpdateManyWithoutRegionNestedInput } from '../locations/locations-unchecked-update-many-without-region-nested.input';
import { PokedexesUncheckedUpdateManyWithoutRegionNestedInput } from '../pokedexes/pokedexes-unchecked-update-many-without-region-nested.input';
import { VersionGroupRegionsUncheckedUpdateManyWithoutRegionNestedInput } from '../version-group-regions/version-group-regions-unchecked-update-many-without-region-nested.input';

@InputType()
export class RegionsUncheckedUpdateWithoutGenerationsInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    identifier?: string;

    @Field(() => LocationsUncheckedUpdateManyWithoutRegionNestedInput, {nullable:true})
    locations?: Identity<LocationsUncheckedUpdateManyWithoutRegionNestedInput>;

    @Field(() => PokedexesUncheckedUpdateManyWithoutRegionNestedInput, {nullable:true})
    pokedexes?: Identity<PokedexesUncheckedUpdateManyWithoutRegionNestedInput>;

    @Field(() => VersionGroupRegionsUncheckedUpdateManyWithoutRegionNestedInput, {nullable:true})
    versionGroups?: Identity<VersionGroupRegionsUncheckedUpdateManyWithoutRegionNestedInput>;
}
