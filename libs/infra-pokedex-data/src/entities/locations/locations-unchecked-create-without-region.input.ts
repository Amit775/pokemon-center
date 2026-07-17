import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { LocationAreasUncheckedCreateNestedManyWithoutLocationInput } from '../location-areas/location-areas-unchecked-create-nested-many-without-location.input';
import { LocationGameIndicesUncheckedCreateNestedManyWithoutLocationInput } from '../location-game-indices/location-game-indices-unchecked-create-nested-many-without-location.input';
import { PokemonEvolutionUncheckedCreateNestedManyWithoutLocationInput } from '../pokemon-evolution/pokemon-evolution-unchecked-create-nested-many-without-location.input';

@InputType()
export class LocationsUncheckedCreateWithoutRegionInput {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => LocationAreasUncheckedCreateNestedManyWithoutLocationInput, {nullable:true})
    areas?: LocationAreasUncheckedCreateNestedManyWithoutLocationInput;

    @Field(() => LocationGameIndicesUncheckedCreateNestedManyWithoutLocationInput, {nullable:true})
    gameIndices?: LocationGameIndicesUncheckedCreateNestedManyWithoutLocationInput;

    @Field(() => PokemonEvolutionUncheckedCreateNestedManyWithoutLocationInput, {nullable:true})
    evolution?: PokemonEvolutionUncheckedCreateNestedManyWithoutLocationInput;
}
