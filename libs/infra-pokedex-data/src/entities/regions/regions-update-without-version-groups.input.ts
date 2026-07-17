import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { GenerationsUpdateManyWithoutRegionNestedInput } from '../generations/generations-update-many-without-region-nested.input';
import { LocationsUpdateManyWithoutRegionNestedInput } from '../locations/locations-update-many-without-region-nested.input';
import { PokedexesUpdateManyWithoutRegionNestedInput } from '../pokedexes/pokedexes-update-many-without-region-nested.input';

@InputType()
export class RegionsUpdateWithoutVersionGroupsInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    identifier?: string;

    @Field(() => GenerationsUpdateManyWithoutRegionNestedInput, {nullable:true})
    generations?: Identity<GenerationsUpdateManyWithoutRegionNestedInput>;

    @Field(() => LocationsUpdateManyWithoutRegionNestedInput, {nullable:true})
    locations?: Identity<LocationsUpdateManyWithoutRegionNestedInput>;

    @Field(() => PokedexesUpdateManyWithoutRegionNestedInput, {nullable:true})
    pokedexes?: Identity<PokedexesUpdateManyWithoutRegionNestedInput>;
}
