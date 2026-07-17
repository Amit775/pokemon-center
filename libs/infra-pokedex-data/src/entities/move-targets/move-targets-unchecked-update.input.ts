import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { MovesUncheckedUpdateManyWithoutTargetNestedInput } from '../moves/moves-unchecked-update-many-without-target-nested.input';

@InputType()
export class MoveTargetsUncheckedUpdateInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    identifier?: StringFieldUpdateOperationsInput;

    @Field(() => MovesUncheckedUpdateManyWithoutTargetNestedInput, {nullable:true})
    moves?: MovesUncheckedUpdateManyWithoutTargetNestedInput;
}
