import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { LocationsUncheckedCreateNestedManyWithoutRegionInput } from '../locations/locations-unchecked-create-nested-many-without-region.input';
import { PokedexesUncheckedCreateNestedManyWithoutRegionInput } from '../pokedexes/pokedexes-unchecked-create-nested-many-without-region.input';
import { VersionGroupRegionsUncheckedCreateNestedManyWithoutRegionInput } from '../version-group-regions/version-group-regions-unchecked-create-nested-many-without-region.input';

@InputType()
export class RegionsUncheckedCreateWithoutGenerationsInput {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => LocationsUncheckedCreateNestedManyWithoutRegionInput, {nullable:true})
    locations?: LocationsUncheckedCreateNestedManyWithoutRegionInput;

    @Field(() => PokedexesUncheckedCreateNestedManyWithoutRegionInput, {nullable:true})
    pokedexes?: PokedexesUncheckedCreateNestedManyWithoutRegionInput;

    @Field(() => VersionGroupRegionsUncheckedCreateNestedManyWithoutRegionInput, {nullable:true})
    versionGroups?: VersionGroupRegionsUncheckedCreateNestedManyWithoutRegionInput;
}
