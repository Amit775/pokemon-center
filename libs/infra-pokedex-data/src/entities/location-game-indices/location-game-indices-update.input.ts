import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { LocationsUpdateOneRequiredWithoutGameIndicesNestedInput } from '../locations/locations-update-one-required-without-game-indices-nested.input';
import { GenerationsUpdateOneRequiredWithoutLocationGameIndicesNestedInput } from '../generations/generations-update-one-required-without-location-game-indices-nested.input';

@InputType()
export class LocationGameIndicesUpdateInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    game_index?: IntFieldUpdateOperationsInput;

    @Field(() => LocationsUpdateOneRequiredWithoutGameIndicesNestedInput, {nullable:true})
    location?: LocationsUpdateOneRequiredWithoutGameIndicesNestedInput;

    @Field(() => GenerationsUpdateOneRequiredWithoutLocationGameIndicesNestedInput, {nullable:true})
    generation?: GenerationsUpdateOneRequiredWithoutLocationGameIndicesNestedInput;
}
