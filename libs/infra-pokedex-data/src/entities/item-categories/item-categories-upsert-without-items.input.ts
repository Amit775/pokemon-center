import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ItemCategoriesUpdateWithoutItemsInput } from './item-categories-update-without-items.input';
import { Type } from 'class-transformer';
import { ItemCategoriesCreateWithoutItemsInput } from './item-categories-create-without-items.input';
import { ItemCategoriesWhereInput } from './item-categories-where.input';

@InputType()
export class ItemCategoriesUpsertWithoutItemsInput {

    @Field(() => ItemCategoriesUpdateWithoutItemsInput, {nullable:false})
    @Type(() => ItemCategoriesUpdateWithoutItemsInput)
    update!: ItemCategoriesUpdateWithoutItemsInput;

    @Field(() => ItemCategoriesCreateWithoutItemsInput, {nullable:false})
    @Type(() => ItemCategoriesCreateWithoutItemsInput)
    create!: ItemCategoriesCreateWithoutItemsInput;

    @Field(() => ItemCategoriesWhereInput, {nullable:true})
    @Type(() => ItemCategoriesWhereInput)
    where?: ItemCategoriesWhereInput;
}
