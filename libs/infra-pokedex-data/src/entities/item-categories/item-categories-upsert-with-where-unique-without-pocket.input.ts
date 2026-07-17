import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { ItemCategoriesWhereUniqueInput } from './item-categories-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { ItemCategoriesUpdateWithoutPocketInput } from './item-categories-update-without-pocket.input';
import { ItemCategoriesCreateWithoutPocketInput } from './item-categories-create-without-pocket.input';

@InputType()
export class ItemCategoriesUpsertWithWhereUniqueWithoutPocketInput {

    @Field(() => ItemCategoriesWhereUniqueInput, {nullable:false})
    @Type(() => ItemCategoriesWhereUniqueInput)
    where!: Prisma.AtLeast<ItemCategoriesWhereUniqueInput, 'id'>;

    @Field(() => ItemCategoriesUpdateWithoutPocketInput, {nullable:false})
    @Type(() => ItemCategoriesUpdateWithoutPocketInput)
    update!: Identity<ItemCategoriesUpdateWithoutPocketInput>;

    @Field(() => ItemCategoriesCreateWithoutPocketInput, {nullable:false})
    @Type(() => ItemCategoriesCreateWithoutPocketInput)
    create!: Identity<ItemCategoriesCreateWithoutPocketInput>;
}
