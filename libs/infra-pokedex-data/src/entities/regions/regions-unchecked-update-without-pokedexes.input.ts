import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { GenerationsUncheckedUpdateManyWithoutRegionNestedInput } from '../generations/generations-unchecked-update-many-without-region-nested.input';
import { LocationsUncheckedUpdateManyWithoutRegionNestedInput } from '../locations/locations-unchecked-update-many-without-region-nested.input';
import { VersionGroupRegionsUncheckedUpdateManyWithoutRegionNestedInput } from '../version-group-regions/version-group-regions-unchecked-update-many-without-region-nested.input';

@InputType()
export class RegionsUncheckedUpdateWithoutPokedexesInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    identifier?: string;

    @Field(() => GenerationsUncheckedUpdateManyWithoutRegionNestedInput, {nullable:true})
    generations?: Identity<GenerationsUncheckedUpdateManyWithoutRegionNestedInput>;

    @Field(() => LocationsUncheckedUpdateManyWithoutRegionNestedInput, {nullable:true})
    locations?: Identity<LocationsUncheckedUpdateManyWithoutRegionNestedInput>;

    @Field(() => VersionGroupRegionsUncheckedUpdateManyWithoutRegionNestedInput, {nullable:true})
    versionGroups?: Identity<VersionGroupRegionsUncheckedUpdateManyWithoutRegionNestedInput>;
}
