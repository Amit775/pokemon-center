import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { LocationAreasUncheckedUpdateManyWithoutLocationNestedInput } from '../location-areas/location-areas-unchecked-update-many-without-location-nested.input';
import { LocationGameIndicesUncheckedUpdateManyWithoutLocationNestedInput } from '../location-game-indices/location-game-indices-unchecked-update-many-without-location-nested.input';
import { PokemonEvolutionUncheckedUpdateManyWithoutLocationNestedInput } from '../pokemon-evolution/pokemon-evolution-unchecked-update-many-without-location-nested.input';

@InputType()
export class LocationsUncheckedUpdateWithoutRegionInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    identifier?: StringFieldUpdateOperationsInput;

    @Field(() => LocationAreasUncheckedUpdateManyWithoutLocationNestedInput, {nullable:true})
    areas?: LocationAreasUncheckedUpdateManyWithoutLocationNestedInput;

    @Field(() => LocationGameIndicesUncheckedUpdateManyWithoutLocationNestedInput, {nullable:true})
    gameIndices?: LocationGameIndicesUncheckedUpdateManyWithoutLocationNestedInput;

    @Field(() => PokemonEvolutionUncheckedUpdateManyWithoutLocationNestedInput, {nullable:true})
    evolution?: PokemonEvolutionUncheckedUpdateManyWithoutLocationNestedInput;
}
