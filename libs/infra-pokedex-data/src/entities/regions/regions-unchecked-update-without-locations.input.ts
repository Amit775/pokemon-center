import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { GenerationsUncheckedUpdateManyWithoutRegionNestedInput } from '../generations/generations-unchecked-update-many-without-region-nested.input';
import { PokedexesUncheckedUpdateManyWithoutRegionNestedInput } from '../pokedexes/pokedexes-unchecked-update-many-without-region-nested.input';
import { VersionGroupRegionsUncheckedUpdateManyWithoutRegionNestedInput } from '../version-group-regions/version-group-regions-unchecked-update-many-without-region-nested.input';

@InputType()
export class RegionsUncheckedUpdateWithoutLocationsInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    identifier?: string;

    @Field(() => GenerationsUncheckedUpdateManyWithoutRegionNestedInput, {nullable:true})
    generations?: Identity<GenerationsUncheckedUpdateManyWithoutRegionNestedInput>;

    @Field(() => PokedexesUncheckedUpdateManyWithoutRegionNestedInput, {nullable:true})
    pokedexes?: Identity<PokedexesUncheckedUpdateManyWithoutRegionNestedInput>;

    @Field(() => VersionGroupRegionsUncheckedUpdateManyWithoutRegionNestedInput, {nullable:true})
    versionGroups?: Identity<VersionGroupRegionsUncheckedUpdateManyWithoutRegionNestedInput>;
}
