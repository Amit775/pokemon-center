import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { ItemCategoriesWhereInput } from './item-categories-where.input';
import { Type } from 'class-transformer';
import { ItemCategoriesUpdateWithoutItemsInput } from './item-categories-update-without-items.input';

@InputType()
export class ItemCategoriesUpdateToOneWithWhereWithoutItemsInput {

    @Field(() => ItemCategoriesWhereInput, {nullable:true})
    @Type(() => ItemCategoriesWhereInput)
    where?: Identity<ItemCategoriesWhereInput>;

    @Field(() => ItemCategoriesUpdateWithoutItemsInput, {nullable:false})
    @Type(() => ItemCategoriesUpdateWithoutItemsInput)
    data!: Identity<ItemCategoriesUpdateWithoutItemsInput>;
}
