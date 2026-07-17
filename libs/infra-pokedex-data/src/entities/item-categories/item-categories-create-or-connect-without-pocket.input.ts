import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { ItemCategoriesWhereUniqueInput } from './item-categories-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { ItemCategoriesCreateWithoutPocketInput } from './item-categories-create-without-pocket.input';

@InputType()
export class ItemCategoriesCreateOrConnectWithoutPocketInput {

    @Field(() => ItemCategoriesWhereUniqueInput, {nullable:false})
    @Type(() => ItemCategoriesWhereUniqueInput)
    where!: Prisma.AtLeast<ItemCategoriesWhereUniqueInput, 'id'>;

    @Field(() => ItemCategoriesCreateWithoutPocketInput, {nullable:false})
    @Type(() => ItemCategoriesCreateWithoutPocketInput)
    create!: Identity<ItemCategoriesCreateWithoutPocketInput>;
}
