import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { MoveMetaUpdateOneRequiredWithoutStatChangesNestedInput } from '../move-meta/move-meta-update-one-required-without-stat-changes-nested.input';

@InputType()
export class MoveMetaStatChangesUpdateWithoutStatInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    change?: IntFieldUpdateOperationsInput;

    @Field(() => MoveMetaUpdateOneRequiredWithoutStatChangesNestedInput, {nullable:true})
    meta?: MoveMetaUpdateOneRequiredWithoutStatChangesNestedInput;
}
