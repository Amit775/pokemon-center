import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { ItemPocketsCreateWithoutCategoriesInput } from './item-pockets-create-without-categories.input';
import { Type } from 'class-transformer';
import { ItemPocketsCreateOrConnectWithoutCategoriesInput } from './item-pockets-create-or-connect-without-categories.input';
import { Prisma } from '@pokemon-center/prisma';
import { ItemPocketsWhereUniqueInput } from './item-pockets-where-unique.input';

@InputType()
export class ItemPocketsCreateNestedOneWithoutCategoriesInput {

    @Field(() => ItemPocketsCreateWithoutCategoriesInput, {nullable:true})
    @Type(() => ItemPocketsCreateWithoutCategoriesInput)
    create?: Identity<ItemPocketsCreateWithoutCategoriesInput>;

    @Field(() => ItemPocketsCreateOrConnectWithoutCategoriesInput, {nullable:true})
    @Type(() => ItemPocketsCreateOrConnectWithoutCategoriesInput)
    connectOrCreate?: Identity<ItemPocketsCreateOrConnectWithoutCategoriesInput>;

    @Field(() => ItemPocketsWhereUniqueInput, {nullable:true})
    @Type(() => ItemPocketsWhereUniqueInput)
    connect?: Prisma.AtLeast<ItemPocketsWhereUniqueInput, 'id'>;
}
