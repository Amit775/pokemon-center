import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { VersionsUpdateOneRequiredWithoutEncountersNestedInput } from '../versions/versions-update-one-required-without-encounters-nested.input';
import { LocationAreasUpdateOneRequiredWithoutEncountersNestedInput } from '../location-areas/location-areas-update-one-required-without-encounters-nested.input';
import { EncounterSlotsUpdateOneRequiredWithoutEncountersNestedInput } from '../encounter-slots/encounter-slots-update-one-required-without-encounters-nested.input';
import { PokemonUpdateOneRequiredWithoutEncountersNestedInput } from '../pokemon/pokemon-update-one-required-without-encounters-nested.input';

@InputType()
export class EncountersUpdateWithoutConditionValueMapInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    min_level?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    max_level?: IntFieldUpdateOperationsInput;

    @Field(() => VersionsUpdateOneRequiredWithoutEncountersNestedInput, {nullable:true})
    version?: VersionsUpdateOneRequiredWithoutEncountersNestedInput;

    @Field(() => LocationAreasUpdateOneRequiredWithoutEncountersNestedInput, {nullable:true})
    locationArea?: LocationAreasUpdateOneRequiredWithoutEncountersNestedInput;

    @Field(() => EncounterSlotsUpdateOneRequiredWithoutEncountersNestedInput, {nullable:true})
    encounterSlot?: EncounterSlotsUpdateOneRequiredWithoutEncountersNestedInput;

    @Field(() => PokemonUpdateOneRequiredWithoutEncountersNestedInput, {nullable:true})
    pokemon?: PokemonUpdateOneRequiredWithoutEncountersNestedInput;
}
