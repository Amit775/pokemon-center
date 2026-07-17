import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { RegionsUpdateOneWithoutLocationsNestedInput } from '../regions/regions-update-one-without-locations-nested.input';
import { LocationAreasUpdateManyWithoutLocationNestedInput } from '../location-areas/location-areas-update-many-without-location-nested.input';
import { LocationGameIndicesUpdateManyWithoutLocationNestedInput } from '../location-game-indices/location-game-indices-update-many-without-location-nested.input';

@InputType()
export class LocationsUpdateWithoutEvolutionInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    identifier?: string;

    @Field(() => RegionsUpdateOneWithoutLocationsNestedInput, {nullable:true})
    region?: Identity<RegionsUpdateOneWithoutLocationsNestedInput>;

    @Field(() => LocationAreasUpdateManyWithoutLocationNestedInput, {nullable:true})
    areas?: Identity<LocationAreasUpdateManyWithoutLocationNestedInput>;

    @Field(() => LocationGameIndicesUpdateManyWithoutLocationNestedInput, {nullable:true})
    gameIndices?: Identity<LocationGameIndicesUpdateManyWithoutLocationNestedInput>;
}
