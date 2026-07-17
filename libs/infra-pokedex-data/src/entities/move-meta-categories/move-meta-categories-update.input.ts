import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { MoveMetaUpdateManyWithoutMetaCategoryNestedInput } from '../move-meta/move-meta-update-many-without-meta-category-nested.input';

@InputType()
export class MoveMetaCategoriesUpdateInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    identifier?: StringFieldUpdateOperationsInput;

    @Field(() => MoveMetaUpdateManyWithoutMetaCategoryNestedInput, {nullable:true})
    meta?: MoveMetaUpdateManyWithoutMetaCategoryNestedInput;
}
