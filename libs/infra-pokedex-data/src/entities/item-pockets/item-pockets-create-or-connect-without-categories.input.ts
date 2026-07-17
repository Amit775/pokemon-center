import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ItemPocketsWhereUniqueInput } from './item-pockets-where-unique.input';
import { Type } from 'class-transformer';
import { ItemPocketsCreateWithoutCategoriesInput } from './item-pockets-create-without-categories.input';

@InputType()
export class ItemPocketsCreateOrConnectWithoutCategoriesInput {

    @Field(() => ItemPocketsWhereUniqueInput, {nullable:false})
    @Type(() => ItemPocketsWhereUniqueInput)
    where!: Prisma.AtLeast<ItemPocketsWhereUniqueInput, 'id'>;

    @Field(() => ItemPocketsCreateWithoutCategoriesInput, {nullable:false})
    @Type(() => ItemPocketsCreateWithoutCategoriesInput)
    create!: ItemPocketsCreateWithoutCategoriesInput;
}
