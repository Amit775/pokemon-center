import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { LocationsUpdateManyWithoutRegionNestedInput } from '../locations/locations-update-many-without-region-nested.input';
import { PokedexesUpdateManyWithoutRegionNestedInput } from '../pokedexes/pokedexes-update-many-without-region-nested.input';
import { VersionGroupRegionsUpdateManyWithoutRegionNestedInput } from '../version-group-regions/version-group-regions-update-many-without-region-nested.input';

@InputType()
export class RegionsUpdateWithoutGenerationsInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    identifier?: string;

    @Field(() => LocationsUpdateManyWithoutRegionNestedInput, {nullable:true})
    locations?: Identity<LocationsUpdateManyWithoutRegionNestedInput>;

    @Field(() => PokedexesUpdateManyWithoutRegionNestedInput, {nullable:true})
    pokedexes?: Identity<PokedexesUpdateManyWithoutRegionNestedInput>;

    @Field(() => VersionGroupRegionsUpdateManyWithoutRegionNestedInput, {nullable:true})
    versionGroups?: Identity<VersionGroupRegionsUpdateManyWithoutRegionNestedInput>;
}
