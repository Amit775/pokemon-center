import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { LocationsUpdateOneRequiredWithoutGameIndicesNestedInput } from '../locations/locations-update-one-required-without-game-indices-nested.input';

@InputType()
export class LocationGameIndicesUpdateWithoutGenerationInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    game_index?: IntFieldUpdateOperationsInput;

    @Field(() => LocationsUpdateOneRequiredWithoutGameIndicesNestedInput, {nullable:true})
    location?: LocationsUpdateOneRequiredWithoutGameIndicesNestedInput;
}
