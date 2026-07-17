import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { MoveFlagMapUncheckedUpdateManyWithoutFlagNestedInput } from '../move-flag-map/move-flag-map-unchecked-update-many-without-flag-nested.input';

@InputType()
export class MoveFlagsUncheckedUpdateInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    identifier?: StringFieldUpdateOperationsInput;

    @Field(() => MoveFlagMapUncheckedUpdateManyWithoutFlagNestedInput, {nullable:true})
    flagMap?: MoveFlagMapUncheckedUpdateManyWithoutFlagNestedInput;
}
