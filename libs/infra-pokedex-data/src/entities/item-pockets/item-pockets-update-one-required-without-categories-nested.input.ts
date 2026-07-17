import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { ItemPocketsCreateWithoutCategoriesInput } from './item-pockets-create-without-categories.input';
import { Type } from 'class-transformer';
import { ItemPocketsCreateOrConnectWithoutCategoriesInput } from './item-pockets-create-or-connect-without-categories.input';
import { ItemPocketsUpsertWithoutCategoriesInput } from './item-pockets-upsert-without-categories.input';
import { Prisma } from '@pokemon-center/prisma';
import { ItemPocketsWhereUniqueInput } from './item-pockets-where-unique.input';
import { ItemPocketsUpdateToOneWithWhereWithoutCategoriesInput } from './item-pockets-update-to-one-with-where-without-categories.input';

@InputType()
export class ItemPocketsUpdateOneRequiredWithoutCategoriesNestedInput {

    @Field(() => ItemPocketsCreateWithoutCategoriesInput, {nullable:true})
    @Type(() => ItemPocketsCreateWithoutCategoriesInput)
    create?: Identity<ItemPocketsCreateWithoutCategoriesInput>;

    @Field(() => ItemPocketsCreateOrConnectWithoutCategoriesInput, {nullable:true})
    @Type(() => ItemPocketsCreateOrConnectWithoutCategoriesInput)
    connectOrCreate?: Identity<ItemPocketsCreateOrConnectWithoutCategoriesInput>;

    @Field(() => ItemPocketsUpsertWithoutCategoriesInput, {nullable:true})
    @Type(() => ItemPocketsUpsertWithoutCategoriesInput)
    upsert?: Identity<ItemPocketsUpsertWithoutCategoriesInput>;

    @Field(() => ItemPocketsWhereUniqueInput, {nullable:true})
    @Type(() => ItemPocketsWhereUniqueInput)
    connect?: Prisma.AtLeast<ItemPocketsWhereUniqueInput, 'id'>;

    @Field(() => ItemPocketsUpdateToOneWithWhereWithoutCategoriesInput, {nullable:true})
    @Type(() => ItemPocketsUpdateToOneWithWhereWithoutCategoriesInput)
    update?: Identity<ItemPocketsUpdateToOneWithWhereWithoutCategoriesInput>;
}
