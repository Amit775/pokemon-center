import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { RegionsUpdateOneWithoutLocationsNestedInput } from '../regions/regions-update-one-without-locations-nested.input';
import { LocationGameIndicesUpdateManyWithoutLocationNestedInput } from '../location-game-indices/location-game-indices-update-many-without-location-nested.input';
import { PokemonEvolutionUpdateManyWithoutLocationNestedInput } from '../pokemon-evolution/pokemon-evolution-update-many-without-location-nested.input';

@InputType()
export class LocationsUpdateWithoutAreasInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    identifier?: StringFieldUpdateOperationsInput;

    @Field(() => RegionsUpdateOneWithoutLocationsNestedInput, {nullable:true})
    region?: RegionsUpdateOneWithoutLocationsNestedInput;

    @Field(() => LocationGameIndicesUpdateManyWithoutLocationNestedInput, {nullable:true})
    gameIndices?: LocationGameIndicesUpdateManyWithoutLocationNestedInput;

    @Field(() => PokemonEvolutionUpdateManyWithoutLocationNestedInput, {nullable:true})
    evolution?: PokemonEvolutionUpdateManyWithoutLocationNestedInput;
}
