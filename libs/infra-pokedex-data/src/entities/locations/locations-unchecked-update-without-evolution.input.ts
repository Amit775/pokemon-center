import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { LocationAreasUncheckedUpdateManyWithoutLocationNestedInput } from '../location-areas/location-areas-unchecked-update-many-without-location-nested.input';
import { LocationGameIndicesUncheckedUpdateManyWithoutLocationNestedInput } from '../location-game-indices/location-game-indices-unchecked-update-many-without-location-nested.input';

@InputType()
export class LocationsUncheckedUpdateWithoutEvolutionInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:true})
    region_id?: number;

    @Field(() => String, {nullable:true})
    identifier?: string;

    @Field(() => LocationAreasUncheckedUpdateManyWithoutLocationNestedInput, {nullable:true})
    areas?: Identity<LocationAreasUncheckedUpdateManyWithoutLocationNestedInput>;

    @Field(() => LocationGameIndicesUncheckedUpdateManyWithoutLocationNestedInput, {nullable:true})
    gameIndices?: Identity<LocationGameIndicesUncheckedUpdateManyWithoutLocationNestedInput>;
}
