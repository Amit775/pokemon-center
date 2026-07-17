import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { ItemsUncheckedUpdateManyWithoutCategoryNestedInput } from '../items/items-unchecked-update-many-without-category-nested.input';

@InputType()
export class ItemCategoriesUncheckedUpdateWithoutPocketInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    identifier?: StringFieldUpdateOperationsInput;

    @Field(() => ItemsUncheckedUpdateManyWithoutCategoryNestedInput, {nullable:true})
    items?: ItemsUncheckedUpdateManyWithoutCategoryNestedInput;
}
