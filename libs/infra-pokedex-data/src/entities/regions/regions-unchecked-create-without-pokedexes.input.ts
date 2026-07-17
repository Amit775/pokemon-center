import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GenerationsUncheckedCreateNestedManyWithoutRegionInput } from '../generations/generations-unchecked-create-nested-many-without-region.input';
import { LocationsUncheckedCreateNestedManyWithoutRegionInput } from '../locations/locations-unchecked-create-nested-many-without-region.input';
import { VersionGroupRegionsUncheckedCreateNestedManyWithoutRegionInput } from '../version-group-regions/version-group-regions-unchecked-create-nested-many-without-region.input';

@InputType()
export class RegionsUncheckedCreateWithoutPokedexesInput {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => GenerationsUncheckedCreateNestedManyWithoutRegionInput, {nullable:true})
    generations?: GenerationsUncheckedCreateNestedManyWithoutRegionInput;

    @Field(() => LocationsUncheckedCreateNestedManyWithoutRegionInput, {nullable:true})
    locations?: LocationsUncheckedCreateNestedManyWithoutRegionInput;

    @Field(() => VersionGroupRegionsUncheckedCreateNestedManyWithoutRegionInput, {nullable:true})
    versionGroups?: VersionGroupRegionsUncheckedCreateNestedManyWithoutRegionInput;
}
