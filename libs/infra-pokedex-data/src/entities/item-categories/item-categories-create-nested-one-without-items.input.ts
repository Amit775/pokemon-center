import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ItemCategoriesCreateWithoutItemsInput } from './item-categories-create-without-items.input';
import { Type } from 'class-transformer';
import { ItemCategoriesCreateOrConnectWithoutItemsInput } from './item-categories-create-or-connect-without-items.input';
import { Prisma } from '@prisma/client';
import { ItemCategoriesWhereUniqueInput } from './item-categories-where-unique.input';

@InputType()
export class ItemCategoriesCreateNestedOneWithoutItemsInput {

    @Field(() => ItemCategoriesCreateWithoutItemsInput, {nullable:true})
    @Type(() => ItemCategoriesCreateWithoutItemsInput)
    create?: ItemCategoriesCreateWithoutItemsInput;

    @Field(() => ItemCategoriesCreateOrConnectWithoutItemsInput, {nullable:true})
    @Type(() => ItemCategoriesCreateOrConnectWithoutItemsInput)
    connectOrCreate?: ItemCategoriesCreateOrConnectWithoutItemsInput;

    @Field(() => ItemCategoriesWhereUniqueInput, {nullable:true})
    @Type(() => ItemCategoriesWhereUniqueInput)
    connect?: Prisma.AtLeast<ItemCategoriesWhereUniqueInput, 'id'>;
}
