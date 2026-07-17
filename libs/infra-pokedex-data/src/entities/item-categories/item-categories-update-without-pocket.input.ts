import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { ItemsUpdateManyWithoutCategoryNestedInput } from '../items/items-update-many-without-category-nested.input';

@InputType()
export class ItemCategoriesUpdateWithoutPocketInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    identifier?: StringFieldUpdateOperationsInput;

    @Field(() => ItemsUpdateManyWithoutCategoryNestedInput, {nullable:true})
    items?: ItemsUpdateManyWithoutCategoryNestedInput;
}
