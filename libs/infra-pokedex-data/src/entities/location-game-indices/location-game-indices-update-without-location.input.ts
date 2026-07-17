import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { GenerationsUpdateOneRequiredWithoutLocationGameIndicesNestedInput } from '../generations/generations-update-one-required-without-location-game-indices-nested.input';

@InputType()
export class LocationGameIndicesUpdateWithoutLocationInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    game_index?: IntFieldUpdateOperationsInput;

    @Field(() => GenerationsUpdateOneRequiredWithoutLocationGameIndicesNestedInput, {nullable:true})
    generation?: GenerationsUpdateOneRequiredWithoutLocationGameIndicesNestedInput;
}
