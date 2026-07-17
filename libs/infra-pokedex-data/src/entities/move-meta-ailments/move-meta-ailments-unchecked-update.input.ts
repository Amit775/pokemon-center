import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { MoveMetaUncheckedUpdateManyWithoutMetaAilmentNestedInput } from '../move-meta/move-meta-unchecked-update-many-without-meta-ailment-nested.input';

@InputType()
export class MoveMetaAilmentsUncheckedUpdateInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    identifier?: StringFieldUpdateOperationsInput;

    @Field(() => MoveMetaUncheckedUpdateManyWithoutMetaAilmentNestedInput, {nullable:true})
    meta?: MoveMetaUncheckedUpdateManyWithoutMetaAilmentNestedInput;
}
