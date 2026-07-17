import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { RegionsUpdateOneWithoutLocationsNestedInput } from '../regions/regions-update-one-without-locations-nested.input';
import { LocationAreasUpdateManyWithoutLocationNestedInput } from '../location-areas/location-areas-update-many-without-location-nested.input';
import { PokemonEvolutionUpdateManyWithoutLocationNestedInput } from '../pokemon-evolution/pokemon-evolution-update-many-without-location-nested.input';

@InputType()
export class LocationsUpdateWithoutGameIndicesInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    identifier?: StringFieldUpdateOperationsInput;

    @Field(() => RegionsUpdateOneWithoutLocationsNestedInput, {nullable:true})
    region?: RegionsUpdateOneWithoutLocationsNestedInput;

    @Field(() => LocationAreasUpdateManyWithoutLocationNestedInput, {nullable:true})
    areas?: LocationAreasUpdateManyWithoutLocationNestedInput;

    @Field(() => PokemonEvolutionUpdateManyWithoutLocationNestedInput, {nullable:true})
    evolution?: PokemonEvolutionUpdateManyWithoutLocationNestedInput;
}
