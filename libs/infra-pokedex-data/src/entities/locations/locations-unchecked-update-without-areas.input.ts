import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { LocationGameIndicesUncheckedUpdateManyWithoutLocationNestedInput } from '../location-game-indices/location-game-indices-unchecked-update-many-without-location-nested.input';
import { PokemonEvolutionUncheckedUpdateManyWithoutLocationNestedInput } from '../pokemon-evolution/pokemon-evolution-unchecked-update-many-without-location-nested.input';

@InputType()
export class LocationsUncheckedUpdateWithoutAreasInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    region_id?: NullableIntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    identifier?: StringFieldUpdateOperationsInput;

    @Field(() => LocationGameIndicesUncheckedUpdateManyWithoutLocationNestedInput, {nullable:true})
    gameIndices?: LocationGameIndicesUncheckedUpdateManyWithoutLocationNestedInput;

    @Field(() => PokemonEvolutionUncheckedUpdateManyWithoutLocationNestedInput, {nullable:true})
    evolution?: PokemonEvolutionUncheckedUpdateManyWithoutLocationNestedInput;
}
