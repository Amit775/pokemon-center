import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { MovesUpdateManyWithoutDamageClassNestedInput } from '../moves/moves-update-many-without-damage-class-nested.input';

@InputType()
export class MoveDamageClassesUpdateWithoutTypesInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    identifier?: StringFieldUpdateOperationsInput;

    @Field(() => MovesUpdateManyWithoutDamageClassNestedInput, {nullable:true})
    moves?: MovesUpdateManyWithoutDamageClassNestedInput;
}
