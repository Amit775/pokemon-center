import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { LocationGameIndicesUncheckedUpdateManyWithoutLocationNestedInput } from '../location-game-indices/location-game-indices-unchecked-update-many-without-location-nested.input';
import { PokemonEvolutionUncheckedUpdateManyWithoutLocationNestedInput } from '../pokemon-evolution/pokemon-evolution-unchecked-update-many-without-location-nested.input';

@InputType()
export class LocationsUncheckedUpdateWithoutAreasInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:true})
    region_id?: number;

    @Field(() => String, {nullable:true})
    identifier?: string;

    @Field(() => LocationGameIndicesUncheckedUpdateManyWithoutLocationNestedInput, {nullable:true})
    gameIndices?: Identity<LocationGameIndicesUncheckedUpdateManyWithoutLocationNestedInput>;

    @Field(() => PokemonEvolutionUncheckedUpdateManyWithoutLocationNestedInput, {nullable:true})
    evolution?: Identity<PokemonEvolutionUncheckedUpdateManyWithoutLocationNestedInput>;
}
