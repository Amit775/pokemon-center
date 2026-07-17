import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { ItemPocketsUpdateWithoutCategoriesInput } from './item-pockets-update-without-categories.input';
import { Type } from 'class-transformer';
import { ItemPocketsCreateWithoutCategoriesInput } from './item-pockets-create-without-categories.input';
import { ItemPocketsWhereInput } from './item-pockets-where.input';

@InputType()
export class ItemPocketsUpsertWithoutCategoriesInput {

    @Field(() => ItemPocketsUpdateWithoutCategoriesInput, {nullable:false})
    @Type(() => ItemPocketsUpdateWithoutCategoriesInput)
    update!: Identity<ItemPocketsUpdateWithoutCategoriesInput>;

    @Field(() => ItemPocketsCreateWithoutCategoriesInput, {nullable:false})
    @Type(() => ItemPocketsCreateWithoutCategoriesInput)
    create!: Identity<ItemPocketsCreateWithoutCategoriesInput>;

    @Field(() => ItemPocketsWhereInput, {nullable:true})
    @Type(() => ItemPocketsWhereInput)
    where?: Identity<ItemPocketsWhereInput>;
}
