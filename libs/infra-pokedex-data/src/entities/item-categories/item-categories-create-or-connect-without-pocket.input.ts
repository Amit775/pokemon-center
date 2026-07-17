import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ItemCategoriesWhereUniqueInput } from './item-categories-where-unique.input';
import { Type } from 'class-transformer';
import { ItemCategoriesCreateWithoutPocketInput } from './item-categories-create-without-pocket.input';

@InputType()
export class ItemCategoriesCreateOrConnectWithoutPocketInput {

    @Field(() => ItemCategoriesWhereUniqueInput, {nullable:false})
    @Type(() => ItemCategoriesWhereUniqueInput)
    where!: Prisma.AtLeast<ItemCategoriesWhereUniqueInput, 'id'>;

    @Field(() => ItemCategoriesCreateWithoutPocketInput, {nullable:false})
    @Type(() => ItemCategoriesCreateWithoutPocketInput)
    create!: ItemCategoriesCreateWithoutPocketInput;
}
