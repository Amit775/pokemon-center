import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { GenerationsCreateNestedManyWithoutRegionInput } from '../generations/generations-create-nested-many-without-region.input';
import { PokedexesCreateNestedManyWithoutRegionInput } from '../pokedexes/pokedexes-create-nested-many-without-region.input';
import { VersionGroupRegionsCreateNestedManyWithoutRegionInput } from '../version-group-regions/version-group-regions-create-nested-many-without-region.input';

@InputType()
export class RegionsCreateWithoutLocationsInput {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => GenerationsCreateNestedManyWithoutRegionInput, {nullable:true})
    generations?: Identity<GenerationsCreateNestedManyWithoutRegionInput>;

    @Field(() => PokedexesCreateNestedManyWithoutRegionInput, {nullable:true})
    pokedexes?: Identity<PokedexesCreateNestedManyWithoutRegionInput>;

    @Field(() => VersionGroupRegionsCreateNestedManyWithoutRegionInput, {nullable:true})
    versionGroups?: Identity<VersionGroupRegionsCreateNestedManyWithoutRegionInput>;
}
