import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { MoveMetaUpdateManyWithoutMetaAilmentNestedInput } from '../move-meta/move-meta-update-many-without-meta-ailment-nested.input';

@InputType()
export class MoveMetaAilmentsUpdateInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    identifier?: StringFieldUpdateOperationsInput;

    @Field(() => MoveMetaUpdateManyWithoutMetaAilmentNestedInput, {nullable:true})
    meta?: MoveMetaUpdateManyWithoutMetaAilmentNestedInput;
}
