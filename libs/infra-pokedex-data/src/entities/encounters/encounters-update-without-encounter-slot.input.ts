import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { VersionsUpdateOneRequiredWithoutEncountersNestedInput } from '../versions/versions-update-one-required-without-encounters-nested.input';
import { LocationAreasUpdateOneRequiredWithoutEncountersNestedInput } from '../location-areas/location-areas-update-one-required-without-encounters-nested.input';
import { PokemonUpdateOneRequiredWithoutEncountersNestedInput } from '../pokemon/pokemon-update-one-required-without-encounters-nested.input';
import { EncounterConditionValueMapUpdateManyWithoutEncounterNestedInput } from '../encounter-condition-value-map/encounter-condition-value-map-update-many-without-encounter-nested.input';

@InputType()
export class EncountersUpdateWithoutEncounterSlotInput {

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

    @Field(() => PokemonUpdateOneRequiredWithoutEncountersNestedInput, {nullable:true})
    pokemon?: PokemonUpdateOneRequiredWithoutEncountersNestedInput;

    @Field(() => EncounterConditionValueMapUpdateManyWithoutEncounterNestedInput, {nullable:true})
    conditionValueMap?: EncounterConditionValueMapUpdateManyWithoutEncounterNestedInput;
}
