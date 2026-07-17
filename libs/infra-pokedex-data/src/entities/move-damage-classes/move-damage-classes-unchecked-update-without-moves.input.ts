import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { TypesUncheckedUpdateManyWithoutDamageClassNestedInput } from '../types/types-unchecked-update-many-without-damage-class-nested.input';

@InputType()
export class MoveDamageClassesUncheckedUpdateWithoutMovesInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    identifier?: StringFieldUpdateOperationsInput;

    @Field(() => TypesUncheckedUpdateManyWithoutDamageClassNestedInput, {nullable:true})
    types?: TypesUncheckedUpdateManyWithoutDamageClassNestedInput;
}
