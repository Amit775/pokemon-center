import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { MovesUpdateManyWithoutDamageClassNestedInput } from '../moves/moves-update-many-without-damage-class-nested.input';
import { TypesUpdateManyWithoutDamageClassNestedInput } from '../types/types-update-many-without-damage-class-nested.input';

@InputType()
export class MoveDamageClassesUpdateInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    identifier?: StringFieldUpdateOperationsInput;

    @Field(() => MovesUpdateManyWithoutDamageClassNestedInput, {nullable:true})
    moves?: MovesUpdateManyWithoutDamageClassNestedInput;

    @Field(() => TypesUpdateManyWithoutDamageClassNestedInput, {nullable:true})
    types?: TypesUpdateManyWithoutDamageClassNestedInput;
}
