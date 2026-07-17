import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { LocationGameIndicesUncheckedCreateNestedManyWithoutLocationInput } from '../location-game-indices/location-game-indices-unchecked-create-nested-many-without-location.input';
import { PokemonEvolutionUncheckedCreateNestedManyWithoutLocationInput } from '../pokemon-evolution/pokemon-evolution-unchecked-create-nested-many-without-location.input';

@InputType()
export class LocationsUncheckedCreateWithoutAreasInput {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:true})
    region_id?: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => LocationGameIndicesUncheckedCreateNestedManyWithoutLocationInput, {nullable:true})
    gameIndices?: LocationGameIndicesUncheckedCreateNestedManyWithoutLocationInput;

    @Field(() => PokemonEvolutionUncheckedCreateNestedManyWithoutLocationInput, {nullable:true})
    evolution?: PokemonEvolutionUncheckedCreateNestedManyWithoutLocationInput;
}
