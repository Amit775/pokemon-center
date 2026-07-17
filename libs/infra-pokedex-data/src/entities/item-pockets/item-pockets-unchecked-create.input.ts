import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ItemCategoriesUncheckedCreateNestedManyWithoutPocketInput } from '../item-categories/item-categories-unchecked-create-nested-many-without-pocket.input';

@InputType()
export class ItemPocketsUncheckedCreateInput {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => ItemCategoriesUncheckedCreateNestedManyWithoutPocketInput, {nullable:true})
    categories?: ItemCategoriesUncheckedCreateNestedManyWithoutPocketInput;
}
