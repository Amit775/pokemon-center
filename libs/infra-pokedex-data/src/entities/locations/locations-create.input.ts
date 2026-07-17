import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { RegionsCreateNestedOneWithoutLocationsInput } from '../regions/regions-create-nested-one-without-locations.input';
import { LocationAreasCreateNestedManyWithoutLocationInput } from '../location-areas/location-areas-create-nested-many-without-location.input';
import { LocationGameIndicesCreateNestedManyWithoutLocationInput } from '../location-game-indices/location-game-indices-create-nested-many-without-location.input';
import { PokemonEvolutionCreateNestedManyWithoutLocationInput } from '../pokemon-evolution/pokemon-evolution-create-nested-many-without-location.input';

@InputType()
export class LocationsCreateInput {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => RegionsCreateNestedOneWithoutLocationsInput, {nullable:true})
    region?: Identity<RegionsCreateNestedOneWithoutLocationsInput>;

    @Field(() => LocationAreasCreateNestedManyWithoutLocationInput, {nullable:true})
    areas?: Identity<LocationAreasCreateNestedManyWithoutLocationInput>;

    @Field(() => LocationGameIndicesCreateNestedManyWithoutLocationInput, {nullable:true})
    gameIndices?: Identity<LocationGameIndicesCreateNestedManyWithoutLocationInput>;

    @Field(() => PokemonEvolutionCreateNestedManyWithoutLocationInput, {nullable:true})
    evolution?: Identity<PokemonEvolutionCreateNestedManyWithoutLocationInput>;
}
