import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { MoveMetaUncheckedUpdateManyWithoutMetaCategoryNestedInput } from '../move-meta/move-meta-unchecked-update-many-without-meta-category-nested.input';

@InputType()
export class MoveMetaCategoriesUncheckedUpdateInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    identifier?: StringFieldUpdateOperationsInput;

    @Field(() => MoveMetaUncheckedUpdateManyWithoutMetaCategoryNestedInput, {nullable:true})
    meta?: MoveMetaUncheckedUpdateManyWithoutMetaCategoryNestedInput;
}
