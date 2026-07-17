import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { ItemPocketsWhereInput } from './item-pockets-where.input';
import { Type } from 'class-transformer';
import { ItemPocketsUpdateWithoutCategoriesInput } from './item-pockets-update-without-categories.input';

@InputType()
export class ItemPocketsUpdateToOneWithWhereWithoutCategoriesInput {

    @Field(() => ItemPocketsWhereInput, {nullable:true})
    @Type(() => ItemPocketsWhereInput)
    where?: Identity<ItemPocketsWhereInput>;

    @Field(() => ItemPocketsUpdateWithoutCategoriesInput, {nullable:false})
    @Type(() => ItemPocketsUpdateWithoutCategoriesInput)
    data!: Identity<ItemPocketsUpdateWithoutCategoriesInput>;
}
