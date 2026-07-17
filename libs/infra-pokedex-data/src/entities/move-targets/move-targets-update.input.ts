import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { MovesUpdateManyWithoutTargetNestedInput } from '../moves/moves-update-many-without-target-nested.input';

@InputType()
export class MoveTargetsUpdateInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    identifier?: StringFieldUpdateOperationsInput;

    @Field(() => MovesUpdateManyWithoutTargetNestedInput, {nullable:true})
    moves?: MovesUpdateManyWithoutTargetNestedInput;
}
