import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { MoveFlagMapUpdateManyWithoutFlagNestedInput } from '../move-flag-map/move-flag-map-update-many-without-flag-nested.input';

@InputType()
export class MoveFlagsUpdateInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    identifier?: StringFieldUpdateOperationsInput;

    @Field(() => MoveFlagMapUpdateManyWithoutFlagNestedInput, {nullable:true})
    flagMap?: MoveFlagMapUpdateManyWithoutFlagNestedInput;
}
